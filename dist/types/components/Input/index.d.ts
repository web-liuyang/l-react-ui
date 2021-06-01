import React from 'react';
import { Input as AInput } from 'antd';
import './index.less';
declare type IInputProps = ConstructorParameters<typeof AInput>[0];
interface IProps extends IInputProps {
    /** 错误消息 */
    errorMessage?: string;
    /** 正则表达式 */
    valid?: RegExp | RegExp[];
    /** 是否合法 */
    isValid?: boolean;
    /** 是否合法监听 */
    onValid?: (isValid: boolean) => void;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;
