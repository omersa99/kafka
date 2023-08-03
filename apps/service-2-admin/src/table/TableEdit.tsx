import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TableEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="test 2" source="test_2" />
      </SimpleForm>
    </Edit>
  );
};
