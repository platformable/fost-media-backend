export default ({ env }) => {
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
          // Force IPv4: nodemailer 10 tries IPv6 first, and Gmail rejects
          // logins (535) from this server's IPv6 address
          localAddress: "0.0.0.0",
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
