import { IColumns } from "../../components/tables/TableComponent.data";

export interface IMedHistory {
    full_name: string;
    id_number: number;
    mhistory_id: string;
}

export const medhistoryColumns: IColumns<IMedHistory>[] = [
    {
        header: "NOMBRE Y APELLIDO",
        column: (data) => data.full_name,
        type: "text",
        className: [''],
        iconsAction: [],
    },
    {
        header: "CÉDULA DE IDENTIDAD",
        column: (data) => data.id_number,
        type: "text",
        className: [''],
        iconsAction: [],
    },
    {
        header: "CÓDIGO DE HISTORIA",
        column: (data) => data.mhistory_id,
        type: "text",
        className: [''],
        iconsAction: [],
    },
    {
        header: "OPCIONES",
        column: () => "",
        type: "icon",
        iconsAction: ['ver', 'editar', 'borrar'],
        icons: [
            'fa-solid fa-circle-info',
            'fa-solid fa-pen-to-square',
            'fa-solid fa-trash',
        ],
        className: [
            'info_button',
            'edit_button',
            'delete_button',
        ],
    }
]

export const dataMedHistory: IMedHistory[] = [
    {
        full_name: "HECTOR NAVARRO",
        id_number: 27822521,
        mhistory_id: "000000000001"
    },
];