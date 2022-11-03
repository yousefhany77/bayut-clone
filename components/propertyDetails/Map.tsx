import React, { memo, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Geography } from "./types";
interface Props {
  geography: Geography;
}

function Map({ geography }: Props) {
  const [viewport, setViewport] = useState({
    zoom: 17,
    latitude: geography.lat,
    longitude: geography.lng,
  });
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl shadow-md">
      <ReactMapGL
        mapStyle="mapbox://styles/yousefhany/cl9u508e7003q14r5hdazmyye"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        style={{
          width: "100%",
          height: "30rem",
        }}
      >
        <Marker
          longitude={geography.lng}
          latitude={geography.lat}
          color="rgb(227, 85, 78)"
        />
       
      </ReactMapGL>
    </div>
  );
}

export default memo(Map);
