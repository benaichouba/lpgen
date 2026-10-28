# DidactiPlan — source-inclusive teacher application

A working local-first React/TypeScript application packaged for Android using Capacitor. It includes the actual official PDF resources uploaded by the user (3PS/4PS combined guide, 5PS guide, three image-only outlines, and all three separate listening scripts), plus the one-page PDF template. PDFs are available in **My Library** and in the lesson planner.

## Run locally

Requires Node.js 22 and npm. `npm install` then `npm run dev`. Production web build: `npm run build`.

## Build Android

`npm install`, `npm run build`, `npx cap add android`, `npx cap sync android`, `cd android && ./gradlew assembleDebug` (Android SDK and Java 21 required). Or upload the project to GitHub on branch `main`, open **Actions → Android Debug APK → Run workflow**, then download the APK artifact. No precompiled APK is bundled here.

## Modules

Dashboard, class rosters with Excel/CSV import and local persistence, per-pupil formative assessment with PDF/Excel export, source-controlled lesson planner with separate 3PS/4PS/5PS engine modules and time validation, editable worksheets, teacher-authored game cards, official resource library. Class import merges names and preserves existing assessment records. PDFs use jsPDF and jsPDF-AutoTable. Arabic names are preserved in UI/Excel; **jsPDF's default font does not support Arabic shaping**, so Arabic names may not render correctly in PDF until a licensed Arabic-capable font is embedded.

## Important scope and source integrity

This is a functional source-inclusive v1, **not an autonomous AI curriculum generator**. The three level engines implement separate source mappings, 60/60/45-minute constraints, validation, and a clearly labeled editable scaffold. They do not extract all image-only outline steps into a machine-readable curriculum, and they do not automatically verify the teacher's claimed objective/page. The status 'source-verified' means the teacher supplied a source citation and passed structural validation, not that the PDF was machine-checked. The user must inspect the guide/outline and enter the exact objective and procedure. No invented official listening dialogue is generated. Worksheets and games are teacher-authored and must be checked for alignment. The supplied reference template PDF is bundled; generated PDFs use a compact dynamic layout and can run onto multiple pages when content is long. Data is stored on-device via localStorage; back up via Excel exports. This is not yet an encrypted, synced, multi-user production service.

## Assessment legend

+ Mastered; ± Acquiring; - Needs Remediation; N/O Not Observed. Decision M/C/R is teacher-entered; no arbitrary score cutoff. Use only criteria taught in the current section. The unified landscape grid supports PA, SW, PD, FT, SE and targeted notes.

## Sources

See `public/resources/` for the original source documents. Original PDFs have not been modified. Image-only outlines should be viewed visually. Do not publish the bundled official documents publicly without confirming redistribution rights.

## Component structure (corrected release)

`src/components/Navigation.tsx`, `Dashboard.tsx`, `ResourceLibrary.tsx`, and `LessonField.tsx` are implemented and imported by `src/App.tsx`. Other module screens still reside in App.tsx and can be extracted further. This release fixes the empty components directory; it does not claim all screens have been modularized.


## GitHub repository layout and Actions troubleshooting
Upload the *contents* of this ZIP to the repository root. `package.json`, `src/`, `public/`, and `.github/` must be at the same level. Keep only `.github/workflows/android-apk.yml` enabled; delete older workflows using `cache: npm` unless you have committed a lockfile. Start a **new** workflow run on the latest commit; rerunning an old commit will not pick up this fix. The workflow uses `npm install` (not `npm ci`) because a lockfile is not bundled. A successful Android build has not been verified in this environment.
