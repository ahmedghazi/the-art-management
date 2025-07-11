import React, { useEffect, useRef, useState } from "react";
import { Figure, SanityKeyed, VideoMux } from "../types/schema";
import FigureComponent from "./ui/Figure";
import { _getScrollParent } from "../sanity-api/utils";
import { publish, publishSync } from "pubsub-js";
import CursorCustom from "./ui/CursorCustom";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";
import useDeviceDetect from "../hooks/useDeviceDetect";
import { useScroll } from "../hooks/useScroll";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  input: Array<SanityKeyed<Figure> | SanityKeyed<VideoMux>>;
  onEnd: () => void;
};

const ProjectSlider = ({ input, onEnd }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const length = input?.length || 0;
  const isSingleMediaProject: boolean = input.length === 1;
  const container = useRef<HTMLDivElement>(null);
  const dock = useRef<HTMLUListElement>(null);
  const { isMobile } = useDeviceDetect();
  const { isBottom } = useScroll();

  useEffect(() => {
    const container = document.querySelector("main");
    const target = document.querySelectorAll(".project-media--item");
    const options: IntersectionObserverInit = {
      root: container,
      rootMargin: "0px",
      threshold: 0.6,
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
    };
  }, []);

  useEffect(() => {
    const currentItem = input[currentIndex];
    if (currentItem && currentItem.project) {
      publish("CURRENT_SLIDER_PROJECT", currentItem.project.title);
    }
  }, [currentIndex, input]);

  useEffect(() => {
    console.log({ isBottom, isMobile });
    if (isBottom && isMobile) {
      container.current?.addEventListener("touchstart", _navigateToNextProject);
    }

    return () => {
      if (isBottom && isMobile) {
        container.current?.removeEventListener(
          "touchstart",
          _navigateToNextProject
        );
      }
    };
  }, [isBottom, isMobile]);

  const _navigateToNextProject = () => {
    onEnd();
  };

  const _scrollToNext = () => {
    // return;
    if (input.length <= 1) return;
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

  const _toggleDock = () => {
    dock.current?.classList.toggle("is-active");
  };

  // console.log(input);
  return (
    <section className={clsx("project-media")}>
      <div className='bg' onClick={_scrollToNext}></div>
      <div className='inner' ref={container}>
        {input?.map((item, i) => (
          <div
            key={item._key}
            className={clsx(
              "project-media--item sans relative",
              `project-media--item__${item._type}`
            )}
            data-index={i}
            onMouseOver={(e) => ((e.target as HTMLElement).style.zIndex = "50")}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.zIndex = "50")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.zIndex = "0")
            }>
            {item._type === "figure" && (
              <FigureComponent asset={item.image?.asset} />
            )}
            {item._type === "videoMux" && (
              <MuxVideoPlayer
                playbackId={item.videoDesktop.asset.playbackId}
                title={item.videoDesktop.title}
                withAudio={true}
                placeholder={item.placeholder?.asset?.url}
              />
            )}
          </div>
        ))}
      </div>
      <div className='pager-dock sans'>
        <ul className='dock' ref={dock}>
          {input.length > 1 &&
            input?.map((item, i) => (
              <li
                key={item._key}
                data-index={i}
                className={currentIndex === i ? "is-active" : ""}>
                <button onClick={() => _scrollTo(i)}>
                  {item._type === "figure" && (
                    <FigureComponent asset={item.image?.asset} width={65} />
                  )}
                  {item._type === "videoMux" && (
                    <FigureComponent asset={item.placeholder?.asset} />
                  )}
                </button>
              </li>
            ))}
        </ul>
        {isMobile && (
          <div className='pager text-xs'>
            {currentIndex + 1 === length ? (
              <button onClick={onEnd}>Next Project</button>
            ) : (
              <button onClick={_toggleDock}>
                {currentIndex + 1}/{length} <span className='arrow'>↑</span>
              </button>
            )}
          </div>
        )}
      </div>

      {!isMobile && !isBottom && !isSingleMediaProject && (
        <CursorCustom>
          <div className='inner sans text-sm'>
            {currentIndex + 1}/{length}
          </div>
        </CursorCustom>
      )}
    </section>
  );
};

export default ProjectSlider;
