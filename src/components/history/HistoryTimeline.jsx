import { historyData } from "../../data/historyData";

import { useRef, useState, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TimelineHeader from "./TimelineHeader";
import TimelineTrack from "./TimelineTrack";
import TimelineContent from "./TimelineContent";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline() {

  const initialMoment = historyData.moments[0];

  const originRef = useRef(null);
  const nodeRef = useRef(null);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  
  const [circles, setCircles] = useState(70);
  const [visibleCircles, setVisibleCircles] = useState(1);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestone = historyData.milestones[ activeMilestone ];

  const handlePrevious = () => {
    setActiveMilestone((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  const handleNext = () => {
    setActiveMilestone((prev) =>
      Math.min(
        prev + 1,
        historyData.milestones.length - 1
      )
    );
  };


  useLayoutEffect(() => {
    if (!originRef.current || !nodeRef.current) return;

    const originRect =
        originRef.current.getBoundingClientRect();

    const nodeRect =
        nodeRef.current.getBoundingClientRect();

    const originCenter =
        originRect.top + originRect.height / 2;

    const nodeCenter =
        nodeRect.top + nodeRect.height / 2;

    const distance =
        nodeCenter - originCenter;

    const step = 8;

    setCircles(
        Math.ceil(distance / step)
    );
    }, []);

  useLayoutEffect(() => {
        if (!sectionRef.current || circles <= 1) return;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,

            start: "top top",

            end: "bottom bottom",

            scrub: true,

            onUpdate: (self) => {
            const easedProgress =
                gsap.parseEase("power2.out")(
                    self.progress
                );

                const amount = Math.max(
                1,
                Math.ceil(easedProgress * circles)
                );

            setVisibleCircles(amount);
            },

            
        });

        return () => trigger.kill();
    }, [circles]);

  return (
    <>

    <Box
        ref={sectionRef}
        sx={{position: "relative", overflow: "hidden", minHeight: "210vh", }}>
        <TimelineHeader
            moment={initialMoment}
            originRef={originRef}
            circles={circles}
            visibleCircles={visibleCircles}
        />

       

        <TimelineTrack 
            nodeRef={nodeRef}
            circles={circles}
            visibleCircles={visibleCircles}
            activeMilestone={activeMilestone}
        />

        <TimelineContent
            activeMilestone={activeMilestone}
            tunnelComplete={ visibleCircles >= circles }
        />

         <Box
            sx={{
                position: "absolute",
                top: "133vh",
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${milestone.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.4,
                zIndex: 1,
            }}
            />


        <NavigationButton
            sx={{
                position: "absolute",
                left: 50,
                top: "170vh",
                zIndex: 30,
            }}
            direction="prev"
            disabled={activeMilestone === 0}
            onClick={handlePrevious}
            />

        <NavigationButton

            sx={{
                position: "absolute",
                right: 50,
                top: "170vh",
                zIndex: 30,
            }}
            direction="next"
            disabled={
                activeMilestone ===
                historyData.milestones.length - 1
            }
            onClick={handleNext}
            />
    </Box>
 

    </>
  );
}