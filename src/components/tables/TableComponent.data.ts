/* eslint-disable @typescript-eslint/no-explicit-any */

export type TypesColumns = "text" | "icon";

export interface IColumns<T> {
    header: string;
    column: (data: T) => string;
    type: TypesColumns;
    iconsAction?: string[];
    icons?: string[];
    className: string[];
}

export interface ITable {
    columns: IColumns<any>[];
    dataTable: any[];
    returndata: (icon: string, data: any) => void;
}