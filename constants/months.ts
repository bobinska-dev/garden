export const months = [
  {
    id: 'january',
    titles: {
      en: 'January',
      de: 'Januar',
      fr: 'Janvier',
    },
  },
  {
    id: 'february',
    titles: {
      en: 'February',
      de: 'Februar',
      fr: 'Février',
    },
  },
  {
    id: 'march',
    titles: {
      en: 'March',
      de: 'März',
      fr: 'Mars',
    },
  },
  {
    id: 'april',
    titles: {
      en: 'April',
      de: 'April',
      fr: 'Avril',
    },
  },
  {
    id: 'may',
    titles: {
      en: 'May',
      de: 'Mai',
      fr: 'Mai',
    },
  },
  {
    id: 'june',
    titles: {
      en: 'June',
      de: 'Juni',
      fr: 'Juin',
    },
  },
  {
    id: 'july',
    titles: {
      en: 'July',
      de: 'Juli',
      fr: 'Juillet',
    },
  },
  {
    id: 'august',
    titles: {
      en: 'August',
      de: 'August',
      fr: 'Août',
    },
  },
  {
    id: 'september',
    titles: {
      en: 'September',
      de: 'September',
      fr: 'Septembre',
    },
  },
  {
    id: 'october',
    titles: {
      en: 'October',
      de: 'Oktober',
      fr: 'Octobre',
    },
  },
  {
    id: 'november',
    titles: {
      en: 'November',
      de: 'November',
      fr: 'Novembre',
    },
  },
  {
    id: 'december',
    titles: {
      en: 'December',
      de: 'Dezember',
      fr: 'Décembre',
    },
  },
]

export const getLocaleMonthsOptionsList = (locale: 'de' | 'en' | 'fr') => {
  return months.map((month) => {
    return {
      title: month.titles[locale],
      value: month.id,
    }
  })
}
