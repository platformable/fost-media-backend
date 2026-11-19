import type { Core } from "@strapi/strapi"

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 465),

        secure: env.int("SMTP_PORT", 465) === 465,
        auth: {
          user: env("SMTP_USERNAME"),

          pass: env("SMTP_PASSWORD") || "",
        },
      },
      settings: {
        defaultFrom: "mark@platformable.com",
        defaultReplyTo: "mark@platformable.com",
      },
    },
  },
})

export default config
