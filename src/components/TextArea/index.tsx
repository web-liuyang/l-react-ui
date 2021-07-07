import React, { FC } from "react";
import classnames from "classnames";
import { GetFuncPropsType } from "../../constants/interface";
import { Input } from "antd";

type IProps = GetFuncPropsType<typeof Input.TextArea>;

const TextArea: FC<IProps> = props => {
  const { className, ...textAreaProps } = props;

  return <Input.TextArea className={classnames(["l-textarea", className])} {...textAreaProps} />;
};

export default TextArea;
