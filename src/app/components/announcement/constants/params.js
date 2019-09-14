export const params = {
  category: {
    minMax: false,
    url: {
      polish: 'kategoria',
      english: 'category'
    },
    parser: 'parseCategoryForUrl'
  },
  district: {
    minMax: false,
    url: {
      polish: 'dzielnica',
      english: 'district'
    },
    parser: 'parseDistrictForUrl'
  },
  area: {
    minMax: true,
    url: {
      polish: 'powierzchnia',
      english: 'area'
    },
    unit: {
      polish: 'm2',
      english: 'sqm'
    }
  },
  rent: {
    minMax: true,
    url: {
      polish: 'miesieczny_czynsz',
      english: 'monthly_rent'
    }
  },
  rooms: {
    minMax: true,
    url: {
      polish: 'liczba_pomieszczen',
      english: 'rooms_amount'
    }
  },
  floor: {
    minMax: true,
    url: {
      polish: 'pietro',
      english: 'floor'
    }
  },
  totalFloors: {
    minMax: true,
    url: {
      polish: 'liczba_pieter_budynku',
      english: 'building_floors_amount'
    }
  },
  availabilityDate: {
    minMax: false,
    url: {
      polish: 'dostepnosc_od',
      english: 'availability_from'
    }
  }
}