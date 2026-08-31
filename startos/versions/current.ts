import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.2.0:0',
  releaseNotes: {
    en_US:
      'Chama 6.2.0 makes wallet startup, federation routing, trade-history loading, expired-trade recovery, and arbiter attention queues more reliable. If your install still holds wallets from the retired second and third Chama clients, export any ecash from them before upgrading — they remain in your backups but are not served.',
    es_ES:
      'Chama 6.2.0 mejora la fiabilidad del inicio del monedero, el enrutamiento de federaciones, la carga del historial de operaciones, la recuperación de operaciones vencidas y las colas de atención del árbitro. Si tu instalación todavía conserva monederos de los clientes segundo y tercero retirados, exporta su ecash antes de actualizar: permanecen en las copias de seguridad, pero no se sirven.',
    de_DE:
      'Chama 6.2.0 macht Wallet-Start, Föderations-Routing, das Laden des Handelsverlaufs, die Wiederherstellung abgelaufener Trades und die Arbiter-Aufmerksamkeitslisten zuverlässiger. Falls deine Installation noch Wallets der stillgelegten zweiten und dritten Chama-Clients enthält, exportiere deren E-Cash vor dem Upgrade — sie bleiben in den Sicherungen, werden aber nicht bereitgestellt.',
    pl_PL:
      'Chama 6.2.0 zwiększa niezawodność uruchamiania portfela, routingu federacji, wczytywania historii transakcji, naprawy wygasłych transakcji i kolejek uwagi arbitra. Jeśli twoja instalacja nadal zawiera portfele wycofanych drugiego i trzeciego klienta Chama, wyeksportuj z nich ecash przed aktualizacją — pozostają w kopiach zapasowych, ale nie są udostępniane.',
    fr_FR:
      "Chama 6.2.0 fiabilise le démarrage du portefeuille, le routage des fédérations, le chargement de l'historique des échanges, la réparation des échanges expirés et les files d'attention des arbitres. Si votre installation conserve encore les portefeuilles des deuxième et troisième clients Chama retirés, exportez-en l'ecash avant la mise à niveau — ils restent dans les sauvegardes mais ne sont pas servis.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
