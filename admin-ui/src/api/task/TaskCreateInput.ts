export type TaskCreateInput = {
  assignedTo?: string | null;
  estimation?: string | null;
  project?: string | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string | null;
};
