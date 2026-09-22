# Optional Institution Accent Theme

## Changes
- Extend the existing institution catalog with light and dark semantic accent colors for PKN STAN, UNPAD, UI, and ITB.
- Persist a new `Gunakan Tema Institusi` ON/OFF preference alongside the selected institution using the current local storage service.
- Apply the selected institution colors only to existing accent roles (buttons, active/selected states, progress, highlights, and focus rings); OFF restores the untouched FastLearner defaults.
- Add the toggle to the existing Target Institution section without changing its layout structure.
- Replace PKN STAN and ITB wordmark images with official emblem-only assets, keeping UI and UNPAD emblem-only assets.

## Verification
- Confirm institution selection and both preferences survive refresh.
- Confirm changing institutions while OFF leaves colors unchanged, while ON updates accents across pages.
- Inspect all four logos and test light/dark readability.
- Run the existing type/build validation and fix only related errors.
