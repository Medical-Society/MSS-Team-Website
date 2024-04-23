export interface IAdmin {
    name: string;
    email: string;
}

export interface IAuth {
    token: string;
    admin: IAdmin;
}
