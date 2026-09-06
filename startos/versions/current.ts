import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.3.1:0',
  releaseNotes: {
    en_US:
      'Chama 6.3.1 gives every trader a friendly generated name (like Swift Twiga) derived locally from their key — the same name on every device with no setup — plus an optional custom name in Settings. It also fixes cream side bars that could surround a dark session when the device prefers light mode, and a settled-trade view that clipped its text on iPhones. No data migration; wallets, trades, and history carry over unchanged.',
    es_ES:
      'Chama 6.3.1 da a cada comerciante un nombre generado amigable (como Swift Twiga) derivado localmente de su clave — el mismo nombre en todos los dispositivos sin configuración — más un nombre personalizado opcional en Ajustes. También corrige las franjas color crema que podían rodear una sesión oscura cuando el dispositivo prefiere el modo claro, y una vista de operación liquidada que recortaba su texto en iPhone. Sin migración de datos; monederos, operaciones e historial se conservan sin cambios.',
    de_DE:
      'Chama 6.3.1 gibt jedem Händler einen freundlichen generierten Namen (wie Swift Twiga), lokal aus dem Schlüssel abgeleitet — derselbe Name auf jedem Gerät, ohne Einrichtung — plus einen optionalen eigenen Namen in den Einstellungen. Außerdem behoben: cremefarbene Seitenstreifen um eine dunkle Sitzung, wenn das Gerät den hellen Modus bevorzugt, und eine abgeschlossene Handelsansicht, die auf iPhones ihren Text abschnitt. Keine Datenmigration — Wallets, Trades und Verlauf bleiben unverändert.',
    pl_PL:
      'Chama 6.3.1 nadaje każdemu handlującemu przyjazną wygenerowaną nazwę (jak Swift Twiga), wyprowadzoną lokalnie z klucza — ta sama nazwa na każdym urządzeniu, bez konfiguracji — plus opcjonalną własną nazwę w Ustawieniach. Poprawiono też kremowe pasy wokół ciemnej sesji, gdy urządzenie preferuje jasny motyw, oraz widok rozliczonej transakcji obcinający tekst na iPhone. Bez migracji danych — portfele, transakcje i historia pozostają bez zmian.',
    fr_FR:
      "Chama 6.3.1 donne à chaque commerçant un nom généré convivial (comme Swift Twiga), dérivé localement de sa clé — le même nom sur chaque appareil, sans configuration — plus un nom personnalisé facultatif dans les Réglages. Corrige aussi les bandes crème qui pouvaient entourer une session sombre quand l'appareil préfère le mode clair, et une vue d'échange réglé qui tronquait son texte sur iPhone. Aucune migration de données — portefeuilles, échanges et historique sont conservés tels quels.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
