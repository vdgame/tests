import { env } from "../config/env.mjs";
import { TimeSpan } from "oslo";
import { createJWT } from "oslo/jwt";

const getEncodedSecret = async () => {
	const secret = env.JWT_SECRET;

	if (!secret) throw new Error("Secret token is not defined");

	return new TextEncoder().encode(secret).buffer;
};

const createToken = async (authInfo, expiresIn) => {
	const secret = await getEncodedSecret();

	const options = {
		expiresIn,
		includeIssuedTimestamp: true,
	};

	return await createJWT("HS256", secret, authInfo, options);
};

export const createAccessToken = async (authInfo, expiresInMinutes = 120) => {
	try {
		return await createToken(authInfo, new TimeSpan(expiresInMinutes, "m"));
	} catch (error) {
		throw new Error("Failed to create access token.", { cause: error });
	}
};
