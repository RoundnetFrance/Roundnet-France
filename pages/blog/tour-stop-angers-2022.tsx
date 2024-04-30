/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { Fragment } from "react";

import { Box, Container, Divider, Typography } from "@mui/material";

import Head from "../../components/head";
import { Hero } from "../../components/ui";

export default function TourStopAngersPage() {
	return (
		<Fragment>
			<Head
				title="Tour de France des meilleures équipes de Roundnet !"
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
				<Typography variant="h4" component="h1">
					Tour de France des meilleures équipes de Roundnet !
				</Typography>
				<Typography variant="h5" component="h2">
					Qui pour représenter la France aux premiers championnats du monde ?
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 4 }}>
					<i>par Charles Mordacq</i>
				</Typography>

				{/* CONTENT */}
				<Typography variant="body1" component="p" gutterBottom>
					Enfin le retour du roundnet en compétition. On a kiffé regarder les
					stories de Ryder, on était à bloc quand Buddy est venu nous parler de
					défense, on s'est trémousser sur des sons allemands à l'échauffement à
					Majorque et on commence à avoir de belles délégations françaises à
					l'étranger mais la réalité du terrain c'est autre chose : ce sont les
					pelouses d'Angers, sa mousse et son délirium le samedi soir, et aussi
					le délirium de Toulouse tiens, son stade en synthé de l'INP, et le RER
					B qui mène au Grand Godet et ses oies sauvages à Paris, c'est les
					championnats de France du futur que vont nous envoyer Roundnet Lyon en
					juin et bien sur, c'est la règle de labarthe, c'est des chi fu mi
					géants et des chi fu mixte, c'est des assos qui galèrent à trouver des
					terrains auprès des mairies, c'est les backend de Benoît, c'est les
					reverse cut de Dodo, c'est la chaîne Youtube des Jouve, c'est la
					nonchalance de certains joueurs parisiens, c'est la rage de vaincre de
					Natacha, c'est Urban Roundnet, c'est ton entrainement au service dans
					ton 20 mètres carrés, c'est tout ça le Roundnet Francais ! Et ce sont
					des joueurs et des joueuses qui commencent à se dire qu'on pourrait
					carrément créer une super belle surprise aux championnats du monde en
					Belgique en septembre. Bref les équipes se sont entraînées tout
					l'hiver et tout le monde est à bloc pour la nouvelle saison qui
					s'annonce !
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Pour ce format du tour des équipes j'ai demandé son avis à la
					communauté ! Qui seront les 5 équipes hommes et 3 équipes femmes qui
					représenteront la France aux championnats du monde en Belgique en
					septembre prochain ? Une trentaine de réponses ont été reçues ce qui
					donne un bon aperçu des forces en présence ! Les équipes qui ont reçu
					le plus de suffrages, dans l'ordre :
				</Typography>

				<Box mb={4}>
					<Image
						src="/images/blog/ts-angers-2022-1.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={800}
						layout="responsive"
					/>
				</Box>

				{/* TEAMS */}
				<Typography variant="h5" component="h2">
					<strong>
						Pour Combien (Robin Florinda & Dorian Améziane - Toulouse)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 1.12</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>Ma team s'appelle "Pour combien ?" pas "les pour combien"</i> m'a
					tout de suite recadré Robin lors de notre interview. J'ai menacé de
					les boycotter car de toute façon je me dis que cette équipe
					n'intéresse plus beaucoup de lecteurs. Ça commence à devenir lassant
					de raconter les champions de France 2021. Quand on pense que Dorian ne
					peut plus progresser en service et que Robin a atteint ses limites en
					défense… eh bien on se trompe. Robin mettrait même presque autant
					d'aces que Dorian ces derniers temps. Ce ne sera d'ailleurs pas très
					original de reprendre tous les commentaires des Spikix qui se
					demandent pourquoi ils ne sont pas déjà qualifiés pour les Worlds. Ils
					font d'ailleurs plus de dégâts qu'autre chose à jouer parmi nous selon
					certains. <i>"Ne pas jouer contre eux. Jamais. Pitié"</i> supplie
					Thibaud. <i>"Servir trop bien, c'est tricher"</i> confirme Théo. Bref
					la France est trop petite pour les Pour Combien. Leur objectif affirmé
					? Ne pas perdre un set en France cette année. Deal - j'offre un set
					dédicacé des Pour Combien pour l'équipe qui y parvient. Mais comment y
					parvenir ? Espérer une baisse de régime ? Faire boire Dorian ? Call
					chaque service, chaque attaque ? Servir comme Ryder, défendre comme
					Buddy ? Toutes ces options sont viables. Toutes ces options sont
					irréalistes. Sauf une.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Mareschal / Rey (Clément Rey &amp; Louis Mareschal) - Toulouse
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 2.95</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Aïe aïe aïe la paire est enfin formée et ça risque de piquer.{" "}
					<i>"Ils sont servico-dépendants, si ça rentre, t'es dans la merde"</i>
					. Très belle synthèse d'un observateur avisé. Mais est-ce tout à fait
					juste ? <i>"La défense n’aurait plus de secret pour cette équipe"</i>{" "}
					selon Lou, notamment suite à la collaboration de Clément (un{" "}
					<i>"gaucher fourbe"</i>
					selon certains) avec le célèbre défenseur Buddy Hammon. Louis saura-t-
					il tenir la comparaison ? Très certainement car le vice champion de
					France rentre de plusieurs mois très intenses à jouer avec les
					meilleurs joueurs tchèques ! De là à faire vaciller les Pour Combien ?
					C'est possible car Robin et Dorian n'ont pas 17 et 18 ans. Seule ombre
					au tableau un nom d'équipe qui en effet n'est pas à la hauteur de leur
					réputation. Anaïs suggère Maréchalerie ou Mareyschal. A vous de juger.
					Enfin pour les encourager une dernière citation prémonitoire de Louis
					lors de leur dernier tournoi en Allemagne :{" "}
					<i>"CLEMENT CONCENTRE TOI !"</i>
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Les Jouve (Louis Jouve & Thomas Jouve - Toulouse)</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 3.30</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					De l'avis de tous, les Jouve sortent d'une grosse semaine à Majorque.
					Une victoire contre une grosse équipe américano / allemande et contre
					les champions tchèques. Robin des PCB nous assure que Louis est
					"désormais bien plus fort au service est en défense qu'il ne l'était
					déjà et que{" "}
					<i>"Thomas prend bcp moins d'aces et est bien plus régulier ! "</i> Ce
					serait une réelle surprise de ne pas les voir aux Worlds tant leur
					régularité au plus haut niveau français depuis plusieurs années est
					sans faille. De plus, ils auront à cœur de se racheter après des
					championnats de France en deça de leurs espérances. Leur constance aux
					services (attention aux reverses) et leur concentration dans les
					moments chauds seront la clef pour battre les équipes citées ci-
					dessus !
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>M&N (Benoit Nguyen & Charles Mordacq - Paris)</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 3.86</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					"<i>L'origine du monde"</i> selon Didier. Enfin on est déjà sortis de
					Toulouse dans ce classement tout à fait éphémère, c'est un bon début !
					Une autre équipe dont la performance aux derniers championnats de
					France fut une (mauvaise) surprise. Vainqueurs du premier tournoi
					français de l'année à Angers, Charles et Benoît représentent la
					<i>"meilleure chance parisienne"</i> selon Anaïs. Seule condition pour
					faire partie des 5 : que leurs{" "}
					<i>"services toujours plus précis et techniques"</i>
					passent et que leur mental ne trépasse pas !{" "}
					<i>"De Benoît Paire à Roger Federer"</i> il n'y a qu'un (grand) pas.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Lekipeeee (Hugo Lacombe &amp; Marius Snoeck - Lyon)</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 4.25</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Tous auréolés de leur troisième place aux championnats de France, la
					meilleure équipe lyonnaise continue d'avancer très très vite !!
					Dorian, toujours très bien renseigné, note même qu'ils{" "}
					<i>
						"commencent à faire des entraînements focus sur leur point faible :
						les services "
					</i>
					.<i>"Ils sont partout"</i> note une autre commentatrice anonyme
					courageuse. Autre remarque anonyme de qualité que je me dois de
					rapporter sans omettre une virgule :{" "}
					<i>
						"Quand ils ont fait tomber les Jouve ils m'ont fait peur, puis on
						les a défoncé deux fois donc j'ai moins peur"
					</i>
					. Bref tout le monde est d'accord pour dire que cette équipe n'est
					plus une surprise et devrait représenter la France aux worlds.
				</Typography>

				<Box mb={4}>
					<Image
						src="/images/blog/ts-angers-2022-2.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={800}
						layout="responsive"
					/>
				</Box>

				<Divider sx={{ m: 8 }} />

				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Et ensuite ? De nombreuses équipes étaient recensées dans le
					questionnaire. Voici les 5 suivantes plébiscitées dans l'ordre. Et
					comme j'ai souvent tort dans mes prédictions et même s'il ne s'agit
					plus de prédictions mais du vote du public pour les 5 places pour les
					worlds, il est fort à parier que des équipes ci-dessous seront en fait
					au-dessus. Et du tout autant probable n'est ce pas que des équipes
					au-dessus seront en fait en dessous.
				</Typography>

				<Divider sx={{ m: 8 }} />

				<Typography variant="h5" component="h2">
					<strong>
						Les Spikes Boules (Erwan Chapelière & Valentin Perraud -
						Paris/Nantes){" "}
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 6.72</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Très athlétiques mais s’entraîne-t-il sur l’aspect technique du
						Roundnet ?"
					</i>{" "}
					s'interroge Dorian, décidément aussi précis dans ses services que ses
					analyses. Probablement une des meilleures défenses de France.{" "}
					<i>"La muraille de Chine"</i> ose même un lecteur qui se définit comme
					un <i>"fervent supporter de M&N et Overdrive"</i>. Si la cheville de
					Valentin tient le coup, que le gauche d'Erwan fait mouche, et qu'ils
					ont su résister à l'appel de la mousse du samedi soir, alors oui
					allons y parions Spike Boules.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Waikiki's (Lancelot Touzé & Thibaud Labourdette - Paris)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 7.65</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Les Waikiki's vous ont fait rêver lors des derniers championnats de
					France. Moi, j'en fait encore des cauchemars.{" "}
					<i>
						"Des génies incontestables de la discipline. Héros de toute une
						nation"
					</i>{" "}
					selon Thibaud lui-même. Cette équipe n'est plus une surprise tant
					Thibaud reste humble et régulier tandis que Lancelot s'est affirmé
					comme un des meilleurs joueurs parisiens et serveur hors pair !
					Rendez-vous avec M&N en phase finale.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Les expats (Alexandre Marti & Tom Eynard - Allemagne)</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 8.18</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Wunderbar ! Quelle joie de revoir ce bon vieux Marti de retour sur le
					circuit français. Associé à Tom, il ne faudra surtout pas sous-estimer
					cette équipe qui s'entraîne toutes les semaines avec les meilleurs
					joueurs allemands ! Pas de sable dans lequel enfoncer sa tête pour
					Marti, et s'il la garde froide, tous les espoirs sont permis (s'ils
					remménagent en France avant l'été comme le stipule le règlement de la
					fédération, bien entendu).
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Execut (Auxence Clark & Tom Hullot - Montpellier)</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 8.42</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Amély ne s'y trompe pas :{" "}
					<i>
						"Entre la confiance avec les nouveaux maillots FORCE et le talent
						des deux joueurs, ils iront loin !"
					</i>
					Encore une équipe qui ne surprend plus tant elle est régulière au plus
					haut niveau français, après avoir fini 6ème aux championnats de
					France, pas de raison que la tête d'afiche montpelliéraine n'ait pas
					sa place dans les 5 !
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Pierre Feuille Victor (Pierre Lecrosnier & Victor Cambois -
						Paris/Lyon)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 9.55</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Une équipe solide, à condition qu'ils ne tombent pas dans un puits"
					</i>
					Très bonne analyse d'Anaïs - un gaucher complet et un serveur
					surpuissant, ca fait des étincelles, à condition que ça reste sur le
					filet. Quid des équipes suivantes ? Encore beaucoup de niveau
					ci-dessous et tout peut arriver tant les écarts se sont resserrés.
					Suite du tour d'horizon dans le désordre !
				</Typography>

				<Box mb={4}>
					<Image
						src="/images/blog/ts-angers-2022-3.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={800}
						layout="responsive"
					/>
				</Box>

				<Divider sx={{ m: 8 }} />

				<Typography variant="h5" component="h2">
					<strong>Tac Tac (Gabriel Rodriguez & Ryan Danekas - Paris)</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>"Les plus drôles"</i>, <i>"Forcément pour mettre l'ambiance</i>",{" "}
					<i>
						"Quoi qu'il arrive au niveau du classement, cette équipe gagnera
						toujours le prix de Meilleure Équipe Drole et Positive !"
					</i>
					,{" "}
					<i>
						"Sûrement l'équipe la plus fun du tournoi !! Jamais loin du top,
						c'est le parfait combo entre fun et performance."
					</i>{" "}
					<i>
						"Si seulement le roundnet se jouait en 2 touches... Ils seraient au
						top"
					</i>
					. Et si les cuts gauche de Ryan et les nouveaux services de Gabi
					mettaient tout le monde d'accord ?
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Here & Now (Nicolas Brun & Tristan Olin - Paris)</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Equipe très solide qui pourrait faire son trou tant le duo sud
					parisien a progressé ! Les back end de Nico et les flicks de Tristan
					risquent de faire quelques étincelles. Mais encore une fois, Thibaud
					résume tout mieux que moi :{" "}
					<i>
						"Avec une hauteur cumulée d'environ 3m80 au doigt mouillé, Nico et
						Tristan forment une paire historique, régulièrement dans le top
						classement. Avec des backends incisifs, ne vous fiez pas à l'âge de
						Nico, c'est un leurre, il est bien plus en forme que nous tous
						réunis"
					</i>
					.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Les Spikouzes (Gabriel Chamoulaud & Victor Pétry - Nantes)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Demi finaliste à Angers, le mois dernier, les Spikouzes sont
					clairement sous-côtés et risquent d'en surprendre plus d'un ! Les cut
					et attaques de Victor et la défense de Gabriel peuvent nous donner une
					paire redoutable ! Mais le globe trotter Gabriel déménage en Suisse
					prochainement ! Sauront-ils garder la même complémentarité ?
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Poulet Curry (Aymeric Sandoz et Benoit Durand - Paris)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Poulet Carry, pardon Curry est l'équipe la plus fraîchement formée qui
					sera une des plus excitantes à voir jouer. Un joueur confirmé au cut
					gauche saignant avec la plus belle révélation des derniers mois à
					Paris (Thibaud a compté 4,730 heurs de jeu pour Aymeric en 2021).{" "}
					<i>"C'est pas encore perdu"</i> pour Aymeric et Benoit s'ils trouvent
					une bonne entente sur le terrain et qu'Aymeric comprend enfin qu'un
					terrain de roundnet n'est pas à confondre avec un comptoir de café.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						No Pressure (Baptiste Maison & Loïs Delenclos - Abbeville)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Tout est dans le titre pour cette équipe - Baptiste dont la puissance
					et les amortis commencent à se faire une petite réputation en France
					et en Europe. Il joue cette année avec Loïs, autre Abbevillois en
					constante progression. Une équipe qui travaille très très dur et qui
					est ultra motivée !
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Robocop et Basilic (Sebastien Lawrence & Warren Coopman) - Paris
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Les artistes sont de retour. Et cette fois-ci, ils n'ont pas manqué la
					deadline pour l'inscription. Le fantasque Seb,{" "}
					<i>"un des joueurs les plus agréables à voir jouer"</i> selon Didier
					et la "vision du jeu" de Warren en feront une équipe épouvantail !
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>Fantaulas (Robin Souriau & Hugo Valette - Paris)</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>"Papy fait de la résistance OU le réveil de la force. Au choix"</i>{" "}
					selon Hugo. Une équipe anticipée dès 2020 qui prend enfin forme et qui
					prendra du plaisir cette année sur les terrains de Roundnet. Ah une
					citation anonyme pour les booster d'un joueur qui a passé plus de 4000
					heures sur les terrains en 2021{" "}
					<i>
						"Équipe talentueuse qui s'entraîne en moyenne 1 fois par an. Si
						cette équipe gagne un tournoi j'arrête le spike."
					</i>{" "}
					Je vous en supplie, vous savez ce qu'il vous reste à faire.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Team pas dégeu (Théo Van Hemelryck & Louis Durand - Paris)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Deux autres très très grosses progressions parisiennes ! La puissance
					de Louis et les services de Théo ne seront pas à prendre à la légère!
					Des <i>"machines à boomball"</i> selon Clément qui seront là pour
					engranger un max d'expérience cette année !{" "}
					<i>"Team "Pas Degeu", c'est notre nom, vraiment"</i> souligne
					tranquillement Théo. Quelle signification aura- t- il en fin de saison
					? .
				</Typography>

				<Divider sx={{ m: 8 }} />

				<Typography variant="body1" component="p" gutterBottom>
					Et comme d'habitude je n'ai qu'une attente c'est que d'autres équipes
					me fassent mentir ! Les Magniflick par exemple, avec Paul déjà appelé
					à être champions de France dès 2023 ? Ou d'autres venus d'autres
					villes ?
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Passons désormais aux femmes. De plus en plus de femmes pratiquent le
					roundnet et s'entraînent intensément et c'est une excellente nouvelle.
					La fédé de roundnet a elle-même recruté 4 femmes dans son board cette
					année (Gaëlle, Amély, Florie et Lou) et ça risque de bouger ! Quelles
					sont les forces en présence cette année ? Trois équipes féminines
					représenteront la France en Belgique en septembre. Présentation dans
					l'ordre des votes et commentaires concotés par vos soins, c'est parti
					:
				</Typography>

				<Divider sx={{ m: 8 }} />

				<Box mb={4}>
					<Image
						src="/images/blog/ts-angers-2022-4.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={800}
						layout="responsive"
					/>
				</Box>

				<Typography variant="h5" component="h2">
					<strong>
						Puces & Dive (Inès Paysan & Natacha Alt - Gif / Toulouse)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 1.15</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>"Les Pour Combien féminines"</i> selon Baptiste. Sans conteste les
					grandes favorites, Natacha ne s'arrête pas de progresser en défense et
					sur les attaques et la précision des attaques d'Inès est incontestée
					en France. Cette dernière a un peu moins joué ces derniers temps mais
					c'est la saison de Roundnet qui reprend et il sera très dur de
					détrôner les championnes de France !
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Kayak Volants (Anaïs Duport & Juliette Dufourcq - Paris)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 2.00</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Les kayaks poneys évoluent et deviennent les kayaks volants : elles
						ne galopent plus, elles volent"
					</i>{" "}
					tient absolument à nous raconter Anaïs. La meilleure paire parisienne
					avec les attaques rasantes d'Anaïs et les services puissants de
					Juliette suffiront-ils à détrôner les championnes ?{" "}
					<i>
						"Aucune confrontation depuis les championnats de France, on a hâte
						de prendre notre revanche !"
					</i>
					. Enfin la censure ne peut m'empêcher de citer à nouveau ce lecteur
					anonyme que les nombreuses heures passées sur les terrains en 2020 ont
					décidément bien dévergondé :{" "}
					<i>
						"Let-motiv d'anais : la meilleure défense, c'est l'attaque. Il
						faudra cependant être plus mobile qu'un poteau électrique pour
						espérer battre Puces &amp; Dive."
					</i>
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Loudine (Louise Eyd & Ondine Novarese - Toulouse / Gif)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 3.09</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Que ce soit Louise et Ondine, les deux joueuses sont très fortes et
						tellement gentilles !"
					</i>{" "}
					selon Amély. Pas sur que ça suffise mais c'est un bon début pour cette
					paire qui a énormément de potentiel après un premier tournoi à
					Montpellier. Louise continue de s'entraîner avec les meilleurs joueurs
					de France tandis qu'Ondine a beaucoup travaillé son service depuis
					quelques mois !{" "}
					<i>
						"Ne vous fiez pas à leur nom digne d'un pokémon, ces deux-là
						pourraient bien prendre une place qualificative !"
					</i>
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Spiking on Sunshine (Liza Vanangamoudiar & Amély Joly - Gif /
						Toulouse)
					</strong>
				</Typography>
				<Typography variant="body2" component="p" sx={{ mb: 2 }}>
					<i>moyenne des votes 3.83</i>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"On a jamais joué ensemble, mais nous sommes très motivées pour se
						battre pour se qualifier aux mondiaux !"
					</i>{" "}
					Une nouvelle alliance intéressante entre Toulouse et Gif sur Roundnet.
					Amély est une des femmes les plus motivées du circuit en constante
					progression et qui pourra compter sur la plus grande compétitrice du
					circuit pour l'épauler ! Une détermination sans failles et un moral
					d'acier. Cette équipe spikera-t-elle encore en tournoi au moment du
					sunset ?
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Line et Vitable (Marina Goncalves & Clara Maucourt - Paris / Nantes)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Tu pourras mentionner Marina comme toulousaine-parisienne
						maintenant vu le nombre de fois qu'elle nous a rejoint à Toulouse"
					</i>{" "}
					nous indique une lectrice bien informée. A Paris ou à Toulouse, Marina
					adore toujours autant rigoler. Et sur le terrain ça commence à taper
					aussi.
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Les filles de l'Est (Hannah Magdalena & Maya Barkan -
						Nantes/Paris/Autriche/Allemagne)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Coup de cœur des lecteurs, notre favorite paire internationale. Alors
					oui il sera compliqué pour elles de concourir sous les couleurs
					françaises mais vous risquez de les voir plus que n'importe qui sur
					les terrains français cette année. Elles ne seront définitivement pas
					à l'ouest. (en revanche il faudra sans doute leur traduire cette
					dernière boutade)
				</Typography>

				<Typography variant="h5" component="h2">
					<strong>
						Les Colibris (Louisiane Lemaire & Emilia Rossi - Montpellier/Paris)
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					<i>
						"Lou va impressionner beaucoup de personnes avec sa progression !
						Elle est motivée et persévérante, deux qualités admirables au
						roundnet ! (et elle a un joli backhand)"
					</i>
					. Encore de sages paroles d'Amély ! Une nouvelle équipe qui s'est
					récemment bien entraînée à Paris et qu'on a hâte de voir briller sur
					la scène nationale !
				</Typography>

				<Divider sx={{ m: 8 }} />
				<Typography variant="body1" component="p" gutterBottom>
					Bonne saison à tous et à toutes !!
				</Typography>
				<Typography variant="body1" component="p" gutterBottom sx={{ mb: 4 }}>
					Charles
				</Typography>

				<Box mb={4}>
					<Image
						src="/images/blog/ts-angers-2022-5.jpg"
						alt="Tour des France des meilleurs équipes de Roundnet !"
						width={1200}
						height={850}
						layout="responsive"
					/>
				</Box>
			</Container>
		</Fragment>
	);
}
