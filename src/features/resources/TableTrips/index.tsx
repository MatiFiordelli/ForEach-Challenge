import { TransportMode, TripRecord } from "../../../types";
import ExportButton from "../ExportButton";
import Spinner from "../Spinner";

export default function TableTrips({
    dataTrips,
    handleRowClick=()=>{},
    selectedId="",
    transportModes,
	title=""
}: {
    dataTrips: TripRecord[] | null;
    handleRowClick: (id: string) => void;
    selectedId: string | null;
    transportModes: TransportMode[] | null;
	title: string
}) {

    return (
		<>
			{dataTrips && dataTrips.length > 0 && transportModes ? (
				<>
					<p className="text-center mb-3">{title}</p>
                    <div className="text-center mb-3 text-xs">
                        <ExportButton data={dataTrips} />
                    </div>
					<section className="overflow-x-auto w-[90%] m-auto">
						<table className="min-w-full bg-[transparent]">
							<thead>
								<tr>
									<th className="py-2 px-4 border border-black">
										Employee Name
									</th>
									<th className="py-2 px-4 border border-black">
										Start Address
									</th>
									<th className="py-2 px-4 border border-black">
										End Address
									</th>
									<th className="py-2 px-4 border border-black">
										Distance
									</th>
									<th className="py-2 px-4 border border-black">
										Round Trip
									</th>
									<th className="py-2 px-4 border border-black">
										Emission Factor
									</th>
									<th className="py-2 px-4 border border-black">
										Travel Date
									</th>
									<th className="py-2 px-4 border border-black">
										Carbon Footprint
									</th>
								</tr>
							</thead>
							<tbody>
								{dataTrips.map((trip) => (
									<tr
										key={trip._id}
										className={`cursor-pointer ${
											selectedId === trip._id
												? "bg-gray-200"
												: "hover:bg-[#646cff]"
										}`}
										onClick={() =>
											handleRowClick(trip._id as string)
										}
									>
										<td className="py-2 px-4 border border-black">
											{trip.employeeName}
										</td>
										<td className="py-2 px-4 border border-black">
											{trip.startAddress}
										</td>
										<td className="py-2 px-4 border border-black">
											{trip.endAddress}
										</td>
										<td className="py-2 px-4 border border-black">
											{trip.distance}
										</td>
										<td className="py-2 px-4 border border-black">
											{trip.roundTrip ? "Yes" : "No"}
										</td>
										<td className="py-2 px-4 border border-black">
											{
												transportModes?.filter(
													(t:TransportMode) =>
														t.code===trip.transportMode
												)[0].emissionFactor
											}
										</td>
										<td className="py-2 px-4 border border-black">
											{new Date(
												trip.travelDate
											).toLocaleDateString()}
										</td>
										<td className="py-2 px-4 border border-black">
											{trip.transportMode * transportModes?.filter(
													(t:TransportMode) =>
														t.code===trip.transportMode
												)[0].emissionFactor
                                            }
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</section>
				</>
			) : (
				<Spinner loadingText={"Loading data.."} />
			)}
		</>
	);
}
