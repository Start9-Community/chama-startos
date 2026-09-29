import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.13:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.13 makes background alerts work from the moment you switch them on: your phone registers right away and watches every trade you're part of, not just the ones you touched on this device, and the test alert tells you exactly what happened. A trade someone messaged after it closed no longer vanishes from your history, My trades shows only trades this device can vouch for with their real dates and amounts, and text selection looks right in light mode on Android. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.13 hace que las alertas en segundo plano funcionen desde el momento en que las activas: tu teléfono se registra de inmediato y vigila todas las operaciones en las que participas, no solo las que tocaste desde este dispositivo, y la alerta de prueba te dice exactamente qué pasó. Una operación en la que alguien escribió después de cerrarse ya no desaparece de tu historial, Mis operaciones muestra solo las que este dispositivo puede respaldar, con sus fechas y montos reales, y la selección de texto se ve bien en modo claro en Android. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.13 lässt Hintergrund-Benachrichtigungen ab dem Moment funktionieren, in dem du sie einschaltest: Dein Telefon registriert sich sofort und beobachtet jeden Trade, an dem du beteiligt bist – nicht nur die, die du auf diesem Gerät angefasst hast –, und der Testalarm sagt dir genau, was passiert ist. Ein Trade, in dem jemand nach dem Abschluss geschrieben hat, verschwindet nicht mehr aus deinem Verlauf, „Meine Trades“ zeigt nur Trades, für die dieses Gerät bürgen kann, mit echten Daten und Beträgen, und die Textauswahl sieht im hellen Modus auf Android richtig aus. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.13 sprawia, że powiadomienia w tle działają od chwili włączenia: telefon rejestruje się od razu i obserwuje każdą transakcję, w której uczestniczysz, nie tylko te, których dotknąłeś na tym urządzeniu, a alert testowy mówi dokładnie, co się stało. Transakcja, w której ktoś napisał po jej zamknięciu, nie znika już z historii, Moje transakcje pokazują tylko te, za które to urządzenie może ręczyć, z prawdziwymi datami i kwotami, a zaznaczanie tekstu wygląda dobrze w jasnym motywie na Androidzie. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.13 fait fonctionner les alertes en arrière-plan dès que vous les activez : votre téléphone s'enregistre aussitôt et surveille chaque échange auquel vous participez, pas seulement ceux touchés depuis cet appareil, et l'alerte de test vous dit exactement ce qui s'est passé. Un échange où quelqu'un a écrit après sa clôture ne disparaît plus de votre historique, Mes échanges n'affiche que ceux dont cet appareil peut répondre, avec leurs vraies dates et montants, et la sélection de texte s'affiche correctement en mode clair sur Android. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
