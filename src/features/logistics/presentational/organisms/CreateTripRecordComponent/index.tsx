import { Button, Form, Input } from "../../../../resources/FormElements";
import { FormData, TransportMode } from "../../../../../types";
import { ChangeEvent, FormEvent } from "react";

export default function CreateTripRecord({
	transportModes,
    handleChange,
    createTripRecordHandler,
    formData,
    employeeName
}: {
	transportModes: TransportMode[]
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    createTripRecordHandler: (e: FormEvent) => void
    formData: FormData,
    employeeName: string
}) {

	return (
		<section className="text-center w-[50%] flex flex-col justify-center m-auto gap-5">
			<p>Create Trip Record</p>
			<Form handleSubmit={(e) => createTripRecordHandler(e)}>
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
					{transportModes.map((transportMode: TransportMode) => {
						return (
							<option key={transportMode.code} value={transportMode.code}>
								{transportMode.mode}
							</option>
						);
					})}
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
	);
}
