import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FormData, TransportMode, TripRecord } from "../../../../../types";
import { getTransportModes } from "../../../../../utils/getTransportModes";
import endpoints from "../../../../../utils/helpers/endpoints";
import { jwtDecode } from "jwt-decode";
import { Button, Form, Input } from "../../../../resources/FormElements";
import { useNavigate } from "react-router";

export default function ModifyTripRecordsFormComponent({
	selectedId,
	dataTrips,
}: {
	selectedId: string | null;
	dataTrips: TripRecord[] | null;
}) {
	const navigate = useNavigate();
	const selectedTrip = (dataTrips as TripRecord[]).filter((t) => {
		return t._id === selectedId;
	})[0];

	const initialFormData = {
		startAddress: selectedTrip.startAddress,
		endAddress: selectedTrip.endAddress,
		transportMode: selectedTrip.transportMode,
		travelDate: selectedTrip.travelDate,
		distance: selectedTrip.distance,
		roundTrip: selectedTrip.roundTrip,
	};

	const [transportModes, setTransportModes] = useState<
		TransportMode[] | null
	>(null);
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

	/* const createTripRecordHandler = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${endpoints["logistics-microservice"]}/api/trip-records`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
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
	}; */
	const updateTripRecord = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetch(`${endpoints['logistics-microservice']}/api/trip-records/${selectedId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
			body: JSON.stringify({trip: {...formData, employeeName: employeeName}, email: email}),
		}).then((res) => {
			if (res.ok) {
				alert("Successfully updated!");
				setFormData(initialFormData);
				navigate('/')
			}
		})
	}


	useEffect(() => {
		getTransportModes(setTransportModes);
		getNameFromToken();
	}, []);

	return (
		<>
			{transportModes && (
				<section className="text-center w-[50%] flex flex-col justify-center m-auto gap-3 mb-3">
					<p>Modify Trip Record</p>
					<Form handleSubmit={(e)=>updateTripRecord(e)}>
						<Input
							type="text"
							id="startAddress"
							placeholder="Start Address"
							title="Start Address"
							isRequired={true}
							autoFocus={true}
							value={formData.startAddress}
							onChangeHandler={handleChange}
							minLength={5}
							maxLength={100}
							pattern="^[a-zA-Z0-9 ]+$"
						/>
						<Input
							type="text"
							id="endAddress"
							placeholder="End Address"
							title="End Address"
							isRequired={true}
							value={formData.endAddress}
							onChangeHandler={handleChange}
							minLength={5}
							maxLength={100}
							pattern="^[a-zA-Z0-9 ]+$"
						/>

						<select
							id="transportMode"
							name="transportMode"
							title="Transport Mode"
							required
							value={formData.transportMode}
							onChange={handleChange}
							className={`border border-slate-400 p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-4xl`}
						>
							<option value="-1" disabled>
								Transport Mode
							</option>
							{transportModes.map(
								(transportMode: TransportMode) => {
									return (
										<option
											key={transportMode.code}
											value={transportMode.code}
										>
											{transportMode.mode}
										</option>
									);
								}
							)}
						</select>

						<Input
							type="date"
							id="travelDate"
							placeholder="Travel Date"
							title="Travel Date"
							isRequired={true}
							value={formData.travelDate}
							onChangeHandler={handleChange}
						/>

						<Input
							type="number"
							id="distance"
							placeholder="Distance"
							title="Distance"
							isRequired={true}
							value={formData.distance}
							onChangeHandler={handleChange}
							minLength={1}
							maxLength={5000}
						/>

						<Input
							type="text"
							id="employeeName"
							placeholder="Employee Name"
							title="Employee Name"
							isRequired={true}
							isReadOnly={true}
							value={employeeName}
							onChangeHandler={handleChange}
							minLength={2}
							maxLength={50}
							classNames="bg-gray-200"
						/>

						<select
							id="roundTrip"
							name="roundTrip"
							title="Round Trip"
							required
							value={formData.roundTrip}
							onChange={handleChange}
							className={`border border-slate-400 p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-4xl`}
						>
							<option value="" disabled>
								Round Trip
							</option>
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>

						<Button
							type="submit"
							text={"SUBMIT"}
							title={"Submit button"}
							textColor="#FFF"
							textSize="small"
							bgColor="#878cf5"
							buttonWidth=""
							buttonHeight=""
							classNames="h-[2.8rem] 2xl:h-[4rem] mt-2"
						/>
					</Form>
				</section>
			)}
		</>
	);
}
