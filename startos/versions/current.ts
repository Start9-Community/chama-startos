import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.17:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.17 makes every alert say why. Notifications now tell you whose move it is: \"lock it\" when it's yours, \"waiting for her to lock\" when it isn't. Chats stack in their own card and never bury the \"sats locked\" line. Browse counts follow the filters you set. Sats spent on a lock nobody accepted come back to your wallet on their own. An invoice that expires with your seat says so calmly: nothing was paid, join again. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.17 hace que cada alerta diga por qué. Las notificaciones ahora te dicen a quién le toca: \"bloquéalo\" cuando te toca a ti, \"esperando a que ella bloquee\" cuando no. Los chats se apilan en su propia tarjeta y nunca tapan la línea de \"sats bloqueados\". Los contadores de Explorar siguen los filtros que eliges. Los sats gastados en un bloqueo que nadie aceptó vuelven solos a tu cartera. Una factura que caduca con tu asiento lo dice con calma: no se pagó nada, únete de nuevo. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.17 lässt jede Benachrichtigung sagen, warum. Sie sagen dir jetzt, wer am Zug ist: „sperren“, wenn du dran bist, „wartet auf ihre Sperre“, wenn nicht. Chats stapeln sich in ihrer eigenen Karte und verdecken nie die Zeile „Sats gesperrt“. Die Zähler beim Stöbern folgen den Filtern, die du setzt. Sats, die in eine von niemandem angenommene Sperre geflossen sind, kommen von selbst in deine Wallet zurück. Eine Rechnung, die mit deinem Sitz abläuft, sagt es ruhig: nichts wurde bezahlt, tritt erneut bei. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.17 sprawia, że każde powiadomienie mówi dlaczego. Powiadomienia mówią teraz, czyj jest ruch: „zablokuj”, gdy twój, „czekamy, aż ona zablokuje”, gdy nie. Czaty układają się we własnej karcie i nigdy nie zasłaniają linii „satsy zablokowane”. Liczniki w Przeglądaniu podążają za ustawionymi filtrami. Satsy wydane na blokadę, której nikt nie przyjął, same wracają do portfela. Faktura, która wygasa razem z twoim miejscem, mówi to spokojnie: nic nie zapłacono, dołącz ponownie. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.17 fait que chaque alerte dit pourquoi. Les notifications disent désormais à qui de jouer : « verrouillez » quand c'est à vous, « en attente de son verrouillage » sinon. Les messages s'empilent dans leur propre carte et ne cachent jamais la ligne « sats verrouillés ». Les compteurs de Parcourir suivent les filtres choisis. Les sats engagés dans un verrouillage que personne n'a accepté reviennent d'eux-mêmes dans votre portefeuille. Une facture qui expire avec votre siège le dit calmement : rien n'a été payé, rejoignez à nouveau. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
