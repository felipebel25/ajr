import { useState } from "react";
import { Box } from "@mui/material";
import Map from "google-map-react";

import { URL_GOOGLE_LOCATIONS } from "@utils/constants";

import themeMap from "./themeMap";

const markers = [
    { lat: 37.7749, lng: -122.4194, text: "Marcador 1", population: 1001 },
    { lat: 37.8044, lng: -122.2708, text: "Marcador 2", population: 600 },
    { lat: 37.788, lng: -122.3997, text: "Marcador 3", population: 100 },
    { lat: 40.748817, lng: -73.985428, text: "Marcador 4", population: 500 },
    { lat: 41.881832, lng: -87.623177, text: "Marcador 5", population: 600 },
    { lat: 31.0, lng: -100.0, text: "Marcador 6", population: 200 },
    { lat: 6.230833, lng: -75.590553, text: "Marcador 7", population: 1400 },

];




export const MapGoogle = ({ lat = 0, lng = 0 }) => {
    const [google, setGoogle] = useState(null);
    const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
    const [zoom, setZoom] = useState(1);




    // const renderMarkers = (map, maps) => {

    //   let marker = new maps.Marker({

    //     position: { lat: lat, lng: lng },

    //     map,

    //   });




    //   return marker;

    // };

    // const onGoogleApiLoaded = ({ map, maps }: any) => {

    //     setGoogle(maps);

    //     markers.forEach((marker) => {
    //         new maps.Marker({
    //             position: { lat: marker.lat, lng: marker.lng },
    //             map,
    //             title: marker.text,
    //             icon:
    //                 marker.population > 999
    //                     ? "/svg/svgs/1000views.svg"
    //                     : marker.population > 499 && marker.population < 1000
    //                         ? "/svg/svgs/5001000.svg"
    //                         : "/svg/svgs/less500.svg",
    //         });
    //     });
    // };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <Map
                bootstrapURLKeys={{
                    key:
                        process.env.NODE_ENV === "production" ? URL_GOOGLE_LOCATIONS : "",

                }}
                options={{ styles: themeMap }}
                defaultCenter={center}
                defaultZoom={zoom}
                // onGoogleApiLoaded={onGoogleApiLoaded}
            />
        </Box>
    );

};