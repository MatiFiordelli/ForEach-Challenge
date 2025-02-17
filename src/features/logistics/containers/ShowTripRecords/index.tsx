import useTrip from "../../hooks/useTrip.tsx";
import ShowTripRecordsComponent from "../../presentational/ShowTripRecordsComponent/index.tsx";

export default function ShowTripRecords() {
	const {
		dataTrips,
		handleRowClick,
		selectedId,
		transportModes} = useTrip()
		
		return (
			<ShowTripRecordsComponent 
				dataTrips={dataTrips}
				handleRowClick={handleRowClick}
				selectedId={selectedId}
				transportModes={transportModes}
			/>
		)
}
