import { useState } from "react";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
import "./MapArea.css";

import MapChart from "./MapChart";

export default function MapArea() {
  const [content, setContent] = useState("");
  return (
    <div >
      <MapChart setTooltipContent={setContent} id="map-area"/>
      <Tooltip id="tool-tip" anchorId="map-chart" content={content} float />
    </div>
  );
}