import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.29:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.29 checks Lightning-address payouts more carefully: before any sats leave, it stops if the payout server isn't secure or returns the wrong invoice. Phone number examples show your own country's code, Benin's new 10-digit numbers save as payment details, and wide screens show one Chama logo, not two. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.29 revisa con más cuidado los pagos a una dirección Lightning: antes de que salga cualquier sat, se detiene si el servidor del pago no es seguro o devuelve una factura equivocada. Los ejemplos de números de teléfono muestran el código de tu propio país, los nuevos números de 10 dígitos de Benín se guardan como datos de pago y las pantallas anchas muestran un solo logo de Chama, no dos. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.29 prüft Auszahlungen an eine Lightning-Adresse sorgfältiger: Bevor Sats das Wallet verlassen, bricht es ab, wenn der Auszahlungsserver nicht sicher ist oder eine falsche Rechnung zurückgibt. Beispiele für Telefonnummern zeigen die Vorwahl deines eigenen Landes, Benins neue 10-stellige Nummern lassen sich als Zahlungsdaten speichern, und breite Bildschirme zeigen ein Chama-Logo statt zwei. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.29 dokładniej sprawdza wypłaty na adres Lightning: zanim jakiekolwiek sats wyjdą, zatrzymuje się, jeśli serwer wypłaty nie jest bezpieczny lub zwraca niewłaściwą fakturę. Przykładowe numery telefonów pokazują kierunkowy twojego kraju, nowe 10-cyfrowe numery z Beninu zapisują się jako dane płatności, a szerokie ekrany pokazują jedno logo Chamy zamiast dwóch. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.29 vérifie plus soigneusement les paiements vers une adresse Lightning : avant que le moindre sat parte, il s'arrête si le serveur de paiement n'est pas sécurisé ou renvoie une mauvaise facture. Les exemples de numéros de téléphone affichent l'indicatif de votre pays, les nouveaux numéros à 10 chiffres du Bénin s'enregistrent comme coordonnées de paiement, et les grands écrans affichent un seul logo Chama au lieu de deux. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
