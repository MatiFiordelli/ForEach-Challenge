import ModifyTripRecordComponent from "../../presentational/ModifyTripRecordComponent";
import useTrip from "../../hooks/useTrip";
import { useState } from "react";
import ModifyTripRecordsFormComponent from "../../presentational/ModifyTripRecordComponent/ModifyTripRecordsFormComponent";

export default function ModifyTripRecord() {
	const [
		isModifyTripRecordsFormComponentVisible,
		setIsModifyTripRecordsFormComponentVisible,
	] = useState(false);
	const { dataTrips, handleRowClick, selectedId, transportModes } = useTrip(
		"update",
		isModifyTripRecordsFormComponentVisible,
		setIsModifyTripRecordsFormComponentVisible
	);

	return (
		<>
			{isModifyTripRecordsFormComponentVisible ? (
				<ModifyTripRecordsFormComponent 
                    selectedId={selectedId}
                    dataTrips={dataTrips}
                />
			) : (
				<ModifyTripRecordComponent
					dataTrips={dataTrips}
					handleRowClick={handleRowClick}
					selectedId={selectedId}
					transportModes={transportModes}
				/>
			)}
		</>
	);
}
