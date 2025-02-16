import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CreateTripRecordComponent from "../../presentational/organisms/CreateTripRecordComponent";
import { FormData } from "../../../../types";
import { jwtDecode } from "jwt-decode";
import endpoints from "../../../../utils/helpers/endpoints";

const initialFormData = {
	startAddress: "",
	endAddress: "",
	transportMode: -1,
	travelDate: "",
	distance: "",
	roundTrip: "",
};

export default function CreateTripRecord() {
	const [transportModes, setTransportModes] = useState(null);
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const token = localStorage.getItem("token");
	const [email, setEmail] = useState("");
	const [employeeName, setEmployeeName] = useState("");

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

	const getTransportModes = () => {
		fetch("http://localhost:4001/api/getTransportModes")
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

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		//Here I should use Zod to validate

		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const createTripRecordHandler = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`${endpoints["logistics-microservice"]}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
					body: JSON.stringify({
						email: email,
						trip: { ...formData, employeeName: employeeName },
					}),
				}
			);

			if (response.ok) {
				//const data = await response.json();
				alert("Success!");
				setFormData(initialFormData);
			} else {
				console.error("Failed to create trip record");
				alert("Failed to create trip record!");
			}
		} catch (error) {
			console.error("Error creating trip record:", error);
			alert("Error creating trip record");
		}
	};

	useEffect(() => {
		getTransportModes();
		getNameFromToken();
	}, []);

	return (
		<>
			{transportModes && (
				<CreateTripRecordComponent
					transportModes={transportModes}
					handleChange={handleChange}
					createTripRecordHandler={createTripRecordHandler}
					formData={formData}
					employeeName={employeeName}
				/>
			)}
		</>
	);
}
