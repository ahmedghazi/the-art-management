"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "./transition";
import "./index.scss";
import { slideInOutV2 } from "./slideInOutV2";
// import { slideInOutV2 } from "./slideInOutV2";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface LinkTransitionProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  direction?: string;
  duration?: number;
}

const LinkTransition = ({
  href,
  children,
  className = "",
  direction = "next",
  duration = 500,
  ...props
}: LinkTransitionProps) => {
  const router = useTransitionRouter();

  const _handleTransition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Ajouter un timeout pour s'assurer que la transition a le temps de se terminer
    try {
      // console.log("router", router);
      document.body.classList.add("is-transition");
      // Utiliser les options correctes pour next-view-transitions
      router.push(href, {
        onTransitionReady: () => {
          console.log("onTransitionReady");
          slideInOutV2(direction, duration);
          setTimeout(() => {
            document.body.classList.remove("is-transition");
          }, duration);
        },
      });
    } catch (error) {
      console.error("Transition error:", error);
      // Fallback en cas d'erreur de transition
      router.push(href);
    }
  };
  return (
    <Link
      onClick={_handleTransition}
      href={href}
      className={className}
      {...props}>
      {children}
    </Link>
  );
};

export default LinkTransition;
