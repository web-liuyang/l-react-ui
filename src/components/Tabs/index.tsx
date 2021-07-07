import React, { FC } from "react";
import classnames from "classnames";
import { Tabs as ATabs } from "antd";
import { GetFuncPropsType } from "../../constants/interface";

import "./index.less";

type IProps = GetFuncPropsType<typeof ATabs>;

type Static = {
  TabPane: typeof ATabs["TabPane"];
};

/** TabBar */
const RenderTabBar = (props: any, DefaultTabBar: React.ComponentType<{}>, tabProps: IProps) => {
  return <DefaultTabBar className={tabProps.type} {...props} />;
};

const DEFAULT = {
  RenderTabBar,
  /** tabs 之间的间隙 */
  TABBAR_GUTTER: 4,
};

const Tabs: FC<IProps> & Static = props => {
  const { className, renderTabBar = DEFAULT.RenderTabBar, ...tabsProps } = props;
  return (
    <ATabs
      renderTabBar={(props, DefaultTabBar) =>
        renderTabBar(props, DefaultTabBar, { className, ...tabsProps })
      }
      tabBarGutter={DEFAULT.TABBAR_GUTTER}
      className={classnames(["l-tabs", className])}
      {...tabsProps}
    />
  );
};

Tabs.TabPane = ATabs.TabPane;

export default Tabs;
