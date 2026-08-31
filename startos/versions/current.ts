import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.1.4:0',
  releaseNotes: {
    en_US:
      'Chama now runs as a single web interface with one native Fedimint wallet, replacing the three co-located test clients, and updates the application to 6.1.4. The former Client One keeps its address and wallet, so what you were using carries over. Client Two and Client Three are no longer served — export any ecash from them before upgrading; their wallet directories stay in your backups.',
    es_ES:
      'Chama ahora funciona como una sola interfaz web con un único monedero Fedimint nativo, en lugar de los tres clientes de prueba, y actualiza la aplicación a la 6.1.4. El antiguo Cliente Uno conserva su dirección y su monedero, así que lo que venías usando se mantiene. Los Clientes Dos y Tres ya no se sirven: exporta su ecash antes de actualizar; sus directorios de monedero permanecen en las copias de seguridad.',
    de_DE:
      'Chama läuft jetzt als eine einzige Weboberfläche mit einer nativen Fedimint-Wallet statt der drei Testclients und aktualisiert die Anwendung auf 6.1.4. Der frühere Client Eins behält seine Adresse und seine Wallet, sodass alles Bisherige erhalten bleibt. Client Zwei und Drei werden nicht mehr bereitgestellt — exportiere ihr E-Cash vor dem Upgrade; ihre Wallet-Verzeichnisse bleiben in den Sicherungen.',
    pl_PL:
      'Chama działa teraz jako jeden interfejs internetowy z jednym natywnym portfelem Fedimint zamiast trzech klientów testowych i aktualizuje aplikację do wersji 6.1.4. Dawny Klient Pierwszy zachowuje swój adres i portfel, więc dotychczasowa aplikacja i środki pozostają na miejscu. Klienci Drugi i Trzeci nie są już udostępniani — wyeksportuj z nich ecash przed aktualizacją; ich katalogi portfeli pozostają w kopiach zapasowych.',
    fr_FR:
      "Chama fonctionne désormais comme une seule interface web avec un unique portefeuille Fedimint natif, au lieu des trois clients de test, et met l'application à jour vers la 6.1.4. L'ancien Client Un conserve son adresse et son portefeuille : ce que vous utilisiez est préservé. Les Clients Deux et Trois ne sont plus servis — exportez leur ecash avant la mise à niveau ; leurs répertoires de portefeuille restent dans les sauvegardes.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
