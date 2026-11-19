export default ({ env }) => {
  console.log("SMTP_USERNAME:prod", env("SMTP_USERNAME"))
  console.log("SMTP_PASSWORD length:prod", env("SMTP_PASSWORD")?.length)

  return {
    // ...
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          rootPath: "fost-media",
          s3Options: {
            //endpoint: "https://nyc3.digitaloceanspaces.com",
            endpoint: "https://ams3.digitaloceanspaces.com",
            region: "us-east-1",
            credentials: {
              accessKeyId: process.env.DO_SPACES_KEY,
              secretAccessKey: process.env.DO_SPACES_SECRET,
            },
          },
          params: {
            Bucket: process.env.DO_SPACES_BUCKET,
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
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
    // ...
  }
}
