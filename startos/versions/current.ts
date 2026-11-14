import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.34:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.34: adds press-and-hold \"Take your sats back\" before acceptance for eligible trades created from Dec 1, 2026, with both sides on Chama 6.4.34 or later. Older trades, older counterparties and circles keep the existing funding rules. \"Live now\" on your dashboard shows only the sats you still have in a trade. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.34: añade \"Recuperar tus sats\" manteniendo pulsado antes de la aceptación para intercambios compatibles creados desde el 1 de diciembre de 2026, con ambas partes en Chama 6.4.34 o posterior. Los intercambios anteriores, las contrapartes con versiones anteriores y los círculos conservan las reglas de financiación existentes. \"Activos ahora\" en tu panel muestra solo los sats que aún tienes en un intercambio. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.34: Für geeignete, ab dem 1. Dezember 2026 erstellte Handelsvorgänge mit Chama 6.4.34 oder neuer auf beiden Seiten gibt es vor der Annahme „Sats zurückholen“ durch Gedrückthalten. Für ältere Handelsvorgänge, Gegenparteien mit älteren Versionen und Kreise gelten die bisherigen Finanzierungsregeln. „Gerade aktiv“ in deiner Übersicht zeigt nur die Sats, die du noch in einem Handel hast. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.34: dodaje przytrzymanie „Odzyskaj swoje satsy” przed akceptacją dla kwalifikujących się transakcji utworzonych od 1 grudnia 2026 r., gdy obie strony używają Chama 6.4.34 lub nowszej. Starsze transakcje, kontrahenci ze starszymi wersjami i kręgi zachowują dotychczasowe zasady finansowania. „Aktywne teraz” w twoim panelu pokazuje tylko satsy, które wciąż masz w transakcji. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.34 : ajoute un appui prolongé sur « Reprendre vos sats » avant acceptation pour les échanges éligibles créés à partir du 1er décembre 2026, avec Chama 6.4.34 ou ultérieur des deux côtés. Les échanges antérieurs, les contreparties sur une ancienne version et les cercles conservent les règles de financement existantes. « En cours » sur votre tableau de bord n'affiche que les sats que vous avez encore dans un échange. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
