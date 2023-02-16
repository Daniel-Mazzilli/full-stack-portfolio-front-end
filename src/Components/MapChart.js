import { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

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
    {
      markerOffset: -15,
      name: "Germany",
      coordinates: [10.451526, 51.165691],
    },
  ];

  const visitedCountries = markers.map(e => e.name)

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ({ setTooltipContent }) => {
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
                  fill={visitedCountries.includes(geo.properties.name)? "rgb(255, 79, 79)": "rgb(183, 221, 255)"}
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
          {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={10}
                  fill="none"
                  stroke="rgb(30, 30, 151)"
                  strokeWidth={1.1}
                />
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
