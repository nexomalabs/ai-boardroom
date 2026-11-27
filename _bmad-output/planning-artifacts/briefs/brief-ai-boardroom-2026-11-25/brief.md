---
title: "Product Brief: [Product]"
status: final
created: "2026-11-25"
updated: "2026-11-25"
inputs:
  - "docs/company-context.md"
  - "_bmad-output/brainstorming/brainstorm-tech-leader-decision-platform-2026-11-24/.memlog.md"
  - "_bmad-output/planning-artifacts/prfaq-ai-boardroom.md"
---

# Product brief: [Product]

## Executive summary

[Product] is a decision platform for technology leaders who manage through other managers. That means the Director, VP or CTO with several directors, ten or more teams, competing initiatives, a fixed budget and a CEO who wants an answer and a date. It isn't a project tracker, a Jira replacement or a metrics dashboard.

The job it's hired for: **when finance asks when we're done, give an honest date and two or three options to change it, before they have to ask.** That money conversation is the big moment. Monday morning is the habit: a short queue of the decisions that need the leader this week, and a list of what doesn't, with the reason.

[Product] adds up the total that no single status report adds up, flags problems that green reports hide, and prices the options. A board of AI advisors argues them, and only the leader makes a decision final. Every number comes from tested code, and the AI never produces one.

Nexoma Labs is building [Product] in public as a commercial product. The MVP proves itself on one fictional company: the Tallmast Logistics Q4 crisis week, with full finance detail, runs end to end from a file import.

## The problem

A leader with ten teams reads ten status reports, and each can be true while the total is false. One real project reported green for nine months. QA signed off every sprint and the product owner accepted every story, but each sprint planning added new requests and the release date quietly moved. The truth came out when finance asked, "At this pace, when are we done?" The honest answer was "next year." Nobody hid anything. Nobody owned the total, and the total didn't exist anywhere as a number.

At Tallmast, the Customer APIs team reported green while the share of its releases that broke something rose from 9% to 21% in eight weeks. The same team ran at 118% of planned capacity for six sprints and had three serious incidents in fourteen days. When the CFO cut the budget by 15%, it sounded manageable. But the $3.0M was 78.9% of the uncommitted money, and only about $0.57M of that was truly discretionary. Decisions that depend on the same overloaded team keep getting postponed. Retiring the legacy billing system has waited three quarters, at about $45K a month.

Today leaders cope with a Sunday-night spreadsheet, a chief of staff and quick one-on-ones before the meeting `[ASSUMPTION]`. The cost is walking into the money conversation with bad news and nothing to offer but an apology.

## Who this serves

- **Primary: the leader who manages through managers** (Director, Senior Director, VP, CTO). Success means walking into a finance or CEO conversation with the most likely date, the range, what has to be true for it, and priced options. The leader is the buyer.
- **Secondary, in the MVP: the director.** They see every flag about their area at the same moment as the leader, can add context and options, and can raise a flag before any rule fires. Success means bringing bad news early, with options, instead of being ambushed by it.
- **Readers of the output, not MVP users: the CFO and CEO.** The CFO gets numbers they can put in front of the board. The CEO gets the most likely date first, then the range and what has to be true for it.

## The five jobs

The five jobs form one loop: **Sense** (jobs 1 and 2), **Decide** (3), **Commit** (4) and **Review** (5).

| Job | What [Product] does | Where it stands |
|---|---|---|
| 1. See what needs you today, and what doesn't | The Monday queue and *Doesn't need you, and why* (bet 2) | Strong; it's the weekly habit |
| 2. Detect what status reports hide | Flags that compare a team's reported status with its own data (bet 4) | Strongest |
| 3. Test trade-offs before deciding | Two or three options: code prices them, and the advisor board argues them (bets 1 and 5) | Strong, if estimates are clearly marked as estimates |
| 4. Commit decisions with owners, deadlines and success measures | A decision record with owner, review date, success measures and assumptions, and no silent slips or silent ignoring (bet 3) | Was weak (just a form); rescued by the slip rule |
| 5. Check whether the decision worked | An alert when an assumption breaks, and a review on the decision's date | The weakest job, kept in the MVP because leaders grading their own calls is part of what makes this different |

## Product bets

1. **Walk into the money conversation with the honest total and priced options.** The honest total is the most likely date and its range. When scope grows as fast as work gets done, it's "no finish date at this pace." Leaders look away from warnings they can't act on. So a warning goes out at once with the cost of delay, and two or three priced options attach within days. *Question it answers:* "When are we done, and what would it cost to change that?"
2. **The Monday queue.** Three to five decisions that need the leader this week, ranked by consequence and deadline, plus *Doesn't need you, and why*. The test: if we can't name a decision a VP makes every week that this improves, we're building the wrong thing. *Question it answers:* "What do I have to decide this week, and what can I safely leave?"
3. **No silent drift, and no silent ignoring.** Every move of a date or budget becomes a one-step recorded decision: accept the new date, cut scope or add capacity. *You can ignore a warning; you just can't ignore it quietly.* "Not now" is a one-step deferral. It shows its reason, the cost of delay (counted by the engine from day one), the condition that ends the wait, the tripwire that forces an earlier decision, and an owner with a review date. That's what lets a CEO read it as judgment rather than neglect. The observability consolidation is the worked example (see the addendum). *Question it answers:* "Who agreed to this slip, or this wait, and why?"
4. **Flags nobody deletes and everybody explains.** The same flag reaches the leader and the director at once, and goes into the CEO brief with the leader's response. Directors can raise a flag before any rule fires, and the record shows when. That's credit for early bad news, kept as a timestamp, never a leaderboard. *Question it answers:* "What is green hiding, and what does the owner say about it?"
5. **Code for numbers, a board for arguments.** Tested code produces every figure. A validator rejects any AI-written number that doesn't trace to an engine fact. The advisor board argues by fixed rules:
   - Each advisor takes a position before seeing the others.
   - Dissent stays visible.
   - A quorum rule applies. Without quorum, the answer is "No quorum: executive judgment required."
   - A red line triggers a veto.
   - The number of rounds is bounded.
   - A failed advisor is handled like a crashed node.
   - Only a human makes a decision final.

   The decision record is append-only and hash-chained. *Question it answers:* "Can I put this in front of the board, and who disagreed?"

The data each bet needs, which parts are code versus AI judgment, and the full board rules are in the [addendum](addendum.md).

## What makes this different

- **It starts from the decision and the money, not from engineering activity.** Engineering analytics tools (Jellyfish, LinearB, Swarmia, DX, Faros) measure how engineering works. Portfolio tools (Planview, Jira Align) plan where the money goes.
- **The board argues and the leader decides,** with dissent kept on the record.
- **Leaders grade their own calls.** Review closes every loop, against an append-only record the leader can't quietly rewrite.
- **We're honest about the overlap.** Cortex markets an "AI chief of staff" use case built on its MCP server. Jellyfish now sells to CFOs. Planview markets AI that drafts budget reallocations. Before the PRD, a written comparison from public material has to show what each of them can and can't show for the crisis week. A live demo comparison comes later, as a gate for the public demo. Neither exists yet.

## Riskiest assumptions

1. **The leader wants to know.** The VP is the buyer, and if the VP doesn't want bad news, accuracy doesn't matter. The design answers this in two ways.
   - Leaders look away from warnings they can't act on, so every warning carries the cost of delay, and options follow within days.
   - [Product] records reasoning, not inaction. A priced, dated deferral is the VP's defense in the CEO meeting; silence is the liability.

   Test: walk five real Directors or VPs through the crisis week. Ask whether they'd buy a product that keeps their deferrals on the record, and what they'd stop using to make room for it.
2. **Directors will explain flags rather than game the inputs.** If serious incidents start getting filed at a lower severity, the rules go quiet and green status comes back. Test: show the silent-failure flag to two or three real directors.
3. **Real data is good enough for an honest date.** Every forecast so far runs on clean seeded data. Test: run the forecast on one real team's exported ticket history, kept outside the demo data.

Whether a real VP would pay underlies all three, and the same walkthrough tests it. All three block the first paid pilot, not the public demo.

## What we're not building

- Individual performance scores of any kind, including scores of how accurate each director's forecasts were. Team-level metrics only.
- Leaderboards. Credit for raising a risk early is a timestamp on the flag.
- Read receipts. [Product] never records who viewed a flag. It records the flag's age, the cost of delay and the choices people make.
- A project tracker or Jira replacement: no tasks, boards or sprint planning.
- A metrics dashboard or metrics wall. Every view is tied to a decision or a flag.
- A portfolio roll-up.
- Chat with AI personas as the home screen. The home is the decision queue.
- Anything pitched as blame, such as "timestamp your predecessor's mistakes." The pitch is an honest baseline.
- Integrations in the MVP. File import only.
- Numbers produced by AI, or decisions made by AI. Only a human makes a decision final.
- A way for anyone to delete or soften a flag.
- Judgments about whether a cost is CapEx or OpEx. [Product] follows the controller's policy.

## How we'll know the MVP works

The Tallmast Q4 crisis week, full-finance version (S2E5), runs end to end from a file import of the seeded data (fixed seed, 26 weeks per team). Specifically:

1. **The rules fire exactly as the context file says.** Silent-failure risk trips on Customer Platform Reliability. Key-person risk trips on Customer APIs once the two resignations are recorded. The observability consolidation stays on *Doesn't need you*, with all five parts of its "Not now" deferral showing.
2. **The money is exact.** The engine reproduces every S2E5 finance fact in the context file. The full list is in the addendum.
3. **The Monday queue** shows three to five decisions, ranked by consequence and deadline.
4. **The full output is produced:**
   - three strategies, each with its business, financial, delivery, people and security consequences
   - one recommendation
   - the 24-hour and 30-day plans, with an owner role for every action, success measures and review dates
   - the CEO brief, leading with the most likely date
   - the decisions that need executive approval
5. **The board follows its rules.**
   - Positions are taken independently.
   - Dissent shows in the output.
   - A case without quorum returns "No quorum: executive judgment required."
   - A failed advisor is detected and shown.
   - Nothing is final until the leader decides.
   - Tampering with the decision record is detectable.
6. **The flag rule holds.**
   - The director sees each flag at the same moment as the VP and can add context and options.
   - Nobody can delete a flag.
   - Director-raised flags show their timestamp.
   - Deferred flags keep counting their cost of delay.
   - The CEO brief lists every rule that fired, with the VP's response.
7. **No number comes from the AI.** The validator rejects any AI-written number that doesn't trace to an engine fact, and a test proves it.
8. **The public-demo blockers listed in the addendum are cleared.** These include a live demo comparison with Cortex, Planview and Jellyfish.
9. **Review closes the loop.** An assumption behind a crisis-week decision breaks, and the decision goes back into the queue. On the review date, the "30 days later" record grades the decision.

## Scope

The MVP is a web app with leader and director views. It runs on a file import and the Tallmast demo, with no integrations and no mobile. The full in-scope and out-of-scope list is in the addendum, along with the gates for the first paid pilot.

## Open questions

- **Key-person data.** Key-person risk needs data about individuals: who knows a system and who has resigned. Proposed line: store counts per critical system, never names. This probably needs an ADR before anything is built.
- **Board rules the PRD must pin down:**
  - the quorum size
  - who holds the red-line veto, and what counts as a red line
  - the round limit
  - whether a failed advisor counts against quorum

  See the addendum.
- **License.** The license for a commercial product built in public is being settled separately.
- **Pricing,** and whose budget pays for it.

## Vision

Over a few quarters, two things build up. The first is the decision record, append-only and hash-chained, which becomes the leader's memory: which assumptions break most often, what slips really cost, and which options worked. The second is the board design, which becomes how a leadership team argues a decision. We're betting these two together are the moat. The rules on their own are easy to copy.
