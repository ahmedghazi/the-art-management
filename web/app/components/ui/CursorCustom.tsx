import React, { CSSProperties, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  visible?: boolean;
};

const CursorCustom = ({ children, visible = true }: Props) => {
  // console.log({ visible });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", _handleCursor);

    return () => {
      window.removeEventListener("mousemove", _handleCursor);
    };
  }, []);

  const _handleCursor = (e: MouseEvent) => {
    if (!cursorRef.current) return;
    const isOutOfBound = e.clientY < 45 || e.clientY > window.innerHeight - 45;
    cursorRef.current.style.opacity = isOutOfBound ? `0` : `1`;
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    if (e.target) {
      _handleWhiteList(e.target as HTMLElement);
    }
  };

  const _handleWhiteList = (target: HTMLElement) => {
    if (!cursorRef || !cursorRef.current) return;
    let targetParentInWhiteListe = false;
    //loop through target parent node and if a parent has this class stop project-media--item sans relative
    while (target.parentNode) {
      const parent = target.parentNode as HTMLElement;
      // console.log(parent);
      if (
        parent &&
        parent.classList &&
        parent.classList.contains("project-media--item__videoMux")
      ) {
        targetParentInWhiteListe = true;
        break;
      }
      target = parent;
    }
    if (targetParentInWhiteListe) {
      cursorRef.current.style.opacity = `0`;
    }
    // return (
    //   target.tagName.toLowerCase() === "a" ||
    //   target.tagName.toLowerCase() === "button" ||
    //   target.classList.contains("button") ||
    //   target.classList.contains("btn") ||
    //   target.classList.contains("pointer") ||
    //   target.classList.contains("cursor-pointer") ||
    //   target.role === "button"
    // );
  };

  const style: CSSProperties = {
    position: "fixed",
    zIndex: 49,
    top: 0,
    left: 0,
    willChange: "transform",
    opacity: visible ? 1 : 0,
    // color: "white",
    pointerEvents: "none",
    // mixBlendMode: "difference",
  };
  const styleInner: CSSProperties = {
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className='cursor-custom' ref={cursorRef} style={style}>
      <div className='inner' style={styleInner}>
        {children}
      </div>
    </div>
  );
};

export default CursorCustom;
