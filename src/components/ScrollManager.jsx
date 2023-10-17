import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }
    const scrollData = data.scroll.current*data.pages
    console.log(scrollData,section)
    if (scrollData > 0 && section == 0 && data.scroll.current > lastScroll.current) onSectionChange(1)
    else if (scrollData > 1.4 && section == 1 && data.scroll.current > lastScroll.current ) onSectionChange(2)
    else if (scrollData > 2.7 && section == 2 && data.scroll.current > lastScroll.current) onSectionChange(3)
    else if (scrollData  < 3.7 && section == 3 && data.scroll.current < lastScroll.current) onSectionChange(2)
    else if (scrollData < 2.5 && section == 2 && data.scroll.current < lastScroll.current) onSectionChange(1)
    else if (scrollData < 1.2 && section == 1 && data.scroll.current < lastScroll.current) onSectionChange(0)
    lastScroll.current = data.scroll.current;
  });

  return null;
};