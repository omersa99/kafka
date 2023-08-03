import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TableEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="test 1" source="test_1" />
      </SimpleForm>
    </Edit>
  );
};
