import React, { FC } from 'react';
import classnames from 'classnames';
import { Pagination as APagination, PaginationProps } from 'antd';

import './index.less';

type IProps = PaginationProps;

const DEFAULT = {
  PAGE_SIZE_OPTIONS: ['10', '30', '50', '100'],
};

interface ShowTotalProps {
  total: number;
  current: number;
  pageSize: number;
}

/** 总数量 */
const ShowTotal: FC<ShowTotalProps> = props => {
  const { total, current, pageSize } = props;

  return (
    <span className="f14 color-999999">
      总共{total}条数据 第{current} /{Math.ceil(total / pageSize)} 页
    </span>
  );
};

const Pagination: FC<IProps> = props => {
  const {
    className,
    pageSizeOptions = DEFAULT.PAGE_SIZE_OPTIONS,
    current = 0,
    pageSize = 0,
    total = 0,
    showTotal = () => <ShowTotal total={total} current={current} pageSize={pageSize} />,
    ...paginationProps
  } = props;

  return (
    <div className={classnames(['l-pagination', className])}>
      <APagination
        className="flex-c-end pagination-box"
        total={total}
        current={current}
        pageSize={pageSize}
        showTotal={showTotal}
        pageSizeOptions={pageSizeOptions}
        {...paginationProps}
      />
    </div>
  );
};

export default Pagination;
