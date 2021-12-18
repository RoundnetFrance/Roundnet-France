import { getAllDocuments } from '../../helpers/db';

// Get all federation members
export async function getFederationMembers() {
  const data = await getAllDocuments('federation-members');
  return data;
}