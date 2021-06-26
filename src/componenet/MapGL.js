import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css"
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoibmF2aWQ1MTU1IiwiYSI6ImNrcWRhdGg1NzAzM2sydm1seXBidXY3NzEifQ.gHgXk-VTNt30bvKm_eMWyA";

function MapGL() {
    const mapboxElRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapboxElRef.current,
            style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
            center: [27, 32],
            zoom: 2
        });


        map.addControl(new mapboxgl.NavigationControl());
    }, []);

    return (
        <div className="App">
            <div className="mapContainer">
                <div className="mapBox" ref={mapboxElRef} />
            </div>
        </div>
    );
}

export default MapGL;