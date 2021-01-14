const config = {
  STRIPE_KEY:
    "pk_test_51I8L5ILTZvMuxBhApAmryFDTPvO7ELZjxtOt0CLqaE7BxIbEg45LfzyIQW2dbI2t9xSPndKUYcTAXOg4lKa2syDr00P5B94oSo",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jcentwq22d.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZCbrjjy1C",
    APP_CLIENT_ID: "2qgitj5b3vd0dbs41jns3p2v04",
    IDENTITY_POOL_ID: "us-east-1:92c84608-325e-4f17-8dd2-008ef7ce336b",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
export default config;
