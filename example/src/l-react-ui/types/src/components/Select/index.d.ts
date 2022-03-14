import { FC } from "react";
import { Select as ASelect } from "antd";
import { GetFuncPropsType } from "../../constants/interface";
import "./index.less";
interface ISelectProps extends GetFuncPropsType<typeof ASelect> {
    /** label */
    label?: string;
    /** 是否必填 */
    require?: boolean;
}
interface ISelectStatic {
    Option: typeof ASelect.Option;
}
declare const Select: FC<ISelectProps> & ISelectStatic;
export default Select;
