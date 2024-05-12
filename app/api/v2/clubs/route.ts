import { getServerSession } from "next-auth/next";
import prisma from "../../../../lib/prisma";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";

export async function GET() {
	try {
		const session = await getServerSession(authOptions);
		const clubs = await prisma.club.findMany({
			where: {
				validated: session ? undefined : true,
			},
			orderBy: {
				created_at: session ? "desc" : undefined,
				city: session ? undefined : "asc",
			},
		});

		return Response.json(clubs);
	} catch (error) {
		return Response.json(
			{
				error: "Internal server error",
				details: error.message,
			},
			{
				status: 500,
			},
		);
	}
}
