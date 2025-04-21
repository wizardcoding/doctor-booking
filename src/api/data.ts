export const doctorsData = [
    { name: 'Don Gordon', speciality: ['Ortopedics', 'Traumatology'], availability: ['Monday: 8:30', 'Tuesday: 10:30', 'Friday: 14:50'], location: 'Chicago, Illinois', appointments: [], photo: '/don.png', rating: '4' },
    { name: 'Ivan Fernandez', speciality: ['Curandero', 'Charlataneria'], availability: ['Monday: 8:30', 'Tuesday: 10:30', 'Friday: 14:50'], location: 'Monterrey', appointments: [], photo: '/don.png', rating: '1' },
    { name: 'Faron Daliance', speciality: ['Surgeon', 'Hearing'], availability: ['Monday: 8:30', 'Tuesday: 10:30', 'Friday: 14:50'], location: 'Trabia, Gaarden', appointments: [], photo: '/don.png', rating: '5' },
]

export const specialities = [... new Set(doctorsData.map( doctor => doctor.speciality).flat(Infinity))]