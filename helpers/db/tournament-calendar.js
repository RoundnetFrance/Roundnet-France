import { getAllDocuments } from '../../helpers/db';

// Get all upcoming calendar events
export async function getCalendar() {
  const data = await getAllDocuments('calendar');
  return data;
}