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
`instructions.md` (end-user docs) in sync with your changes. This file restates neither:
whoever changes the package has both, so it carries only what they don't — repo mechanics,
a change that looks right and is not, where the next thing gets added, a naming trap, a
build or test invocation particular to this repo.

**Fix a defect you spot rather than reporting it** — you have the package open and the
context to be sure. File **a GitHub issue on this repo** only when the call isn't yours to
make: you can't pin the cause down, two defensible fixes exist, or it's too large to ride on
the work in hand. An open issue is a report, not a queue — implement one when you're asked
to or when it's labelled `Approved`, then close it with `Closes #<n>`.

Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **The application is the `chama/` submodule, from <https://github.com/jesuspirate/chama>, and is
  never edited here.** Fixes go upstream and this repo moves the pin once they are tagged; a fix
  upstream hasn't taken goes in a `patches/` directory applied in the `Dockerfile` (see
  [electrs-startos](https://github.com/Start9-Community/electrs-startos)), never as copied-in
  source. `Start9-Community/chama` is archived: never fetch it, merge it, or read a version off it.
  The `.dockerignore` prunes the submodule too, so anything the Vite build or the Rust bridge
  needs must stay out of it.
- **`startos/utils.ts`'s `clients`, `startos/nginx.conf` and `startos/entrypoint.sh` carry the same
  UI and bridge ports** — change all three together. Never rename `client-one` /
  `client-one-host` or move port 8080, bridge port 8787 or `/data/client-1`: they hold the
  existing browser origin and native wallet.
- **Keep the entrypoint's zombie check and the hour-long `proxy_send_timeout` on the invoice
  path.** Without the first a natively-aborted bridge looks alive; without the second nginx
  ends an unpaid invoice's long poll with a 504 the client reads as a rejected payment.
- **`icon.png` is a 512×512 downscale of the application's `src-tauri/icons/icon.png`**, kept
  small because the icon is embedded in every registry index. Regenerate with:
  `convert chama/src-tauri/icons/icon.png -filter Lanczos -resize 512x512 -strip -quality 95 icon.png`
