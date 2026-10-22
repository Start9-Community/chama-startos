import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.30:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.30: sellers see a warning on a store order that doesn't match their listing, so they know not to send anything for it. Switching federation never offers to destroy your sats: if Chama can't keep your old wallet aside, it asks you to send them to your own wallet first. Chama also no longer trusts a set of compromised security certificates. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.30: los vendedores ven un aviso en un pedido de la tienda que no coincide con su anuncio, para que sepan que no deben enviar nada por él. Cambiar de federación nunca ofrece destruir tus sats: si Chama no puede guardar aparte tu billetera anterior, te pide que primero los envíes a tu propia billetera. Chama además deja de confiar en un grupo de certificados de seguridad comprometidos. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.30: Verkäufer sehen eine Warnung bei einer Shop-Bestellung, die nicht zu ihrem Angebot passt, damit sie wissen, dass sie dafür nichts senden sollen. Ein Föderationswechsel bietet nie an, deine Sats zu vernichten: Wenn Chama dein altes Wallet nicht beiseitelegen kann, bittet es dich, sie zuerst an dein eigenes Wallet zu senden. Außerdem vertraut Chama einer Reihe kompromittierter Sicherheitszertifikate nicht mehr. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.30: sprzedawcy widzą ostrzeżenie przy zamówieniu w sklepie, które nie zgadza się z ich ofertą, więc wiedzą, że nie powinni nic za nie wysyłać. Zmiana federacji nigdy nie proponuje zniszczenia twoich sats: jeśli Chama nie może odłożyć twojego starego portfela, prosi, abyś najpierw wysłał je do własnego portfela. Chama przestaje też ufać grupie przejętych certyfikatów bezpieczeństwa. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.30 : les vendeurs voient un avertissement sur une commande de boutique qui ne correspond pas à leur annonce, pour savoir qu'ils ne doivent rien envoyer pour elle. Changer de fédération ne propose jamais de détruire vos sats : si Chama ne peut pas mettre votre ancien portefeuille de côté, il vous demande d'abord de les envoyer vers votre propre portefeuille. Chama ne fait plus confiance non plus à un ensemble de certificats de sécurité compromis. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
