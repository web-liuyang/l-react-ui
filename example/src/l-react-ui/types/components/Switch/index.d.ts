import { FC } from 'react';
import { Switch as ASwitch } from 'antd';
import { GetFuncPropsType } from '../../constants/interface';
declare type IProps = GetFuncPropsType<typeof ASwitch>;
declare const Switch: FC<IProps>;
export default Switch;
