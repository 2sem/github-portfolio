# Application history

Archive of job applications and the resume/reference material behind them.
Apply dates come from the before/applied screenshot file names in the original export. Those screenshots are not stored in the repo (kept locally in `~/Downloads/references-screenshots/`); only the date survives, in the folder name.

## Find when I applied

Folder names start with the apply date, so searching by company name is enough:

```bash
ls application-history/applications | grep 쿠팡     # -> 2026-10-13_쿠팡페이
grep -i 헤렌 application-history/README.md          # index table below
```

A company only under `undated/` has no known apply date.

## Layout

```
application-history/
  applications/<YYYY-MM-DD>_<company>/   applied (date = apply date)
  undated/<company>/                     material with no apply date: not applied (see Status in the Undated table) or applied-date unknown
  bases/                                 resume base files and the pre-skill master
```

The live resume source of truth is the `yj-resume-writer` skill
(`.claude/skills/yj-resume-writer/references/master.md`). `bases/master-legacy.md` is the
older, smaller master kept for reference only.

## File naming (per application folder)

| File | Meaning |
|---|---|
| `resume.md/.docx/.pdf` | resume submitted for this company |
| `resume-en.*`, `resume-<variant>.*` | other language/variant |
| `spec.docx` | JD analysis / spec notes (`spec.md` if markdown) |
| `jd.*` | original job posting |
| `cover-letter.*`, `self-intro.docx` | extra documents |

## Privacy

No phone numbers are stored in this folder. Any resume file that contained one was
removed from the repo and, if needed, re-created as a phone-free `.md`
(e.g. `bases/resume-default-2026-04.md`). `History.xlsx` is also kept out of the repo.
Check with `python3 -I .claude/skills/archive-application/scripts/check_phone.py application-history`.

## Notes

- 헤렌 has two applications (2026-08-09, 2026-09-02).
- `undated/KIRA/screenshot-jd.png` was named `2027-07-29-KIRA-공고` (year looks like a typo); it is a posting capture, not an apply date.
- `2026-07-22_A1-BJAK` keeps `screenshot-done.png` / `screenshot-spec.png` (not before/applied captures).
- Empty source folders (AB180, Liner, 엘박스, 컬리, 토스) were not carried over.

## Applications

| Applied | Company | Files |
|---|---|---|
| 2026-07-22 | A1-BJAK | jd-analysis.docx, jd.pdf, resume-en.pdf, screenshot-done.png, screenshot-spec.png |
| 2026-08-09 | 헤렌 | resume.docx, spec.docx |
| 2026-08-12 | 밀리의서재 | resume.docx, resume.md, spec.docx |
| 2026-08-13 | 강남언니 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-08-14 | 지바이크 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-08-17 | 원더월 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-08-18 | 아르템 | resume.md, resume.pdf, spec.docx |
| 2026-08-19 | 뱅크샐러드 | spec.docx |
| 2026-08-20 | 포디 | resume.md, resume.pdf, spec.docx |
| 2026-08-22 | 글로벌머니익스프레스 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-08-26 | 제제미미 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-01 | 휴넷 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-02 | 헤렌 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-03 | 중고나라 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-04 | 피에프씨테크놀로지스 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-07 | 핀다 | resume-alt.docx, resume.docx, resume.md, resume.pdf |
| 2026-09-08 | 디오 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-08 | 스트레스솔루션 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-09 | 샵라이브 | resume.docx, resume.md, resume.pdf, self-intro.docx, spec.docx |
| 2026-09-10 | 아토머스 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-11 | 쓰리아이 | resume.docx, resume.md, resume.pdf, spec.docx, spec.md |
| 2026-09-16 | MS인포테크 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-09-17 | 채널톡 | resume-glitty-base.docx, resume.docx, resume.md, spec.docx |
| 2026-09-18 | 글리티 | resume.docx, resume.md, resume.pdf, spec.docx |
| 2026-10-13 | 쿠팡페이 | resume.docx, resume.pdf, spec.docx |
| 2026-10-19 | 뤼튼 | resume.html, resume.md, resume.pdf, spec.docx |
| 2026-10-19 | 비버웍스 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-20 | 데이터라이즈 | jd.md, resume.html, resume.md, resume.pdf, spec.md |
| 2026-10-21 | CJ ENM | jd.md, resume.html, resume.md, resume.pdf, spec.md |
| 2026-10-22 | 텔어스 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-23 | 티맵모빌리티 | jd.md, resume.html, resume.md, resume.pdf |

## Undated

Status: `pending` = JD collected, apply/skip not decided · `skipped` = reviewed, decided not to apply · `applied` = applied elsewhere (see Applications) · `unknown` = older material, not reviewed.

| Company | Status | Note | Files |
|---|---|---|---|
| 29CM | unknown |  | jd.pdf, resume.pdf |
| CMC Global | unknown |  | jd.pdf, presentation-gp-kr.pptx, presentation-gp.pptx, presentation-talkfile.pptx, qcells-core-ios-workflow.docx, qcells-core-ios.docx, qcells-core-pro-proposal-1.md, qcells-core-pro-proposal-en.docx, qcells-core-pro-proposal-fix-en.docx, qcells-core-pro-proposal-fix.docx, qcells-core-pro-proposal.docx, qcells-core-pro-proposal.md, resume-en.md, test.docx, untitled.docx |
| KIRA | unknown |  | screenshot-jd.png, spec.docx |
| TRUST WALLET | unknown |  | spec.docx |
| UJET | unknown |  | resume-en.pdf, resume-mobile.pdf, spec.docx |
| xAI | unknown |  | jd.docx, jd.pdf |
| 더블유클럽 | unknown |  | jd.md |
| 디지털엑스 | unknown |  | jd.md |
| 브이아이펫 | unknown |  | jd.md, resume.md |
| 비버웍스 | applied | 2026-10-19, see applications/ | spec.docx |
| 비전아이 | pending | fit maybe/low; apply or skip undecided | jd.md, resume.md |
| 빗썸 | unknown |  | resume.md, resume.pdf, spec.docx |
| 스피커블 | unknown |  | jd.md |
| 에이티씨아이 | unknown |  | jd.md |
| 엔디소프트 | unknown |  | resume.docx, resume.md, resume.pdf, spec.docx |
| 엠피에이지 | unknown |  | jd.md |
| 오늘의집 | unknown |  | assignment-기술경영론.pdf, cover-letter.pdf, jd.pdf, resume.pdf |
| 올리브영 | pending | 10~15 yrs required vs 8 yrs; awaiting decision | jd.md |
| 웨이비나 | skipped | 2026-10-23 · solo dev at a seed-stage company, no medical-domain experience | jd.md, resume.html, resume.md, resume.pdf |
| 페이타랩 | unknown |  | resume.md, spec.docx |
| 하이퍼노바 | unknown |  | resume.docx, resume.md, spec.docx |
| 한화생명 | unknown |  | spec.docx |
| 현대자동차 | unknown |  | jd.pdf |
