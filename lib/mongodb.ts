// FROM : https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.js
import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// SAFE GUARDS
if (!process.env.MONGODB_URI) {
	throw new Error("Please add your Mongo URI to .env.local");
}
if (
	process.env.NODE_ENV === "development" &&
	process.env.MONGODB_DB !== "dev-roundnet-france"
) {
	throw new Error(
		"You are not allowed to connect to the production database in development mode.",
	);
}

const uri = `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;
if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
