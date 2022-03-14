import { FC } from "react";
import { Switch as ASwitch } from "antd";
import { GetFuncPropsType } from "../../constants/interface";
interface ISwitchProps extends GetFuncPropsType<typeof ASwitch> {
    label?: string;
}
declare const Switch: FC<ISwitchProps>;
export default Switch;
