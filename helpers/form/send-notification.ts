import { getEventLabel } from "../events";

interface NotificationData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface GetNotificationDataProps {
	type: string;
	data: Record<string, any>;
}
export const getNotificationData = ({
	type,
	data,
}: GetNotificationDataProps) => {
	const notificationData: NotificationData = {
		name: "Roundnet France - Notification",
		email: "roundnetfrance@gmail.com",
		subject: "",
		message: "",
	};

	switch (type) {
		case "club":
			notificationData.subject = `[CLUB] Notification - ${data.title} est en attente de validation`;
			notificationData.message = `<p>Bonjour,</p>
          <p>Le nouveau club <strong>${data.title}</strong> est en attente de validation.</p>
          <p>Sa description :</p>
          <p><i>${data.description}</i></p>
          <p>Informations supplémentaires :</p>
          <ul>
            <li>Référent : ${data.referer}</li>
            <li>Email : ${data.email}</li>
            <li>Téléphone : ${data.phone}</li>
            </ul>
            <p>
            <strong>
              Vous pouvez le valider en passant par l'administration du site : <a href="https://www.roundnetfrance.fr/rf-admin">Administration</a>
            </strong>
            </p>`;
			break;

		case "event":
			notificationData.subject = `[TOURNOI] Notification - ${data.title} est en attente de validation`;
			notificationData.message = `<p>Bonjour,</p>
          <p>Le nouveau tournoi <strong>${data.title}</strong> est en attente de validation.</p>
          <p>Sa description :</p>
          <p><strong>Date: ${data.date?.toLocaleDateString("fr-FR", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}</strong></p>
          <p><strong>Ville : ${data.city}</strong></p>
          <p><i>${data.description}</i></p>
          <p>Informations supplémentaires :</p>
          <ul>
            <li>Participants : ${data.participants}</li>
            ${data.price ? `<li>Prix : ${data.price}€ par équipe</li>` : ""}
            <li>Terrain : ${getEventLabel(data.field)}</li>
            <li>Format : ${getEventLabel(data.format)}</li>
            <li>Catégorie : ${getEventLabel(data.category)}</li>
            <li>Type : ${getEventLabel(data.type)}</li>
            <li>Ouvert aux débutants : ${data.beginnerFriendly ? "Oui" : "Non"}</li>
            </ul>
            <p>
            <strong>
              Vous pouvez le valider en passant par l'administration du site : <a href="https://www.roundnetfrance.fr/rf-admin">Administration</a>
            </strong>
            </p>`;
			break;

		default:
			throw new Error(`${type} is not a valid type`);
	}

	return notificationData;
};
