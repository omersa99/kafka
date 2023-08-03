import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="test 2" source="test_2" />
      </SimpleForm>
    </Create>
  );
};
