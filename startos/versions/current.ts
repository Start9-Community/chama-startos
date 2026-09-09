import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.3.4:0',
  releaseNotes: {
    en_US:
      "Chama 6.3.4 makes waiting on a trade honest: the countdown now shows the time your counterparty actually has to lock funds, not the listing's whole lifetime, and says plainly when a seat lapsed (nothing was locked, nothing at risk). The trade room now shows who is across from you — name, live presence, readiness — alongside the live Bitcoin price. The back button returns buyers to their search (auto-refreshed) and sellers to the home canvas, and every guided step fits one desktop view without scrolling. No data migration; wallets, trades, and history carry over unchanged.",
    es_ES:
      'Chama 6.3.4 hace honesta la espera en una operación: la cuenta atrás muestra ahora el tiempo real que tiene tu contraparte para bloquear fondos, no la vida entera del anuncio, y avisa claramente cuando un lugar caducó (no se bloqueó nada, nada en riesgo). La sala de operación muestra ahora quién está al otro lado — nombre, presencia en vivo, si está listo — junto al precio de Bitcoin en vivo. El botón atrás devuelve al comprador a su búsqueda (actualizada automáticamente) y al vendedor a la pantalla principal, y cada paso guiado cabe en una vista de escritorio sin desplazarse. Sin migración de datos; monederos, operaciones e historial se conservan sin cambios.',
    de_DE:
      'Chama 6.3.4 macht das Warten auf einen Trade ehrlich: Der Countdown zeigt jetzt die Zeit, die die Gegenseite tatsächlich zum Sperren der Mittel hat, nicht die gesamte Laufzeit des Angebots, und sagt klar, wenn ein Platz verfallen ist (nichts gesperrt, nichts in Gefahr). Der Handelsraum zeigt jetzt, wer gegenübersteht — Name, Live-Präsenz, Bereitschaft — neben dem aktuellen Bitcoin-Preis. Die Zurück-Taste bringt Käufer zu ihrer Suche (automatisch aktualisiert) und Verkäufer zur Startansicht, und jeder geführte Schritt passt ohne Scrollen in eine Desktop-Ansicht. Keine Datenmigration — Wallets, Trades und Verlauf bleiben unverändert.',
    pl_PL:
      'Chama 6.3.4 czyni oczekiwanie na transakcję uczciwym: odliczanie pokazuje teraz czas, jaki druga strona faktycznie ma na zablokowanie środków, a nie cały okres życia ogłoszenia, i jasno informuje, gdy miejsce wygasło (nic nie zablokowano, nic nie jest zagrożone). Pokój transakcji pokazuje teraz, kto jest po drugiej stronie — nazwę, obecność na żywo, gotowość — obok aktualnej ceny Bitcoina. Przycisk wstecz wraca kupującego do jego wyszukiwania (odświeżonego automatycznie), a sprzedającego do ekranu głównego, a każdy krok przewodnika mieści się w jednym widoku pulpitu bez przewijania. Bez migracji danych — portfele, transakcje i historia pozostają bez zmian.',
    fr_FR:
      "Chama 6.3.4 rend l'attente d'un échange honnête : le compte à rebours affiche désormais le temps dont votre contrepartie dispose réellement pour verrouiller les fonds, pas la durée de vie entière de l'annonce, et dit clairement quand une place a expiré (rien n'a été verrouillé, rien n'est en jeu). La salle d'échange montre désormais qui est en face — nom, présence en direct, disponibilité — à côté du prix du Bitcoin en direct. Le bouton retour ramène l'acheteur à sa recherche (rafraîchie automatiquement) et le vendeur à l'écran d'accueil, et chaque étape guidée tient dans une seule vue bureau sans défilement. Aucune migration de données — portefeuilles, échanges et historique sont conservés tels quels.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
