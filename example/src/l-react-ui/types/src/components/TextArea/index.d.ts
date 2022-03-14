import { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Input } from "antd";
interface ITextAreaProps extends GetFuncPropsType<typeof Input.TextArea> {
    /** 输入框 label */
    label?: string;
    /** 是否必填 */
    require?: boolean;
}
declare const TextArea: FC<ITextAreaProps>;
export default TextArea;
