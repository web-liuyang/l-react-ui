/// <reference types="react" />
import { TableProps } from "antd/lib/table";
import "./index.less";
declare const Table: <T extends object = any>(props: TableProps<T>) => JSX.Element;
export default Table;
