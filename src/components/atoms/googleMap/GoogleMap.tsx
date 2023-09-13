import { useState } from "react";
import Map from "google-map-react";
import { Box } from "@mui/material";

import { URL_GOOGLE_LOCATIONS } from "@utils/constants";

import themeMap from "./themeMap";

const markers = [
    { lat: 33.811433131447004, lng: -118.15898346457706, text: "Northern California" },
    { lat: 40.759626226052234, lng: -74.17464534503645, text: "Newark, New Jersey" },
    { lat: 37.695090596572875, lng: -121.90042153831749     , text: "Southern California" },

];




export const MapGoogle = ({ lat = 0, lng = 0 }) => {
    const [google, setGoogle] = useState(null);
    const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
    const [zoom, setZoom] = useState(1);




    const renderMarkers = (map: any, maps: any) => {

        let marker = new maps.Marker({

            position: { lat: lat, lng: lng },

            map,

        });




        return marker;

    };

    const onGoogleApiLoaded = ({ map, maps }: any) => {

        setGoogle(maps);

        markers.forEach((marker) => {
            new maps.Marker({
                position: { lat: Number(marker.lat), lng: Number(marker.lng) },
                map,
                title: marker.text,

            });
        });
    };

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
                // bootstrapURLKeys={{
                //     key:
                //         process.env.NODE_ENV === "production" ? URL_GOOGLE_LOCATIONS : "",

                // }}
                bootstrapURLKeys={{ key: "" }}
                options={{ styles: themeMap }}
                defaultCenter={center}
                defaultZoom={zoom}
                onGoogleApiLoaded={onGoogleApiLoaded}
            />
        </Box>
    );

};