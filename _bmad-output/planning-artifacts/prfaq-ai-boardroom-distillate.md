---
title: "PRFAQ Distillate: ai-boardroom"
type: llm-distillate
source: "prfaq-ai-boardroom.md"
created: "2026-11-25"
purpose: "Token-efficient context for downstream PRD creation"
---

# PRFAQ distillate: [Product]

Companion sources: `briefs/brief-ai-boardroom-2026-11-25/brief.md` and `addendum.md` (both final). Where this file and the brief disagree, the brief's decisions win; this file adds the PRFAQ's findings on top.

## Status and verdict

- PRFAQ complete 2026-11-25. Verdict: **needs more heat.** The thinking is forged and the evidence isn't: no real buyer has seen the concept, and the differentiation claim hasn't been demonstrated.
- **PRD gate not met:** the addendum's "Blocks the PRD" gate requires a written comparison from public material of what Cortex, Planview and Jellyfish can and can't show for the crisis week. It doesn't exist yet. The PRFAQ recommends adding OnePlan. A PRD written before it must mark differentiation as unproven and must not build requirements on an assumed gap.
- Verdict recommends, in order, before the PRD: (1) the written competitor comparison (the PRD gate); (2) five-VP paper walkthrough (not gated, recommended); (3) first ADR on key-person data and personal data in the decision record; (4) PRD, treating every "PRD must define" item below as required.

## Identity (decided)

- Commercial product from Nexoma Labs, built in public; the episode series (S1E8, S2E5, Manager Playbook Shorts) documents the build and isn't the product. The MIT license was removed; licensing is settled separately.
- Write "[Product]" for the name in every product-facing document. Never use the codename.
- Category: a decision platform for technology leaders who manage through managers. Not a project tracker, Jira replacement, metrics dashboard or portfolio roll-up.
- Primary user and buyer: the leader (Director, Senior Director, VP, CTO) with several directors, 10+ teams, competing initiatives, a fixed budget and a CEO who wants an answer and a date.
- Secondary MVP user: the director. They see every flag about their area at the same moment as the leader, add context and options, and can raise a flag before any rule fires.
- The CFO and CEO read the output; they aren't MVP users.
- Job statement: "When finance asks when we're done, give an honest date and two or three options to change it, before they have to ask."
- The money conversation is the big moment. Monday morning is the habit.
- The loop: Sense (jobs 1 and 2), Decide (3), Commit (4), Review (5). All five jobs are in the MVP.
- Term: "cost of delay" everywhere (the context file's decision-debt term), never "cost of waiting"; the same term in code.

## The five bets (decided; source of functional requirements)

1. **Honest total and priced options.** Most likely date, then range; "no finish date at this pace" when scope grows as fast as work finishes. The warning goes out at once with the cost of delay, and two or three priced options attach within days.
2. **Monday queue.** Three to five decisions that need the leader this week, ranked by consequence and deadline, plus *Doesn't need you, and why* with a reason for each item. Product test: if we can't name a decision a VP makes every week that this improves, we're building the wrong thing.
3. **No silent drift or ignoring.** Every date or budget move becomes a one-step recorded decision: accept the new date, cut scope or add capacity. "Not now" is a one-step deferral with five parts: reason; cost of delay (engine-counted from day one); condition that ends the wait; tripwire that forces an earlier decision; owner with a review date.
4. **Flags nobody deletes and everybody explains.** Same flag to the leader and director at once. It goes into the CEO brief with the leader's response. Director-raised flags carry a timestamp: credit for early bad news, never a leaderboard.
5. **Code for numbers, a board for arguments.** Tested code produces every figure. A validator rejects any AI-written number that doesn't trace to an engine fact. Board rules: positions taken before seeing others; dissent visible; quorum rule ("No quorum: executive judgment required"); red-line veto; bounded rounds; a failed advisor handled like a crashed node; only a human makes a decision final. The decision record is append-only and hash-chained.

## Requirements signals

- **Flags:** every flag shows the rule, the threshold, the threshold version, the data and the owner. Every flag carries a suggested question for the director (AI judgment), not a conclusion.
- **No read receipts:** never record who viewed a flag or infer inaction from viewing. Record the flag's age, the cost of delay and explicit choices only.
- **Ownership:** a decision can't name an owner until that owner accepts. Acceptance is an explicit recorded choice. (Replaces the earlier "owner who hasn't seen it" wording, which needed a read receipt.)
- **Decision record:** option chosen, owner, review date, success measures, assumptions, who decided; append-only, hash-chained, tampering detectable.
- **Assumption alerts:** when an assumption behind a decision stops being true (example: the lease decision assumed a migration pace the teams are no longer hitting), the decision returns to the queue.
- **Review:** on the review date, the leader grades their own call against the success measures set at decision time.
- **CEO brief:** one page; leads with the most likely date, then the range and what has to be true for it, plus the decision that would narrow it; lists every rule that fired with the VP's response; every figure traces to its source; dissent is visible (where it appears is a PRD item).
- **Estimates:** visibly marked as estimates, with who made each one and when. Examples in the seed data: ~$45K/month billing, ~$108K/month AI pilot burn, ~16 team-weeks returns portal.
- **Forecast:** shows its inputs (scope added and finished per sprint); says when data is too thin and names what's missing.
- **CapEx/OpEx:** [Product] never decides; it follows the controller's capitalization policy.
- **MVP outputs for the crisis week:** three strategies, each with business, financial, delivery, people and security consequences; one recommendation; 24-hour and 30-day plans with an owner role per action, success measures and review dates; the CEO brief; the decisions needing executive approval.

## Code versus AI (decided)

- **Must be code with tests:** thresholds, rule evaluation, forecasts, money, percentages, "no finish date at this pace", alert counts, the Monday queue's ranking and what lands on *Doesn't need you*, cost of delay, tripwire checks, quorum counting, round limits, the hash chain, every number in the CEO brief.
- **AI judgment:** drafting options; each advisor's argument; challenging unsupported assumptions; naming missing information; suggesting questions for directors; summarizing director context; the CEO brief's prose around engine values.
- **Enforcement:** AI text refers to engine values by name, and code inserts the numbers. The validator rejects untraceable AI-written numbers, and a test fails if one gets through.

## Project constraints (from CLAUDE.md; non-negotiable)

- Demo data comes only from `docs/company-context.md` (fictional Tallmast Logistics). Never real company data.
- Money uses BigDecimal with explicit scale and rounding. Never double or float.
- AI never produces a number shown to users.
- Team-level metrics only. Never individual performance scores.
- Module boundaries: no cross-module table access; published APIs or events only; the module verification test must pass.
- Tests first for rules and calculations; full suite before "done".
- The Anthropic API key lives only in backend configuration.
- Follow ADRs in `docs/adr/`. None exist yet.

## MVP scope (decided)

- **In:** web app with leader and director views; file import of team signals, budget, actuals, commitments, decision debt and the human-kept fields; versioned rule thresholds; finance engine at full S2E5 detail; date forecast with range; Monday queue and *Doesn't need you*; flags including director-raised; decision record with one-step slips and "Not now" deferrals; options argued by the advisor board; CEO brief; assumption alerts and dated reviews.
- **Out:** integrations (file import only); individual metrics; mobile; metrics wall; portfolio roll-up; AI chat as the home screen; any real company's data in demos.
- **Never building:** individual performance scores (including director forecast accuracy); leaderboards; read receipts; a project tracker; a metrics dashboard; anything pitched as blame ("timestamp your predecessor's mistakes"; the pitch is an honest baseline); AI-produced numbers or AI-made decisions; a way to delete or soften a flag; CapEx/OpEx judgments.

## MVP acceptance: Tallmast Q4 crisis week, S2E5, from file import (fixed seed, 26 weeks per team)

1. Rules fire as the context file says: silent-failure on Customer Platform Reliability; key-person on Customer APIs once the two resignations are recorded; observability stays on *Doesn't need you* with all five deferral parts showing (deliberate negative test).
2. Money is exact; every S2E5 fact reproduced (list below).
3. The Monday queue shows three to five decisions ranked by consequence and deadline. **Conflict, see PRD items.**
4. The full crisis-week output is produced (list above).
5. Board rules hold: independent positions; dissent shown; no-quorum case returns the fixed message; failed advisor detected and shown; nothing final until the leader decides; tampering with the record is detectable.
6. Flag rule holds: simultaneous delivery to director and VP; no deletion; director-raised flags timestamped; deferred flags keep counting cost of delay; CEO brief lists every fired rule with the VP's response.
7. Validator rejects any untraceable AI-written number, proven by a test.
8. Public-demo blockers are cleared, including a live demo comparison with Cortex, Planview and Jellyfish.
9. Review closes the loop: an assumption breaks and the decision returns to the queue; on the review date the "30 days later" record grades the decision. **That record doesn't exist in the context file yet** (it's written after S1E8).

## S2E5 finance facts (engine test suite; from `docs/company-context.md`)

- Remaining $7.2M = $3.4M committed + $3.8M uncommitted.
- Uncommitted isn't discretionary: $2.8M Q4 payroll ($1.2M capitalized + $1.6M OpEx) and $0.43M cloud. Truly discretionary ≈ $0.57M (vendors $150K + training $320K + contingency $100K).
- Cloud $550K in Q1 and Q2, $670K in Q3 (22% over). If Q4 repeats Q3, year-end cloud is $2.44M, $240K over plan.
- Forecasts: run-rate $12.8M ÷ 0.75 ≈ $17.1M; commitment-aware $12.8M + $3.4M + $2.8M + $0.67M + $0.57M ≈ $20.24M; if the change order is signed ≈ $21.18M (+5.9%).
- 15% cut = $3.0M = 41.7% of $7.2M remaining = 78.9% of $3.8M uncommitted.

## Gates (decided 2026-11-25)

- **Blocks the PRD:** a written comparison from public material of what Cortex, Planview and Jellyfish can and can't show for the crisis week.
- **Block the public demo:** estimates marked with who and when; the human-kept field list with minutes per week; a live demo comparison with Cortex, Planview and Jellyfish.
- **Block the first paid pilot:** honest dates on messy real data; the budget and actuals import format; directors' reaction to flags (help or ambush); evidence a real VP would pay.
- **Fast-follow:** alert volume, measured on the 26 seeded weeks before the public demo.
- **Accepted trade-off:** a VP managing by dashboard. Written rule: [Product] supports the conversation and never replaces it.

## PRD must define (raised in the PRFAQ, not decided)

- **Monday queue cap vs crisis week.** By count, at least 8 decisions qualify on crisis-week Monday: 4 from decision debt (billing retirement, SRE staffing, AI pilot, lease) plus 4–5 from the day's events (vulnerability, Sev-2 and SLA threat, resignations, migration cutover, 15% plan). The queue holds 3–5. Candidate rule: group by shared constraint, giving exactly 5 (Customer Platform: vulnerability, Sev-2s, resignations, billing retirement; migration: cutover, lease, change order; the 15% plan; SRE staffing; the AI pilot). Grouping must be code.
- **Decision-debt rule gap:** the $940K change order meets none of the rule's conditions as written (no monthly cost of delay, no stated deadline, not postponed), yet it clearly needs the VP. Add a condition (for example, a commitment awaiting signature) or rely on grouping.
- **Validator rules:** an allowlist of structural numbers ("three strategies", "24-hour plan", dates such as "Jan 5"); numbers written as words; whether a rounded engine value traces; ratios the AI derives itself ("nearly 80%", "about half").
- **Estimate propagation:** any figure calculated from an estimate is marked as an estimate. Consequence: the $20.24M commitment-aware forecast is itself an estimate (it assumes Q4 cloud repeats Q3 and the discretionary money gets spent).
- **Wrong-flag correction without deletion:** candidate is that corrected source data re-runs the rule and the flag closes as "source data corrected", with history kept.
- **Board parameters:** quorum size; who holds the red-line veto and what counts as a red line (for example, the compliance officer's); round limit; whether a failed advisor counts as absent for quorum; order positions are revealed; where dissent appears in the CEO brief; who can verify the hash chain and how tampering is reported; cost and latency of one board run.
- **Review grade definition:** the grade stays on the decision (met or missed against its own success measures, plus what was learned). Never aggregate grades per person: a per-leader hit rate would be an individual performance score, which the project rules forbid. The Vision's "which options worked" aggregates by decision type and assumption only.
- **The 15% ambiguity:** the CFO doesn't say whether 15% means this year's budget or a 15% lower run-rate. Engine facts cover only the annual reading ($3.0M). Decide whether the engine also calculates the run-rate reading or the board only names it as missing information.
- **"Critical system" definition** for the key-person rule. The AI Route Optimization model pipeline already has bus factor 1; the SRE team is the only team with data-center network knowledge.
- **Departure timing:** record a key-person count change at resignation or at the last day.
- **Weekly export ownership:** file import means someone exports and uploads fresh files every week. Name the role.
- **Severity gaming defense (optional):** apply "no silent drift" to incident severities so a reclassification becomes a recorded change with who and why. Requires incident history in the import.
- **Pilot success measure:** the 30-day measure in the press release (calculated vs reported status per initiative; date/budget changes that became recorded decisions) is invented, not agreed.

## Open questions (not answerable yet)

- Would a real VP buy, and pay? Test: five-VP walkthrough of the crisis week on paper. Ask whether they'd buy a product that keeps their deferrals on the record, and what they'd stop using to make room for it. Also ask each VP to read the CEO brief the way their CEO would (tests most-likely-date-plus-range).
- Do buyers see a difference from Cortex, Planview, OnePlan and Jellyfish? Test: before the PRD, a written comparison from public material (product pages, documentation, recorded walkthroughs, Planview's on-demand demo) of which crisis-week outputs each can and can't produce; later, a live demo comparison for the public-demo gate.
- Does real data support an honest date? Test: forecast one real team's exported ticket history, anonymized, outside the demo data.
- What budget/actuals file will a finance team hand over? Test: ask one finance team and import it.
- Do directors read flags as help or ambush? Test: show the silent-failure flag to two or three real directors.
- Minutes per week for the eight human-kept fields and the weekly export. Test: time them on the demo (public-demo blocker).
- Real alert volume and thresholds. Seeded counts only show what the seed generator was built to produce.
- Pricing model and whose budget pays. Per-seat pricing fails: the users are about six people (leader plus directors). Value scales with budget and teams under management. [Product] would itself be a discretionary vendor line in the budget it analyzes. Not on the gate list, but a paid pilot needs a price.
- Key-person data line: counts per critical system, never names, is proposed (the human-kept field list already assumes it). Counts aren't anonymous in small teams (a 3 → 1 drop on resignation day identifies the people). Needs an ADR and a privacy read.
- Legal exposure: undeletable flags and dated deferrals create a discoverable "you knew on this date" line (the same reason read receipts were dropped). The append-only chain holds personal data (owner names, responses, deciders), which conflicts with erasure rights such as the GDPR's. Candidate fixes: personal data outside the chain, referenced by ID, or crypto-shredding. Retention and legal holds are undefined. Needs a lawyer before the first paid pilot.
- Team and timeline: no planning document says who builds it or how many people. No architecture, no ADRs, no estimate.

## Risks (kill list, rough order of likelihood)

1. The leader doesn't want to know (riskiest assumption). Design answer: every warning carries the cost of delay with options within days; [Product] records reasoning, not inaction, and a priced, dated deferral is the VP's defense. Unvalidated.
2. Directors game the inputs (for example, filing a Sev-2 as a Sev-3); rules go quiet and green returns. Partial answer: compare reported with calculated status; prefer hard-to-game signals (customer-facing incidents, on-call pages).
3. A general AI assistant over incumbents' MCP servers (Cortex, OnePlan) is "good enough".
4. The leader stops keeping the decision record; jobs 4 and 5 die and [Product] becomes a dashboard.
5. One confident wrong number in front of a CFO (misread import, or an estimate shown as fact).
6. Importing each new customer's data costs more than they'll pay.

## Competitive intelligence (verified November 2026)

- **Each of the five jobs has an incumbent covering part of it.** The claimed difference is the join (team signal → money → recorded decision → review) under three guarantees: no AI numbers, no deleted flags, no rewritten record.
- **Cortex:** markets an "AI chief of staff" use case built on its MCP server, announced October 2025; it isn't a separate product. It surfaces the most critical concerns across the org, flags at-risk teams early, and answers grounded in services, ownership, incidents and scorecards. Targets VPs and directors. Sells through demos. No budget or finance features found.
- **Planview:** Anvi surfaces variance, drafts reallocation options and reconciles roll-ups. Its Capacity Rebalancing prompt lays out options with impact estimates and a recommended scenario. It also offers side-by-side scenario comparison. An on-demand scenario-planning demo is published (registration required). Portfolio level, not team signals.
- **OnePlan (November 2026 release):** Strategic Execution Management compares the projected benefits of investments with realized ones, ties initiatives to OKRs and assigns ownership (overlaps jobs 4 and 5). Its MCP server opens portfolio data to ChatGPT, Claude and Copilot.
- **Jellyfish:** investment allocation; sells R&D capitalization to CFOs and controllers. Pricing not public (G2). Vendr reports an average of about $84K a year. Demo-led sales; no confirmed self-serve trial.
- **Others:** LinearB; Swarmia (capitalization in its data model); DX (Atlassian); Faros; Jira Align. Gartner Magic Quadrant for Developer Productivity Insight Platforms, May 2026.
- **Earlier price reference (secondhand):** $50K–$120K a year for 50–150 seats for engineering analytics tools.
- **Developer backlash** targets scoring individuals and tying numbers to reviews, more than team-level measurement.
- **Moat assessment:** the board design is published in the episodes, so it can be copied. The decision record is a switching cost that's worth nothing on day one. The guarantees plus the join are the most credible moat, and they're unproven.

## Rejected framings and ideas

- "AI boardroom" leads with the technology. "A dashboard for VPs" is what the product isn't. "Decision intelligence" is jargon customers don't use.
- "The total is the product" was merged into bet 1.
- "Used at the money moments, not daily" was replaced by: the money conversation is the big moment, Monday morning is the habit.
- "Seen, no action" read receipts were rejected because they put surveillance on the VP and create a discoverable "you knew" line.
- "No warning without priced options" was replaced by: the warning goes out at once with the cost of delay, and options attach within days.
- The new-VP-first-90-days pitch ("timestamp your predecessor's mistakes") was rejected as blame; the pitch is an honest baseline.
- The job-5 framing "don't grade whether a decision worked" was reversed: keep both the assumption-break alert and the dated review; leaders grade their own calls.
- Alternative headlines considered: "[Product]: walk into the money conversation with an honest date and three ways to change it"; "[Product] finds the problems your green status reports hide, and prices your way out."

## Unvalidated hypotheses carried in the documents

- How leaders cope today (Sunday-night spreadsheet, chief of staff, one-on-ones before the meeting) is a coach hypothesis.
- Both press-release quotes are fictional or placeholders and aren't evidence of demand.
- "Why us" rests on the build-in-public audience, which has no numbers yet.
