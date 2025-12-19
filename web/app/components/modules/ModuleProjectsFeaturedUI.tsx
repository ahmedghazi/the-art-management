import React, { useEffect } from "react";
import { ProjectsFeaturedUI } from "@/app/types/schema";
import CardProjectFeatured from "../CardProjectFeatured";
import { subscribe, unsubscribe } from "pubsub-js";
import {
  _linkResolver,
  _localizeField,
  _slugify,
} from "@/app/sanity-api/utils";
import "./ModuleProjectsFeaturedUI.scss";
import BackToTop from "../ui/BackToTop";
import { useScroll } from "@/app/hooks/useScroll";
import LinkTransition from "../ui/LinkTransition";

interface Props {
  input: ProjectsFeaturedUI;
}

const ModuleProjectsFeaturedUI = ({ input }: Props) => {
  const { title, items = [] } = input;
  const { isBottom } = useScroll();

  useEffect(() => {
    const token = subscribe("ARTIST_ON_SCREEN", (e, _id: string) => {
      _scrollToNavItem(_id);
    });
    return () => {
      unsubscribe(token);
    };
  }, []);

  const _scrollToNavItem = (_id: string) => {
    const items = document.querySelectorAll("#nav-artists li.nav--artist");
    items.forEach((item) => {
      item.classList.remove("is-active");
    });
    const navArtists = document.querySelector(
      `#nav-artists li.nav--artist#nav-${_id}`
    );
    if (navArtists) {
      navArtists.classList.add("is-active");
      navArtists.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const _scrollToSection = (_id: string) => {
    const article = document.querySelector(`#article-${_id}`);
    if (article) {
      // article.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        article.scrollIntoView({ block: "center" });
      }, 1000);
    }
  };

  return (
    <section className='module module--projects-featured-ui'>
      <div className='items'>
        {items.map((item, index) => (
          <CardProjectFeatured input={item} key={item._key} />
        ))}
      </div>

      <nav id='nav-artists'>
        <ul>
          {items &&
            items.map((item, index) => (
              <li
                key={index}
                className='nav--artist'
                id={`nav-${item._key}`}
                onMouseEnter={() => _scrollToSection(item._key)}
                // onClick={() => _scrollToSection(item._key)}
              >
                <LinkTransition href={_linkResolver(item.artist)}>
                  <div className='project'>
                    {_localizeField(item.project?.title)}
                  </div>
                  <h2 className='artist sans'>{item.artist?.name}</h2>
                  <div className='tag'>
                    {_localizeField(item.artist?.tag?.title)}
                  </div>
                </LinkTransition>
              </li>
            ))}
        </ul>
        {isBottom && <BackToTop />}
      </nav>
    </section>
  );
};

export default ModuleProjectsFeaturedUI;
