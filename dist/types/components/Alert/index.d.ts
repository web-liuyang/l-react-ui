import { FC } from 'react';
import { Alert as AAlert } from 'antd';
import './index.less';
declare type IAlertProps = Parameters<typeof AAlert>[0];
declare type IProps = IAlertProps;
declare const Alert: FC<IProps>;
export default Alert;
