import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.2:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.2 declares the road ahead: circles are becoming the real merry-go-round — one pot, one payday each round, everyone collects once, with your turn decided by arithmetic (lock fast this week, collect sooner next week; hosts collect last), never by privilege. The project philosophy — trade with people, not platforms — is now published. Under the hood, every future circle settlement carries its own cryptographic evidence and this build already reads it, so your node is day-one ready when the merry-go-round switches on in 6.5. Nothing changes in today's circles: equal shares, the same sats back, zero fees, non-custodial throughout. No data migration.",
    es_ES:
      'Chama 6.4.2 declara el camino: los círculos se convierten en la verdadera tanda — un bote, un día de pago por ronda, todos cobran una vez, con el turno decidido por aritmética (asegura rápido esta semana y cobras antes la próxima; el anfitrión cobra al final), nunca por privilegio. La filosofía del proyecto — comercia con personas, no con plataformas — ya está publicada. Por debajo, cada liquidación futura de círculos lleva su propia evidencia criptográfica y esta versión ya la lee: tu nodo estará listo el primer día cuando la tanda se active en 6.5. Nada cambia en los círculos de hoy: partes iguales, los mismos sats de vuelta, cero comisiones, sin custodia. Sin migración de datos.',
    de_DE:
      'Chama 6.4.2 erklärt den Weg: Aus den Kreisen wird das echte Karussell — ein Topf, ein Zahltag pro Runde, jeder sammelt einmal ein, die Reihenfolge entscheidet Arithmetik (diese Woche schnell sperren, nächste Woche früher einsammeln; der Gastgeber zuletzt), niemals Privilegien. Die Projektphilosophie — handle mit Menschen, nicht mit Plattformen — ist jetzt veröffentlicht. Unter der Haube trägt künftig jede Kreis-Abwicklung ihren eigenen kryptografischen Nachweis, und dieser Build liest ihn bereits: dein Node ist am ersten Tag bereit, wenn das Karussell in 6.5 startet. An heutigen Kreisen ändert sich nichts: gleiche Anteile, dieselben Sats zurück, null Gebühren, ohne Verwahrung. Keine Datenmigration.',
    pl_PL:
      'Chama 6.4.2 ogłasza kierunek: kręgi stają się prawdziwą karuzelą oszczędnościową — jedna pula, jedna wypłata na rundę, każdy zbiera raz, a kolejność wyznacza arytmetyka (zablokuj szybko w tym tygodniu, zbierzesz wcześniej w następnym; gospodarz zbiera ostatni), nigdy przywilej. Filozofia projektu — handluj z ludźmi, nie z platformami — została opublikowana. Pod maską każde przyszłe rozliczenie kręgu niesie własny kryptograficzny dowód, a ta wersja już go czyta: twój węzeł będzie gotowy pierwszego dnia, gdy karuzela ruszy w 6.5. W dzisiejszych kręgach nic się nie zmienia: równe udziały, te same saty z powrotem, zero opłat, bez powiernictwa. Bez migracji danych.',
    fr_FR:
      "Chama 6.4.2 déclare le cap : les cercles deviennent la vraie tontine — une cagnotte, une paie à chaque tour, chacun encaisse une fois, l'ordre décidé par l'arithmétique (verrouillez vite cette semaine, encaissez plus tôt la prochaine ; l'hôte en dernier), jamais par privilège. La philosophie du projet — échangez avec des personnes, pas des plateformes — est désormais publiée. Sous le capot, chaque futur règlement de cercle porte sa propre preuve cryptographique et cette version la lit déjà : votre nœud sera prêt dès le premier jour quand la tontine s'allumera en 6.5. Rien ne change dans les cercles d'aujourd'hui : parts égales, les mêmes sats de retour, zéro frais, non-custodial. Aucune migration de données.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
