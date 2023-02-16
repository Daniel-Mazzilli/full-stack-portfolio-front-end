import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./MapTooltip.css";

import MapChart from "./MapChart.js";

export default function MapTooltip() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <Tooltip id="tool-tip" anchorId="map" content={content} float />
    </div>
  );
}