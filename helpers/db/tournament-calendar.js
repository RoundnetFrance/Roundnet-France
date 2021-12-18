import { getDocuments } from '../../helpers/db';

// Get all upcoming calendar events
export async function getCalendar() {
  const data = await getDocuments('calendar');
  return data;
}