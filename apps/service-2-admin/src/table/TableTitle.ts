import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "test_2";

export const TableTitle = (record: TTable): string => {
  return record.test_2 || String(record.id);
};
