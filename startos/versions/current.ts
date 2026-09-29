import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.14:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.14 makes background alerts fire when the other person acts, whether or not they use alerts themselves. Looking at an ecash QR is no longer a claim: nothing moves until you say you've imported it. The claim and funding cards have Back buttons, so you can change your mind without closing, and the review screen shows the offer's range under the amount you picked. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.14 hace que las alertas en segundo plano se disparen cuando la otra persona actúa, use o no alertas ella misma. Mirar un QR de ecash ya no es un cobro: nada se mueve hasta que confirmas que lo importaste. Las tarjetas de cobro y de fondeo tienen botones Atrás, para cambiar de idea sin cerrar, y la pantalla de revisión muestra el rango de la oferta bajo el monto que elegiste. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.14 lässt Hintergrund-Benachrichtigungen auslösen, wenn die andere Person handelt, egal ob sie selbst Benachrichtigungen nutzt. Ein Ecash-QR anzusehen ist keine Auszahlung mehr: Nichts bewegt sich, bis du bestätigst, dass du ihn importiert hast. Die Auszahlungs- und Einzahlungskarten haben Zurück-Knöpfe, damit du es dir anders überlegen kannst, ohne zu schließen, und der Prüfbildschirm zeigt die Spanne des Angebots unter dem gewählten Betrag. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.14 sprawia, że powiadomienia w tle uruchamiają się, gdy druga osoba działa, niezależnie od tego, czy sama używa powiadomień. Obejrzenie kodu QR ecash nie jest już odbiorem: nic się nie dzieje, dopóki nie potwierdzisz importu. Karty odbioru i wpłaty mają przyciski Wstecz, więc możesz zmienić zdanie bez zamykania, a ekran przeglądu pokazuje zakres oferty pod wybraną kwotą. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.14 fait partir les alertes en arrière-plan quand l'autre personne agit, qu'elle utilise ou non les alertes elle-même. Regarder un QR ecash n'est plus un retrait : rien ne bouge tant que vous n'avez pas confirmé l'import. Les cartes de retrait et de dépôt ont des boutons Retour, pour changer d'avis sans fermer, et l'écran de vérification affiche la fourchette de l'offre sous le montant choisi. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
