# Complete the three FastLearner fixes

## Scope
Bring the linked existing FastLearner source into this blank workspace, preserving its current warm/brown interface and all unrelated pages. Change only Drill behavior, Profile target institution, and answer-option contrast.

## Implementation
1. **Drill hierarchy and filtering**
   - Replace the Drill page’s prototype-only behavior with the existing catalog-driven hierarchy: Exam → Subtest → Material → Drill Settings → Questions.
   - Populate SKD, UTBK, Psikotes, TPA, and TBI directly from the existing catalog.
   - Reset dependent selections when exam or subtest changes, keep material selection explicit, and pass exam, subtest, all selected materials, count, difficulty, status, and Challenge mode into the existing question session.
   - Keep the existing session selector and question bank; do not add taxonomy levels or bulk content.

2. **Target Institution in Profile**
   - Add a small data-driven institution catalog for PKN STAN, UNPAD, UI, and ITB with locally stored official logo assets.
   - Add selection and change controls within the existing Profile visual structure.
   - Persist the selected institution through the existing storage abstraction and display the current choice on reload.

3. **Answer contrast**
   - Add semantic answer-state colors to the existing warm/brown design tokens for light and dark modes.
   - Apply explicit foreground/background/border states for default, hover, selected, correct, incorrect, and disabled answers without changing layout, spacing, typography, or shape.

## Verification
- Check the app compiles through the normal project validation.
- Exercise representative SKD, UTBK, Psikotes, TPA, and TBI Drill selections and confirm resulting questions match exam, subtest, and material.
- Confirm count, difficulty, status, and Challenge mode reach the session filters.
- Select an institution, refresh, and confirm it persists.
- Select and submit correct and incorrect answers in light and dark modes, confirming readable text and distinct states.
