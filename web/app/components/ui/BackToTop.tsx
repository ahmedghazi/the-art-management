"use client";
import React, { useRef } from "react";
// import scrollIntoView from 'scroll-into-view';
// import { _getLocalizedText } from '../../core/utils'

const BackToTop = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const isScrollable = (node: Element) => {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return false;
    }
    const style = getComputedStyle(node);
    return ["overflow", "overflow-x", "overflow-y"].some((propertyName) => {
      const value = style.getPropertyValue(propertyName);
      return value === "auto" || value === "scroll";
    });
  };

  const getScrollParent = (node: Element): Element => {
    let currentParent = node.parentElement;
    while (currentParent) {
      if (isScrollable(currentParent)) {
        return currentParent;
      }
      currentParent = currentParent.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  };

  const _click = () => {
    // const scrollParent = getScrollParent(ref.current as Element);
    const scrollParent = document.querySelector("main");
    console.log(scrollParent);
    if (!scrollParent) return;
    scrollParent.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className='back-to-top cursor-pointer sans'
      onClick={_click}
      ref={ref}>
      Back to top <span>↑</span>
    </button>
  );
};

export default BackToTop;
