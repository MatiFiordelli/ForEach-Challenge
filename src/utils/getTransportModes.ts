import { TransportMode } from "../types";
import endpoints from "./helpers/endpoints";

export const getTransportModes = (setTransportModes: React.Dispatch<React.SetStateAction<TransportMode[] | null>>) => {
    fetch(`${endpoints["logistics-microservice"]}/api/getTransportModes`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            setTransportModes(data.transportModes[0].transportModes);
        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        });
};