import React, { FC } from "react";
import Pagination from "./Pagination";
import Data from "./Data";
import Find from "./Find";
interface ITableProProps {
    /** 类名 */
    className?: string;
    /** 自定义高度 */
    height?: number;
    /** 外层Dom */
    rootDom?: HTMLElement | null;
    /** 监听Dom 元素高度 */
    onResize?: (rezise: Resize) => void;
}
export declare type Resize = {
    rootHeight: number;
    tableProHeight: number;
    findHeight: number;
    dataHeight: number;
    paginationHeight: number;
};
declare type ITableProStatic = {
    Data: typeof Data;
    Find: typeof Find;
    Pagination: typeof Pagination;
};
/** 静态 - 组件参数 */
export declare type StaticCompProps = {
    className?: string;
    style?: React.CSSProperties;
};
declare const TablePro: FC<ITableProProps> & ITableProStatic;
export default TablePro;
