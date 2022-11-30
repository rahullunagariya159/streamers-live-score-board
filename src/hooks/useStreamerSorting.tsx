import { useMemo, useState, useEffect } from "react";
import { DefaultTypes } from "../types";
import { getRandomNumber } from "../helpers/randomColor";
import STREAMERS_DATA from "../streamers-mock-data/streamersDetails.json";

export const useStreamerSorting = () => {
  const [totalStreamers, setTotalStreamer] =
    useState<DefaultTypes[]>(STREAMERS_DATA);

  const sortedData = useMemo(() => {
    return totalStreamers.sort((a, b) => (a.score > b.score ? -1 : 1));
  }, [totalStreamers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalStreamer((streamers) => {
        return streamers.map((streamer) =>
          Object.assign(streamer, { score: getRandomNumber() })
        );
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { streamers: sortedData };
};
