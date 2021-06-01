import React, { FC } from 'react';

import { Select as ASelect } from 'antd';

import { GetFuncPropsType } from '../../constants/interface';

import './index.less';

type IProps = GetFuncPropsType<typeof ASelect>

interface Static {
  Option: typeof ASelect.Option;
}

const Select: FC<IProps> & Static = props => {
  return (
    <div className="l-select">
      <ASelect {...props} />
    </div>
  );
};

Select.Option = ASelect.Option;

export default Select;
