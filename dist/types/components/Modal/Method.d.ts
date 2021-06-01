import { Modal, ModalFuncProps } from 'antd';
import '../Button/index.less';
declare type IModalMethods = ModalFuncProps['type'];
declare type IModalFuncReturn = ReturnType<typeof Modal.info>;
export declare type IMethodFunc = (name: NonNullable<IModalMethods>, props: ModalFuncProps) => IModalFuncReturn;
declare const Method: IMethodFunc;
export default Method;
