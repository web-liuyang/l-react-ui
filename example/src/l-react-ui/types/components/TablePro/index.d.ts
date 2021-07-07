import { FC } from 'react';
import Data from './Data';
import Find from './Find';
import Pagination from './Pagination';
interface IProps {
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
declare type Static = {
    Data: typeof Data;
    Find: typeof Find;
    Pagination: typeof Pagination;
};
/** 静态 - 组件参数 */
export declare type StaticCompProps = {
    className?: string;
};
declare const TablePro: FC<IProps> & Static;
export default TablePro;
