import { useEffect, useState } from "react";
import SearchTripRecordsComponent from "../../presentational/SearchTripRecordsComponent";
import { TransportMode, TripRecord } from "../../../../types";
import { getTransportModes } from "../../../../utils/getTransportModes";
import endpoints from "../../../../utils/helpers/endpoints";

export default function SearchTripRecords() {
    const [filters, setFilters] = useState({
        employeeName: "",
        startAddress: "",
        endAddress: "",
    });
    const [dataTrips, setDataTrips] = useState<TripRecord[] | null>(null);
    const [transportModes, setTransportModes] = useState<TransportMode[] | null>(null);
    const token = localStorage.getItem("token");

    const handleSearch = () => {
        fetch(`${endpoints['logistics-microservice']}/api/trip-records/1/search?startAddress=${filters.startAddress}&endAddress=${filters.endAddress}&employeeName=${filters.employeeName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then((res)=>res.json())
        .then((data)=>setDataTrips(data.trips.reduce((acc:any, user:any) => {
            return acc.concat(user.trips);
          }, [])))
    };

    useEffect(()=>{
        getTransportModes(setTransportModes);
    },[])    

    return (
        <>
            {transportModes && 
                <SearchTripRecordsComponent 
                    filters={filters}
                    setFilters={setFilters}
                    handleSearch={handleSearch}
                    dataTrips={dataTrips}
                    transportModes={transportModes}
                />
            }
        </>
    )
}
