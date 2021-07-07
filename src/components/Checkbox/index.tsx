import React, { FC } from "react";
import { GetFuncPropsType } from "../../constants/interface";
import { Checkbox as ACheckbox } from "antd";

import "./index.less";

type CheckboxPorps = GetFuncPropsType<typeof ACheckbox>;

type IProps = CheckboxPorps;

const Checkbox: FC<IProps> = props => {
  return (
    <div className="l-checkbox">
      <ACheckbox {...props} />
    </div>
  );
};

export default Checkbox;
