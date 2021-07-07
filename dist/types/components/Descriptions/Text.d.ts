import { FC } from "react";
declare type DataChild = {
    name: string | number;
    value?: string | number;
    hint?: string | number | boolean | JSX.Element | ((item: DataChild) => JSX.Element);
    render?: (item: DataChild) => JSX.Element;
};
export declare type Data = {
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
declare const Text: FC<IProps>;
export default Text;
