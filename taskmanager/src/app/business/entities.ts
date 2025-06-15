export enum Priority {
  HIGH = "Alta",
  MEDIUM = "Media",
  LOW = "Baja"
}

export interface TaskUser {
  id: number;
  name: string;
  priority: Priority;
  description: string;
  done: boolean;
}

