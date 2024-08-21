export interface IPagButtons{
    actionButton: string;
    icon: string;
    text?: string;
}

export const PagButtons: IPagButtons[] =[
    {
        actionButton: "PAGINA PRINCIPAL",
        icon: "fa-solid fa-angles-left",
    },
    {
        actionButton: "PAGINA ANTERIOR",
        icon: "fa-solid fa-angle-left",
    },
    {
        actionButton: "PAGINA SIGUIENTE",
        icon: "fa-solid fa-angle-right",
    },
    {
        actionButton: "ÚLTIMA PAGINA",
        icon: "fa-solid fa-angles-right",
    },
]