import { TransportMode, TripRecord } from "../../../../types";
import TableTrips from "../../../resources/TableTrips";

export default function ModifyTripRecordComponent({
	dataTrips,
	handleRowClick,
	selectedId,
	transportModes,
}: {
	dataTrips: TripRecord[] | null;
	handleRowClick: (id: string) => void;
	selectedId: string | null;
	transportModes: TransportMode[] | null;
}) {
	return (
		<TableTrips
			dataTrips={dataTrips}
			handleRowClick={handleRowClick}
			selectedId={selectedId}
			transportModes={transportModes}
			title={"Table of trips records to modify"}
		/>
	);
}
