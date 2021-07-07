import React, { FC, useMemo } from "react";
import { Divider } from "antd";

type DataChild = {
  name: string | number;
  value?: string | number;
  hint?: string | number | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
  render?: (item: DataChild) => JSX.Element;
};

export type Data = {
  key?: string | number;
  title: string | number;
  divider?: boolean;
  child?: DataChild[];
  direction?: "horizontal" | "vertical";
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
};

const Content: FC<IPropsContent> = props => {
  const { data, direction } = props;

  const Comp = useMemo(() => {
    switch (direction) {
      case "horizontal":
        return (
          <div className="flex-b-between flex-wrap">
            {data.map(item => {
              return (
                <div className="mb-16 w-50" key={item.name}>
                  <div className="flex-s-start">
                    <div className="color-999999">{item.name}</div>
                    <div>{item.render ? item.render(item) : item.value}</div>
                  </div>
                  {item.hint && typeof item.hint === "function" ? item.hint(item) : item.hint}
                </div>
              );
            })}
          </div>
        );

      case "vertical":
        return (
          <div>
            {data.map(item => {
              return (
                <div className="flex-c-start mb-16" key={item.name}>
                  <div className="color-999999">{item.name}</div>
                  <div>{item.render ? item.render(item) : item.value}</div>
                </div>
              );
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
      {data.map(({ key, title, child, render, divider, direction }) => {
        return (
          <div key={key || title}>
            <div>
              <div className="mb-16 f16 f-600">{title}</div>
              {(render && render(child)) ||
                (child && <Content direction={direction || DEFAULT.DIRECTION} data={child} />)}
            </div>
            {divider && <Divider key={key || title} />}
          </div>
        );
      })}
    </>
  );
};

export default Text;
