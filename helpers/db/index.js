// HELPER FUNCTIONS FOR EVERYDAY DB ACTIONS
import clientPromise from "../../lib/mongodb"

// Get all documents from a mongoDB collection
export function getDocuments(collection, params, fields, sort) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      const documents = await db.collection(collection).find(params).project(fields).sort(sort).toArray();
      // Clean the _id field  from the documents
      const data = JSON.parse(JSON.stringify(documents));
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

// Get a single document from a mongoDB collection
export function getDocument(collection, params, fields, sort) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      const document = await db.collection(collection).findOne(params, { projection: fields, sort: { _id: -1 } });
      // const data = JSON.parse(JSON.stringify(document[0]));

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
      const client = await clientPromise;
      const db = client.db();
      const result = await db.collection(collection).insertOne(document);
      resolve(result);

    } catch (error) {
      reject(error);
    }
  });
}

// Patch a document into a mongoDB collection
export function patchDocument(collection, params, document) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      const result = await db.collection(collection).updateOne(params, { $set: document });
      resolve(result);

    } catch (error) {
      reject(error);
    }
  });
}

// Delete a document from a mongoDB collection
export function deleteDocument(collection, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      const result = await db.collection(collection).deleteOne(params);

      resolve(result);

    } catch (error) {
      reject(error);
    }
  });
}
