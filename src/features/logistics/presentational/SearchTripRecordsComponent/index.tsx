import { TransportMode, TripRecord } from "../../../../types";
import { Button, Input } from "../../../resources/FormElements";
import TableTrips from "../../../resources/TableTrips";

export default function SearchTripRecordsComponent({
	filters,
	setFilters,
    handleSearch,
    dataTrips,
    transportModes
}: {
	filters: {
		employeeName: string;
		startAddress: string;
		endAddress: string;
	};
	setFilters: React.Dispatch<
		React.SetStateAction<{
			employeeName: string;
			startAddress: string;
			endAddress: string;
		}>
    >;
    handleSearch: () => void
    dataTrips: TripRecord[] | null
    transportModes: TransportMode[] | null
}) {
	return (
		<section>
			<div className="w-[90%] flex flex-col max-w-[70%] sm:flex-row justify-center items-center gap-2 m-auto">
				<Input
					type="text"
					id="employeeName"
					placeholder="Employee Name"
					isRequired={true}
					value={filters.employeeName}
					onChangeHandler={(e)=>setFilters({...filters, employeeName: e.target.value})}
					minLength={2}
					maxLength={50}
					pattern="^[a-zA-Z0-9 ]+$"
				/>
                <Input
					type="text"
					id="startAddress"
					placeholder="Start Address"
					title="Start Address"
					isRequired={true}
					value={filters.startAddress}
					onChangeHandler={(e)=>setFilters({...filters, startAddress: e.target.value})}
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
					value={filters.endAddress}
					onChangeHandler={(e)=>setFilters({...filters, endAddress: e.target.value})}
					minLength={5}
					maxLength={100}
					pattern="^[a-zA-Z0-9 ]+$"
				/>
			</div>
            
            <div className="w-[40%] flex flex-col max-w-[70%] sm:flex-row justify-center items-center gap-2 m-auto">
                <Button
                    type="button"
                    text={"SEARCH"}
                    title={"Search button"}
                    textColor="#FFF"
                    textSize="small"
                    bgColor="#878cf5"
                    buttonWidth=""
                    buttonHeight=""
                    classNames="h-[2.8rem] 2xl:h-[4rem] mt-2"
                    onClickHandler={handleSearch}
                />
            </div>

            {dataTrips &&
                <TableTrips
                    dataTrips={dataTrips}
                    handleRowClick={()=>{}}
                    selectedId=""
                    transportModes={transportModes}
                    title={"Search Results"}
                />
            }
		</section>
	);
}
