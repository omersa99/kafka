import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "test_1";

export const TableTitle = (record: TTable): string => {
  return record.test_1 || String(record.id);
};
