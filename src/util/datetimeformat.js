// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#weekday
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

export const SIMPLE_CODE = 'simple'
export const DETAIL_CODE = 'detail'
export const CUSTOM_CODE = 'custom'
export const COMMON_CODE = 'common'
export const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss'

export const simpleFormat = [
  {
    id: 'dateStyle',
    i18n: true,
    label: 'datetime.date_style',
    type: [
      {
        id: 'full',
        i18n: true,
        label: 'datetime.type_full',
      },
      {
        label: 'datetime.type_long',
        i18n: true,
        id: 'long'
      },
      {
        label: 'datetime.type_medium',
        i18n: true,
        id: 'medium'
      },
      {
        label: 'datetime.type_short',
        i18n: true,
        id: 'short'
      },
    ]
  },
  {
    id: 'timeStyle',
    i18n: true,
    label: 'datetime.time_style',
    type: [
      {
        label: 'datetime.type_full',
        i18n: true,
        id: 'full'
      },
      {
        label: 'datetime.type_long',
        i18n: true,
        id: 'long'
      },
      {
        label: 'datetime.type_medium',
        i18n: true,
        id: 'medium'
      },
      {
        label: 'datetime.type_short',
        i18n: true,
        id: 'short'
      },
    ]
  }
]

// detail 최소한의 형태
// [
//   weekday, year, month, day
//   year, month
//   month, day
//   hour, minute
// ]


export const detailFormat = [
  {
    id: 'weekday',
    label: 'datetime.weekday',
    i18n: true,
    type: [
      {
        label: 'datetime.type_long',
        i18n: true,
        id: 'long'
      },     
      {
        label: 'datetime.type_short',
        i18n: true,
        id: 'short'
      },     
      {
        label: 'datetime.type_narrow',
        i18n: true,
        id: 'narrow'
      },     
    ]
  },
  {
    id: 'year',
    label: 'datetime.year',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      }
    ]
  },
  {
    id: 'month',
    label: 'datetime.month',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      },     
      {
        label: 'datetime.type_long',
        i18n: true,
        id: 'long'
      },     
      {
        label: 'datetime.type_short',
        i18n: true,
        id: 'short'
      },     
      {
        label: 'datetime.type_narrow',
        i18n: true,
        id: 'narrow'
      },     
    ]
  },
  {
    id: 'day',
    label: 'datetime.day',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      }
    ]
  },
  {
    id: 'hour',
    label: 'datetime.hour',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      }
    ]
  },
  {
    id: 'minute',
    label: 'datetime.minute',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      }
    ]
  },
  {
    id: 'second',
    label: 'datetime.second',
    i18n: true,
    type: [
      {
        label: 'datetime.type_numeric',
        i18n: true,
        id: 'numeric'
      }, 
      {
        label: 'datetime.type_2_digit',
        i18n: true,
        id: '2-digit'
      }
    ]
  },
]

export const commonOption = [
  {
    id: 'hour12',
    i18n: true,
    label: 'datetime.hour_format',
    type: [
      {
        label: '12',
        i18n: false,
        id: true
      },
      {
        label: '24',
        i18n: false,
        id: false
      }
    ]
  }
]