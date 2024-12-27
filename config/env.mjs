import * as dotenv from "dotenv";
import envalid from "envalid";

dotenv.config({ path: [".env.defaults", process.env.NODE_ENV === "production" ? ".env.production" : ".env"], override: true });

const env = envalid.cleanEnv(process.env, {
	NODE_ENV: envalid.str({ default: "development" }),
	HOSTNAME: envalid.str({ default: "localhost" }),

	JWT_SECRET: envalid.str({ default: "secret" }),

	ACCESS_TOKEN_EXPIRES: envalid.num({ default: 1440 }),
	REFRESH_TOKEN_EXPIRES: envalid.num({ default: 30 }),
});

export { env };
