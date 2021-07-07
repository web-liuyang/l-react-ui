import React, { FC } from "react";
import { Switch as ASwitch } from "antd";
import { GetFuncPropsType } from "../../constants/interface";

type IProps = GetFuncPropsType<typeof ASwitch>;

const Switch: FC<IProps> = props => {
  return (
    <div className="l-switch">
      <ASwitch {...props} />
    </div>
  );
};

export default Switch;
