import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.25:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.25 makes claims to a Lightning address work in the Android app, and Lock is quicker: Chama starts preparing while you hold the button. On a phone the trade screen is one page, with the chat behind a button in the corner. The release button says who gets the sats, and payment details open in a clean sheet. If your wallet's balance can't be read when Chama starts, it no longer switches communities. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.25 hace que cobrar a una dirección Lightning funcione en la app de Android, y bloquear es más rápido: Chama empieza a prepararlo mientras mantienes pulsado el botón. En el teléfono, la pantalla del intercambio es una sola página, con el chat detrás de un botón en la esquina. El botón de liberar dice quién recibe los sats, y los datos de pago se abren en una hoja clara. Si no se puede leer el saldo de tu billetera al iniciar, Chama ya no cambia de comunidad. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.25 macht Auszahlungen an eine Lightning-Adresse in der Android-App möglich, und Sperren geht schneller: Chama bereitet es schon vor, während du den Knopf gedrückt hältst. Auf dem Handy ist der Handelsbildschirm eine einzige Seite, der Chat liegt hinter einem Knopf in der Ecke. Der Freigabe-Knopf nennt, wer die Sats bekommt, und Zahlungsdaten öffnen sich in einem klaren Fenster. Kann der Kontostand deiner Wallet beim Start nicht gelesen werden, wechselt Chama die Gemeinschaft nicht mehr. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.25 sprawia, że wypłata na adres Lightning działa w aplikacji na Androida, a blokowanie jest szybsze: Chama zaczyna je przygotowywać, gdy przytrzymujesz przycisk. Na telefonie ekran wymiany to jedna strona, a czat jest za przyciskiem w rogu. Przycisk zwolnienia mówi, kto dostaje satsy, a dane płatności otwierają się w przejrzystym oknie. Jeśli przy starcie nie da się odczytać salda portfela, Chama nie zmienia już społeczności. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.25 rend possible l'encaissement vers une adresse Lightning dans l'app Android, et bloquer est plus rapide : Chama commence à le préparer pendant que vous maintenez le bouton. Sur téléphone, l'écran de l'échange tient sur une seule page, avec le chat derrière un bouton dans le coin. Le bouton de libération indique qui reçoit les sats, et les coordonnées de paiement s'ouvrent dans une fenêtre claire. Si le solde de votre portefeuille ne peut pas être lu au démarrage, Chama ne change plus de communauté. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
