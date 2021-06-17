import React, { FC } from 'react';
import classnames from 'classnames';
import { Select as ASelect } from 'antd';

import { GetFuncPropsType } from '../../constants/interface';

import './index.less';

type IProps = GetFuncPropsType<typeof ASelect>;

interface Static {
  Option: typeof ASelect.Option;
}

const Select: FC<IProps> & Static = props => {
  const { dropdownClassName, ...selectProps } = props;
  return (
    <div className="l-select">
      <ASelect
        dropdownClassName={classnames(['dropdown-container', dropdownClassName])}
        {...selectProps}
      />
    </div>
  );
};

Select.Option = ASelect.Option;

export default Select;
