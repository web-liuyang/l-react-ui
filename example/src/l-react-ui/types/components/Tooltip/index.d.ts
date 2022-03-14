import { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Tooltip as ATooltip } from "antd";
declare type IProps = GetFuncPropsType<typeof ATooltip>;
declare const Tooltip: FC<IProps>;
export default Tooltip;
