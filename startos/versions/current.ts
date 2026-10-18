import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.26:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.26 keeps one wallet per federation: moving to a trade on another federation sets your wallet aside instead of deleting it, and Me shows what each one holds. Before you use a federation Chama doesn't list, Chama asks first, because whoever runs it holds the sats until the trade ends. Payouts and on-chain settlement refuse in more uncertain cases instead of risking a second payment or high fees. Buttons are readable in light and dark mode, and Android pop-ups and pickers match the app. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.26 guarda una billetera por federación: pasar a un intercambio en otra federación aparta tu billetera en lugar de borrarla, y Yo muestra lo que tiene cada una. Antes de usar una federación que Chama no tiene en su lista, Chama pregunta primero, porque quien la administra guarda los sats hasta que termina el intercambio. Los pagos y la liquidación en cadena se detienen en más casos dudosos en lugar de arriesgar un segundo pago o comisiones altas. Los botones se leen bien en modo claro y oscuro, y las ventanas y selectores de Android combinan con la app. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.26 behält eine Wallet pro Föderation: Wechselst du zu einem Handel auf einer anderen Föderation, wird deine Wallet beiseitegelegt statt gelöscht, und der Tab „Me“ zeigt, was jede enthält. Bevor du eine Föderation nutzt, die Chama nicht listet, fragt Chama zuerst, denn wer sie betreibt, hält die Sats bis zum Ende des Handels. Auszahlungen und On-Chain-Abwicklung halten in mehr unsicheren Fällen an, statt eine zweite Zahlung oder hohe Gebühren zu riskieren. Knöpfe sind im hellen und dunklen Modus lesbar, und Android-Fenster und Auswahllisten passen zur App. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.26 trzyma jeden portfel na federację: przejście do wymiany w innej federacji odkłada twój portfel, zamiast go usuwać, a karta „Me” pokazuje, ile jest w każdym. Zanim użyjesz federacji, której Chama nie ma na liście, Chama najpierw pyta, bo ten, kto ją prowadzi, trzyma satsy do końca wymiany. Wypłaty i rozliczenia on-chain zatrzymują się w większej liczbie niepewnych przypadków, zamiast ryzykować drugą płatność lub wysokie opłaty. Przyciski są czytelne w trybie jasnym i ciemnym, a okna i listy wyboru na Androidzie pasują do aplikacji. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.26 garde un portefeuille par fédération : passer à un échange sur une autre fédération met votre portefeuille de côté au lieu de le supprimer, et Moi montre ce que contient chacun. Avant d'utiliser une fédération que Chama ne liste pas, Chama demande d'abord, car celui qui la gère détient les sats jusqu'à la fin de l'échange. Les paiements et le règlement on-chain s'arrêtent dans plus de cas incertains au lieu de risquer un second paiement ou des frais élevés. Les boutons sont lisibles en mode clair et sombre, et les fenêtres et listes de choix d'Android s'accordent avec l'application. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
