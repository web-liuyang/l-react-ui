import React, { FC } from 'react';
declare const MyIcon: React.SFC<import("@ant-design/icons/lib/components/IconFont").IconFontProps>;
declare type IIconProps = Parameters<typeof MyIcon>[0];
interface IProps extends IIconProps {
    /** 1选中 0未选中 */
    select?: number;
}
declare const Icon: FC<IProps>;
export default Icon;
