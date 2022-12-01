import { useMemo, forwardRef } from "react";
import styled from "styled-components";

import {
  getNumberBackGroundColor,
  getRankBackgroundColor,
} from "../helpers/randomColor";
import Count from "./Count";
import { DefaultTypes } from "../types";

interface ListItemProps {
  items: DefaultTypes;
  index: number;
}

export const CampaignStreamersList = forwardRef(
  ({ items, index }: ListItemProps, ref) => {
    const rankTitleAvatarBackgroundColor = useMemo(
      () => `#${Math.random().toString(14).substr(-6)}`,
      []
    );

    return (
      <ListContainer
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: getRankBackgroundColor(index + 1) }}
      >
        <Avatar
          size={34}
          backgroundColor={
            [0, 1, 2].includes(index)
              ? getNumberBackGroundColor(index + 1)
              : "white"
          }
          color={index === 0 ? "orange" : "grey"}
          hasBorder
          isHideOnSmallScreen
        >
          {index}
        </Avatar>
        <Avatar
          size={34}
          backgroundColor={rankTitleAvatarBackgroundColor}
          color="white"
          hasBorder
          isHideOnSmallScreen={false}
        >
          <span>{items.displayName[0]}</span>
          <ToolTip
            backgroundColor={
              [0, 1, 2].includes(index)
                ? getNumberBackGroundColor(index + 1)
                : "white"
            }
            color={index === 0 ? "orange" : "grey"}
          >
            {index}
          </ToolTip>
        </Avatar>
        <DisplayNameContainer>{items.displayName}</DisplayNameContainer>
        <Count
          key={items.userID}
          data={{
            id: items.userID,
            number: items.score.toString(),
            duration: "1",
          }}
        />
      </ListContainer>
    );
  }
);

type AvatarProps = {
  size: number;
  backgroundColor?: string;
  hasBorder: boolean;
  isHideOnSmallScreen: boolean;
};

type ToolTipProps = {
  backgroundColor?: string;
  color?: string;
};

const Avatar = styled.div<AvatarProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.hasBorder ? "#c2d3ff" : props.backgroundColor)};
  font-size: ${(props) => props.size / 2.5}px;
  font-weight: 600;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: ${(props) => props.backgroundColor || "#fff"};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
  border-radius: 50%;
  transition: ease all 0.3s;

  @media (max-width: 768px) {
    display: ${(props) => (props.isHideOnSmallScreen ? "none" : "block")};
    position: relative;
    overflow: visible;
    border: 1px solid #3496cf;
  }
`;

const ToolTip = styled.div<ToolTipProps>`
  width: 25px;
  height: 25px;
  font-weight: bold;
  border-radius: 50%;
  position: absolute;
  background: ${(props) => props.backgroundColor || "#fff"};
  top: 16px;
  left: 20px;
  z-index: 99;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  @media (min-width: 768px) {
    display: none;
  }
`;

const ListContainer = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr 18fr;
  padding: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 3fr 6fr;
  }
`;

const DisplayNameContainer = styled.div`
  justify-self: start;
  align-self: center;
  @media (max-width: 768px) {
    justify-self: center;
    padding-left: 5px;
  }
`;
