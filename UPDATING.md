# Updating the upstream version

Chama is built from the `chama/` git submodule
(<https://github.com/jesuspirate/chama>), pinned at an upstream release tag. The
`Dockerfile` builds the Vite web client and the Rust `chama-fedimint-bridge` from
whatever commit the submodule points at; there is no `dockerTag`.

`Start9-Community/chama` is a retired application fork. Never fetch an update
from it, merge it, push to it, or use its ahead/behind count to choose a package
version. The only application source is `jesuspirate/chama`; the only StartOS
package source is this `Start9-Community/chama-startos` repository.

## Determining the upstream version

```sh
gh release view -R jesuspirate/chama --json tagName -q .tagName
```

Upstream also pushes tags ahead of cutting a release, so check both:

```sh
git -C chama fetch --tags && git -C chama tag --sort=-v:refname | head -5
```

The pin is the submodule's recorded commit in this repo's tree.

## Applying the bump

1. Move the submodule to the new tag and stage the pointer:

   ```sh
   git -C chama fetch --tags
   git -C chama checkout vX.Y.Z
   git add chama
   ```

2. Set `version` in `startos/versions/current.ts` to `X.Y.Z:0`, matching the tag.
3. Rewrite `releaseNotes` in that file for all five locales (`en_US`, `es_ES`,
   `de_DE`, `pl_PL`, `fr_FR`): one or two sentences on what a StartOS user can
   observe, plus a migration instruction if they need one. Not the application
   changelog.
4. If only the packaging changed, leave the submodule and the upstream half of
   the version alone and increment the revision instead (`6.2.0:0` → `6.2.0:1`).

A migration is only needed when the on-disk layout under `/data` changes. A plain
application or packaging bump keeps `migrations.up` empty and stays in
`current.ts`; do not spin off a version file for it.
