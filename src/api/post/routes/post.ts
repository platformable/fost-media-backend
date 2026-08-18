/**
 * post router
 */

import { factories } from "@strapi/strapi"
const { createCoreRouter } = require("@strapi/strapi").factories

export default factories.createCoreRouter("api::post.post", {
  config: {
    find: {
      middlewares: ["api::post.show-author"],
    },
    findOne: {
      middlewares: ["api::post.show-author"],
    },
  },
})
