import { historyData } from "../../data/historyData";

import { useRef, useState, useLayoutEffect } from "react";

import TimelineHeader from "./TimelineHeader";
import TimelineTrack from "./TimelineTrack";

export default function HistoryTimeline() {

  const initialMoment = historyData.moments[0];
  const originRef = useRef(null);
  const nodeRef = useRef(null);

  const [circles, setCircles] = useState(70);

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

  return (
    <>
      <TimelineHeader
        moment={initialMoment}
        originRef={originRef}
        circles={circles}
      />

      <TimelineTrack 
        nodeRef={nodeRef}
      />
    </>
  );
}