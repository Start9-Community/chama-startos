import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.8:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.8 keeps your trades moving, even when Lightning has a bad day. If Lightning isn't working in your community, Chama tells you right away and lets you pay with ecash or the balance you already have — no more dead ends. Missed the moment to lock? One tap to join again, or to post your offer again. Your wallet balance is always on screen, you can see how to pay the other person without leaving the trade, and everyone's chosen name now shows up the same on every device. Your offers stay live while you use Chama and take a break when you're away. And the little developer badge next to the version number is gone. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.8 mantiene tus operaciones en marcha, incluso cuando Lightning tiene un mal día. Si Lightning no funciona en tu comunidad, Chama te lo dice enseguida y te deja pagar con ecash o con el saldo que ya tienes: se acabaron los callejones sin salida. ¿Se te pasó el momento de bloquear? Un toque para volver a unirte o para publicar tu oferta de nuevo. Tu saldo siempre está a la vista, puedes ver cómo pagar a la otra persona sin salir de la operación, y el nombre que cada uno eligió ahora se ve igual en todos los dispositivos. Tus ofertas siguen activas mientras usas Chama y descansan cuando no estás. Y la pequeña etiqueta de desarrollador junto al número de versión ya no aparece. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.8 hält deine Trades am Laufen, auch wenn Lightning einen schlechten Tag hat. Funktioniert Lightning in deiner Community nicht, sagt Chama dir das sofort und lässt dich mit Ecash oder deinem vorhandenen Guthaben bezahlen – keine Sackgassen mehr. Den Moment zum Sperren verpasst? Ein Tippen, und du trittst erneut bei oder stellst dein Angebot neu ein. Dein Guthaben ist immer sichtbar, du siehst direkt im Trade, wie du die andere Person bezahlst, und der gewählte Name jeder Person erscheint jetzt auf allen Geräten gleich. Deine Angebote bleiben aktiv, solange du Chama nutzt, und pausieren, wenn du weg bist. Und das kleine Entwickler-Abzeichen neben der Versionsnummer ist verschwunden. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.8 utrzymuje twoje transakcje w ruchu, nawet gdy Lightning ma gorszy dzień. Jeśli Lightning nie działa w twojej społeczności, Chama od razu ci to mówi i pozwala zapłacić ecash albo saldem, które już masz — koniec ze ślepymi zaułkami. Przegapiłeś moment na blokadę? Jedno dotknięcie, by dołączyć ponownie albo znowu opublikować ofertę. Saldo portfela jest zawsze na ekranie, widzisz, jak zapłacić drugiej osobie, nie wychodząc z transakcji, a wybrane imię każdego wygląda teraz tak samo na każdym urządzeniu. Twoje oferty pozostają aktywne, gdy korzystasz z Chamy, i odpoczywają, gdy cię nie ma. A mała plakietka dewelopera obok numeru wersji zniknęła. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.8 fait avancer vos échanges, même quand Lightning a un mauvais jour. Si Lightning ne fonctionne pas dans votre communauté, Chama vous le dit tout de suite et vous laisse payer en ecash ou avec le solde que vous avez déjà — fini les impasses. Vous avez manqué le moment de verrouiller ? Un geste pour rejoindre à nouveau, ou pour republier votre offre. Votre solde est toujours à l'écran, vous voyez comment payer l'autre personne sans quitter l'échange, et le nom choisi par chacun s'affiche désormais pareil sur tous les appareils. Vos offres restent en ligne tant que vous utilisez Chama et se mettent en pause quand vous êtes absent. Et le petit badge développeur à côté du numéro de version a disparu. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
