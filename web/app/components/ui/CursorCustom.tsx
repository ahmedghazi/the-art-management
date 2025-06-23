import React, { CSSProperties, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const CursorCustom = ({ children }: Props) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", _handleCursor);

    return () => {
      window.removeEventListener("mousemove", _handleCursor);
    };
  }, []);

  const _handleCursor = (e: MouseEvent) => {
    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  const style: CSSProperties = {
    position: "fixed",
    zIndex: 49,
    top: 0,
    left: 0,
    willChange: "transform",
    color: "white",
    pointerEvents: "none",
    mixBlendMode: "difference",
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
