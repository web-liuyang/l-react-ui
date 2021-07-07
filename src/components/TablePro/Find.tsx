import React, { FC } from "react";
import classnames from "classnames";
import { StaticCompProps } from ".";

const Find: FC<StaticCompProps> = props => {
  const { className } = props;

  return (
    <div className={classnames(["table-pro-find", className])}>
      <div>{props.children}</div>
    </div>
  );
};

export default Find;
