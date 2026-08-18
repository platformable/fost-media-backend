/**
 * post router
 */

import { factories } from "@strapi/strapi"
const { createCoreRouter } = require("@strapi/strapi").factories

export default factories.createCoreRouter("api::industry.industry", {
  config: {
    find: {
      middlewares: ["api::industry.show-author"],
    },
    findOne: {
      middlewares: ["api::industry.show-author"],
    },
  },
})
