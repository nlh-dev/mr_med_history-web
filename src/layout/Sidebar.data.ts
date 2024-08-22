export interface ISidebar {
    title: string;
    icon: string;
    redirecTo: string;
    type: string;
}

export const SidebarMenu: ISidebar[] = [
    {
        title: 'Añadir Paciente',
        redirecTo: '/pacientes/añadir',
        icon: 'fa-solid fa-circle-plus',
        type: 'link'
    },
    {
        title: 'Inicio',
        redirecTo: '/inicio',
        icon: 'fa-solid fa-house',
        type: 'link'
    },
    {
        title: 'Pacientes',
        redirecTo: '/pacientes',
        icon: 'fa-solid fa-person-half-dress',
        type: 'link'
    },
    {
        title: 'Historias Médicas',
        redirecTo: '/historias_medicas',
        icon: 'fa-solid fa-book-medical',
        type: 'link'
    },
    {
        title: 'Diagnostico',
        redirecTo: 'diagnostico',
        icon: 'fa-solid fa-stethoscope',
        type: 'link'
    },
    {
        title: 'Médicos',
        redirecTo: '/doctores',
        icon: 'fa-solid fa-user-doctor',
        type: 'link',
    },
    {
        title: 'Usuarios',
        redirecTo: 'usuarios',
        icon: 'fa-solid fa-users',
        type: 'link',
    },
]