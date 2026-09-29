import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.15:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.15 makes sure every device sees the same trade. A lock that arrives after the buyer's seat has lapsed is now refused everywhere, and the room tells you where your sats are, with one button to take them back. The funding countdown follows the buyer's seat, so you can't pay into a seat that's about to run out. Background alerts now fire when someone joins your offer or messages you, even if your phone was closed. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.15 asegura que todos los dispositivos vean la misma operación. Un bloqueo que llega después de que el asiento del comprador caducó ahora se rechaza en todas partes, y la sala te dice dónde están tus sats, con un botón para recuperarlos. La cuenta atrás del fondeo sigue el asiento del comprador, así no puedes pagar a un asiento a punto de caducar. Las alertas en segundo plano ahora se disparan cuando alguien se une a tu oferta o te escribe, aunque tu teléfono estuviera cerrado. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.15 sorgt dafür, dass jedes Gerät denselben Trade sieht. Eine Sperre, die nach Ablauf des Käufersitzes eintrifft, wird jetzt überall abgelehnt, und der Raum sagt dir, wo deine Sats sind, mit einem Knopf, um sie zurückzuholen. Der Countdown beim Einzahlen folgt dem Käufersitz, damit du nicht in einen Sitz einzahlst, der gleich abläuft. Hintergrund-Benachrichtigungen lösen jetzt aus, wenn jemand deinem Angebot beitritt oder dir schreibt, auch wenn dein Telefon geschlossen war. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.15 dba o to, by każde urządzenie widziało tę samą transakcję. Blokada, która przychodzi po wygaśnięciu miejsca kupującego, jest teraz odrzucana wszędzie, a pokój mówi, gdzie są twoje satsy, z jednym przyciskiem do ich odzyskania. Odliczanie wpłaty podąża za miejscem kupującego, więc nie zapłacisz na miejsce, które zaraz wygaśnie. Powiadomienia w tle uruchamiają się teraz, gdy ktoś dołącza do twojej oferty lub pisze do ciebie, nawet jeśli telefon był zamknięty. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.15 veille à ce que chaque appareil voie le même échange. Un verrouillage qui arrive après l'expiration du siège de l'acheteur est désormais refusé partout, et la salle vous dit où sont vos sats, avec un bouton pour les récupérer. Le compte à rebours du dépôt suit le siège de l'acheteur, pour ne jamais payer vers un siège sur le point d'expirer. Les alertes en arrière-plan partent désormais quand quelqu'un rejoint votre offre ou vous écrit, même téléphone fermé. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
