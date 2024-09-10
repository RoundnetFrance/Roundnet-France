import { exec } from "node:child_process";
import dotenv from "dotenv";

dotenv.config({
	path: [".env.local", ".env"],
});

const { MONGODB_URI } = process.env;

function runCommand(command: string) {
	return new Promise<void>((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`Error executing command: ${command}`);
				console.error(stderr);
				reject(error);
			} else {
				console.log(stdout);
				resolve();
			}
		});
	});
}

async function main() {
	try {
		// Dump
		await runCommand(`mongodump --uri="${MONGODB_URI}/roundnet-france"`);

		// Restore
		await runCommand(
			`mongorestore --uri="${MONGODB_URI}/dev-roundnet-france" dump/roundnet-france`,
		);
	} catch (error) {
		console.error("Backup and restore failed:", error);
		process.exit(1);
	} finally {
		console.log("Backup and restore completed successfully.");
		process.exit(0);
	}
}

main();
