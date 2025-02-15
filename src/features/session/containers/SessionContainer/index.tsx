import React, { FormEvent, useEffect, useState } from "react";
import SessionComponent from "../../presentational/organisms/SessionComponent";
import sessionStore from "../../redux/store";
import { Provider } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { endpoints } from "../../utils/endpoints";
import { authService } from "../../services/authService";
import { EntriesDataType } from "../../types";
import { useDispatch } from "react-redux";
import { setFormError } from "../../redux/actions";
import { SETISLOGGEDIN } from "../../../../redux/types";

function MakeDispatchInsideProvider({
	message,
	setAuthError,
}: {
	message: string;
	setAuthError: React.Dispatch<React.SetStateAction<string>>;
}) {
	const dispatch = useDispatch();
	useEffect(() => {
		message && dispatch(setFormError({ errorMessage: message }));
        setAuthError('')
	}, [message]);

	return <></>;
}

export default function SessionContainer() {
	const { pathname } = useLocation()
	const [isLogIn, setIsLogIn] = useState(true);
	const [authError, setAuthError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSigninSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const entries = Object.fromEntries(
			formData.entries()
		) as unknown as EntriesDataType;

		authService(entries, isLogIn ? endpoints.login : endpoints.signup)
			.then((data) => {
				if (data === "OK"){ 
					dispatch({ type: SETISLOGGEDIN, payload: true })
					setTimeout(() => {
						navigate("/");
					}, 300);
				}
			})
			.catch((error) => {
				setAuthError(error.message);
			});
	};

	useEffect(()=>{
		if (pathname==='/login') setIsLogIn(true)
		if (pathname==='/signup') setIsLogIn(false)

	},[])

	return (
		<Provider store={sessionStore}>
			<MakeDispatchInsideProvider
				message={authError}
				setAuthError={setAuthError}
			/>
			<SessionComponent
				handleSigninSubmit={handleSigninSubmit}
				isLogIn={isLogIn} //true for login, false for signup
			/>
		</Provider>
	);
}