import { IColumns } from "../../components/tables/TableComponent.data";

export interface IPatients {
    full_name: string;
    id_number: number;
    phone_number: string;
    mhistory_id: string;
}

export const patientsColumns: IColumns<IPatients>[] = [
    {
        header: "NOMBRE Y APELLIDO",
        column: (data) => data.full_name,
        type: "text",
        className: [''],
        iconsAction: []
    },
    {
        header: "CÉDULA DE IDENTIDAD",
        column: (data) => data.id_number.toString(),
        type: "text",
        className: [''],
        iconsAction: []
    },
    {
        header: "NÚMERO DE TELEFONO",
        column: (data) => data.phone_number.toString(),
        type: "text",
        className: [''],
        iconsAction: []
    },
    {
        header: "CÓDIGO DE HISTORIA",
        column: (data) => data.mhistory_id.toString(),
        type: "text",
        className: [''],
        iconsAction: []
    },
    {
        header: "OPCIONES",
        column: () => "",
        type: "icon",
        iconsAction: ['agregar', 'Info','Editar','Borrar'],
        icons: [
            'fa-solid fa-hospital-user',
            'fa-solid fa-circle-info',
            'fa-solid fa-pen-to-square',
            'fa-solid fa-trash',
        ],
        className: [
            'add_button',
            'info_button',
            'edit_button',
            'delete_button',
        ]
    }
];

export const dataPatients: IPatients[] = [
    {
        full_name: "HECTOR NAVARRO",
        id_number: 27822521,
        phone_number: "0424-6034854",
        mhistory_id: "000000000001"
    },
];