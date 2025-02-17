import endpoints from "../../../utils/helpers/endpoints";

const token = localStorage.getItem("token");
export const deleteTripRecord = async (id: string, email: string) => {
    return fetch(`${endpoints['logistics-microservice']}/api/trip-records/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({email: email}),
    });
}
