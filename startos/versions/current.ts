import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.1:0',
  releaseNotes: {
    en_US:
      'Chama 6.4.1 puts faces in the circle: every member appears by name in a new "Who\'s in" roster (lock order and lock dates included), and the generated nyms now render in your language — the same member is Grand Cat, Gato Grande, Chat Grand, or Paka Kuu depending on your locale, one identity everywhere. Locking your share gets a proper ceremony and circle loading gets an animated seat ring. Under the hood this build carries the adversarially-reviewed reader engine for the next major circle features, all switched off until the whole fleet can read them. Dependency security audit refreshed. No data migration; wallets, trades, and history carry over unchanged.',
    es_ES:
      'Chama 6.4.1 pone caras al círculo: cada miembro aparece por nombre en la nueva lista "Quiénes están" (con orden y fechas de bloqueo), y los apodos generados ahora se muestran en tu idioma — el mismo miembro es Grand Cat, Gato Grande, Chat Grand o Paka Kuu según tu configuración: una sola identidad en todas partes. Bloquear tu parte tiene ahora su ceremonia y la carga del círculo muestra un anillo animado. Por debajo, esta versión incluye el motor lector, revisado adversarialmente, de las próximas funciones de círculos, todo desactivado hasta que toda la flota pueda leerlo. Auditoría de dependencias actualizada. Sin migración de datos.',
    de_DE:
      'Chama 6.4.1 gibt dem Kreis Gesichter: Jedes Mitglied erscheint mit Namen in der neuen "Wer ist dabei"-Liste (mit Sperr-Reihenfolge und -Daten), und die generierten Namen erscheinen jetzt in deiner Sprache — dasselbe Mitglied ist Grand Cat, Gato Grande, Chat Grand oder Paka Kuu, eine Identität überall. Das Sperren des Anteils bekommt seine Zeremonie, das Laden des Kreises einen animierten Sitzring. Unter der Haube trägt dieser Build die adversarial geprüfte Lese-Engine für die nächsten Kreis-Funktionen, alles abgeschaltet, bis die gesamte Flotte sie lesen kann. Abhängigkeits-Audit aufgefrischt. Keine Datenmigration.',
    pl_PL:
      'Chama 6.4.1 nadaje kręgowi twarze: każdy członek pojawia się z imieniem na nowej liście „Kto jest w środku" (z kolejnością i datami blokad), a generowane pseudonimy wyświetlają się teraz w Twoim języku — ten sam członek to Grand Cat, Gato Grande, Chat Grand lub Paka Kuu zależnie od ustawień: jedna tożsamość wszędzie. Blokowanie udziału zyskało swoją ceremonię, a ładowanie kręgu animowany pierścień miejsc. Pod maską ta wersja niesie sprawdzony adwersaryjnie silnik odczytu dla nadchodzących funkcji kręgów, w całości wyłączony, dopóki cała flota nie będzie umiała go czytać. Audyt zależności odświeżony. Bez migracji danych.',
    fr_FR:
      "Chama 6.4.1 donne des visages au cercle : chaque membre apparaît par son nom dans la nouvelle liste « Qui est là » (ordre et dates de verrouillage inclus), et les pseudonymes générés s'affichent désormais dans votre langue — le même membre est Grand Cat, Gato Grande, Chat Grand ou Paka Kuu selon votre langue : une seule identité partout. Verrouiller sa part a droit à sa cérémonie et le chargement du cercle à un anneau animé. Sous le capot, cette version embarque le moteur de lecture, passé en revue de façon adversariale, des prochaines fonctions de cercles — tout est désactivé tant que toute la flotte ne sait pas le lire. Audit des dépendances rafraîchi. Aucune migration de données.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
