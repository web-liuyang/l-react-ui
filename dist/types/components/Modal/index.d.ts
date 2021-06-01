import { FC } from 'react';
import { Modal as AModal } from 'antd';
import { IMethodFunc } from './Method';
import ModalHeader from './ModalHeader';
import './index.less';
declare type IModalProps = Parameters<typeof AModal>[0];
declare type IProps = IModalProps;
declare type IStaticMethods = {
    method: IMethodFunc;
};
declare const Modal: FC<IProps> & IStaticMethods;
export { ModalHeader };
export default Modal;
