import { FC } from "react";
declare type DataChild = {
    name: string | number;
    visible?: Data["visible"];
    value?: string | number;
    hint?: string | number | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
    render?: (item: DataChild) => JSX.Element;
};
export declare type Data = {
    /** key */
    key?: string | number;
    /** 标题 */
    title: string | number;
    /** 间隔 */
    divider?: boolean;
    /** 是否显示 */
    visible?: boolean;
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
declare const Text: FC<IProps>;
export default Text;
