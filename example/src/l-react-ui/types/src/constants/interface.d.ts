/** 获取函数的Props类型 */
export declare type GetFuncPropsType<T extends (...args: any[]) => void> = Parameters<T>[0];
