# Specification

## Summary
**Goal:** Make the site-wide cinematic moving canvas background clearly visible and reliably animated behind all pages and content.

**Planned changes:**
- Fix global CinematicBackground layering/stacking context so the canvas renders behind all page content across routes without being hidden by document/section backgrounds, while keeping pointer-events disabled and preventing layout shifts.
- Update the Home HeroSection overlay styling so it no longer fully obscures the global CinematicBackground (reduce/remove any fully opaque dark backdrop while maintaining text/CTA readability).
- Improve canvas rendering quality and robustness: size the canvas using devicePixelRatio, ensure full-viewport coverage via CSS, handle resize correctly, and cleanly start/stop animation on mount/unmount.
- Add a reduced-motion fallback that renders a static cinematic frame/gradient when `prefers-reduced-motion: reduce` is enabled.

**User-visible outcome:** On every page (including 404), users see a crisp cinematic background motion behind the content (or a static cinematic background with reduced motion enabled), with normal scrolling/clicking and readable hero content.
