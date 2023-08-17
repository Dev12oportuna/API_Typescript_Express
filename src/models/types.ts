export interface Customer {
    email: string;
    name: string;
    active: boolean;
}

export interface customerEspecial extends Customer {
    document: number
}