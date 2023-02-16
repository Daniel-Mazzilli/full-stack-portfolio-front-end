import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "./Map.css";

const markers = [
  {
    markerOffset: -15,
    name: "Italy",
    coordinates: [12.56738, 41.87194],
  },
  {
    markerOffset: -15,
    name: "Ireland",
    coordinates: [-8.24389, 53.41291],
  },
  {
    markerOffset: -15,
    name: "Israel",
    coordinates: [34.851612, 31.046051],
  },
  {
    markerOffset: -15,
    name: "Netherlands",
    coordinates: [5.291266, 52.132633],
  },
];

const visitedCountries = markers.map(e => e.name)

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function Map() {
  const [content, setContent] = useState("");
  console.log(Geographies.geographies);
  return (
    <div className="Map-component">
      <div className="Map">
        <Tooltip id="tool-tip" anchorId="tool-tip-map" noArrow="true"/>
        <ComposableMap id="tool-tip-map" data-tooltip-content={content}>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) => 
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={visitedCountries.includes(geo.properties.name)? "rgb(255, 79, 79)": "rgb(183, 221, 255)"}
                    stroke="#A31F42"
                    onMouseEnter={() => {
                      setContent(geo.properties.name);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      hover: {
                        fill: "rgb(255, 79, 79)",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={10}
                  fill="none"
                  stroke="rgb(30, 30, 151)"
                  strokeWidth={2.6}
                />
                {/* <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{
                    fontFamily: "system-ui",
                    fill: `${name === content ? "red" : "none"}`,
                  }}
                >
                  {name}
                </text> */}
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default Map;
