import { memo } from "react";
import { useContextProvider } from "../Provider/Provider";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
//outdated link as of Dec 2023, replaced with link below
// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const MapChart = ({ setTooltipContent }) => {
  const { markers, visited } = useContextProvider();

  return (
    <div id="map">
      <ComposableMap>
        <ZoomableGroup zoom={1.2}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    visited
                      ? visited.includes(geo.properties.name)
                        ? "rgb(255, 79, 79)"
                        : "#F7ED96"
                      : "#F7ED96"
                  }
                  stroke="#A31F42"
                  strokeWidth={0.2}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      //   fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#A31F42",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.length &&
            markers.map(({ name, coordinates }) => (
              <Marker
                key={name}
                coordinates={coordinates}
              >
                <circle r={10} fill="none" stroke="#290075" strokeWidth={1.1} />
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
