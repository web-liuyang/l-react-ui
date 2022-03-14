import { FC } from "react";
import { DatePicker as ADatePicker } from "antd";
import "./index.less";
declare type IProps = ConstructorParameters<typeof ADatePicker>[0];
declare type Static = Pick<typeof ADatePicker, "WeekPicker" | "MonthPicker" | "YearPicker" | "RangePicker" | "TimePicker" | "QuarterPicker">;
declare const DatePicker: FC<IProps> & Static;
export default DatePicker;
