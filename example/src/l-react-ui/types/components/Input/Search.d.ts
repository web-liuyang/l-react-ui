import React, { FC } from "react";
import { SearchProps } from "antd/lib/input/Search";
import "./index.less";
declare type IInputProps = SearchProps & React.RefAttributes<any>;
interface IProps extends IInputProps {
    /** 错误消息 */
    errorMessage?: string;
    /** 正则表达式 */
    valid?: RegExp | RegExp[] | string;
    /** 是否合法 */
    isValid?: boolean;
    /** 是否合法监听 */
    onValid?: (isValid: boolean) => void;
}
declare const Input: FC<IProps>;
export default Input;
