# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`Start9-Community/chama` is archived and is a source for nothing.** Never fetch it, merge it,
  or read a version off it; its ahead/behind count against the application is meaningless.
- **The application is the `chama/` submodule and is never edited here.** Fixes to Chama itself
  go to <https://github.com/jesuspirate/chama>; this repo moves the pin once the fix is tagged.
  If a fix upstream hasn't taken is genuinely needed, add a `patches/` directory applied in the
  `Dockerfile` — see [electrs-startos](https://github.com/Start9-Community/electrs-startos) —
  and never by copying source in.
- **`startos/utils.ts`'s `clients` array is the TypeScript source for the single Chama interface.**
  `startos/nginx.conf` and `startos/entrypoint.sh` hardcode the matching UI and bridge ports, so
  changing the interface means editing all three and verifying they agree. Preserve the legacy
  `client-one` / `client-one-host` identifiers, port 8080, bridge port 8787, and `/data/client-1`
  across upgrades: they retain the existing browser origin and native wallet.
- **The `.dockerignore` prunes the submodule, not just this repo.** The application tree carries
  the Android, Tauri, marketing and docs trees — over 100 MB that `s9pk pack` would otherwise
  upload as build context on every arch. Anything the Vite build or the Rust bridge needs must
  stay out of that ignore list.
- **Keep the entrypoint's zombie check.** `kill -0` still succeeds for an unreaped zombie, so
  without reading the process state a natively-aborted bridge leaves nginx serving a
  healthy-looking UI whose bridge upstream is permanently dead.
- **The long `proxy_send_timeout` on the invoice path is load-bearing.** It is a long poll held
  open until a human pays; at nginx's default it hung up mid-scan and returned a 504 page the
  client read as a rejected payment.
- **`icon.png` is a 512×512 downscale of the application's `src-tauri/icons/icon.png`.** The
  1024×1024 original is ~713 KB and a package icon is embedded as a base64 data URL in every
  registry index. Regenerate with:
  `convert chama/src-tauri/icons/icon.png -filter Lanczos -resize 512x512 -strip -quality 95 icon.png`
