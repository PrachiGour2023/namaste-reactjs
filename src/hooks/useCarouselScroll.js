import { useRef } from "react";

export const useCarouselScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.firstChild;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseInt(getComputedStyle(scrollRef.current).gap);
    const scrollAmount = (cardWidth + gap) * 3; // 3 items scroll

    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return { scrollRef, scroll };
};
