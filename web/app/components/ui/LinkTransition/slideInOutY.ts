export const slideInOutY = (direction: string, duration: number = 10000) => {
  // const easing = "cubic-bezier(0.87, 0, 0.13, 1)";
  const easing = "ease";
  const y: number = direction === "n" ? 10 : -10;
  const clipPath =
    direction === "n"
      ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

  // Animation de sortie
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0,
        transform: `translateY(${y * -1}%)`,
      },
    ],
    {
      duration: duration,
      easing: easing,
      fill: "forwards",
      pseudoElement: "::view-transition-old(the-main)",
    }
  );

  // Animation d'entrée
  document.documentElement.animate(
    [
      {
        clipPath: clipPath,
        transform: `translateY(${y}%)`,
      },
      {
        transform: "translateY(0)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
    ],
    {
      duration: duration,
      easing: easing,
      fill: "forwards",
      pseudoElement: "::view-transition-new(the-main)",
    }
  );
};
