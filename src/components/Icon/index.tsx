import React, { FC } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2468423_t09ejzh7iea.js', // 在 iconfont.cn 上生成
});

type IIconProps = Parameters<typeof MyIcon>[0];

interface IProps extends IIconProps {
  /** 1选中 0未选中 */
  select?: number;
}

const selectStyle = { color: '#120338' };
const noSelectStyle = { color: '#666' };

const Icon: FC<IProps> = props => {
  const { select = 0 } = props;
  return <MyIcon style={select ? selectStyle : noSelectStyle} {...props} />;
};

export default Icon;
