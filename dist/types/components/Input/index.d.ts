import React, { FC } from "react";
import Password from "./Password";
import type { GroupProps } from "antd/lib/input/Group";
import { Input as AInput } from "antd";
import "./index.less";
declare type IInputProps = ConstructorParameters<typeof AInput>[0];
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
interface Static {
    Group: React.FC<GroupProps>;
    Password: typeof Password;
}
declare const Input: FC<IProps> & Static;
export default Input;
