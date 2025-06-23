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

const PageContext = createContext({});

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  // console.log(pathname);
  const [isInfos, setIsInfos] = useState<boolean>(false);
  const settings = {
    pathname,
  };

  useEffect(() => {
    _handlePageTemplate();
    _format();
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
    // const wh = window.innerHeight;

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // document.documentElement.style.setProperty("--app-height", wh + "px");

    const header = document.querySelector("header");
    let headerBounding = { height: 50 };
    if (header) {
      headerBounding = header.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--header-height",
        headerBounding.height + "px"
      );
    }
    const col1Sur8 = (window.innerWidth - 26) / 8;
    document.documentElement.style.setProperty("--col-1-8", col1Sur8 + "px");

    document.body.classList.remove("is-loading");
  };

  const _handlePageTemplate = () => {
    const mainDiv: HTMLElement = document.querySelector(
      "main [data-template]"
    ) as HTMLElement;
    // console.log(mainDiv);
    if (mainDiv) {
      const template = mainDiv.dataset.template;
      document.body.dataset.template = `is-${template}`;
      const slug = mainDiv.dataset.slug;
      document.body.dataset.slug = slug;
    }
  };

  return (
    <PageContext.Provider value={{ settings, isInfos, setIsInfos }}>
      {children}
    </PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
