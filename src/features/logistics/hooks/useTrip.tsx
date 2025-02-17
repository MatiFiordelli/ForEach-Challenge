import { useEffect, useState } from "react";
import { TransportMode, TripRecord } from "../../../types";
import { getTransportModes } from "../../../utils/getTransportModes";
import { jwtDecode } from "jwt-decode";
import { deleteTripRecord } from "../services";
import endpoints from "../../../utils/helpers/endpoints";

export default function useTrip(
	crudOperation: string = "",
	isModifyTripRecordsFormComponentVisible: boolean = false,
	setIsModifyTripRecordsFormComponentVisible: React.Dispatch<React.SetStateAction<boolean>> = () => {}
) {
	const [dataTrips, setDataTrips] = useState<TripRecord[] | null>(null);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const token = localStorage.getItem("token");
	const [transportModes, setTransportModes] = useState<
		TransportMode[] | null
	>(null);
	const [email, setEmail] = useState("");
	const [employeeName, setEmployeeName] = useState("");

	const handleRowClick = (id: string) => {
		setSelectedId(id);
	};

	console.log(isModifyTripRecordsFormComponentVisible, employeeName)

	const getTrips = () => {
		fetch(`${endpoints['logistics-microservice']}/api/trip-records`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setDataTrips(data.user.trips);
			})
			.catch((error) => {
				console.error("Error fetching trip records:", error);
			});
	};

	const getNameFromToken = () => {
		if (token) {
			try {
				const decodedToken = jwtDecode<{ name: string; email: string }>(
					token
				);
				setEmployeeName(decodedToken.name);
				setEmail(decodedToken.email);
			} catch (error) {
				console.error("Error decoding token:", error);
			}
		} else {
			console.error("No token found");
		}
	};

	useEffect(() => {
		if (selectedId) {
			if (crudOperation === "delete") {
				deleteTripRecord(selectedId, email).then(() => {
					getTrips();
					alert("Successfully deleted!");
				});
			}
			if (crudOperation === "update") {
				setIsModifyTripRecordsFormComponentVisible(true)
			}
		}
	}, [selectedId]);

	useEffect(() => {
		getNameFromToken();
		getTrips();
		getTransportModes(setTransportModes);
	}, []);

	return {
		dataTrips,
		handleRowClick,
		selectedId,
		transportModes,
	};
}
