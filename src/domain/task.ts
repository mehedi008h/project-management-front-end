export interface Task {
    _id: string;
    title: string;
    taskIdentifier: string;
    description: string;
    startDate: string;
    endDate: string;
    priority: string;
    status: string;
    tags: string[];
    projectIdentifier: string;
    developer: string;
    assigned: string;
    createdAt: string;
}
