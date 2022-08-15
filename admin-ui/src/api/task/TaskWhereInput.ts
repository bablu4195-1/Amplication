import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  estimation?: StringNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringNullableFilter;
};
