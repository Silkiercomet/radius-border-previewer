import "./styles.css";
import { useState } from "react";
import BorderCss from "./BoderCss";
import ContentContainer from "./ContentContainer";
import GetBorder from "./GetBorder";

export default function App() {
  const [topLeft, setTopL] = useState(1);
  const [topRight, setTopR] = useState(1);
  const [bottomR, setBottomR] = useState(1);
  const [bottomL, setBottomL] = useState(1);
  return (
    <div className="App">
      <main>
        <ContentContainer
          /* top left border*/
          topLeft={topLeft}
          /* top right border*/
          topRight={topRight}
          /* bottom right border*/
          bottomR={bottomR}
          /* bottom left border*/
          bottomL={bottomL}
        />
        <BorderCss
          /* top left border*/
          topLeft={topLeft}
          setTopL={setTopL}
          /* top right border*/
          topRight={topRight}
          setTopR={setTopR}
          /* bottom right border*/
          bottomR={bottomR}
          setBottomR={setBottomR}
          /* bottom left border*/
          bottomL={bottomL}
          setBottomL={setBottomL}
        />
      </main>
      <GetBorder
        /* top left border*/
        topLeft={topLeft}
        /* top right border*/
        topRight={topRight}
        /* bottom right border*/
        bottomR={bottomR}
        /* bottom left border*/
        bottomL={bottomL}
      />
    </div>
  );
}
