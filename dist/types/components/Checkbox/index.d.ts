import { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Checkbox as ACheckbox } from "antd";
import "./index.less";
declare type CheckboxPorps = GetFuncPropsType<typeof ACheckbox>;
declare type IProps = CheckboxPorps;
declare const Checkbox: FC<IProps>;
export default Checkbox;
