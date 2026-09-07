import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.3.2:0',
  releaseNotes: {
    en_US:
      'Chama 6.3.2 makes photos shared in trade chat much sharper (screenshots stay readable for dispute review), makes the Me screen tabs respond instantly with a long trade history, shows a proper loading state when opening an older trade instead of flashing back to Browse, and stops iPhones from offering to generate a password over the recovery-key confirmation during sign-up. No data migration; wallets, trades, and history carry over unchanged.',
    es_ES:
      'Chama 6.3.2 hace mucho más nítidas las fotos compartidas en el chat de operaciones (las capturas siguen siendo legibles para revisar disputas), hace que las pestañas de la pantalla Yo respondan al instante con un historial largo, muestra un estado de carga adecuado al abrir una operación antigua en lugar de volver a Explorar, y evita que el iPhone ofrezca generar una contraseña sobre la confirmación de la clave de recuperación durante el registro. Sin migración de datos; monederos, operaciones e historial se conservan sin cambios.',
    de_DE:
      'Chama 6.3.2 macht im Handels-Chat geteilte Fotos deutlich schärfer (Screenshots bleiben für die Streitprüfung lesbar), lässt die Tabs des Ich-Bildschirms auch bei langer Handelshistorie sofort reagieren, zeigt beim Öffnen eines älteren Handels einen echten Ladezustand statt zurück zu Durchsuchen zu springen, und verhindert, dass das iPhone über der Wiederherstellungsschlüssel-Bestätigung bei der Anmeldung ein Passwort generieren will. Keine Datenmigration — Wallets, Trades und Verlauf bleiben unverändert.',
    pl_PL:
      'Chama 6.3.2 znacząco wyostrza zdjęcia udostępniane na czacie transakcji (zrzuty ekranu pozostają czytelne przy rozpatrywaniu sporów), sprawia że zakładki ekranu Ja reagują natychmiast przy długiej historii, pokazuje właściwy stan ładowania przy otwieraniu starszej transakcji zamiast wracać do Przeglądaj, oraz zapobiega proponowaniu przez iPhone wygenerowania hasła nad potwierdzeniem klucza odzyskiwania podczas rejestracji. Bez migracji danych — portfele, transakcje i historia pozostają bez zmian.',
    fr_FR:
      "Chama 6.3.2 rend les photos partagées dans le chat d'échange bien plus nettes (les captures restent lisibles pour l'examen des litiges), fait réagir instantanément les onglets de l'écran Moi même avec un long historique, affiche un vrai état de chargement à l'ouverture d'un ancien échange au lieu de revenir à Parcourir, et empêche l'iPhone de proposer de générer un mot de passe sur la confirmation de la clé de récupération à l'inscription. Aucune migration de données — portefeuilles, échanges et historique sont conservés tels quels.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
