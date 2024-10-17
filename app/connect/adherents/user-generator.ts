// Import the Faker.js library
import { faker } from '@faker-js/faker';
faker.seed(55);
// Define a TypeScript interface for the user object structure
interface Member {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rfid: string;
  gender: string;
}

// Function to generate a single random user
function createRandomUser(): Member {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(), // Random name
    email: faker.internet.email(), // Random email
    phone: faker.phone.number(), // Random phone number
    rfid: faker.string.uuid(), // Random uuid
    gender : faker.person.sex()
  };
}

// Function to generate a list of random users
export function generateUserList(count: number): Member[] {
  const users: Member[] = [];
  for (let i = 0; i < count; i++) {
    users.push(createRandomUser());
  }
  return users;
}