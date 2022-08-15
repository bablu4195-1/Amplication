export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  estimation: string | null;
  id: string;
  project: string | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string | null;
  updatedAt: Date;
};
