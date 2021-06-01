import React from 'react';
import './index.less';
declare type ShowToastReturnType = ReturnType<typeof showToast>;
interface IProps {
    content?: string;
    icon?: string;
    duration?: number;
    mask?: boolean;
    customize?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    onClose?: () => void;
}
declare const showToast: (props: IProps) => {
    close: () => void;
};
declare const _default: {
    info({ content, icon, duration, mask, onClose }: IProps): ShowToastReturnType;
    warn({ content, icon, duration, mask, onClose, }: IProps): ShowToastReturnType;
    error({ content, icon, duration, mask, onClose, }: IProps): ShowToastReturnType;
    success({ content, icon, duration, mask, onClose, }: IProps): ShowToastReturnType;
    loading({ content, icon, duration, mask, onClose, }: IProps): ShowToastReturnType;
    customize({ customize, duration, mask, onClose }: IProps): ShowToastReturnType;
};
export default _default;
