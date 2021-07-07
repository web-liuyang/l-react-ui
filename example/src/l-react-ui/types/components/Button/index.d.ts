import React from 'react';
import { ButtonProps } from 'antd';
import './index.less';
declare type IButtonProps = ButtonProps & React.RefAttributes<HTMLElement>;
export declare type IButtonClickType = React.MouseEvent<HTMLElement, MouseEvent> & {
    handleCountDown: () => void;
};
interface IProps extends IButtonProps {
    mode?: 'default' | 'theme' | 'disabled';
    size?: 'large' | 'middle' | 'small';
    initTime?: number;
    currentTime?: number;
    onEnd?: () => void;
    onClick?: (e: IButtonClickType) => void;
    onChangeTime?: (time: number) => void;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;
