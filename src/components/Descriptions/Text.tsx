import React, { FC, useMemo } from "react";
import { Divider } from "antd";
import classnames from "classnames";

type DataChild = {
  name: string | number;
  value?: string | number;
  visible?: Data["visible"];
  className?: Data["className"];
  hint?: string | number | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
  render?: (item: DataChild) => JSX.Element;
};

export type Data = {
  /** 是否显示 */
  visible?: boolean;
  /** 间隔 */
  divider?: boolean;
  /** class */
  className?: string;
  /** key */
  key?: string | number;
  /** 标题 */
  title: string | number;
  /** 子数据 */
  child?: DataChild[];
  /** 排列方式 */
  direction?: "horizontal" | "vertical";
  /** 自定义render */
  render?: (item?: DataChild[]) => JSX.Element;
};

interface IProps {
  data: Data[];
}

type IPropsContent = {
  data: DataChild[];
} & Required<Pick<Data, "direction">>;

const DEFAULT = {
  DIRECTION: "horizontal" as NonNullable<Data["direction"]>,
  VISIBLE: true,
};

const Content: FC<IPropsContent> = props => {
  const { data, direction } = props;

  const Comp = useMemo(() => {
    switch (direction) {
      case "horizontal":
        return (
          <div className="flex-b-between flex-wrap">
            {data.map(({ visible, name, render, value, hint, className }, index, arr) => {
              visible === undefined && (visible = DEFAULT.VISIBLE);
              if (visible) {
                return (
                  <div className="mb-16 w-50" key={name}>
                    <div className={classnames(["flex-s-start", className])}>
                      <div className="color-999999">{name}</div>
                      <div>{render ? render(arr[index]) : value}</div>
                    </div>
                    {hint && typeof hint === "function" ? hint(arr[index]) : hint}
                  </div>
                );
              }
            })}
          </div>
        );

      case "vertical":
        return (
          <div>
            {data.map(({ name, value, visible, render, className }, index, arr) => {
              visible === undefined && (visible = DEFAULT.VISIBLE);
              if (visible) {
                return (
                  <div className={classnames(["flex-c-start mb-16", className])} key={name}>
                    <div className="color-999999">{name}</div>
                    <div>{render ? render(arr[index]) : value}</div>
                  </div>
                );
              }
            })}
          </div>
        );

      default:
        return <></>;
    }
  }, [direction, data]);

  return Comp;
};

const Text: FC<IProps> = props => {
  const { data } = props;

  return (
    <>
      {data.map(
        ({
          key,
          title,
          child,
          render,
          divider,
          direction,
          className,
          visible = DEFAULT.VISIBLE,
        }) => {
          visible === undefined && (visible = DEFAULT.VISIBLE);

          if (visible) {
            return (
              <div key={key || title} className={classnames([className])}>
                <div>
                  <div className="mb-16 f16 f-600">{title}</div>
                  {(render && render(child)) ||
                    (child && <Content direction={direction || DEFAULT.DIRECTION} data={child} />)}
                </div>
                {divider && <Divider key={key || title} />}
              </div>
            );
          }
        }
      )}
    </>
  );
};

export default Text;
