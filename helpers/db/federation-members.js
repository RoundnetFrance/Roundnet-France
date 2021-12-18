import { getDocuments } from '../../helpers/db';

// Get all federation members
export async function getFederationMembers() {
  const data = await getDocuments('federation-members');
  return data;
}