import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.33:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.33: an arbiter's record now shows the disputes they decided and with how many people, and two opposite rulings by the same arbiter on one trade are marked in red. Records no longer get stuck on \"Public record not loaded yet\". If you hold a bond, an on-chain listing now says why your own bond can't cover it. A budget on a ranged offer shows the amount it actually buys. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.33: el historial de un árbitro ahora muestra las disputas que decidió y con cuántas personas, y dos fallos opuestos del mismo árbitro en un mismo intercambio se marcan en rojo. Los historiales ya no se quedan atascados en \"El historial público aún no se ha cargado\". Si tienes un depósito de garantía, un anuncio en cadena ahora explica por qué tu propio depósito no puede cubrirlo. Un presupuesto en una oferta con rango muestra la cantidad que realmente compra. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.33: Der Verlauf eines Schiedsrichters zeigt jetzt, welche Streitfälle er entschieden hat und mit wie vielen Personen, und zwei gegensätzliche Entscheidungen desselben Schiedsrichters im selben Handel werden rot markiert. Verläufe bleiben nicht mehr bei „Öffentlicher Verlauf noch nicht geladen“ hängen. Wenn du eine Kaution hinterlegt hast, sagt ein On-Chain-Angebot jetzt, warum deine eigene Kaution es nicht abdecken kann. Ein Budget bei einem Angebot mit Spanne zeigt den Betrag, den es tatsächlich kauft. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.33: historia arbitra pokazuje teraz rozstrzygnięte przez niego spory i z iloma osobami, a dwa przeciwne orzeczenia tego samego arbitra w jednej transakcji są oznaczone na czerwono. Historie nie zawieszają się już na „Publiczna historia jeszcze niewczytana”. Jeśli masz kaucję, oferta on-chain wyjaśnia teraz, dlaczego twoja własna kaucja nie może jej pokryć. Budżet przy ofercie z przedziałem pokazuje kwotę, którą faktycznie kupuje. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.33 : l'historique d'un arbitre montre désormais les litiges qu'il a tranchés et avec combien de personnes, et deux décisions opposées du même arbitre sur un même échange sont signalées en rouge. Les historiques ne restent plus bloqués sur « L’historique public n’est pas encore chargé ». Si vous détenez une caution, une annonce on-chain explique maintenant pourquoi votre propre caution ne peut pas la couvrir. Un budget sur une offre à fourchette affiche le montant qu'il permet réellement d'acheter. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
