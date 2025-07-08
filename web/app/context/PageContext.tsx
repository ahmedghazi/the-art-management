"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
// import { getSettings } from "../utils/sanity-queries";

type PageContextType = {
  settings: {
    pathname: string;
  };
  userHistory: string[];
};
const PageContext = createContext({} as PageContextType);

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  const [userHistory, setUserHistory] = useState<string[]>([]);
  // console.log(pathname);
  const settings = {
    pathname,
  };

  useEffect(() => {
    _handlePageTemplate();
    _format();
    setUserHistory((prev) => [...prev, pathname]);
    document.body.classList.remove("is-dark");
  }, [pathname]);

  useEffect(() => {
    _format();
    _handlePageTemplate();
    window.addEventListener("resize", _format);

    return () => {
      window.removeEventListener("resize", _format);
    };
  }, []);

  const _format = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const header = document.querySelector("header");
    let headerBounding = { height: 50 };
    if (header) {
      headerBounding = header.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--header-height",
        headerBounding.height + "px"
      );
    }

    const col1Sur8 = document.querySelector(".grid-sample .item");
    if (col1Sur8) {
      const col1Sur8Bounding = col1Sur8.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--col-1-8",
        col1Sur8Bounding.width + "px"
      );
    }

    document.body.classList.remove("is-loading");
  };

  const _handlePageTemplate = () => {
    const mainDiv: HTMLElement = document.querySelector(
      "main [data-template]"
    ) as HTMLElement;
    if (mainDiv) {
      const template = mainDiv.dataset.template;
      document.body.dataset.template = `is-${template}`;
      const slug = mainDiv.dataset.slug;
      document.body.dataset.slug = slug;
    }
  };

  return (
    <PageContext.Provider value={{ settings, userHistory }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
