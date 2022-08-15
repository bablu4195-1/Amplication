import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Assigned To" source="assignedTo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Estimation" source="estimation" />
        <TextField label="ID" source="id" />
        <TextField label="Project" source="project" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
