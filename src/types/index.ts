export interface TransportMode {
    mode: string;
    emissionFactor: number;
    code: number;
}

export interface TransportModes {
    transportModes: TransportMode[];
}

export interface SetIsLoggedInAction {
    type: string,
    payload: boolean | null
}

export interface SetTransportModesAction {
    type: string,
    payload: TransportMode[] | null
}

export interface FormData {
    startAddress: string;
    endAddress: string;
    transportMode: number;
    travelDate: string;
    distance: string;
    roundTrip: string;
}

export interface TripRecord extends FormData{
    _id?: string;
    employeeName: string;
}