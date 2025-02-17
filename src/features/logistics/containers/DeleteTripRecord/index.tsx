import useTrip from "../../hooks/useTrip";
import DeleteTripRecordComponent from "../../presentational/DeleteTripRecordComponent";

export default function DeleteTripRecord() {
    const {
        dataTrips,
        handleRowClick,
        selectedId,
        transportModes} = useTrip('delete')
    
    return (
        <DeleteTripRecordComponent 
            dataTrips={dataTrips}
            handleRowClick={handleRowClick}
            selectedId={selectedId}
            transportModes={transportModes}
        />
    )
}
