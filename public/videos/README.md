# Hero background video

Put your video file here, named exactly:

    hero-video.mp4

Full path from the project root:

    public/videos/hero-video.mp4

That's it — the Hero component already points to `videos/hero-video.mp4`,
so once the file exists here, Angular will serve it and it'll show up as
the background video on the homepage automatically. No code changes needed.

## Tips
- Keep the file reasonably small (a few MB) — it autoplays on load, and a
  large file will slow down the initial page load. 1080p, 10–20 seconds,
  looped, muted footage works best (same as most "hero reel" portfolios).
- The video is muted by default (browsers block unmuted autoplay), and it
  loops automatically. Visitors can tap the "Play Reel" button on the
  right side of the hero to pause it if they want.
- Want a different filename or an external URL instead? Open
  `src/app/components/hero.component.ts` and change the `videoSrc`
  property.
