import { decodeGameData, encodeGameData, genKeyFromToken } from "./utils/crypto.helpers.mjs";
import { generateRandomNumber, generateRandomString } from "./utils/random.mjs";
import * as jwt from "./utils/jwt.mjs";
import { env } from "./config/env.mjs";

function testCrypto(accessToken) {
	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZXhwIjoxNzM1MjcwMTY1LCJpYXQiOjE3MzUxODM3NjV9.W1qLn_dwWEsa33TZnQYXDBh6QxbJcczj1ol-sAeiDsk
	console.log("accessToken", accessToken);

	// Generate random encryption key (must be 32 bytes for AES-256)
	const encryptKey32 = genKeyFromToken(accessToken);

	// Test the encryption/decryption
	for (let i = 0; i < 10000; i++) {
		// Generate random test data
		const testData = JSON.stringify({
			time: generateRandomNumber(1, 2000000000),
			message: generateRandomString(20),
			timestamp: Date.now(),
			randomData: {
				k1: generateRandomString(50),
				k2: generateRandomString(50),
				k3: generateRandomString(50),
				k4: generateRandomString(50),
				k5: generateRandomString(50),
				k6: generateRandomString(50),
				k7: generateRandomString(50),
				k8: generateRandomString(50),
				k9: generateRandomString(50),
				k10: generateRandomString(50),
			},
		});

		// Test encryption
		const encrypted = encodeGameData(testData, encryptKey32);

		// Test decryption
		const decrypted = decodeGameData(encrypted, encryptKey32);

		// Verify the result
		if (testData !== decrypted) {
			console.error(`Test failed at iteration ${i + 1}`);
			console.error("Original:", testData);
			console.error("Decrypted:", decrypted);
			throw new Error("Encryption/decryption test failed");
		}

		console.log(`Test ${i + 1} passed successfully`);
	}

	console.log("All encryption/decryption tests passed successfully!");
}

for (let i = 0; i < 10000; i++) {
	const authInfo = {
		id: generateRandomNumber(1, 2000000000),
	};

	const expiresInMinutes = env.ACCESS_TOKEN_EXPIRES;
	const accessToken = await jwt.createAccessToken(authInfo, expiresInMinutes);

	testCrypto(accessToken);
}
