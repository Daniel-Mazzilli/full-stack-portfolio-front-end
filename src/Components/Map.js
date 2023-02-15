import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import "./Map.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  return <div className="Map-component">
    <div className="Map">
        <ComposableMap data-tip="">
            <Geographies geography={geoUrl}>
                {({ geographies }) => geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                )) }
            </Geographies>
        </ComposableMap>
    </div>
  </div>;
}
