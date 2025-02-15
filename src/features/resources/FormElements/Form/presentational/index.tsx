import { FormType } from "../types";

export default function Form({ 
	handleSubmit, 
	children, 
	id = "",
	paramsForFunctionHandler
}: FormType) {
	return (
		<form
			data-testid={id}
			id={id === "" ? String("Form" + Math.random()) : id}
			className="flex flex-col gap-5 justify-items-start w-full"
			onSubmit={(e) => handleSubmit(e, paramsForFunctionHandler)}
		>
			{children}
		</form>
	);
}