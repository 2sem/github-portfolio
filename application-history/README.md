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
| 2026-10-26 | 올리브영 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-27 | 비전아이 | jd.md, resume.html, resume.md, resume.pdf, submission-note.md |
| 2026-10-27 | 디지털엑스 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-27 | 필상 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-28 | 당근 | jd.md, resume.html, resume.md, resume.pdf |
| 2026-10-30 | 블록체인랩스 | jd.md, resume.html, resume.md, resume.pdf |

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
| 고스트패스 | pending | 2026-10-28 · JobKorea 50070126, 여의도, iOS Swift+BLE 시니어, ① iOS, 마감 11/28 | jd.md |
| 더게임 | pending | 2026-10-28 · JobKorea 50017847, 성수, RN+React 웹 병행, 약함(~1/3), 마감 11/17 | jd.md |
| 더크리스피 | skipped | 2026-10-28 · AI 챗 스트리밍 UI 경험 없음, Expo+Next.js 웹 스택 부재, RN 3년 미만 (큐피스트와 동일 사유), 1/3 | jd.md |
| 더블유클럽 | unknown |  | jd.md |
| 브이아이펫 | unknown |  | jd.md, resume.md |
| 비버웍스 | applied | 2026-10-19, see applications/ | spec.docx |
| 빗썸 | unknown |  | resume.md, resume.pdf, spec.docx |
| 스피커블 | unknown |  | jd.md |
| 알서포트 | skipped | 2026-10-27 · macOS SDK, 1/3 신호, 3-of-5 게이트(코덱·네트워크·암호화·macOS) 근거 부족, 강동 위치 | jd.md |
| 아이엘케이코리아 | pending | 2026-10-28 · JobKorea 50194900, 신사, RN/Expo PG 결제앱, 3~5년, 약함(1-2/3), 마감 12/18 | jd.md |
| 에이티씨아이 | skipped | 2026-10-26 · unclear experience requirement, 가산, Next.js→mobile rebuild | jd.md |
| 엔디소프트 | unknown |  | resume.docx, resume.md, resume.pdf, spec.docx |
| 엘핀 | skipped | 2026-10-27 · iOS+Android 병행 요구, 1/3 신호, 회사 단계 불명, 하향 지원 위험 | jd.md |
| 엠피에이지 | unknown |  | jd.md |
| 오늘의집 | unknown |  | assignment-기술경영론.pdf, cover-letter.pdf, jd.pdf, resume.pdf |
| 웨이비나 | skipped | 2026-10-23 · solo dev at a seed-stage company, no medical-domain experience | jd.md, resume.html, resume.md, resume.pdf |
| 큐피스트(글램) | skipped | 2026-10-27 · AI 챗 스트리밍 UI 경험 없음, RN 3년 미만, 회사 단계 불명 | jd.md |
| 토스 | skipped | 2026-10-27 · 1/3 신호, 성숙한 슈퍼앱 단일 서비스 슬롯, 사전 과제, 같은 그룹 토스플레이스 2026-04-13 탈락(재지원 정책 미확인) | jd.md |
| 페이타랩 | unknown |  | resume.md, spec.docx |
| 하이퍼노바 | unknown |  | resume.docx, resume.md, spec.docx |
| 한화생명 | unknown |  | spec.docx |
| 현대자동차 | unknown |  | jd.pdf |
