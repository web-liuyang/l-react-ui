import { FC } from "react";
import { Radio as ARadio } from "antd";
import { GetFuncPropsType } from "../../constants/interface";
import "./index.less";
declare type IGroupRadio = typeof ARadio.Group;
declare type IRadio = GetFuncPropsType<typeof ARadio>;
declare type IStatic = {
    Group: IGroupRadio;
};
declare const Radio: FC<IRadio> & IStatic;
export default Radio;
