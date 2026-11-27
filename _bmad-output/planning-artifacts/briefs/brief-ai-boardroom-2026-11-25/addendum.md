---
title: "Addendum: Product Brief [Product]"
status: final
created: "2026-11-25"
updated: "2026-11-25"
---

# Addendum: Product Brief [Product]

Detail that earned a place but doesn't fit in the brief, kept here for the PRD and architecture steps.

## Bets: the question, the data, and the code/AI split

| Bet | Executive question | Data it needs | Code (calculated, tested) | AI judgment |
|---|---|---|---|---|
| 1. The honest total and priced options | When are we done, and what would it cost to change that? | Scope added and finished per sprint; budget lines; commitments; estimates with who and when | Most likely date and range; "no finish date at this pace"; cost of delay; cost of each option | Drafting the options; explaining their consequences |
| 2. The Monday queue | What do I have to decide this week, and what can I safely leave? | Open decisions with cost of delay, deadlines, postponement counts and deferral conditions | Which decisions qualify; the ranking by consequence and deadline; the reason each one is on *Doesn't need you* | None in the ranking; may summarize each item |
| 3. No silent drift or ignoring | Who agreed to this slip, or this wait, and why? | History of dates and budgets; decision records; the five parts of each deferral | Detecting a moved date or budget; requiring a record; counting the cost of delay; checking tripwires | Suggesting the question to ask the owner |
| 4. Flags nobody deletes | What is green hiding, and what does the owner say? | Reported status; incidents by severity; change failure; capacity; on-call pages; unplanned work | Rule evaluation against versioned thresholds; timestamps | Suggesting a question for the director; summarizing their context |
| 5. Code for numbers, a board for arguments | Can I put this in front of the board, and who disagreed? | Budget, actuals, commitments; the controller's capitalization policy; each advisor's position | Every number; the validator; quorum counting; round limits; the hash chain | Each advisor's argument; challenging assumptions; naming missing information; the CEO brief's prose around engine values |

## Where the line falls between code and AI

**Must be code with tests:**
- thresholds, rule evaluation, forecasts, money and percentages
- "no finish date at this pace"
- alert counts
- the Monday queue's ranking, and what lands on *Doesn't need you* (the rules decide this, not the AI)
- the cost of delay, and tripwire checks
- every number in the CEO brief

**Where AI adds value:**
- drafting the two or three options
- advisors arguing independently before seeing each other's views
- challenging unsupported assumptions
- naming missing information
- suggesting questions to ask directors
- writing the CEO brief's prose

**Enforcement:** AI text refers to engine values by name, and code inserts the numbers. A validator rejects any AI-written number that doesn't trace to an engine fact, and a test fails if one gets through.

## How the board argues

The board rules are decided. The right-hand column lists what the PRD still has to define:

| Rule | What the PRD must define |
|---|---|
| Each advisor takes a position before seeing the others | The order in which positions are revealed |
| Dissent stays visible | Where dissent appears in the CEO brief |
| Quorum rule; without quorum, the answer is "No quorum: executive judgment required" | The quorum size |
| Red-line veto | Who holds the veto, and what counts as a red line (for example, the compliance officer's red lines) |
| Bounded rounds | The round limit |
| A failed advisor is handled like a crashed node | Whether a failed advisor counts as absent for quorum (one reading of "crashed node": detected, shown and never silently skipped) |
| Only a human makes a decision final | None; this rule is fixed |
| The decision record is append-only and hash-chained | Who can verify the chain, and how tampering is reported |

## "Not now": the five parts of a deferral

A deferral is one step, and it must show these five parts:

1. **The reason.**
2. **The cost of delay**, counted by the engine from day one.
3. **The condition that ends the wait.**
4. **The tripwire that forces an earlier decision.**
5. **An owner with a review date.**

Worked example (Tallmast), the observability consolidation:
- **Owner:** Mei Lin.
- **Condition:** the migration cutover is stable and the change freeze has ended (Jan 5).
- **Cost of delay:** about $15K a month.
- **Tripwire:** a vendor renewal date that falls before then.

The decision-debt rule keeps it off the VP's queue: it was postponed once, its cost of delay is under $25K a month, and it has no deadline within 90 days. So it sits on *Doesn't need you, and why*.

## The S2E5 finance facts the engine must reproduce

From `docs/company-context.md`:

- Remaining budget: $7.2M, which is $3.4M committed plus $3.8M uncommitted.
- Uncommitted isn't discretionary: $2.8M is Q4 payroll ($1.2M capitalized plus $1.6M OpEx), and $0.43M is cloud. About $0.57M is truly discretionary (vendors $150K, training $320K, contingency $100K).
- Cloud: $550K in each of Q1 and Q2, then $670K in Q3 (22% over). If Q4 repeats Q3, year-end cloud is $2.44M, $240K over plan.
- Three forecasts:
  - run-rate: $17.1M
  - commitment-aware: $20.24M
  - if the change order is signed: $21.18M (+5.9%)
- The 15% cut: $3.0M, which is 41.7% of the $7.2M remaining and 78.9% of the $3.8M uncommitted.
- The platform never assumes a cost is CapEx. It follows the controller's policy.

## Scope

**In the MVP:**
- A web app with leader and director views.
- File import of team signals, budget, actuals, commitments, decision debt and the fields a human keeps current.
- Versioned rule thresholds.
- The finance engine at full detail (S2E5).
- The date forecast, with its range.
- The Monday queue and *Doesn't need you, and why*.
- Flags, including director-raised flags.
- The decision record, with one-step slips and "Not now" deferrals.
- Options argued by the advisor board.
- The CEO brief.
- Assumption alerts and dated reviews.

**Out of the MVP:**
- Integrations.
- Individual metrics.
- Mobile.
- A metrics wall.
- A portfolio roll-up.
- AI chat as the home screen.
- Any real company's data in demos.

**Gates for the first paid pilot:** see "What each gap blocks" below.

## Fields a human must keep current

This is the first list. Minutes per week are still to be measured, and that measurement blocks the public demo.

- How many engineers have working knowledge of each critical system (a count, never names).
- How many times each decision was postponed, and its review dates.
- The cost of delay for each decision.
- The success criteria and assumptions for each decision.
- The reported status of each initiative, taken from status reports.
- Estimates of size (team-weeks) and cost, with who made each one and when.
- For each "Not now" deferral: the reason, the condition that ends the wait, the tripwire, the owner and the review date. The engine counts the cost of delay.
- Departures that change a key-person count (count only).

## What each gap blocks (decided 2026-11-25)

**Blocks the PRD:**
- A written comparison from public material: what Cortex, Planview and Jellyfish can and can't show for the crisis week.

**Blocks the public demo (Tallmast data):**
- Estimates visibly marked, with who made them and when.
- The list of fields a human must keep current, with minutes per week.
- A live demo comparison with Cortex, Planview and Jellyfish.

**Blocks the first paid pilot (real data):**
- Honest dates on messy data.
- The import format for budget and actuals.
- How directors react to flags: as help, or as an ambush.
- Evidence that a real VP would pay.

**Fast-follow:**
- Alert volume. Measure it on the 26 seeded weeks before the public demo.

**Accepted trade-off:**
- A VP managing by dashboard instead of talking to directors. Written rule: [Product] supports the conversation and never replaces it.

## Why there are no read receipts (decided 2026-11-25)

The brainstorm first proposed recording "seen, no action," so that ignoring a flag couldn't happen quietly. That would put a read receipt on the VP: the surveillance the director FAQ worries about, pointed upward. It would also create a discoverable "you knew on this date" line. Instead, [Product] records the flag's age and the cost of delay, which are facts about the problem, and explicit choices, which are facts about the decision. That keeps "you can't ignore it quietly" without reading anyone's screen. A VP won't buy a record of inaction, but may buy a record of reasoning.

## Ideas considered but not chosen

- **"The total is the product" as a separate bet.** Merged into bet 1.
- **Used at the money moments, not daily.** Replaced by the product owner's framing: the money conversation is the big moment, and Monday morning is the habit.
- **Leaders often don't want to know (the "deaf effect").** This is now the riskiest assumption in the brief.
- **Pitching to the new VP in their first 90 days as "timestamp your predecessor's mistakes."** Rejected because it's pitched as blame. Reframed: the pitch is an honest baseline.
- **People game whatever gets measured.** Answered by comparing reported status with calculated status, and by preferring signals that are hard to game, such as customer-facing incidents and on-call pages.

**Framings rejected:**
- "AI boardroom" leads with the technology.
- "A dashboard for VPs" is the thing the product isn't.
- "Decision intelligence" is jargon customers don't use.

## Competitive notes (research, November 2026)

- **Engineering analytics tools:**
  - Jellyfish: investment allocation, now selling R&D capitalization to CFOs.
  - LinearB.
  - Swarmia: includes capitalization in its data model.
  - DX: listed under Atlassian.
  - Faros.
  - Gartner published a Magic Quadrant for Developer Productivity Insight Platforms in May 2026.
- **Portfolio tools:** Planview, which markets AI that drafts budget reallocation options, and Jira Align.
- **Closest to our job:** Cortex markets an "AI chief of staff" use case built on its MCP server, announced October 2025. It isn't a separate product.
- **Price reference:** one secondhand estimate puts engineering analytics tools at $50K–$120K a year for 50–150 seats.
- **Developer backlash** targets scoring individuals and tying numbers to reviews, more than team-level measurement.

Sources:
- [Gartner Magic Quadrant, May 2026 (via Swarmia)](https://www.swarmia.com/blog/2026-gartner-magic-quadrant-developer-productivity-insight/)
- [Engineering intelligence platform evaluation](https://tianpan.co/forum/t/jellyfish-vs-linearb-vs-dx-vs-swarmia-what-we-learned-evaluating-engineering-intelligence-platforms/312)
- [Sacra: Jellyfish](https://sacra.com/research/jellyfish)
- [Cortex: AI chief of staff](https://cortex.io/post/announcing-the-ai-chief-of-staff-for-engineering-leaders)
- [Planview SPM](https://www.planview.com/products-solutions/solutions/strategic-portfolio-management/)
- [Tempo: Planview alternatives](https://www.tempo.io/blog/planview-alternatives)
- [Swarmia: developer-friendly SEI tools](https://www.swarmia.com/blog/developer-friendly-software-engineering-intelligence-tools/)
- [Park, Im and Keil: the mum effect](https://aisel.aisnet.org/jais/vol9/iss7/1)

## The moment behind the job statement

A real project reported green for nine months. QA signed off every sprint, the product owner accepted every story, and business users tested everything. But every sprint planning added new requests, and the release date quietly moved. The truth came out when finance asked, "At this pace, when are we done?" The honest answer was "next year." The organization hid nothing: every request and every sprint was visible. Nobody owned the total. The fear isn't only being surprised; it's walking in with bad news and nothing to offer but an apology.
