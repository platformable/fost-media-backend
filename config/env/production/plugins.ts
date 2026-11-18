export default ({ env }) => ({
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
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "alexei@platformable.com",
        defaultReplyTo: "alexei@platformable.com",
      },
    },
  },
  // ...
})
