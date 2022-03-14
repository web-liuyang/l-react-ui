import { ModalFuncProps } from "antd";
import { ModalFunc } from "antd/lib/modal/confirm";
import "./index.less";
declare type Return = ReturnType<ModalFunc>;
declare const Toast: {
    info: (props: ModalFuncProps) => Return;
    success: (props: ModalFuncProps) => Return;
    error: (props: ModalFuncProps) => Return;
    warning: (props: ModalFuncProps) => Return;
    confirm: (props: ModalFuncProps) => Return;
    destroyAll: () => void;
};
export default Toast;
