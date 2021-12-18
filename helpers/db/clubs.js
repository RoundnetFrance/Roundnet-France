import { getDocuments } from '../../helpers/db';

// Get all clubs
export async function getClubs(params) {
  const data = await getDocuments('clubs', params);
  return data;
}