// Import main css
import '~/assets/style/index.scss'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Vssue from "vssue";
import GithubV3 from "@vssue/api-github-v3";

import { decode } from "./utilities/obfuscate";
const basicInfo = require("./../basicInfo.json");

import {faDate} from './filters/fa-date'
// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.filter('fa-date', faDate)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vssue, {
    api: GithubV3,
    owner: basicInfo.repository.owner,
    repo: basicInfo.repository.name,
    clientId: decode(basicInfo.repository.clientId),
    clientSecret: decode(basicInfo.repository.clientSecret),
    labels: ["comment"],
    prefix: "[Comment] ",
    admins: [basicInfo.repository.owner],
    perPage: 999,
    locale: "en",
    autoCreateIssue: true,
  });

}