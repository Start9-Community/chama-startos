import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.27:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.27 keeps sats in an ecash note in view: after you withdraw as ecash, Home shows how much is waiting in the note and takes you to it in one tap. Taking a note back into your wallet now works on federations that charge a small fee, and Chama tells you what the fee was. When Chama can't tell what happened to a note, the message stays on screen until you tap it. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.27 mantiene a la vista los sats que están en una nota de ecash: después de retirar como ecash, Inicio muestra cuánto espera en la nota y te lleva a ella con un toque. Devolver una nota a tu billetera ahora funciona en federaciones que cobran una pequeña comisión, y Chama te dice cuánto fue. Cuando Chama no puede saber qué pasó con una nota, el mensaje queda en pantalla hasta que lo tocas. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.27 behält Sats in einer Ecash-Note im Blick: Nachdem du als Ecash abgehoben hast, zeigt die Startseite, wie viel in der Note wartet, und führt dich mit einem Tippen dorthin. Eine Note zurück in deine Wallet zu holen, funktioniert jetzt auch bei Föderationen, die eine kleine Gebühr verlangen, und Chama nennt dir die Gebühr. Wenn Chama nicht sagen kann, was mit einer Note passiert ist, bleibt die Meldung sichtbar, bis du sie antippst. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.27 pokazuje satsy, które czekają w notatce ecash: po wypłacie jako ecash ekran główny pokazuje, ile czeka w notatce, i jednym dotknięciem do niej prowadzi. Zwrot notatki do portfela działa teraz także w federacjach, które pobierają niewielką opłatę, a Chama mówi, ile wyniosła. Gdy Chama nie może ustalić, co stało się z notatką, komunikat zostaje na ekranie, dopóki go nie dotkniesz. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.27 garde en vue les sats d'une note ecash : après un retrait en ecash, l'Accueil indique combien attend dans la note et vous y mène en un geste. Reprendre une note dans votre portefeuille fonctionne désormais sur les fédérations qui prennent de petits frais, et Chama vous dit combien. Quand Chama ne peut pas dire ce qui est arrivé à une note, le message reste à l'écran jusqu'à ce que vous le touchiez. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
