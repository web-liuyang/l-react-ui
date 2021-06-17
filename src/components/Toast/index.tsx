// import React from 'react';
import classnames from 'classnames';
import { Modal, ModalFuncProps } from 'antd';
import { ModalFunc } from 'antd/lib/modal/confirm';

import './index.less';

enum DEFAULT {
  CANCEL_TEXT = '取消',
  OK_TEXT = '确认',
}

type Return = ReturnType<ModalFunc>;

const info = (props: ModalFuncProps): Return => {
  return Modal.info({
    cancelText: DEFAULT.CANCEL_TEXT,
    okText: DEFAULT.OK_TEXT,
    ...props,
    className: classnames(['l-toast', props.className]),
  });
};

const success = (props: ModalFuncProps): Return => {
  return Modal.success({
    cancelText: DEFAULT.CANCEL_TEXT,
    okText: DEFAULT.OK_TEXT,
    ...props,
    className: classnames(['l-toast', props.className]),
  });
};

const error = (props: ModalFuncProps): Return => {
  return Modal.error({
    cancelText: DEFAULT.CANCEL_TEXT,
    okText: DEFAULT.OK_TEXT,
    ...props,
    className: classnames(['l-toast', props.className]),
  });
};

const warning = (props: ModalFuncProps): Return => {
  return Modal.warning({
    cancelText: DEFAULT.CANCEL_TEXT,
    okText: DEFAULT.OK_TEXT,
    ...props,
    className: classnames(['l-toast', props.className]),
  });
};

const confirm = (props: ModalFuncProps): Return => {
  return Modal.confirm({
    cancelText: DEFAULT.CANCEL_TEXT,
    okText: DEFAULT.OK_TEXT,
    ...props,
    className: classnames(['l-toast', props.className]),
  });
};

const Toast = {
  info,
  success,
  error,
  warning,
  confirm,
};

export default Toast;
