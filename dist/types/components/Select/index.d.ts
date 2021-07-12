import { FC } from "react";
import { Select as ASelect } from "antd";
import { GetFuncPropsType } from "../../constants/interface";
import "./index.less";
declare type IProps = GetFuncPropsType<typeof ASelect>;
interface Static {
    Option: typeof ASelect.Option;
}
declare const Select: FC<IProps> & Static;
export default Select;
