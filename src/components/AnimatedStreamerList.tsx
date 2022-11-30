import React, { useState, useLayoutEffect, useEffect } from "react";
import useStreamerTrackPrevious from "../hooks/useStreamerTrackPrevious";
import calculateRelativeDomInfo from "../helpers/calculateRelativeDomInfo";

const AnimatedStreamerList = (value: any) => {
  const { children } = value;
  const [boundingBox, setBoundingBox] = useState<any>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<any>({});
  const prevChildren = useStreamerTrackPrevious(children);
  useLayoutEffect(() => {
    const newBoundingBox = calculateRelativeDomInfo(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundingBox = calculateRelativeDomInfo(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child) => {
        const domNode = child.ref && child.ref.current;
        const firstBox: DOMRect = prevBoundingBox[child.key];

        const lastBox: DOMRect = boundingBox[child.key];
        const changeInY = (firstBox && firstBox.top) - (lastBox && lastBox.top);

        if (changeInY && domNode) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              domNode.style.transform = "";
              domNode.style.transition = "transform 800ms";
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default AnimatedStreamerList;
