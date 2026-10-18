---
name: resume-skimmer
description: Simulate how an HR recruiter and a CTO skim a resume for a given job posting. Builds both personas from the JD, has each skim the resume the way a real reader would (about 10 seconds, top-down), then passes the results to the resume-refiner agent. Use when the user says "skim my resume", "이력서 스키밍", "HR이랑 CTO가 보면", "이력서 검토해줘 for this JD", or wants feedback on a resume against a posting.
---

# Resume Skimmer

Two personas read the resume cold, each as the real person would. Their reactions drive the refinement.

## Inputs
- JD (text, URL, or an `application-history/` folder path). If missing, ask for it.
- Resume (PDF or text; default: the latest resume produced by `resume-writer`). PDFs: extract text; never print phone numbers (see `archive-application/scripts/check_phone.py`).

## Steps

1. **Build personas from the JD** (write them down briefly before skimming):
   - **HR recruiter**: company stage/size, hiring pressure, screening checklist from the JD (must-haves, years, stack keywords, location/visa/salary red flags), reading habits (scans 6-10 seconds, keyword match, job-title and tenure continuity, gaps).
   - **CTO / hiring tech lead**: team and product context inferred from the JD, the real technical problem behind the posting, what seniority they need, what they distrust (buzzword lists, unowned results, vague metrics), the top 2-3 things they would probe in an interview.
2. **Skim**: spawn two subagents in parallel (`general-purpose`), one per persona. Each gets only its persona brief, the JD, and the resume text. Instruct them to stay in character and report:
   - First 10 seconds: what jumped out, what they remembered.
   - JD must-haves found vs. missed (with where they looked).
   - Doubts, red flags, confusing or weak lines (quote them).
   - Verdict: pass / maybe / reject, one-sentence reason, and the one change that would most raise it.
   They must not edit anything or invent resume content.
3. **Synthesize**: show the user a short side-by-side (HR vs CTO): verdicts, agreed problems, conflicting reads.
4. **Refine**: hand the JD, resume, and both reports to the `resume-refiner` agent. Present its ranked edits. Apply nothing without the user's OK; edits that add or rewrite bullets need explicit approval.
5. Optionally re-run step 2 on the refined resume to confirm the verdict moved.

## Rules
- Personas react to the resume as written; they do not know the candidate's real background beyond it.
- Facts stay exact. Skim results never justify adding claims the candidate cannot support.
- Keep output concise; no full transcripts of the subagent runs.
