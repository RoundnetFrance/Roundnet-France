// HELPER FUNCTIONS FOR EVERYDAY DB ACTIONS
import { connectToDatabase } from "../../lib/mongodb"

// Get all documents from a mongoDB collection
export function getDocuments(collection, params, fields) {
  return new Promise(async (resolve, reject) => {
    try {
      const { db } = await connectToDatabase();
      const documents = await db.collection(collection).find(params).project(fields).toArray();
      // Clean the _id field  from the documents
      const data = JSON.parse(JSON.stringify(documents));

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

// Get a single document from a mongoDB collection
export function getDocument(collection, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const { db } = await connectToDatabase();
      const document = await db.collection(collection).findOne(params);
      const data = JSON.parse(JSON.stringify(document));
      
      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
}

// Insert a new document into a mongoDB collection
export function insertDocument(collection, document) {
  return new Promise(async (resolve, reject) => {
    try {
      const { db } = await connectToDatabase();
      const result = await db.collection(collection).insertOne(document);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
