import { FC } from "react";
import { Tabs as ATabs } from "antd";
import { GetFuncPropsType } from "../../constants/interface";
import "./index.less";
declare type TabsProps = GetFuncPropsType<typeof ATabs>;
declare type Static = {
    TabPane: typeof ATabs["TabPane"];
};
declare const Tabs: FC<TabsProps> & Static;
export default Tabs;
