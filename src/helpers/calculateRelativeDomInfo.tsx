import React from "react";

interface BoundingBox {
  [key: string]: DOMRect;
}

const calculateRelativeDomInfo = (children: any) => {
  let RelativedomInfo: BoundingBox = {};

  React.Children.forEach(children, (child) => {
    const domNode = child.ref && child.ref.current;
    const nodeBoundingBox = domNode && domNode.getBoundingClientRect();

    RelativedomInfo[child.key] = nodeBoundingBox;
  });

  return RelativedomInfo;
};

export default calculateRelativeDomInfo;
