import type { Core } from "@strapi/strapi"

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    docLinks: env.bool("FLAG_DOC_LINKS", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env("CLIENT_URL")],
      async handler(uid, { documentId, locale, status }) {
        let slug: string | undefined

        if (uid === "api::post.post") {
          const document = await strapi.documents("api::post.post").findOne({
            documentId,
            ...(locale && { locale }),
            populate: null,
            fields: ["Slug"],
          })
          slug = document?.Slug
        } else if (uid === "api::industry.industry") {
          const document = await strapi
            .documents("api::industry.industry")
            .findOne({
              documentId,
              ...(locale && { locale }),
              populate: null,
              fields: ["Slug"],
            })
          slug = document?.Slug
        }

        const urlSearchParams = new URLSearchParams({
          secret: env("PREVIEW_SECRET"),
          ...(slug && { slug }),
          ...(locale && { locale }),
          uid,
          ...(status && { status }),
        })

        const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`
        return previewURL
      },
    },
  },
})

export default config
