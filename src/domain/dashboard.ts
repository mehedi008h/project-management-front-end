import { Task } from "./task";

export interface DashboardTask {
    completedTasks: Task[];
    incompletedTask: Task[];
    overDueTasks: Task[];
    tasks: Task[];
}
