export interface Project {
    _id: string;
    title: string;
    projectIdentifier: string;
    description: string;
    startDate: string;
    endDate: string;
    photo: {
        publicId: string;
        url: string;
    };
    projectLeader: string;
    tags: string[];
    developers: string[];
    tasks: string[];
    status: string;
    createdAt: string;
}
