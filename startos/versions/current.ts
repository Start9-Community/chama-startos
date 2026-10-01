import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.18:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.18 closes the last hop: votes, claims and rulings now wake your phone, so \"your sats are ready\" reaches you with the app closed. Rail buttons are two words again, with cost and timing underneath. Market offers say how the buyer gets it: ship, meet, service or digital. Bill Pay's go-live screen shows bill + bonus = what you'll receive. Browse says plainly that \"All\" is everyone's offers but yours. Circles don't rotate yet — that's coming in 6.5. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.18 cierra el último tramo: los votos, reclamos y fallos ahora despiertan tu teléfono, así \"tus sats están listos\" te llega con la app cerrada. Los botones de vía vuelven a ser de dos palabras, con el costo y el tiempo debajo. Las ofertas del Mercado dicen cómo lo recibe el comprador: envío, en persona, servicio o digital. La pantalla de publicación de Pagar factura muestra factura + bono = lo que recibirás. Explorar dice claramente que \"Todas\" son las ofertas de los demás, no las tuyas. Los círculos todavía no rotan: eso llega en 6.5. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.18 schließt die letzte Lücke: Abstimmungen, Auszahlungen und Entscheidungen wecken jetzt dein Telefon, sodass „deine Sats sind bereit“ dich auch bei geschlossener App erreicht. Die Wege-Knöpfe haben wieder zwei Wörter, Kosten und Dauer stehen darunter. Marktangebote sagen, wie der Käufer es bekommt: Versand, Treffen, Dienstleistung oder digital. Die Veröffentlichungsseite von Rechnung bezahlen zeigt Rechnung + Bonus = was du erhältst. Stöbern sagt klar, dass „Alle“ die Angebote der anderen sind, nicht deine. Kreise rotieren noch nicht – das kommt mit 6.5. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.18 domyka ostatni odcinek: głosy, odbiory i rozstrzygnięcia budzą teraz twój telefon, więc „twoje satsy są gotowe” dociera do ciebie przy zamkniętej aplikacji. Przyciski ścieżek znów mają dwa słowa, a koszt i czas są pod nimi. Oferty na Rynku mówią, jak kupujący to otrzyma: wysyłka, spotkanie, usługa lub cyfrowo. Ekran publikacji w Opłać rachunek pokazuje rachunek + bonus = co otrzymasz. Przeglądanie mówi wprost, że „Wszystkie” to oferty innych, nie twoje. Kręgi jeszcze się nie obracają — to przyjdzie w 6.5. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.18 ferme le dernier maillon : les votes, réclamations et décisions réveillent désormais votre téléphone, pour que « vos sats sont prêts » vous parvienne même l'app fermée. Les boutons de voie reviennent à deux mots, coût et délai en dessous. Les offres du Marché disent comment l'acheteur le reçoit : envoi, en personne, service ou numérique. L'écran de publication de Payer une facture montre facture + bonus = ce que vous recevrez. Parcourir dit clairement que « Toutes » sont les offres des autres, pas les vôtres. Les cercles ne tournent pas encore — ce sera pour 6.5. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
