export type CampusEvent = {
  id: number
  title: string
  date: string
  place: string
  seats: number
}

export const events: CampusEvent[] = [
  {
    id: 1,
    title: 'React study night',
    date: '2026-10-22',
    place: 'Room 302',
    seats: 20,
  },
  {
    id: 2,
    title: 'TypeScript Workshop',
    date: '2026-11-05',
    place: 'Lab 405',
    seats: 3,
  },
  {
    id: 3,
    title: 'Web Security Seminar',
    date: '2026-11-12',
    place: 'Hall B',
    seats: 15,
  },
  {
    id: 4,
    title: 'Hackathon Info Session',
    date: '2026-11-20',
    place: 'Cinema Room',
    seats: 50,
  },
]
