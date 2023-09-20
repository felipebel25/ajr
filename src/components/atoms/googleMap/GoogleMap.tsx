import { useState } from "react";
import Map from "google-map-react";
import { Box } from "@mui/material";

import themeMap from "./themeMap";

const markers = [{ lat: 40.759626226052234, lng: -74.17464534503645, text: "Newark, New Jersey" },];




export const MapGoogle = ({ lat = 0, lng = 0 }) => {
    const [google, setGoogle] = useState(null);
    const [center, setCenter] = useState({ lat: 40.759626226052234, lng: -74.17464534503645 });
    const [zoom, setZoom] = useState(13);

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
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY_LOCATION ?? '' }}
                options={{ styles: themeMap }}
                defaultCenter={center}
                defaultZoom={zoom}
                onGoogleApiLoaded={onGoogleApiLoaded}
            />
        </Box>
    );

};