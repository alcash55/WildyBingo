# OSRS Wildy Bingo Board

A bingo board of 31 Old School RuneScape Wilderness challenges for a clan
event. On tablet and desktop it renders as a connected path over a
wilderness map; below 768px it falls back to a plain numbered list, since
a shrunk map can't keep 31 tiles both legible and non-overlapping at phone
width.

**Live:** https://alcash55.github.io/WildyBingo/

## Run locally

Requires [Bun](https://bun.sh).

```
bun install
bun run dev
```

Opens at `http://localhost:3000`.

## Build

```
bun run build
```

Outputs static files to `build/`.

## Deploy

`.github/workflows/ci.yml` builds every pull request. `.github/workflows/deploy.yml`
publishes `build/` to GitHub Pages, currently by manual dispatch from the
Actions tab rather than automatically on push to `master` (tracked in
[#21](https://github.com/alcash55/WildyBingo/issues/21)).
