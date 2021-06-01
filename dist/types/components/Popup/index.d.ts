import React from 'react';
import { ModalHeader } from '../Modal';
import './index.less';
declare type IModalHeaderProps = Parameters<typeof ModalHeader>[0];
interface IProps extends IModalHeaderProps {
    /** 是否显示 */
    show?: boolean;
    /** 是否需要头部 */
    isHead?: boolean;
    className?: string;
    children?: React.ReactNode;
    /** 点击遮罩层 */
    onClickShade?: () => void;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;
