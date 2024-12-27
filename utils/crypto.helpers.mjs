import CryptoES from 'crypto-es/lib/index.js';

export function generateRandomString(length) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}

export function genKeyFromToken(token) {
	// from accessToken get Signature
	const signature = token.split(".")[2];

	// from signature get encryptKey
	const encryptKey = `${signature.replace(/[-_]/g, "")}.GAME.123456/game/top/100`;

	// get encryptKey 32 bytes
	const encryptKey32 = encryptKey.slice(0, 32);

	return encryptKey32;
}

/**
 * Encrypt game data
 *
 * @param {string} gameData game data text
 * @param {string} encryptKey encrypt key
 * @returns {string} encrypted game data
 */
export function encodeGameData(gameData, encryptKey) {
	// Parse encryptKey to Hex
	const key = CryptoES.enc.Hex.parse(encryptKey);

	// Generate a random IV (Initialization Vector)
	// Blowfish uses 8-byte IV
	const iv = CryptoES.enc.Hex.parse(generateRandomString(16));
	
	// Use Blowfish encrypt the data
	const encrypted = CryptoES.Blowfish.encrypt(gameData, key, { iv: iv });
	
	// Combine IV and encrypted data
	const combinedData = `${iv.toString(CryptoES.enc.Hex)}${encrypted.toString()}`

	// Return combinedData
	return combinedData;
}

/**
 * Decrypt game data
 *
 * @param {string} encodedData encoded game data text
 * @param {string} encryptKey encrypt key
 * @returns {string} decrypted game data text
 */
export function decodeGameData(encodedData, encryptKey) {
	// Parse encryptKey to Hex
	const key = CryptoES.enc.Hex.parse(encryptKey);

	// Split IV and encrypted data
	const ivString = encodedData.slice(0, 16)
	const encrypted = encodedData.slice(16)

	// Parse string to Hex
	const iv = CryptoES.enc.Hex.parse(ivString);

	// Decrypt the data
	const decrypted = CryptoES.Blowfish.decrypt(encrypted, key, { iv: iv });

	// Return decrypted data
	return decrypted.toString(CryptoES.enc.Utf8);
}
