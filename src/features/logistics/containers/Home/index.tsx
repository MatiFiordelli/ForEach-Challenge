//import { useEffect } from 'react'
import HomeComponent from "../../presentational/organisms/HomeComponent";

export default function Home() {

    /* useEffect(() => {
        const token = localStorage.getItem('token')
        const employeeName = "javier"; 
        const startAddress = "cityville4"; 
        const endAddress = ""; 

        const queryParams = new URLSearchParams({ 
            employeeName,
            startAddress,
            endAddress
        }).toString();

        const endpoint = `http://localhost:4001/api/trip-records/search?${queryParams}`
        fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((r)=>console.log(r.json()))
    }, []) */

    return (
        <HomeComponent />
    )
}
