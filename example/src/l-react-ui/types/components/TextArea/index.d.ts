import { FC } from 'react';
import { GetFuncPropsType } from '../../constants/interface';
import { Input } from 'antd';
declare type IProps = GetFuncPropsType<typeof Input.TextArea>;
declare const TextArea: FC<IProps>;
export default TextArea;
