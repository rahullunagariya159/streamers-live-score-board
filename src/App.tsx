import React, { createRef } from "react";
import styled from "styled-components";
import "./App.css";
import { useStreamerSorting } from "./hooks/useStreamerSorting";
import { CampaignStreamersList } from "./components/CampaignStreamersList";
import AnimatedStreamerList from "./components/AnimatedStreamerList";

const App: React.FC = () => {
  const { streamers } = useStreamerSorting();

  return (
    <div className="App">
      <ListParent>
        <AnimatedStreamerList>
          {streamers.map((streamer, index) => {
            return (
              <CampaignStreamersList
                index={index}
                items={streamer}
                key={streamer.displayName}
                ref={createRef()}
              />
            );
          })}
        </AnimatedStreamerList>
      </ListParent>
    </div>
  );
};

const ListParent = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #ffffff;
  border-radius: 10px;
  max-height: 100%;
  overflow: auto;
  transition: ease all 0.3s;
`;
export default App;
