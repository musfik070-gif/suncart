import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB || "suncart");

const socialProviders =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    : {};

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: mongodbAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  socialProviders,

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      image: {
        type: "string",
        required: false,
      },
    },
  },
});
