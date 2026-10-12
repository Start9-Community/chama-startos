import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.22:0',
  releaseNotes: {
    en_US:
      "Strangers cannot break your trade. Only the people in a trade can move it, stall it, or rush it. Someone outside your trade can no longer make it fail to open on a new phone. Their messages are simply ignored. Chama will not fund a trade that has no community arbiter behind it. It stops before any sats leave your wallet. An automatic refund waits for the real deadline. Nobody can fake the clock to bring it forward. In a circle, only a member can start the next round. This security update passed tests and a production build. This update also includes versions 6.4.19 to 6.4.21.",
    es_ES:
      "Los desconocidos no pueden bloquear tu operación. Solo las personas que participan en una operación pueden hacerla avanzar, detenerla o acelerarla. Alguien ajeno a tu operación ya no puede impedir que se abra en un teléfono nuevo. Sus mensajes simplemente se ignoran. Chama no financia una operación que no tenga un árbitro de la comunidad. Se detiene antes de que salga ningún sat de tu billetera. Un reembolso automático espera hasta el plazo real. Nadie puede falsificar el reloj para adelantarlo. En un círculo, solo un miembro puede iniciar la siguiente ronda. Esta actualización de seguridad superó las pruebas y la compilación de producción. Esta actualización también incluye las versiones 6.4.19 a 6.4.21.",
    de_DE:
      "Fremde können deinen Handel nicht stören. Nur die Beteiligten können einen Handel voranbringen, aufhalten oder beschleunigen. Außenstehende können nicht mehr verhindern, dass dein Handel auf einem neuen Telefon geöffnet wird. Ihre Nachrichten werden einfach ignoriert. Chama finanziert keinen Handel ohne einen Schiedsrichter aus der Gemeinschaft. Es stoppt, bevor Sats deine Wallet verlassen. Eine automatische Rückerstattung wartet bis zur tatsächlichen Frist. Niemand kann die Uhr fälschen, um sie vorzuziehen. In einem Kreis kann nur ein Mitglied die nächste Runde starten. Dieses Sicherheitsupdate hat die Tests und den Produktionsbuild bestanden. Dieses Update enthält auch die Versionen 6.4.19 bis 6.4.21.",
    pl_PL:
      "Obcy nie mogą zakłócić twojej transakcji. Tylko uczestnicy transakcji mogą ją posuwać naprzód, wstrzymywać lub przyspieszać. Osoba spoza transakcji nie może już uniemożliwić jej otwarcia na nowym telefonie. Jej wiadomości są po prostu ignorowane. Chama nie finansuje transakcji bez arbitra ze społeczności. Zatrzymuje się, zanim jakiekolwiek satsy opuszczą twój portfel. Automatyczny zwrot czeka do rzeczywistego terminu. Nikt nie może sfałszować zegara, aby go przyspieszyć. W kręgu tylko członek może rozpocząć następną rundę. Ta aktualizacja zabezpieczeń przeszła testy i kompilację produkcyjną. Ta aktualizacja obejmuje również wersje od 6.4.19 do 6.4.21.",
    fr_FR:
      "Les inconnus ne peuvent pas perturber votre échange. Seules les personnes qui participent à un échange peuvent le faire avancer, le bloquer ou l’accélérer. Une personne extérieure ne peut plus empêcher votre échange de s’ouvrir sur un nouveau téléphone. Ses messages sont simplement ignorés. Chama ne finance pas un échange sans arbitre de la communauté. Il s’arrête avant qu’un seul sat ne quitte votre portefeuille. Un remboursement automatique attend l’échéance réelle. Personne ne peut falsifier l’horloge pour l’avancer. Dans un cercle, seul un membre peut commencer le tour suivant. Cette mise à jour de sécurité a passé les tests et la compilation de production. Cette mise à jour inclut aussi les versions 6.4.19 à 6.4.21.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
