import React, { FC } from 'react';
import { GetFuncPropsType } from '../../constants/interface';
import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2468423_t09ejzh7iea.js', // 在 iconfont.cn 上生成
});

type IIconProps = GetFuncPropsType<typeof MyIcon>;

interface IProps extends IIconProps {
  /** 1选中 0未选中 */
  select?: boolean;
}

const selectStyle = { color: '#120338' };
const noSelectStyle = { color: '#666' };

const Icon: FC<IProps> = props => {
  const { select = false, ...iconProps } = props;
  return <MyIcon style={select ? selectStyle : noSelectStyle} {...iconProps} />;
};

export default Icon;
