# Chama

Chama is local commerce with Bitcoin rails. It lets people exchange sats and local currency, pay community bills, run storefronts, and find work through Nostr—without a central Chama account server or custodial Chama wallet.

Trades use your chosen Fedimint federation, Lightning, or opt-in on-chain Bitcoin. Fedimint escrow is shared between buyer, seller, and a community arbiter; normal trades settle between the two traders, while the arbiter only steps in when something needs attention.

## What you get on StartOS

One **Chama** web interface backed by one native Fedimint wallet on your StartOS server. Your identity and trade coordination use Nostr, while the native bridge holds the device-local federation state needed to receive and escrow ecash.

## Getting started

1. Open **Chama** from the Interfaces tab.
2. Create a Chama identity or import your Nostr account key.
3. Choose your home community and join its Fedimint federation inside Chama.
4. Store your Nostr key and any exported ecash backups somewhere safe.

The wallet cannot receive or escrow ecash until it has joined a federation. While it starts, Chama keeps you signed in and shows **Connecting**. If startup really fails, use **Reconnect**. Accounts with long histories may briefly show **Checking your complete trade history…** before reminders and attention counts appear.

## What StartOS backs up

StartOS backs up the native wallet files on the server. It does not back up browser-local identity, contacts, drafts, settings, or cached trade views. Those belong to the exact Chama interface address opened in your browser.

Your Nostr key restores identity and relay-visible history; it does not recreate bearer ecash. Claim completed trades to your preferred destination and store exported ecash notes safely.

## Wallet Bridge Status

Run the read-only **Wallet Bridge Status** action if Chama opens but wallet balances or payments are unavailable. It reports whether the wallet bridge responds, whether it has joined a federation, and whether federation relay discovery is working.

## Security

The Chama interface and native wallet can authorize real payments. Use only trusted StartOS addresses and devices, and do not share exported ecash notes.

## Legacy upgrade note

Very old StartOS installations may retain Client Two or Client Three wallet directories from the retired testing package. Current Chama serves one interface and does not delete those old directories from backups. If you knowingly left ecash in an experimental client, export it before upgrading.

## Project links

- [Chama website](https://getchama.app/)
- [Chama application](https://github.com/jesuspirate/chama)
- [StartOS package](https://github.com/Start9-Community/chama-startos)

The old `Start9-Community/chama` fork is retired and is not an update or release source.
