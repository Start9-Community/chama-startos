import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.31:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.31: Home shows where Chama holds your sats, who holds them and until when, and how to get them out. The Wallet tab is gone from Me; payment methods, saved wallets and your key are in Settings. Before an on-chain trade, Chama checks that your key can be restored on another device, and stops before any sats move if it can't. In a listing with stock you pick how many, and your order no longer takes the whole store. Browse always lets you see your own listings, and Back buttons are bold and easy to find. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.31: Inicio muestra dónde guarda Chama tus sats, quién los tiene y hasta cuándo, y cómo sacarlos. La pestaña Billetera ya no está en Yo; los métodos de pago, las billeteras guardadas y tu clave están en Ajustes. Antes de un intercambio en cadena, Chama comprueba que tu clave se puede restaurar en otro dispositivo y, si no, se detiene antes de que se mueva ningún sat. En un anuncio con existencias eliges cuántas unidades, y tu pedido ya no se lleva toda la tienda. Explorar siempre te deja ver tus propios anuncios, y los botones Atrás son gruesos y fáciles de encontrar. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.31: Die Startseite zeigt, wo Chama deine Sats hält, wer sie hält und bis wann, und wie du sie herausholst. Der Wallet-Tab ist aus „Ich“ verschwunden; Zahlungsmethoden, gespeicherte Wallets und dein Schlüssel sind in den Einstellungen. Vor einem On-Chain-Handel prüft Chama, dass dein Schlüssel auf einem anderen Gerät wiederhergestellt werden kann, und hält an, bevor Sats bewegt werden, wenn das nicht geht. Bei einem Angebot mit Vorrat wählst du die Menge, und deine Bestellung nimmt nicht mehr den ganzen Shop. Durchsuchen zeigt dir immer deine eigenen Angebote, und Zurück-Tasten sind fett und leicht zu finden. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.31: ekran główny pokazuje, gdzie Chama trzyma twoje sats, kto je trzyma i do kiedy, oraz jak je wypłacić. Karta Portfel zniknęła z zakładki Ja; metody płatności, zapisane portfele i twój klucz są w Ustawieniach. Przed transakcją on-chain Chama sprawdza, czy twój klucz da się odtworzyć na innym urządzeniu, a jeśli nie, zatrzymuje się, zanim jakiekolwiek sats się ruszą. W ofercie z zapasem wybierasz liczbę sztuk, a twoje zamówienie nie zabiera już całego sklepu. Przeglądanie zawsze pozwala zobaczyć twoje własne oferty, a przyciski Wstecz są pogrubione i łatwe do znalezienia. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.31 : l'accueil montre où Chama garde vos sats, qui les détient et jusqu'à quand, et comment les récupérer. L'onglet Portefeuille a quitté Moi ; les moyens de paiement, les portefeuilles enregistrés et votre clé sont dans Réglages. Avant un échange on-chain, Chama vérifie que votre clé peut être restaurée sur un autre appareil, et s'arrête avant que des sats bougent si ce n'est pas le cas. Dans une annonce avec du stock, vous choisissez la quantité, et votre commande ne prend plus toute la boutique. Parcourir vous laisse toujours voir vos propres annonces, et les boutons Retour sont épais et faciles à trouver. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
