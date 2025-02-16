export const pathRoutes = {
    home: {
        path: "/",
        name: "HOME",
        isLogInRequired: true
    },
    login: {
        path: "/login",
        name: "LOGIN",
        isLogInRequired: false
    },
    signup: {
        path: "/signup",
        name: "SIGNUP",
        isLogInRequired: false
    },
    createTrip: {
        path: "/create-trip-record",
        name: "CREATE TRIP RECORD",
        isLogInRequired: true
    },
    modifyTrip: {
        path: "/modify-trip-record",
        name: "MODIFY TRIP RECORD",
        isLogInRequired: true
    },    
    deleteTrip: {
        path: "/delete-trip-record",
        name: "DELETE TRIP RECORD",
        isLogInRequired: true
    },    
    showTrips: {
        path: "/show-trip-records",
        name: "SHOW TRIP RECORDS",
        isLogInRequired: true
    },
    searchTrips: {
        path: "/search-trip-records",
        name: "SEARCH TRIP RECORDS",
        isLogInRequired: true
    },
};