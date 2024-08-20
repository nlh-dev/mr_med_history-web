export interface ITableComponent {
    full_name: string;
    id_number: number;
    phone_number: string;
    mhistory_id: string;
    add_button: string;
    info_button: string;
    edit_button: string;
    delete_button: string;
}

export const tablecomponent: ITableComponent[] = [
    {
        full_name: 'HECTOR NAVARRO',
        id_number: 27822521,
        phone_number: '0424-6034854',
        mhistory_id: '000000000001',
        add_button: "fa-solid fa-file-medical",
        info_button: "fa-solid fa-circle-info",
        edit_button: "fa-solid fa-pen-to-square",
        delete_button: "fa-solid fa-trash",
    }
]