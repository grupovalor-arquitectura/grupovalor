import { useState, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useTunnel({
 startRef,
  endRef,
  triggerRef,
}) {
  const [circles, setCircles] = useState(70);
  const [visibleCircles, setVisibleCircles] =
    useState(1);

  useLayoutEffect(() => {
    if (
      !startRef?.current ||
      !endRef?.current
    )
      return;

    const startRect =
      startRef.current.getBoundingClientRect();

    const endRect =
      endRef.current.getBoundingClientRect();

    const startCenter =
      startRect.top +
      startRect.height / 2;

    const endCenter =
      endRect.top +
      endRect.height / 2;

    const distance =
      endCenter - startCenter;

    const step = 8;

    setCircles(
      Math.ceil(distance / step)
    );
  }, [startRef, endRef]);

  useLayoutEffect(() => {
    if (
      !triggerRef?.current ||
      circles <= 1
    )
      return;

    const trigger =
      ScrollTrigger.create({
        trigger:
          triggerRef.current,

        start: "top top",

        end: "bottom bottom",

        scrub: true,

        onUpdate: (self) => {
          const easedProgress =
            gsap.parseEase(
              "power2.out"
            )(self.progress);

          const amount = Math.max(
            1,
            Math.ceil(
              easedProgress *
                circles
            )
          );

          setVisibleCircles(
            amount
          );
        },
      });

    return () =>
      trigger.kill();
  }, [circles, triggerRef]);

  return {
    circles,
    visibleCircles,
    tunnelComplete: visibleCircles >= circles,
  };
}