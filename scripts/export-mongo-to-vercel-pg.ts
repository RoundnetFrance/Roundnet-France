// Get all clubs from MongoDB, then insert them into Vercel PostgreSQL via Prisma
import dotenv from "dotenv";
dotenv.config({
	path: [".env.local", ".env"],
});

import { PrismaClient } from "@prisma/client";
import { getDocuments } from "../helpers/db";
import type { Club } from "../models/collections/Clubs";

async function main() {
	const prisma = new PrismaClient();

	try {
		console.log("Fetching clubs from MongoDB...");

		const clubs = await getDocuments<Club>({ collection: "clubs" });

		console.log(clubs.length, "clubs found.");
		console.log("Clubs already imported will be skipped.");
		console.log("Migrating clubs to Vercel PostgreSQL...");

		const { count: insertedCount } = await prisma.club.createMany({
			skipDuplicates: true,
			data: clubs.map((club) => ({
				name: club.title,
				description: club.description,
				picture: club.image,
				city: club.chip,
				mail:
					club.email ??
					`${club.title.toLowerCase().replace(/\s/g, "-")}@roundnetfrance.fr`,
				club_created: club.clubCreated,
				validated: club.validated,
				phone: club.phone,
			})),
		});

		console.log("Migration done!", insertedCount, "clubs inserted.");
	} catch (error) {
		console.log("Migration failed.");
		console.error(error);
	} finally {
		console.log("Closing Prisma client...");
		prisma.$disconnect();
		process.exit(1);
	}
}

main();
