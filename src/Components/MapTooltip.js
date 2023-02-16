import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./MapTooltip.css";

import MapChart2 from "./MapChart2";

export default function MapTooltip() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart2 setTooltipContent={setContent} />
      <Tooltip id="tool-tip" anchorId="map" content={content} float />
    </div>
  );
}