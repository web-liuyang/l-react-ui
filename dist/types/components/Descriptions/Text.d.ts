import { FC } from "react";
declare type DataChild = {
    name: string | number;
    value?: string | number;
    visible?: Data["visible"];
    className?: Data["className"];
    hint?: string | number | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
    render?: (item: DataChild) => JSX.Element;
};
export declare type Data = {
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
declare const Text: FC<IProps>;
export default Text;
