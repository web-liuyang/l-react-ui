import React, { FC } from "react";
import classnames from "classnames";
import { StaticCompProps } from ".";

const Data: FC<StaticCompProps> = props => {
  const { className } = props;

  return (
    <div className={classnames(["table-pro-data", className])}>
      <div>{props.children}</div>
    </div>
  );
};

export default Data;
