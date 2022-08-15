import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NarachiCorporationWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  Mining?: StringNullableFilter;
  owner?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
