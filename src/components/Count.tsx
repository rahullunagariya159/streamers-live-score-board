import { useEffect, useState } from "react";
import styled from "styled-components";

const Count = (props: any) => {
  const { number, duration }: any = props.data;
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return <ScoreContainer>{count}pt</ScoreContainer>;
};

const ScoreContainer = styled.div`
  justify-self: end;
  font-weight: 400;
  color: #dc3a79;
  align-self: center;
`;

export default Count;
