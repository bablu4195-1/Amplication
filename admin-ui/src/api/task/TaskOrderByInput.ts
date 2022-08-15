import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  estimation?: SortOrder;
  id?: SortOrder;
  project?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
