import { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Checkbox as ACheckbox } from "antd";
import "./index.less";
declare type ICheckboxPorps = GetFuncPropsType<typeof ACheckbox>;
declare type ICheckboxProps = ICheckboxPorps;
declare type ICheckboxStatic = {
    Group: typeof ACheckbox.Group;
};
declare const Checkbox: FC<ICheckboxProps> & ICheckboxStatic;
export default Checkbox;
