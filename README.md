# The World in One Page — Wednesday 25 November 2026

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/c/news-image-20261125)
[![news-image-20261125 rank](https://make.fun/badge/news-image-20261125/yeon-bounty/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![news-image-20261125 reward](https://make.fun/badge/news-image-20261125/yeon-bounty/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

One image that sums up the world's news of Wednesday 25 November 2026, as a
newspaper front page: the date up top, then the day's most consequential
stories across regions and fields.

## The day

- **China carries Pakistan's first astronaut into orbit** — Shenzhou-24 lifts
  off for the Tiangong space station, carrying Pakistan's first astronaut, a
  first for China's space programme.
- **Attacks on shipping shake the Strait of Hormuz** — fresh attacks on
  commercial vessels raise fears for energy supplies, as Saudi-led strikes hit
  Yemen's Hodeidah port and Washington weighs its options.
- **Huawei convicted of stealing US trade secrets** — a US jury convicts Huawei
  of stealing trade secrets, though it clears the firm of racketeering, in a
  landmark sanctions case.
- **Also today** — Russia's own figures show nearly 500,000 lost in the
  Ukraine war; the CIA and two other US intelligence agencies report a breach
  of unclassified systems; Australia signs a security treaty with Solomon
  Islands; Colombia rescues all hostages from a Cartagena supermarket siege.

## The image

`entry.png` (1024×1024, PNG) is composed from three editorial illustrations
drawn for the three lead stories, with the headlines and summaries set in
type so every word reads exactly as written. The program does not draw it at
run time; it copies the finished image, so the judge sees exactly these
bytes.

## Run it

Node 22 or later, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`. The program is deterministic: two runs write
the same bytes.
