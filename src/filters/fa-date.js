import Vue from 'vue'
import 'moment/locale/fa'
import moment from 'moment-jalaali'
const faDate = Vue.filter('faDate', function(value) {
  if (value === undefined || value === null) {
    return value
  }
  moment.loadPersian()
  return moment(value).format('jYYYY/jM/jD')
})

const faDateFriendly = Vue.filter('faDateFriendly', function(value) {
  if (value === undefined || value === null) {
    return value
  }
  moment.loadPersian()
  // const diff = (new Date() - new Date(value)) / (1000 * 3600 * 24)
  //   return moment(value).format('jYYYY/jM/jD')
  // }

  return moment(value).fromNow()
})

const faDateTime = Vue.filter('faDateTime', function(value) {
  if (value === undefined || value === null) {
    return value
  }
  moment.loadPersian()
  return moment(value).format('jYYYY/jM/jD HH:mm:ss')
})

const faDateLetter = Vue.filter('faDateLetter', function(value) {
  if (value === undefined || value === null) {
    return value
  }
  moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' })
  return moment(value).format('dddd jD jMMMM jYYYY')
})

const faTime = Vue.filter('faTime', function(value) {
  if (value === undefined || value === null) {
    return value
  }
  moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' })
  return moment(value).format('HH:mm')
})

export { faDate, faDateFriendly, faDateTime, faDateLetter, faTime }
