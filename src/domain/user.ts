export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    description: string;
    diamond: number;
    photo: {
        publicId: string;
        url: string;
    };
    work: string;
    active: true;
    invitations: string[];
    teamMates: string[];
    createdAt: string;
}