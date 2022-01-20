import { getDocuments, getDocument, insertDocument, deleteDocument, patchDocument } from '../../helpers/db';

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

// Patch a user
export async function patchUser(params, user) {
  const data = await patchDocument('users', params, user);
  return data;
}

// Delete a user
export async function deleteUser(params) {
  const data = await deleteDocument('users', params);
  return data;
}

