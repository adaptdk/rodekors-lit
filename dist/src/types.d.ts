export interface Department {
    rkid: number;
    name: string;
    lat: number;
    lng: number;
    board: BoardMember[];
}
export interface BoardMember {
    rkid: number;
    name: string;
    email: null | string;
    phone: null | string;
    positionId: string;
    positionName: string;
}
