import { CSSProperties, FC, ReactText } from "react";
declare type DataChild = {
    name: ReactText;
    value?: ReactText;
    /** 是否显示 */
    visible?: Data["visible"];
    /** class */
    className?: Data["className"];
    /** style */
    style?: Data["style"];
    /** 提示 */
    hint?: ReactText | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
    /** 自定义render */
    render?: (item: DataChild) => JSX.Element;
};
export declare type Data = {
    /** 是否显示 */
    visible?: boolean;
    /** 间隔 */
    divider?: boolean;
    /** class */
    className?: string;
    /** style */
    style?: CSSProperties;
    /** key */
    key?: ReactText;
    /** 标题 */
    title: ReactText;
    /** 子数据 */
    child?: DataChild[];
    /** 排列方式 */
    direction?: "horizontal" | "vertical";
    /** 自定义render */
    render?: (item?: DataChild[]) => JSX.Element;
};
interface ITextProps {
    data: Data[];
}
declare const Text: FC<ITextProps>;
export default Text;
