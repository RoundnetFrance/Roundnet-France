import type { FC } from "react";

export interface FCWithAuth extends FC {
	auth: {
		role: "superadmin";
	};
}
