import { IColumns } from "../../components/tables/TableComponent.data";

export interface IDiagnosis {
    full_name: string;
    mhistory_id: string;
}

export const diagnosisColums: IColumns<IDiagnosis>[] = [
    {
        header: "NOMBRE Y APELLIDO",
        column: (data) => data.full_name,
        type: "text",
        className: [''],
    },
    {
        header: "CODIGO DE HISTORIA",
        column: (data) => data.mhistory_id.toString(),
        type: "text",
        className: [''],
    },
    {
        header: "DIAGNOSTICO",
        column: () => "",
        type: 'icon',
        iconsAction: ['ver diagnostico'],
        icons: ['fa-solid fa-eye'],
        className: ['info_button'],
    },
    {
        header: "OPCIONES",
        column: () => "",
        type: 'icon',
        iconsAction: ['Editar', 'Borrar'],
        icons: [
            'fa-solid fa-pen-to-square',
            'fa-solid fa-trash',
        ],
        className: [
            'edit_button',
            'delete_button',
        ],
    }

];

export const dataDiagnosis: IDiagnosis[] = [
    {
        full_name: "HECTOR NAVARRO",
        mhistory_id: "000000000001",
    },
];