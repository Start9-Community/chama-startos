# Updating the upstream version

Chama is built from the `chama/` git submodule
(<https://github.com/jesuspirate/chama>), pinned at an upstream release tag. The
`Dockerfile` builds the Vite web client and the Rust `chama-fedimint-bridge` from
whatever commit the submodule points at; there is no `dockerTag`.

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

Move the submodule to the new tag and stage the pointer:

```sh
git -C chama fetch --tags
git -C chama checkout vX.Y.Z
git add chama
```
