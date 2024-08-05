export interface ICards {
    title: string;
    text: string;
    redirecTo: string;
    icon: string;
}

export const cards: ICards[] = [
    {
        title: "10",
        text: 'Pacientes',
        redirecTo: '/pacientes',
        icon: 'fa-solid fa-person-half-dress',
    },
    {
        title: "5",
        text: 'Medicos',
        redirecTo: '/doctores',
        icon: 'fa-solid fa-user-doctor',
    },
    {
        title: "5",
        text: 'Usuarios',
        redirecTo: '/usuarios',
        icon: 'fa-solid fa-user',
    },
];