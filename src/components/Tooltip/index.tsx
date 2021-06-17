import React, { FC } from 'react';
import lessVariable from '../../style/variable.less';
import { GetFuncPropsType } from '../../constants/interface';
import { Tooltip as ATooltip } from 'antd';

type IProps = GetFuncPropsType<typeof ATooltip>;

const DEFAULT = {
  COLOR: lessVariable.themeColorButton,
};

const Tooltip: FC<IProps> = props => {
  const { color = DEFAULT.COLOR, ...tooltipProps } = props;

  return (
    <ATooltip color={color} {...tooltipProps}>
      {props.children}
    </ATooltip>
  );
};

export default Tooltip;
