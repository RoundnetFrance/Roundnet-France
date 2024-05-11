// Get all clubs from MongoDB, then insert them into Vercel PostgreSQL via Prisma
import dotenv from "dotenv";
dotenv.config({
	path: [".env.local", ".env"],
});

import { PrismaClient } from "@prisma/client";
import { getDocuments } from "../helpers/db";
import type { Club } from "../models/collections/Clubs";

async function main() {
	try {
		const prisma = new PrismaClient();

		console.log("Fetching clubs from MongoDB...");

		const clubs = await getDocuments<Club>({ collection: "clubs" });

		console.log(clubs.length, "clubs found.");
		console.log("Clubs already imported will be skipped.");
		console.log("Migrating clubs to Vercel PostgreSQL...");

		const migration = await prisma.club.createMany({
			skipDuplicates: true,
			data: clubs.map((club) => ({
				name: club.title,
				description: club.description,
				picture: club.image,
				city: club.chip,
				mail: `TO_EDIT_${club.title
					.toLowerCase()
					.replace(" ", "")}@club.roundnet`,
				club_created: club.clubCreated,
			})),
		});

		console.log("Migration done!", migration.count, "clubs inserted.");
		process.exit(1);
	} catch (error) {
		console.log("Migration failed.");
		console.error(error);

		process.exit(0);
	}
}

main();
