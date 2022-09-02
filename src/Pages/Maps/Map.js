import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "700px",
};

const position = {
  lat: 23.810331,
  lng: 90.412521,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function Map() {
  return (
    <section className="mt-10 pt-5 -mb-4">
      <h1 className="text-center fs-1 text-blue-500 font-semibold">
        Find Your Destination
      </h1>
      <div className="mt-10 p-5 w-full flex justify-center">
        <LoadScript googleMapsApiKey="AIzaSyD87HKXiwYVz1kuvY0vkEdCFnBOcTVf40E">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
          >
            <Marker onLoad={onLoad} position={position} />
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
}

export default React.memo(Map);
