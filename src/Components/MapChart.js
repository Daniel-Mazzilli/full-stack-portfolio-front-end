import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import "./MapChart.css"

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

const MapChart = ({ setTooltipContent }) => {
  return (
    <div id="map-chart">
      <ComposableMap>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);