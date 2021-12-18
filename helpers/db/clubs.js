import { getAllDocuments } from '../../helpers/db';

// Get all clubs
export async function getClubs() {
  const data = await getAllDocuments('clubs');
  return data;
}