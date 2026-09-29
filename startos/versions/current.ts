import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.12:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.12 fixes what the first day on phones found. Background alerts now show up every time, and a small log in Settings lets you see each one arrive. Sharing a trade from the app gives a real getchama.app link. On iPhone, disputes work even in Lockdown Mode and the keyboard no longer hides the chat. Your past trades show the date they were made. Tap a QR to open Fedi, Zeus or Strike straight from the trade, and give your saved wallets names so you know which is which. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.12 corrige lo que encontró el primer día en los teléfonos. Las alertas en segundo plano ahora aparecen siempre, y un pequeño registro en Ajustes te deja ver llegar cada una. Compartir una operación desde la app da un enlace real de getchama.app. En iPhone, las disputas funcionan incluso con el Modo Aislamiento y el teclado ya no tapa el chat. Tus operaciones pasadas muestran la fecha en que se hicieron. Toca un QR para abrir Fedi, Zeus o Strike directamente desde la operación, y ponle nombre a tus monederos guardados para saber cuál es cuál. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.12 behebt, was der erste Tag auf Telefonen gezeigt hat. Hintergrund-Benachrichtigungen erscheinen jetzt jedes Mal, und ein kleines Protokoll in den Einstellungen zeigt dir jede einzelne beim Eintreffen. Einen Trade aus der App zu teilen ergibt einen echten getchama.app-Link. Auf dem iPhone funktionieren Streitfälle auch im Blockierungsmodus, und die Tastatur verdeckt den Chat nicht mehr. Deine vergangenen Trades zeigen das Datum, an dem sie gemacht wurden. Tippe auf einen QR-Code, um Fedi, Zeus oder Strike direkt aus dem Trade zu öffnen, und gib deinen gespeicherten Wallets Namen, damit du weißt, welche welche ist. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.12 naprawia to, co pokazał pierwszy dzień na telefonach. Powiadomienia w tle pojawiają się teraz za każdym razem, a mały dziennik w Ustawieniach pozwala zobaczyć, jak każde z nich dociera. Udostępnienie transakcji z aplikacji daje prawdziwy link getchama.app. Na iPhonie spory działają nawet w trybie blokady, a klawiatura nie zasłania już czatu. Twoje dawne transakcje pokazują datę, kiedy zostały zawarte. Dotknij kodu QR, by otworzyć Fedi, Zeusa lub Strike prosto z transakcji, i nadaj nazwy zapisanym portfelom, żeby wiedzieć, który jest który. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.12 corrige ce que le premier jour sur téléphone a révélé. Les alertes en arrière-plan s'affichent désormais à chaque fois, et un petit journal dans les Réglages vous laisse voir chacune arriver. Partager un échange depuis l'app donne un vrai lien getchama.app. Sur iPhone, les litiges fonctionnent même en mode Isolement et le clavier ne cache plus la discussion. Vos échanges passés affichent la date à laquelle ils ont été faits. Appuyez sur un QR pour ouvrir Fedi, Zeus ou Strike directement depuis l'échange, et donnez un nom à vos portefeuilles enregistrés pour savoir lequel est lequel. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
