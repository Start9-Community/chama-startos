import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.23:0',
  releaseNotes: {
    en_US:
      "Chama 6.4.23 is a redesign. Text is bigger, screens are calmer, and there are four simple tabs: Home, Browse, Circles and Me. Locking, releasing and sending sats are now press-and-hold, so nothing moves by accident. Tap the price anywhere to convert between sats and your money. Circles show your seat, who holds the money and your share's arbiter before you lock. Me tells you whether your recovery key is saved, and you only see offers you can actually take. Nothing to migrate: just update.",
    es_ES:
      "Chama 6.4.23 es un rediseño. El texto es más grande, las pantallas más tranquilas y hay cuatro pestañas sencillas: Inicio, Explorar, Círculos y Yo. Bloquear, liberar y enviar sats ahora se hace manteniendo pulsado, para que nada se mueva por accidente. Toca el precio en cualquier pantalla para convertir entre sats y tu moneda. Los círculos muestran tu asiento, quién guarda el dinero y el árbitro de tu parte antes de bloquear. Yo te indica si guardaste tu clave de recuperación, y solo ves ofertas que realmente puedes tomar. No hay nada que migrar: solo actualiza.",
    de_DE:
      "Chama 6.4.23 ist ein Redesign. Die Schrift ist größer, die Bildschirme ruhiger, und es gibt vier einfache Tabs: Start, Stöbern, Kreise und Ich. Sats sperren, freigeben und senden geht jetzt per Gedrückthalten, damit nichts aus Versehen bewegt wird. Tippe auf jedem Bildschirm auf den Preis, um zwischen Sats und deiner Währung umzurechnen. Kreise zeigen vor dem Sperren deinen Platz, wer das Geld verwahrt und den Schiedsrichter deines Anteils. Ich zeigt dir, ob dein Wiederherstellungsschlüssel gesichert ist, und du siehst nur Angebote, die du wirklich annehmen kannst. Nichts zu migrieren: einfach aktualisieren.",
    pl_PL:
      "Chama 6.4.23 to nowy wygląd. Tekst jest większy, ekrany spokojniejsze, a zakładki są cztery: Start, Przeglądaj, Kręgi i Ja. Blokowanie, zwalnianie i wysyłanie satsów wymaga teraz przytrzymania, więc nic nie ruszy się przypadkiem. Dotknij ceny na dowolnym ekranie, aby przeliczyć satsy na swoją walutę. Kręgi pokazują twoje miejsce, kto przechowuje pieniądze i arbitra twojego udziału, zanim zablokujesz. Ja pokazuje, czy zapisano twój klucz odzyskiwania, a widzisz tylko oferty, które naprawdę możesz przyjąć. Nic do migracji: po prostu zaktualizuj.",
    fr_FR:
      "Chama 6.4.23 est une refonte. Le texte est plus grand, les écrans plus calmes, avec quatre onglets simples : Accueil, Parcourir, Cercles et Moi. Bloquer, libérer et envoyer des sats se fait désormais en maintenant le bouton, pour que rien ne bouge par accident. Touchez le prix sur n'importe quel écran pour convertir entre sats et votre monnaie. Les cercles montrent votre place, qui détient l'argent et l'arbitre de votre part avant de bloquer. Moi vous indique si votre clé de récupération est sauvegardée, et vous ne voyez que les offres que vous pouvez vraiment prendre. Rien à migrer : il suffit de mettre à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
