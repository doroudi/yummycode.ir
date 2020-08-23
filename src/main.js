// Import main css
import '~/assets/style/index.scss'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import faDate from './filters/fa-date'
// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.filter('fa-date', faDate)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}