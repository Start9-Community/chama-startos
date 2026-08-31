import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.2.0:0',
  releaseNotes: {
    en_US:
      'Chama 6.2.0 makes wallet startup, federation routing, trade-history hydration, expired-trade healing, and arbiter attention queues more reliable. Before upgrading, claim or export any ecash still held in Chama; legacy experimental wallet directories remain in backups but are not served.',
    es_ES:
      'Chama 6.2.0 mejora la fiabilidad del inicio del monedero, el enrutamiento de federaciones, la carga del historial, la recuperación de operaciones vencidas y las colas de atención del árbitro. Antes de actualizar, reclama o exporta cualquier ecash que aún tengas en Chama; los directorios de monederos experimentales antiguos permanecen en las copias de seguridad, pero no se sirven.',
    de_DE:
      'Chama 6.2.0 macht Wallet-Start, Föderations-Routing, Laden des Handelsverlaufs, Heilung abgelaufener Trades und Arbiter-Aufmerksamkeitslisten zuverlässiger. Beanspruche oder exportiere vor dem Upgrade sämtliches noch in Chama gehaltenes E-Cash; alte experimentelle Wallet-Verzeichnisse bleiben in Sicherungen, werden aber nicht bereitgestellt.',
    pl_PL:
      'Chama 6.2.0 zwiększa niezawodność uruchamiania portfela, routingu federacji, wczytywania historii transakcji, naprawy wygasłych transakcji i kolejek uwagi arbitra. Przed aktualizacją odbierz lub wyeksportuj wszelki ecash pozostający w Chama; stare eksperymentalne katalogi portfeli pozostają w kopiach zapasowych, ale nie są udostępniane.',
    fr_FR:
      "Chama 6.2.0 fiabilise le démarrage du portefeuille, le routage des fédérations, le chargement de l'historique, la réparation des échanges expirés et les files d'attention des arbitres. Avant la mise à niveau, réclamez ou exportez tout ecash encore détenu dans Chama ; les anciens répertoires de portefeuilles expérimentaux restent dans les sauvegardes mais ne sont pas servis.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
