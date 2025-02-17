import React from "react";
import * as XLSX from "xlsx";
import { TripRecord } from "../../../types";


const ExportButton = ({ data }: { data: TripRecord[] }) => {
	const handleExport = () => {
		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		XLSX.writeFile(workbook, "data.xlsx");
	};

	return (
		<button
			onClick={handleExport}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			Download XLS
		</button>
	);
};

export default ExportButton;
