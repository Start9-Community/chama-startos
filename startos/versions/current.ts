import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.11:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.11 is all about the phone. Background alerts now tell you exactly what's waiting — sign the payout, pay the other side, confirm — and tapping one opens that trade, while your trades themselves never leave your device. The keyboard no longer hides the chat, light mode looks right on Android, and every trade room shows one clock that's the same for everyone. Tap a QR to open your wallet, and the claim button says plainly where your sats will go. Seats show who's who at a glance, and an offer that simply ran out no longer nags you. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.11 es todo sobre el teléfono. Las alertas en segundo plano ahora te dicen exactamente qué está pendiente —firmar el cobro, pagar a la otra parte, confirmar— y al tocar una se abre esa operación, mientras tus operaciones nunca salen de tu dispositivo. El teclado ya no tapa el chat, el modo claro se ve bien en Android y cada sala muestra un solo reloj, igual para todos. Toca un QR para abrir tu monedero, y el botón de cobro dice claramente adónde irán tus sats. Los asientos muestran quién es quién de un vistazo, y una oferta que simplemente caducó ya no te insiste. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.11 dreht sich ums Telefon. Hintergrund-Benachrichtigungen sagen dir jetzt genau, was ansteht – Auszahlung unterschreiben, die andere Seite bezahlen, bestätigen – und ein Tippen öffnet genau diesen Trade, während deine Trades dein Gerät nie verlassen. Die Tastatur verdeckt den Chat nicht mehr, der helle Modus sieht auf Android richtig aus, und jeder Handelsraum zeigt eine Uhr, die für alle gleich ist. Tippe auf einen QR-Code, um deine Wallet zu öffnen, und der Auszahlungsknopf sagt klar, wohin deine Sats gehen. Sitze zeigen auf einen Blick, wer wer ist, und ein Angebot, das einfach abgelaufen ist, nervt nicht mehr. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.11 to wydanie dla telefonu. Powiadomienia w tle mówią teraz dokładnie, co czeka — podpisz wypłatę, zapłać drugiej stronie, potwierdź — a dotknięcie otwiera tę transakcję, podczas gdy same transakcje nigdy nie opuszczają twojego urządzenia. Klawiatura nie zasłania już czatu, jasny motyw wygląda dobrze na Androidzie, a każdy pokój pokazuje jeden zegar, taki sam dla wszystkich. Dotknij kodu QR, by otworzyć portfel, a przycisk odbioru jasno mówi, dokąd trafią satsy. Miejsca pokazują na pierwszy rzut oka, kto jest kim, a oferta, która po prostu wygasła, już nie nęka. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.11, c'est le téléphone. Les alertes en arrière-plan disent désormais exactement ce qui vous attend — signer le versement, payer l'autre partie, confirmer — et un appui ouvre cet échange, tandis que vos échanges eux-mêmes ne quittent jamais votre appareil. Le clavier ne cache plus la discussion, le mode clair s'affiche correctement sur Android, et chaque salle montre une seule horloge, la même pour tout le monde. Appuyez sur un QR pour ouvrir votre portefeuille, et le bouton de retrait dit clairement où iront vos sats. Les sièges montrent qui est qui d'un coup d'œil, et une offre simplement expirée ne vous relance plus. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
