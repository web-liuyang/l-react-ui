import { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Modal as AModal } from "antd";
import "./index.less";
declare type IModalProps = GetFuncPropsType<typeof AModal>;
declare const Modal: FC<IModalProps>;
export default Modal;
