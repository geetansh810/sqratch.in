import { Client, Databases } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

const secret_API_key = 'standard_f597dd296343cd6f2538b6f29a11644f2f299010f2bb42e197eba787ba2cce3524de01b0de8180d0469cd8886d0f5579b28a539d9e5b6eec11d26986dafb6e01f1b809bf5c5ac93fdd7e8a4575a94b8585b45bc89477579e17d4a814240282919d245a46d49959c45852cd1c2261a0857920d0fdb20d17e71b65ba0551e7fc35'; // Your secret API key (server-side only!)

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('6830af67002dceb9f2aa')              // Your project ID

const databases = new Databases(client);

// Your database and collection IDs
const databaseId = '6830b07e002aa995053a';
const collectionId = '6830b7f5003433a68247';
const documentId = '6830d00f0003b4155bfc'; // Make sure this exists!

/**
 * Fetches the About page document from Appwrite.
 */
export async function getAboutData() {
    console.log("Calling data");
    try {
        const data = await databases.getDocument(databaseId, collectionId, documentId);
        console.log("Document data:", data);
        return data;
    } catch (error: any) {
        console.error("Error fetching document:", error);
        return {
            error: true,
            message: error.message,
        };
    }
}