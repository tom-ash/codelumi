export function presentRooms(props) {
  const { rooms, category } = props;

  if (category === 2) {
    if (rooms === 1) return { pl: 'pokój', en: 'room' };
    if ([2, 3, 4].indexOf(rooms % 10) !== -1)
      return { pl: 'pokoje', en: 'rooms' };

    return { pl: 'pokoi', en: 'rooms' };
  } else {
    if (rooms === 1) return { pl: 'pomieszczenie', en: 'room' };
    if ([2, 3, 4].indexOf(rooms % 10) !== -1)
      return { pl: 'pomieszczenia', en: 'rooms' };

    return { pl: 'pomieszczeń', en: 'rooms' };
  }
}
