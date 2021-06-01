import React, { FC, useState } from 'react';
import { Pagination as APagination, PaginationProps } from 'antd';
import classnames from 'classnames';

import './index.less';

type IProps = PaginationProps;

const Pagination: FC<IProps> = props => {
  const { className, ...paginationProps } = props;
  return (
    <div className={classnames(['l-pagination', className])}>
      <APagination className="pagination-box" {...paginationProps} />
    </div>
  );
};

export default Pagination;
