/*
0 -> office
1 -> usable_areas
2 -> apartment
3 -> house
4 -> room
5 -> parking space
6 -> virtual office
7 -> coworking space
*/

const all = [0, 1, 2, 3, 4, 5, 6, 7]
const parking_space = [5]
const non_parking_space = [0, 1, 2, 3, 4, 6, 7]
const virtual_office_and_coworking_space = [6, 7]

const parking_space_features = [
  {
    ref: 'easy_entry',
    cat: parking_space,
    pl: 'Łatwy wjazd',
    en: 'Easy entry'
  },
  {
    ref: 'łatwy_access',
    cat: parking_space,
    pl: 'Łatwy dostęp',
    en: 'Easy access'
  },
  {
    ref: 'good_illumination',
    cat: parking_space,
    pl: 'Dobre oświetlenie',
    en: 'Good illumination'
  },
  {
    ref: 'lock_secured',
    cat: parking_space,
    pl: 'Zabezpieczenie blokadą',
    en: 'Lock secured'
  },
  {
    ref: 'remote_controlled_garage_door',
    cat: parking_space,
    pl: 'Brama garażowa sterowana pilotem',
    en: 'Remote controlled garage gate'
  },
  {
    ref: 'easy_parking',
    cat: parking_space,
    pl: 'Łatwe parkowanie',
    en: 'Easy parking'
  },
  {
    ref: 'power_point_access',
    cat: parking_space,
    pl: 'Dostęp do gniazdka elektrycznego',
    en: 'Power point access'
  }
]

const virtual_office_and_coworking_space_features = [
  {
    ref: 'correspondence_service',
    cat: virtual_office_and_coworking_space,
    pl: 'Obsługa korespondencji',
    en: 'Correspondence service'
  },
  {
    ref: 'document_scanning',
    cat: virtual_office_and_coworking_space,
    pl: 'Skanowanie dokumentów',
    en: 'Document scanning'
  },
  {
    ref: 'conference_hall_access',
    cat: virtual_office_and_coworking_space,
    pl: 'Dostęp do sali konferencyjnej',
    en: 'Conference hall access'
  },
]

const shared_features = [
  {
    ref: 'wellcommunicated',
    cat: all,
    pl: 'Dobrze skomunikowane',
    en: 'Well communicated'
  },
  {
    ref: 'lift',
    cat: all,
    pl: 'Winda',
    en: 'Lift'
  },
  {
    ref: 'lifts',
    cat: all,
    pl: 'Windy',
    en: 'Lifts'
  },
  {
    ref: 'high_speed_lift',
    cat: all,
    pl: 'Szybka winda',
    en: 'High-speed lift'
  },
  {
    ref: 'high_speed_lifts',
    cat: all,
    pl: 'Szybkie windy',
    en: 'High-speed lifts'
  },
  {
    ref: 'kitchen',
    cat: [0, 1, 2, 3, 4, 7],
    pl: 'Kuchnia',
    en: 'Kitchen'
  },
  {
    ref: 'kitchenette',
    cat: [0, 1, 2, 3, 4, 7],
    pl: 'Aneks kuchenny',
    en: 'Kitchenette'
  },
  {
    ref: 'windowedkitchen',
    cat: [0, 1, 2, 3, 4, 7],
    pl: 'Kuchnia z oknem',
    en: 'Windowed kitchen'
  },
  {
    ref: 'exclusivebathroom',
    cat: [0, 1, 4, 7],
    pl: 'Łazienka na wyłączność',
    en: 'Exclusive bathroom'
  },
  {
    ref: 'parkingspace',
    cat: non_parking_space,
    pl: 'Miejsce post.',
    en: 'Parking space'
  },
  {
    ref: 'parkingspaces',
    cat: non_parking_space,
    pl: 'Miejsca post.',
    en: 'Parking spaces'
  },
  {
    ref: 'undergroundgaragespace',
    cat: non_parking_space,
    pl: 'Miejsce w garażu podziemnym',
    en: 'Underground Garage Space'
  },
  {
    ref: 'undergroundgaragespaces',
    cat: non_parking_space,
    pl: 'Miejsca w garażu podziemnym',
    en: 'Underground Garage Spaces'
  },
  {
    ref: 'standalonegaragespace',
    cat: non_parking_space,
    pl: 'Miejsce w garażu wolnostojącym',
    en: 'Standalone garage space'
  },
  {
    ref: 'standalonegaragespaces',
    cat: non_parking_space,
    pl: 'Miejsca w garażu wolnostojącym',
    en: 'Standalone garage spaces'
  },
  {
    ref: 'airconditioning',
    cat: non_parking_space,
    pl: 'Klimatyzacja',
    en: 'Air conditioning'
  },
  {
    ref: 'highceilings',
    cat: non_parking_space,
    pl: 'Wysokie sufity',
    en: 'High ceilings'
  },
  {
    ref: 'entryphone',
    cat: non_parking_space,
    pl: 'Domofon',
    en: 'Entry phone'
  },
  {
    ref: 'monitoring',
    cat: all,
    pl: 'Monitoring',
    en: 'Video surveillance'
  },
  {
    ref: 'alarm system',
    cat: all,
    pl: 'System alarmowy',
    en: 'Alarm system'
  },
  {
    ref: 'antiburglarblinds',
    cat: non_parking_space,
    pl: 'Rolety antywłamaniowe',
    en: 'Anti-burglar blinds'
  },
  {
    ref: 'renovatedbuilding',
    cat: all,
    pl: 'Odremontowany budynek',
    en: 'Renovated building'
  },
  {
    ref: 'renovatedcommonareas',
    cat: [0, 1, 4, 6, 7],
    pl: 'Odremontowane części wspólne',
    en: 'Renovated commona reas'
  },
  {
    ref: 'poured flooring',
    cat: [0, 1],
    pl: 'Wylana posadzka',
    en: 'Poured flooring'
  },
  {
    ref: 'divisionwallsrearrangementpossibility',
    cat: [0, 1],
    pl: 'Możliwość rearanżacji ścian działowych',
    en: 'Division walls re-arrangement possibility'
  },
  {
    ref: 'classabuilding',
    cat: [0, 1, 6, 7],
    pl: 'Budynek klasy A',
    en: 'Class A building'
  },
  {
    ref: 'classbbuilding',
    cat: [0, 1, 6, 7],
    pl: 'Budynek klasy B',
    en: 'Class B building'
  },
  {
    ref: 'classcbuilding',
    cat: [0, 1, 6, 7],
    pl: 'Budynek klasy C',
    en: 'Class C building'
  },
  {
    ref: 'electricitypiping',
    cat: [0, 1],
    pl: 'Instalacja prądowa',
    en: 'Electricity piping'
  },
  {
    ref: 'illumination',
    cat: [0, 1, 2],
    pl: 'Oświetlenie',
    en: 'Illumination'
  },
  {
    ref: 'redundantpowersupply',
    cat: [0, 1],
    pl: 'Zasilanie zapasowe',
    en: 'Redundant power supply'
  },
  {
    ref: 'gaspiping',
    cat: [0, 1],
    pl: 'Instalacja gazowa',
    en: 'Gas piping'
  },
  {
    ref: 'waterpiping',
    cat: [0, 1],
    pl: 'Instalacja wodna',
    en: 'Water piping'
  },
  {
    ref: 'fireprotectionsystem',
    cat: [0, 1],
    pl: 'Instalacja przeciwpożarowa',
    en: 'Fire protection system'
  },
  {
    ref: 'telecommunicationinstallations',
    cat: [0, 1],
    pl: 'Instalacja teletechniczna',
    en: 'Telecommunication installations'
  }
]

export const features = virtual_office_and_coworking_space_features.concat(parking_space_features.concat(shared_features))