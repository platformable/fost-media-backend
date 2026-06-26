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
  // ...
})
