import React, { useEffect, useRef, useState } from "react";
import { Figure, SanityKeyed, VideoMux } from "../types/schema";
import FigureComponent from "./ui/Figure";
import { _getScrollParent } from "../sanity-api/utils";

type Props = {
  input: Array<SanityKeyed<Figure> | SanityKeyed<VideoMux>>;
};

const ProjectSlider = ({ input }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length = input?.length || 0;
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", _handleCursor);
    // console.log(container.current);
    const container = document.querySelector("main");
    const target = document.querySelectorAll(".project-media--item");
    const options: IntersectionObserverInit = {
      root: container,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setCurrentIndex(Number(index));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (target) {
      target.forEach((item: any) => {
        observer.observe(item);
      });
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", _handleCursor);
    };
  }, []);

  const _handleCursor = (e: MouseEvent) => {
    // console.log(e);
    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  const _scrollToNext = () => {
    const scroller = _getScrollParent(container.current);
    if (!scroller) return;
    const nextY = (currentIndex + 1) * window.innerHeight;
    scroller.scroll(0, nextY);
  };

  const _scrollTo = (index: number) => {
    const item = document.querySelector(
      `.project-media--item:nth-child(${index + 1})`
    );
    if (item) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className='project-media'>
      <div className='inner' ref={container} onClick={_scrollToNext}>
        {input?.map((item, i) => (
          <div key={item._key} className='project-media--item' data-index={i}>
            {item._type === "figure" && (
              <FigureComponent asset={item.image?.asset} />
            )}
          </div>
        ))}
      </div>

      <ul className='dock'>
        {input?.map((item, i) => (
          <li
            key={item._key}
            data-index={i}
            className={currentIndex === i ? "is-active" : ""}>
            <button onClick={() => _scrollTo(i)}>
              {item._type === "figure" && (
                <FigureComponent asset={item.image?.asset} width={65} />
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className='cursor sans text-sm' ref={cursorRef}>
        <div className='inner'>
          {currentIndex + 1}/{length}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
