export interface ISidebar {
    title: string;
    icon: string;
    redirecTo: string;
    tipo: string;
}

export const SidebarMenu: ISidebar[] = [
    {
        title: 'Añadir Paciente',
        redirecTo: 'añadir',
        icon: 'fa-solid fa-circle-plus',
        tipo: 'link'
    },
    {
        title: 'Inicio',
        redirecTo: 'inicio',
        icon: 'fa-solid fa-house',
        tipo: 'link'
    },
    {
        title: 'Pacientes',
        redirecTo: 'pacientes',
        icon: 'fa-solid fa-person-half-dress',
        tipo: 'link'
    },
    {
        title: 'Historias Médicas',
        redirecTo: 'historias_medicas',
        icon: 'fa-solid fa-book-medical',
        tipo: 'link'
    },
    {
        title: 'Diagnostico',
        redirecTo: 'diagnostico',
        icon: 'fa-solid fa-stethoscope',
        tipo: 'link'
    },
    {
        title: 'Médicos',
        redirecTo: 'doctores',
        icon: 'fa-solid fa-user-doctor',
        tipo: 'link',
    },
    {
        title: 'Usuarios',
        redirecTo: 'usuarios',
        icon: 'fa-solid fa-users',
        tipo: 'link',
    },

]