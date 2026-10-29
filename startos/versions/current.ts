import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.32:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.32: every cash trade now says exactly where to send the money before anyone funds it. The buyer sees one payment method and address, the one the seller chose. On-chain listings show how much the arbiters can cover while you type the amount. A trade that wouldn't open after tapping \"lock\" more than once opens again, and \"Couldn't check the deposit\" clears up on its own instead of getting stuck. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.32: cada intercambio en efectivo ahora indica exactamente adónde enviar el dinero antes de que nadie lo financie. El comprador ve un solo método de pago y una dirección, los que eligió el vendedor. Los anuncios en cadena muestran cuánto pueden cubrir los árbitros mientras escribes el monto. Un intercambio que no se abría tras tocar \"bloquear\" más de una vez vuelve a abrirse, y \"No se pudo comprobar el depósito\" se resuelve solo en lugar de quedarse atascado. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.32: Jeder Bargeldhandel sagt jetzt genau, wohin das Geld gehen soll, bevor jemand ihn finanziert. Der Käufer sieht eine Zahlungsmethode und eine Adresse, die der Verkäufer gewählt hat. On-Chain-Angebote zeigen, wie viel die Schiedsrichter abdecken können, während du den Betrag eingibst. Ein Handel, der sich nach mehrmaligem Tippen auf „Sperren“ nicht mehr öffnen ließ, öffnet sich wieder, und „Einzahlung konnte nicht geprüft werden“ löst sich von selbst, statt hängen zu bleiben. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.32: każda transakcja gotówkowa mówi teraz dokładnie, dokąd wysłać pieniądze, zanim ktokolwiek ją zasili. Kupujący widzi jedną metodę płatności i jeden adres, te wybrane przez sprzedawcę. Oferty on-chain pokazują, ile mogą pokryć arbitrzy, gdy wpisujesz kwotę. Transakcja, która nie otwierała się po kilkukrotnym stuknięciu „zablokuj”, znów się otwiera, a „Nie udało się sprawdzić wpłaty” rozwiązuje się samo, zamiast się zawieszać. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.32 : chaque échange en espèces indique désormais exactement où envoyer l'argent avant que quiconque ne le finance. L'acheteur voit un seul moyen de paiement et une seule adresse, ceux choisis par le vendeur. Les annonces on-chain montrent combien les arbitres peuvent couvrir pendant que vous saisissez le montant. Un échange qui ne s'ouvrait plus après plusieurs appuis sur « verrouiller » s'ouvre à nouveau, et « Impossible de vérifier le dépôt » se règle tout seul au lieu de rester bloqué. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
