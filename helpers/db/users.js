import { getDocuments, getDocument, insertDocument } from '../../helpers/db';

// Get all users of the app
export async function getUsers(params, fields) {
  const data = await getDocuments('users', params, fields);
  return data;
}

// Get a single user
export async function getUser(params, fields) {
  const data = await getDocument('users', params, fields);
  return data;
}

// Insert a new user
export async function insertUser(user) {
  const data = await insertDocument('users', user);
  return data;
}