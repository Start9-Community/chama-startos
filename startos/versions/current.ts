import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.16:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.16 makes delete mean delete: removing an offer now tells every device, so it never comes back from someone else's cache. Alerts with your phone closed now say what happened, who joined your offer and what they wrote. Browse shows offers in your community's currency, with other currencies behind one chip. Sats spent on a lock nobody accepted can be taken back from the room, whatever the trade's status. Stores follow the same rule as offers: live while you use Chama, back when you return. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.16 hace que borrar sea borrar: al quitar una oferta ahora se avisa a todos los dispositivos, así nunca vuelve desde la caché de otra persona. Las alertas con el teléfono cerrado ahora dicen qué pasó, quién se unió a tu oferta y qué escribió. Explorar muestra ofertas en la moneda de tu comunidad, con las demás monedas detrás de un chip. Los sats gastados en un bloqueo que nadie aceptó se pueden recuperar desde la sala, sea cual sea el estado de la operación. Las tiendas siguen la misma regla que las ofertas: activas mientras usas Chama, de vuelta cuando regresas. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.16 macht Löschen zu Löschen: Wer ein Angebot entfernt, sagt es jetzt jedem Gerät, sodass es nie wieder aus dem Cache eines anderen auftaucht. Benachrichtigungen bei geschlossenem Telefon sagen jetzt, was passiert ist, wer deinem Angebot beigetreten ist und was er geschrieben hat. Stöbern zeigt Angebote in der Währung deiner Community, andere Währungen liegen hinter einem Chip. Sats, die in eine von niemandem angenommene Sperre geflossen sind, lassen sich aus dem Raum zurückholen, egal in welchem Zustand der Trade ist. Läden folgen derselben Regel wie Angebote: aktiv, solange du Chama nutzt, zurück, wenn du wiederkommst. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.16 sprawia, że usunięcie to usunięcie: usunięcie oferty informuje teraz każde urządzenie, więc nigdy nie wraca z cudzej pamięci podręcznej. Powiadomienia przy zamkniętym telefonie mówią teraz, co się stało, kto dołączył do twojej oferty i co napisał. Przeglądanie pokazuje oferty w walucie twojej społeczności, a inne waluty kryją się za jednym przyciskiem. Satsy wydane na blokadę, której nikt nie przyjął, można odzyskać z pokoju, niezależnie od stanu transakcji. Sklepy działają na tej samej zasadzie co oferty: aktywne, gdy używasz Chamy, wracają, gdy ty wracasz. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.16 fait que supprimer veut dire supprimer : retirer une offre le dit désormais à chaque appareil, elle ne revient donc jamais du cache de quelqu'un d'autre. Les alertes téléphone fermé disent maintenant ce qui s'est passé, qui a rejoint votre offre et ce qu'il a écrit. Parcourir affiche les offres dans la monnaie de votre communauté, les autres monnaies derrière une seule puce. Les sats engagés dans un verrouillage que personne n'a accepté se récupèrent depuis la salle, quel que soit l'état de l'échange. Les boutiques suivent la même règle que les offres : actives tant que vous utilisez Chama, de retour quand vous revenez. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
