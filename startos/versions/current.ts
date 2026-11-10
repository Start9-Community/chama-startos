import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.34:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.34: from Dec 1, sats you put into a trade stay yours until the other side accepts. Until then, press and hold \"Take your sats back\" to get them back. \"Live now\" on your dashboard shows only the sats you still have in a trade. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.34: desde el 1 de diciembre, los sats que pones en un intercambio siguen siendo tuyos hasta que la otra parte acepta. Hasta entonces, mantén pulsado \"Recuperar tus sats\" para recuperarlos. \"Activos ahora\" en tu panel muestra solo los sats que aún tienes en un intercambio. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.34: Ab dem 1. Dezember bleiben Sats, die du in einen Handel einbringst, deine, bis die andere Seite annimmt. Bis dahin hältst du „Sats zurückholen“ gedrückt, um sie zurückzubekommen. „Gerade aktiv“ in deiner Übersicht zeigt nur die Sats, die du noch in einem Handel hast. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.34: od 1 grudnia satsy, które wkładasz w transakcję, pozostają twoje, dopóki druga strona nie zaakceptuje. Do tego czasu przytrzymaj „Odzyskaj swoje satsy”, aby je odzyskać. „Aktywne teraz” w twoim panelu pokazuje tylko satsy, które wciąż masz w transakcji. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.34 : à partir du 1er décembre, les sats que vous mettez dans un échange restent à vous jusqu'à ce que l'autre partie accepte. D'ici là, maintenez « Reprendre vos sats » appuyé pour les récupérer. « En cours » sur votre tableau de bord n'affiche que les sats que vous avez encore dans un échange. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
