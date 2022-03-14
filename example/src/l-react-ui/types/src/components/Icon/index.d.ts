import React, { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
declare const MyIcon: React.SFC<import("@ant-design/icons/lib/components/IconFont").IconFontProps>;
declare type IIconProps = GetFuncPropsType<typeof MyIcon>;
interface IProps extends IIconProps {
    /** true 选中 false 未选中 */
    select?: boolean;
}
declare const Icon: FC<IProps>;
export default Icon;
