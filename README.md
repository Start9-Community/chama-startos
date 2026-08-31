<p align="center">
  <img src="icon.png" alt="Chama Logo" width="21%">
</p>

# Chama on StartOS

Chama is local commerce with Bitcoin rails: a self-hosted, Nostr-native marketplace where people can exchange sats and local currency, pay community bills, run storefronts, and offer work without a central Chama account server or custodial Chama wallet.

Offers, trade coordination, private messages, and reputation travel over Nostr. Funds move through the user's selected Fedimint federation, Lightning, or opt-in on-chain Bitcoin. Fedimint trades use verifiable 2-of-3 escrow between buyer, seller, and a community arbiter, so Chama does not take custody and an arbiter only becomes relevant when a trade needs help.

The StartOS package provides one ordinary **Chama** interface backed by one native Rust Fedimint wallet bridge. It is the same application released at [getchama.app](https://getchama.app/), packaged so its service and wallet state can live on a user's own StartOS server.

- **Chama application:** <https://github.com/jesuspirate/chama>
- **StartOS package:** <https://github.com/Start9-Community/chama-startos>
- **Website:** <https://getchama.app/>

> [!IMPORTANT]
> `Start9-Community/chama` is a retired application fork. Do not update, merge, or release from it, regardless of its ahead/behind count. Application fixes and `vX.Y.Z` tags come from `jesuspirate/chama`; StartOS packaging and `vX.Y.Z_<revision>` releases live only in this repository.

## What this repository contains

This is a package repository, not a fork of Chama. The application lives in the `chama/` git submodule, pinned to a released upstream tag. This repository owns the StartOS manifest, actions, health checks, nginx and bridge runtime, Docker build, migrations, and package release metadata.

The Dockerfile builds the Vite client and `chama-fedimint-bridge` directly from the pinned submodule. Updating Chama therefore means moving one auditable submodule pointer, not merging the application into a packaging fork. See [UPDATING.md](UPDATING.md).

## Runtime architecture

The `chama-sub` subcontainer runs:

- nginx, serving Chama on port 8080;
- one native `chama-fedimint-bridge` on loopback port 8787; and
- an entrypoint watchdog that treats either process exiting—including an unreaped bridge zombie—as a service failure.

nginx exposes `/bridge/` to the web client but never exposes the bridge directly. The invoice proxy keeps a one-hour timeout because payment is a human-paced long poll.

## Stable interface and data

The package exports one unmasked UI interface named **Chama**.

| Interface ID | MultiHost ID      | Port | Wallet data      |
| ------------ | ----------------- | ---- | ---------------- |
| `client-one` | `client-one-host` | 8080 | `/data/client-1` |

Those identifiers are deliberately stable. They preserve the browser origin and native wallet path for existing installations.

StartOS backs up the entire `main` volume, including `/data/client-1`. Nostr identity, contacts, drafts, settings, and browser-side trade cache remain scoped to the exact browser origin and are not stored in that server volume. Users must separately protect their Nostr account key and any exported bearer ecash notes.

Older installations may still contain `/data/client-2` and `/data/client-3` from the retired multi-client test package. They remain in backups but are not served by current releases. This compatibility detail is not the current Chama topology.

## Setup and operation

1. Open **Chama** from the Interfaces tab.
2. Create or import a Nostr identity.
3. Select a home community and join its Fedimint federation inside Chama.
4. Store the Nostr key and any exported fund backups safely.

The package has no StartOS service dependencies, file models, federation credential wizard, or package-level federation setting. Until a federation is joined, Chama can browse but the native wallet cannot receive or escrow ecash.

Wallet startup and long-account history hydration are explicit states. Chama keeps the user signed in while the bridge connects, offers **Reconnect** after a real failure, and withholds attention and renewal surfaces until saved trades and relay discovery are ready.

## Actions and health

**Wallet Bridge Status** is a read-only action reporting whether the bridge responds, whether a federation is joined, and whether relay discovery is reachable, degraded, still probing, or not configured.

The `primary` health check is ready only when both the UI on port 8080 and the bridge on port 8787 are listening. A web page without its wallet bridge is not healthy.

## Security and recovery boundaries

- Chama is not a custodial wallet; completed trades should be claimed or exported to the user's chosen destination.
- A Nostr key restores identity and relay-visible history, not bearer ecash held by a particular wallet.
- StartOS backups cover native wallet files, not browser-local state.
- The Chama interface and native bridge can authorize real payments; expose them only through trusted StartOS addresses and devices.

## Package reference

```yaml
package_id: chama
version_source: chama/ submodule pinned to jesuspirate/chama vX.Y.Z
architectures: [x86_64, aarch64]
subcontainer: chama-sub # nginx + native Fedimint bridge
volume: main:/data
active_wallet: /data/client-1
interface: client-one / client-one-host / 8080
bridge: 127.0.0.1:8787
actions: [wallet-status]
dependencies: []
file_models: []
```
