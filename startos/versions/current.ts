import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.3.0:0',
  releaseNotes: {
    en_US:
      'Chama 6.3.0 redesigns the Dashboard around a live trading-volume chart and a community-health ring, reorganizes the Me screen into tabs, and adds Kiswahili as a fourth language. Sellers now always publish a price range, and buyers are only shown offers within their stated budget. Payouts you already redeemed can no longer resurface as claimable: when a relay replays an old trade state, the app now checks its local redemption records before asking you to claim again. No data migration is needed — your wallets, trades, and history carry over unchanged.',
    es_ES:
      'Chama 6.3.0 rediseña el Panel en torno a un gráfico de volumen en vivo y un anillo de salud de la comunidad, reorganiza la pantalla Yo en pestañas y añade el suajili como cuarto idioma. Los vendedores ahora siempre publican un rango de precios, y a los compradores solo se les muestran ofertas dentro de su presupuesto declarado. Los pagos ya canjeados no pueden reaparecer como reclamables: cuando un relay reproduce un estado antiguo de una operación, la aplicación consulta ahora sus registros locales de canje antes de pedirte que reclames de nuevo. No se necesita migración de datos: tus monederos, operaciones e historial se conservan sin cambios.',
    de_DE:
      'Chama 6.3.0 gestaltet das Dashboard um ein Live-Handelsvolumen-Diagramm und einen Gemeinschafts-Gesundheitsring neu, ordnet den Ich-Bildschirm in Tabs und fügt Kiswahili als vierte Sprache hinzu. Verkäufer veröffentlichen jetzt immer eine Preisspanne, und Käufern werden nur Angebote innerhalb ihres angegebenen Budgets gezeigt. Bereits eingelöste Auszahlungen können nicht mehr als einforderbar wieder auftauchen: Spielt ein Relay einen alten Handelszustand erneut ab, prüft die App nun ihre lokalen Einlösungsaufzeichnungen, bevor sie erneut zum Einfordern auffordert. Keine Datenmigration nötig — Wallets, Trades und Verlauf bleiben unverändert erhalten.',
    pl_PL:
      'Chama 6.3.0 przeprojektowuje Panel wokół wykresu wolumenu na żywo i pierścienia zdrowia społeczności, porządkuje ekran Ja w zakładki i dodaje suahili jako czwarty język. Sprzedawcy zawsze publikują teraz przedział cenowy, a kupującym pokazywane są tylko oferty mieszczące się w zadeklarowanym budżecie. Wypłaty już zrealizowane nie mogą ponownie pojawić się jako do odebrania: gdy przekaźnik odtworzy stary stan transakcji, aplikacja sprawdza teraz lokalne zapisy realizacji, zanim poprosi o ponowny odbiór. Migracja danych nie jest potrzebna — portfele, transakcje i historia pozostają bez zmian.',
    fr_FR:
      "Chama 6.3.0 repense le Tableau de bord autour d'un graphique de volume en direct et d'un anneau de santé de la communauté, réorganise l'écran Moi en onglets et ajoute le kiswahili comme quatrième langue. Les vendeurs publient désormais toujours une fourchette de prix, et les acheteurs ne voient que les offres correspondant à leur budget déclaré. Les paiements déjà encaissés ne peuvent plus réapparaître comme à réclamer : quand un relais rejoue un ancien état d'échange, l'application consulte désormais ses registres locaux d'encaissement avant de redemander une réclamation. Aucune migration de données n'est nécessaire — portefeuilles, échanges et historique sont conservés tels quels.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
