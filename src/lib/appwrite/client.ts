// import { p } from '@vite-pwa/assets-generator/dist/shared/assets-generator.CtXVyBkH.mjs';
import { Client, Databases, Query } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

// const secret_API_key = 'standard_f597dd296343cd6f2538b6f29a11644f2f299010f2bb42e197eba787ba2cce3524de01b0de8180d0469cd8886d0f5579b28a539d9e5b6eec11d26986dafb6e01f1b809bf5c5ac93fdd7e8a4575a94b8585b45bc89477579e17d4a814240282919d245a46d49959c45852cd1c2261a0857920d0fdb20d17e71b65ba0551e7fc35'; // Your secret API key (server-side only!)
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID || ''

console.log(endpoint);
console.log(projectId);


client
    .setEndpoint(
        endpoint // Your Appwrite endpoint
    ) // Your Appwrite endpoint
    .setProject(
        projectId
         // Your Appwrite project ID
    )              // Your project ID

const databases = new Databases(client);

// Your database and collection IDs
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID || '';

function getCollectionId(collectionName: string): string {
    if (collectionName === 'competitions') {
        return import.meta.env.VITE_APPWRITE_COMPETITIONS_COLLECTION_ID || '';
    }else if (collectionName === 'blogs') {
        return import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID || '';
    }
    return ''; // Default or error case
}

/**
 * Fetches the competition data from competitions collections of Appwrite by matching the slug.
 */
export async function getCompetitionData(slug: string) {
    console.log("Calling data");
    if (!slug) {
        console.error("Slug is required to fetch competition data.");
        return {
            error: true,
            message: "Slug is required to fetch competition data.",
        };
    }
    console.log("Fetching competition data for slug:", slug);
    // Ensure the slug is a string and not empty
    if (typeof slug !== 'string' || slug.trim() === '') {
        console.error("Invalid slug provided:", slug);
        return {
            error: true,
            message: "Invalid slug provided.",
        };
    }
    const collectionId = getCollectionId('competitions');
    if (!collectionId) {
        console.error("Collection ID for competitions is not defined.");
        return {
            error: true,
            message: "Collection ID for competitions is not defined.",
        };
    }
    console.log("Using collection ID:", collectionId);
    try {
        const data = await databases.listDocuments(databaseId, getCollectionId('competitions'), [
            Query.equal('slug', slug),
        ]);
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

/**
 * Fetches the blog data from blogs collections of Appwrite by matching the slug.
 */
export async function getBlogData(slug: string) {
    console.log("Calling data");
    if (!slug) {
        console.error("Slug is required to fetch blog data.");
        return {
            error: true,
            message: "Slug is required to fetch blog data.",
        };
    }
    console.log("Fetching blog data for slug:", slug);
    // Ensure the slug is a string and not empty
    if (typeof slug !== 'string' || slug.trim() === '') {
        console.error("Invalid slug provided:", slug);
        return {
            error: true,
            message: "Invalid slug provided.",
        };
    }
    const collectionId = getCollectionId('blogs');
    if (!collectionId) {
        console.error("Collection ID for blogs is not defined.");
        return {
            error: true,
            message: "Collection ID for blogs is not defined.",
        };
    }
    console.log("Using collection ID:", collectionId);
    try {
        const data = await databases.listDocuments(databaseId, collectionId, [
            Query.equal('slug', slug),
        ]);
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

/**
 * Fetches the all blogs from blogs collections of Appwrite by matching the slug.
 */
export async function getAllBlogs() {
    console.log("Calling data");
    const collectionId = getCollectionId('blogs');
    if (!collectionId) {
        console.error("Collection ID for blogs is not defined.");
        return {
            error: true,
            message: "Collection ID for blogs is not defined.",
        };
    }
    console.log("Using collection ID:", collectionId);
    try {
        const data = await databases.listDocuments(databaseId, collectionId);
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

/**
 * Fetches the all competitions from competitions collections of Appwrite by matching the slug.
 */
export async function getAllCompetitions() {
    console.log("Calling data");
    const collectionId = getCollectionId('competitions');
    if (!collectionId) {
        console.error("Collection ID for competitions is not defined.");
        return {
            error: true,
            message: "Collection ID for competitions is not defined.",
        };
    }
    console.log("Using collection ID:", collectionId);
    try {
        const data = await databases.listDocuments(databaseId, collectionId);
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




/**
 * Fetches the About page document from Appwrite.
 */
export async function getAboutData() {
    console.log("Calling data");
    return ""
    // try {
    //     const data = await databases.getDocument(databaseId, collectionId, documentId);
    //     console.log("Document data:", data);
    //     return data;
    // } catch (error: any) {
    //     console.error("Error fetching document:", error);
    //     return {
    //         error: true,
    //         message: error.message,
    //     };
    // }
}