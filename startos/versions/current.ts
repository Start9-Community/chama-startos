import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.28:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.28 shows Open in Fedi for the ecash notes you withdraw, so one tap opens the note in Fedi, ready to claim. Taking a note back is more careful: if Chama can't be sure the note came back, the card stays so you can try again. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.28 muestra Abrir en Fedi para las notas de ecash que retiras, así que un toque abre la nota en Fedi, lista para reclamar. Devolver una nota es más cuidadoso: si Chama no puede estar seguro de que la nota volvió, la tarjeta se queda para que lo intentes de nuevo. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.28 zeigt „In Fedi öffnen“ für die Ecash-Noten, die du abhebst, sodass ein Tippen die Note in Fedi öffnet, bereit zum Einlösen. Eine Note zurückzuholen ist jetzt vorsichtiger: Wenn Chama nicht sicher sein kann, dass die Note zurückgekommen ist, bleibt die Karte, damit du es erneut versuchen kannst. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.28 pokazuje „Otwórz w Fedi” dla wypłaconych notatek ecash, więc jedno dotknięcie otwiera notatkę w Fedi, gotową do odebrania. Zwrot notatki jest ostrożniejszy: jeśli Chama nie ma pewności, że notatka wróciła, karta zostaje, abyś mógł spróbować ponownie. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.28 affiche « Ouvrir dans Fedi » pour les notes ecash que vous retirez : un geste ouvre la note dans Fedi, prête à être réclamée. Reprendre une note est plus prudent : si Chama ne peut pas être sûr que la note est revenue, la carte reste pour que vous puissiez réessayer. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
