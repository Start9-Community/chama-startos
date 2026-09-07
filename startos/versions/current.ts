import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.3.3:0',
  releaseNotes: {
    en_US:
      'Chama 6.3.3 makes publishing trades resilient on flaky connections: when every relay connection has silently died (common after a phone sleeps), the app now reconnects and resends automatically instead of showing an error. The Me screen tabs respond instantly with a long trade history, and your profile name moved to the top of Settings. No data migration; wallets, trades, and history carry over unchanged.',
    es_ES:
      'Chama 6.3.3 hace resistente la publicación de operaciones con conexiones inestables: cuando todas las conexiones a los relays han muerto en silencio (habitual tras dormirse el teléfono), la aplicación ahora reconecta y reenvía automáticamente en lugar de mostrar un error. Las pestañas de la pantalla Yo responden al instante con un historial largo, y tu nombre de perfil pasó a la parte superior de Ajustes. Sin migración de datos; monederos, operaciones e historial se conservan sin cambios.',
    de_DE:
      'Chama 6.3.3 macht das Veröffentlichen von Trades bei instabilen Verbindungen robust: Wenn alle Relay-Verbindungen still gestorben sind (üblich nach dem Schlafen des Telefons), verbindet die App jetzt automatisch neu und sendet erneut, statt einen Fehler zu zeigen. Die Tabs des Ich-Bildschirms reagieren auch bei langer Handelshistorie sofort, und der Profilname steht jetzt oben in den Einstellungen. Keine Datenmigration — Wallets, Trades und Verlauf bleiben unverändert.',
    pl_PL:
      'Chama 6.3.3 czyni publikowanie transakcji odpornym na niestabilne połączenia: gdy wszystkie połączenia z przekaźnikami po cichu padły (typowe po uśpieniu telefonu), aplikacja teraz automatycznie łączy się ponownie i wysyła ponownie zamiast pokazywać błąd. Zakładki ekranu Ja reagują natychmiast przy długiej historii, a nazwa profilu trafiła na górę Ustawień. Bez migracji danych — portfele, transakcje i historia pozostają bez zmian.',
    fr_FR:
      "Chama 6.3.3 rend la publication des échanges résiliente sur connexions instables : quand toutes les connexions aux relais sont mortes en silence (courant après la mise en veille du téléphone), l'application reconnecte et renvoie désormais automatiquement au lieu d'afficher une erreur. Les onglets de l'écran Moi réagissent instantanément même avec un long historique, et votre nom de profil est passé en haut des Réglages. Aucune migration de données — portefeuilles, échanges et historique sont conservés tels quels.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
