/* eslint-disable react/no-unescaped-entities */
import React, { FC, Fragment } from "react";
import Image from "next/image";

import { Container, Typography, Divider, Box } from "@mui/material";

import { Hero } from "../../components/ui";
import Head from "../../components/head";

interface StrengthsProps {
	strength: string;
	weakness: string;
	worlds: string;
}

const Strengths: FC<StrengthsProps> = ({ strength, weakness, worlds }) => {
	return (
		<Box mb={8}>
			<Typography gutterBottom>
				<strong>Leur force :</strong> {strength}
			</Typography>
			<Typography gutterBottom>
				<strong>Leur faiblesse :</strong> {weakness}
			</Typography>
			<Typography gutterBottom>
				<strong>Ce qu'on leur souhaite pour les Worlds :</strong> {worlds}
			</Typography>
		</Box>
	);
};

export default function TourStopAngersPage() {
	return (
		<Fragment>
			<Head
				title="COUPE DE FRANCE - BILAN D'UNE SAISON JAUNE DE PLAISIR"
				description="Qui pour représenter la France aux premiers championnats du monde ?"
			/>

			<Hero
				title="Blog"
				image="/images/hero/boutique.jpg"
				imagePosition="center 35%"
				mini
			/>
			<Container maxWidth="md" sx={{ mt: 4 }}>
				{/* MAIN IMAGE */}

				{/* TITLE */}
				<Typography variant="h3" component="h1">
					COUPE DE FRANCE - BILAN D'UNE SAISON JAUNE DE PLAISIR
				</Typography>

				<Typography variant="body2" component="p" sx={{ mb: 4 }}>
					<i>par Charles Mordacq</i>
				</Typography>

				{/* CONTENT */}
				<Typography variant="body1" component="p" gutterBottom>
					Quel meilleur endroit qu'une terrasse de café toulousaine accompagné
					d'une chocolatine pour rédiger ces quelques lignes, et rendre hommage
					aux champions et championnes de France. Quelle année ce fut pour le
					roundnet français. La fédération toute fraîchement constituée et les
					clubs hôtes ont longtemps œuvré pour offrir aux participants de la
					toute première coupe de France une expérience inoubliable. Quatre
					tournois, Angers, Toulouse, Paris et l'apothéose avec les championnats
					de France à Lyon ont prouvé à ceux qui en doutaient encore que ce
					sport continue de grandir encore plus vite qu'un service de Victor
					Cambois.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					J'avais rédigé quelques lignes avant le tournoi d'Angers pour évoquer
					les quelques équipes qui se battaient pour les fameuses places
					qualificatives. Près de quatre mois plus tard et alors que les
					championnats de France sont tout juste derrière nous, il est temps de
					tirer le bilan des ces quatre long weekends de roundnet aux quatre
					coins du pays. Trois équipes féminines, cinq masculines et une équipe
					mixte auront le grand honneur de représenter la France en Belgique
					début septembre !
				</Typography>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/kayak.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				{/* WOMEN */}
				<Typography variant="h4" component="h2" sx={{ mb: 2 }}>
					<strong>Chez les femmes</strong>
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>1. Puces & Dives</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Inès Paysan & Natacha Alt, Gif/Toulouse)</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Inès et Natacha n'ont pas fait mieux que l'an dernier. Elles sont
					encore championnes de France. Et elles ont remporté tous les tours
					stops qu'elles ont disputé ensemble (Inès était absente à Toulouse).
					Rappelons encore que Natacha a découvert le roundnet il y a un an.
					Aujourd'hui, elle est double championne de France. Même en Europe,
					elles font désormais partie du top 5. De quoi anticiper une grosse
					performance aux Worlds ? Certaines équipes féminines semblent
					intouchables mais le podium pourrait tout à fait s'envisager si les
					planètes s'alignent. Un bon tirage, de grosses défenses, un encore
					plus gros mental et ça y est, on peut rêver. Régalez nous et
					montrez-leur qu'on parle encore français en Belgique.
				</Typography>

				<Strengths
					strength="Les puces sont les meilleures"
					weakness="pour battre les meilleures, qu'elles divent encore un peu puces"
					worlds="faire office de couteau suisse."
				/>

				<Typography variant="h5" component="h2">
					<strong>2. Kayak Volant</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Juliette Dufourcq & Anaïs Duport, Paris)</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Les parisiennes double vice-championnes de France ont vendu chère leur
					peau en finale des championnats de France à Lyon. Mais comme à Paris
					en octobre, elles ont dû s'incliner face à plus fortes qu'elles.
					Juliette et Anaïs se sont imposées contre toute autre équipe qui ne
					s'appelle pas Puces & Dives. un des meilleurs cuts droit du circuit
					féminin et Anaïs a encore amélioré son "signature move" : son
					backhand. Les championnats du monde constituent le dernier baroud
					d'honneur de cette paire parisienne historique, Juliette partant en
					effet à la conquête de la Guyane dès la rentrée.
				</Typography>

				<Strengths
					strength="elles volent"
					weakness="parfois elles rament un peu"
					worlds="du plaisir, beaucoup de plaisir pour leur dernier tournoi, des poings serrés pour Anaïs, quelques jurons,  la casquette à l'envers pour Juliette, et des sourires tout le long. Et pourquoi pas une belle surprise au bout ?"
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/sunshine.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>3. Spiking on Sunshine</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Liza Vanangamoudiar &amp; Amély Joly, Gif/Toulouse) </i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Deux grosses compétitrices rassemblées autour d'un set, forcément ça
					fait des étincelles. Solides troisièmes derrière les deux
					intouchables, Amély et Liza complètent brillamment le podium fémimin
					cette année. Une rage de vaincre, une défense de chaque instant, cette
					paire nous rappelle que l'association touloso-giffoise est décidément
					très rentable et risque de faire des émules. Amély a même remporté le
					tour stop toulousain avec Natacha, preuve de sa progression au plus
					haut niveau féminin ! Et depuis quelques mois, on voit même Liza
					prendre le RER pour jouer à Paris en semaine. Elle l'a officiellement
					annoncé : l'année prochaine le badminton, c'est fini.
				</Typography>

				<Strengths
					strength="le poing serré après l'échange "
					weakness="le poing serré pendant l'échange "
					worlds="de beaux KO"
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/pcb.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<strong>Line et Vitable</strong>{" "}
					<i>(Marina Goncalves & Clara Maucourt, Paris / Angers)</i> et
					<strong>Ca passe crèèème</strong>{" "}
					<i>(Enora Le Cadre / Elise Martin, Clermont-Ferrand)</i> complètent le
					top 5 féminin français dans un classement toujours de plus en plus
					relevé !
				</Typography>

				{/* MEN */}
				<Typography variant="h4" component="h2" sx={{ mb: 2 }}>
					<strong>Chez les hommes</strong>
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>1. Pour Combien</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Robin Florida & Dorian Améziane, Toulouse)</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Probablement l'équipe la plus ennuyeuse du circuit cette année tant
					leurs résultats ont été constants, sans surprise et conformes aux
					prédictions d'avril. C'est simple, Robin et Dorian ont tout raflé. Dès
					le premier tournoi à Angers, Dorian a conclu la finale sur un reverse
					cut no touch. Devant tant d'insolence, les dieux du spike ont tout
					tenté mais ni la pluie et la gadoue toulousaine, ni la blessure au
					poignet de Dorian à Paris et ni les rafales de vent lyonnaises
					n'auront su faire déjouer les double champions de France. Ils n'ont
					même pas laissé de miettes à leurs adversaires. Dur de savoir quelle
					équipe en France pourra un jour leur barrer la route tant ils
					continuent de progresser. Maigre consolation, les français ne sont pas
					les seuls à être martyrisés: les Pour Combien suivent la même feuille
					de route en Europe avec deux victoires consécutives sur les deux
					dernières sorties dont le dernier Spikeball Tour Series à Paris. Mais
					où s'arrêteront ils ? Les championnats d'Europe à Dublin à la fin du
					mois, un détour aux US en août, puis les championnats du monde
					pourraient les placer sur le toit du Roundnet ! Cocorico.
				</Typography>

				<Strengths
					strength="une confiance à la limite de l'insolence "
					weakness="une insolence qui ne te met pas en confiance"
					worlds="nous faire rêver, encore une fois"
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/mareyschaux.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>2. Les Mareyschaux</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Louis Mareschal & Clément Rey, Toulouse)</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Solides jusqu'aux championnats de France, Louis et Clément n'ont pas
					perdu avant les demi-finales cette année, perdant même en finale
					contre les PCB à Toulouse. Très rapides au bloc et très réguliers sur
					leurs services, la deuxième équipe toulousaine qualifiée a sans doute
					manqué d'un tout petit peu de fraîcheur en fin de tournoi pour aller
					au bout. Mais elle a parfaitement répondu aux attentes nées de leur
					jeune collaboration. Louis a même fini sur une très belle note à Lyon
					le dimanche - aussi à l'aise sur scène qu'autour d'un set, on espère
					pour lui (et pour nous) que la musique se répétera en Belgique.
				</Typography>

				<Strengths
					strength="L'adolescence"
					weakness="Sophie je pense à toi tous les jours de ma vie"
					worlds="faire chanter leurs adversaires "
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/execut.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>3. Execut</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Tom Hullot & Auxence Clark, Montpellier/Paris) </i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					La grosse révélation de l'année ! L'équipe montpelliéraine a progressé
					à la vitesse de la lumière ces derniers mois jusqu'à finir sur le
					podium des championnats de France à Lyon. Les gros angles sur service
					de Tom et le spin implacable d'Auxence ont semé la terreur tour après
					tour. Une équipe aussi impressionnante de sang froid dans les moments
					clefs, avec beaucoup de matchs conclus dans le money time. Les double
					clutch français. Probablement la plus grosse marge de progression l'an
					prochain si le duo se maintient. C'est d'ailleurs le moment approprié
					pour annoncer le transfert définitif d'Auxence à Roundnet Paris après
					un prêt concluant ces 6 derniers mois. Bienvenue à lui !
				</Typography>

				<Strengths
					strength="le fergie time"
					weakness="la politesse. Parfois, il faut savoir insulter les PCB"
					worlds="Exe-reversecut ou récupérer le foulard de Matt Cole. Au choix."
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/lekipe.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>4. L'Ekipeeeee</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Marius Snoeck & Hugo Lacombe, Lyon) </i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Leur ascension était programmée, elle n'a pas déçu. Défenseurs hors
					pairs, les Lyonnais ont drastiquement amélioré leurs services et leurs
					attaques pour se hisser tout en haut du gotha français, Une finale à
					Angers et une demie à Toulouse les ont tout de suite propulsés sur le
					devant de la scène. C'est désormais la seule équipe avec les PCB à
					avoir un statut "premiere", acquis grâce à leur résultat lors du
					dernier challenger à Paris (le statut "premiere" permet d'accéder à la
					plus haute division sur les tournois régis par Spikeball et ainsi
					d'affronter les meilleurs joueurs).
				</Typography>

				<Strengths
					strength="leurs adversaires ont inventé le concept de l'attaque 'no touch' en jouant contre eux"
					weakness="Jean Michel Aulas"
					worlds="Une revanche contre Benny & Nelson"
				/>

				<Box mb={4}>
					<Image
						src="/images/blog/recap-2022/jouve.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={830}
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>5. Les Jouve</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>(Louis Jouve & Thomas Jouve, Montpellier/Toulouse) </i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Il fallait tout de même la présence de l'une des plus anciennes
					équipes du circuit pour représenter les Bleus en Belgique ! Thomas et
					Louis qui à force de prodiguer des conseils trop avisés via leur tutos
					YouTube ont vu la concurrence les rattraper très très rapidement. Mais
					quel meilleur tournoi que les championnats du Monde pour finir en
					apothéose. Repoussés deux années de suite pour cause de covid, peu de
					Français ont attendu les Worlds aussi longtemps que ces deux-là.
					Équipe française légendaire, il s'agit probablement de leur dernier
					tournoi ensemble en compétition et revêtu de leur tunique bleue, ils
					vont vouloir briller de mille feux !
				</Typography>

				<Strengths
					strength="le fame"
					weakness="le slow mo en match"
					worlds="ne pas avoir trop le temps de filmer"
				/>

				<Divider sx={{ m: 8 }} />
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Mention spéciale à la team <strong>Expats</strong> (Alex Marti & Tom
					Eynard, Allemagne/Autriche) qui a bien fini dans les 5 premières mais
					qui ne sera pas reconstituée pour les championnats du monde.
					Probablement le seul joueur de roundnet au monde à avoir le choix de
					représenter 2 pays pour les Worlds, Tom a en effet opté pour les
					couleurs autrichiennes. Très mauvais choix si vous me demandez ! Même
					si l'équipe de France devra en effet se passer de l'un des meilleurs
					serveurs français. A ses côtés se tenait l'inénarrable Marti : un bloc
					magique (surtout quand il pleut), une finition impeccable et un état
					d'esprit (presque) irréprochable - cette paire a tout de même fini
					vice championne de France à Lyon et troisième du classement de la
					saison.
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					La suite du top 10 étant essentiellement composée de parisiens qui
					n'ont pas encore trouvé la clef face aux toulousains : la team{" "}
					<strong>M&N</strong>
					(Benoit Nguyen et Charles Mordacq, Paris) suivie de{" "}
					<strong>Pierre Feuille Victor</strong> (Victor Cambois & Pierre
					Lecrosnier, Lyon/Paris), <strong>Poulet Curry</strong> (Benoit Durand
					& Aymeric Sandoz, Paris) et <strong>Waikiki</strong> (Lancelot Touzé &
					Thibaud Labourdette, Paris). Des transferts, un rachat du PSG, un
					grand voyage aux US, une thérapie de groupe, changer de sport, aucune
					option n'est encore écartée du côté de la capitale.
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Une très belle saison qui nous fait déjà saliver pour l'année
					prochaine ! C'est d'ailleurs le début des bruits de couloir, de
					négociations secrètes, des tractations sous la table, c'est la période
					la plus excitante de l'année, c'est le mercato ! Pas d'agent ni de
					représentants, il faut appeler directement, sonder, draguer son ou sa
					prochaine partenaire et espérer dénicher la perle rare. Tous les
					critères sont importants, mon ou ma future partenaire travaille t-il ?
					Est-il étudiant et fauché ? Pourra t-il voyager en France ? En Europe
					? Est- ce qu'il bosse son reverse dans son 10 mètres carrés ? Est-ce
					qu'il la joue au talent ? Pour le mixte, est-ce qu'il va sortir le
					samedi soir ? Est-ce un Lancelot bis ? Qui d'autre est sur le coup ?
					A-t-il bien regardé tous mes highlights ? Ai-je des highlights ? Mais
					qui est libre en fait ? Est-ce que je peux lui verser une somme de
					monnaie pour me l'assurer ? Allez, lancez-vous ! De toute façon, à la
					fin, on sait qui gagnera.
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Les équipes masculines et féminines auront fort à faire en Belgique !
					Au premier tournoi open où se dessineront sûrement des duels
					fratricides se succédera le tournoi par équipe sur un format coupe
					davis. Quelles sont les chances des équipes de France ? Côté masculin,
					même amputé de certains de leurs meilleurs joueurs qui ne feront pas
					le voyage (Preston Bies, Ryder Riva…), les Etats Unis font encore
					figure de grand favori. Derrière eux, le Canada, l'Allemagne… et la
					France devraient se disputer le podium. Côté féminin, même constat
					pour les Etats-Unis malgré l'absence des Twinz, la meilleure équipe
					américaine - le vivier féminin US reste très important, mais les
					Allemandes qui disposent de plusieurs équipes très compétitives et les
					Françaises peuvent tout à fait rêver d'une place sur le podium.
					Impossible n'est pas gaulois !
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Avant de clôturer cet article, j'aimerais finir sur quelques notes de
					remerciement - des gens ou d'autres forces de la nature sans
					lesquelles cette saison n'aurait pas été si incroyable :
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<strong>La pluie toulousaine</strong>, grâce à laquelle la glissade au
					bloc n'a désormais plus de secrets pour les joueurs,{" "}
					<strong>le vent lyonnais</strong> qui a réussi à dégoûter des spikers
					à jamais, et bien sûr <strong>les clubs hôtes</strong>, Roundnet
					Angers, Toulouse, Paris et Lyon pour avoir mis sur pied des
					compétitions pour tous les niveaux et d'avoir célébré tant de
					nouvelles <strong>communautés</strong> naissantes autour d'une même
					passion. Toutes les communautés qui ont fait du roundnet sur les
					tables des Mcdo des aires d'autoroute, depuis Abbeville,
					Clermont-Ferrand, Rennes, l'Alsace, la Bretagne et j'en oublie. Aussi
					bien sûr remercier la toute nouvelle
					<strong>Fédération Française de Roundnet</strong> qui se construit
					avec les retours (les votes?) des joueurs et des joueuses, et qui se
					professionnalise mois après mois. Remercier tout particulièrement{" "}
					<strong>Clément Bézier</strong>, qui a fait vivre la communauté
					derrière d'innombrables postes sur les réseaux sociaux et qui nous
					quitte en cette fin d'année, <strong>Gabriel Chamoulaud</strong> aussi
					en fin de mandat qui a participé à l'essor de très nombreuses
					communautés à travers le pays et enfin <strong>Thomas Jouve</strong>{" "}
					et tout le pôle compétition (notamment le nouveau venu{" "}
					<strong>Thomas Pérez</strong> qui avait déjà bien aidé sur le format)
					de la Fédé sans lequel tout ceci n'aurait ressemblé qu'à de vulgaires
					pickups sous la forme d'un tour de France des Déliriums.
				</Typography>

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Comment oublier <strong>Corentin</strong>, <strong>Gaëlle</strong>,{" "}
					<strong>Romain</strong>, <strong>Robin</strong> et{" "}
					<strong>Quentin</strong> qui ont immortalisé tous ces tournois et nous
					permettent tous les jours de nous replonger dans la magie de chacun de
					ces moments.
				</Typography>

				<Divider sx={{ m: 8 }} />
				<Typography variant="body1" component="p" gutterBottom>
					Bon été à tous et à toutes et à bientôt sur les terrains de Roundnet !
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Charles
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						PS : je recherche des éditeurs pour m'accompagner la saison
						prochaine sur la couverture manuscrite et humoristique des
						événements de roundnet français - n'hésitez pas à m'envoyer un msg
						si ça vous intéresse !
					</i>
				</Typography>
			</Container>
		</Fragment>
	);
}
