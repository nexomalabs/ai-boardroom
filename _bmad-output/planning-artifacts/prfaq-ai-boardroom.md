---
title: "PRFAQ: [Product]"
status: "complete"
created: "2026-11-24"
updated: "2026-11-25"
stage: 5
inputs:
  - "docs/company-context.md"
  - "_bmad-output/brainstorming/brainstorm-tech-leader-decision-platform-2026-11-24/.memlog.md"
  - "_bmad-output/planning-artifacts/briefs/brief-ai-boardroom-2026-11-25/brief.md"
  - "_bmad-output/planning-artifacts/briefs/brief-ai-boardroom-2026-11-25/addendum.md"
---

# [Product] shows technology leaders the real date and the real cost, with options, before the CFO has to ask

## For VPs and CTOs who run ten or more teams through other managers: see what needs you this week, catch the problems that green status reports hide, and walk into every money conversation with an honest date and two or three priced ways to change it.

**November 2027**: Nexoma Labs today announced [Product], a decision platform for technology leaders. It's built for the Director, VP or CTO who manages through other managers, with several directors, a dozen teams, competing initiatives, a fixed budget and a CEO who wants an answer and a date. [Product] adds up what no single report adds up and flags problems that status reports show as green. Before a leader commits to a decision, it shows what each option does to dates, money and people.

A technology leader with ten teams reads ten status reports. Each one can be true while the total is false. One project reported green for nine months. QA signed off every sprint and the product owner accepted every story, but every sprint planning added new requests and the release date quietly moved. The truth came out only when finance asked, "At this pace, when are we done?" The honest answer was "next year." At Tallmast Logistics, a regional freight company with a 90-person technology organization, the Customer APIs team reported green while the share of its releases that broke something rose from 9% to 21% in eight weeks. The same team ran at 118% of planned capacity for six sprints and had three serious incidents in fourteen days. When the CFO announced a 15% budget cut, the number sounded manageable, but it wasn't. The $3.0M cut was 78.9% of the money not yet committed, and only about $0.57M of that money was truly discretionary. Leaders usually learn these things in the meeting itself, with nothing to offer but an apology.

With [Product], a leader starts the week with a short queue of the decisions that need them, and an equally clear list of what doesn't, each with a reason. When a team's reported status disagrees with its own data, [Product] shows the rule that tripped, the numbers behind it and the owner, to the leader and the director at the same moment. Nobody can delete the flag, and everybody can explain it. Dates and budgets can't move quietly. When one moves, someone has to accept the new date, cut scope or add capacity, and that choice is recorded. A leader can still say "not now," but never quietly: the deferral shows its reason and its cost of delay. Before a decision, the leader sees two or three options side by side, with what each one does to the budget, the schedule, the teams involved and the risk of depending on one or two people. Every number is calculated by code and traces back to its source. The AI argues the options and drafts the brief, and it never produces a number.

> "Leaders don't get blindsided because they lack dashboards. They get blindsided because nobody adds up the total, and the bad news arrives with no options attached. [Product] adds up the total, shows what the green report hides, and puts priced options on the table while there's still time to use them."
> — [Founder name], Nexoma Labs

### How It Works

1. **Import.** [Product] imports exports from the issue tracker, the incident tool, the deployment pipeline and the budget with its commitments. It uses team-level signals only and never scores an individual. The few facts no tool holds, such as how many engineers know each critical system, are kept by hand as counts, never names.
2. **Start the week.** The Monday queue holds three to five decisions that need you this week, ranked by consequence and deadline, next to *Doesn't need you, and why*. At Tallmast, the observability-vendor consolidation stays off the VP's queue on purpose. It's a recorded "Not now." Mei Lin owns it. It waits until the migration cutover is stable and the change freeze ends on Jan 5. Its cost of delay is about $15K a month, and a vendor renewal date before then would force an earlier decision.
3. **See what green hides.** *Customer Platform Reliability reports green. The silent-failure rule tripped: 9% → 21% of releases broke something over 8 weeks, 118% planned capacity for 6 sprints, 3 serious incidents in 14 days. Owner: Director, Customer Engineering.* The warning arrives at once with the cost of delay, and priced options follow within days. The director sees the same flag at the same moment and can add context and options before anyone asks. Directors can also raise a flag before any rule fires, and the record shows when they did.
4. **Test a decision before making it.** The CFO asks for a 15% cut. [Product] shows what 15% means against what's left: $7.2M remaining, $3.8M of it uncommitted, about $0.57M of that discretionary. It also shows why the run-rate forecast of $17.1M looks comfortable when the forecast that counts commitments is $20.24M. A board of AI advisors (finance, delivery, people and security) argues each option. Each advisor takes a position before seeing the others, challenges unsupported assumptions and names the missing information, and dissent stays on the record. When the board can't reach quorum, it says so: "No quorum: executive judgment required." [Product] recommends, and only the leader decides.
5. **Commit.** The decision gets an owner who accepts it, a review date, success measures, and the assumptions it depends on. The record is append-only, so nobody can quietly rewrite it later.
6. **Find out early when a decision stops making sense, and grade it on the date.** [Product] watches the assumptions behind each decision and tells you as soon as one stops being true. For example, the data-center lease decision assumed a migration pace the teams are no longer hitting. When that happens, the decision goes back into your queue. On the review date, you grade your own call against the success measures you set when you made it.
7. **Brief the CEO.** The brief is one page, built from the same numbers. It leads with the most likely date, then gives the range and what has to be true for it. It lists every rule that fired, with your response next to each one, and every figure traces back to its source.

> "On the Monday everything broke at once, I didn't need another dashboard. I needed to see that three of the five fires ran through the same seven-person team, and what each way out would cost. I had that by Tuesday, and the CFO had her plan by Friday."
> — VP Technology, Tallmast Logistics

### Getting Started

A pilot starts with one director's area. The team exports that area's issue tracker, incident tool and budget sheet with its commitments, and [Product] imports the last 26 weeks of history, so the first Monday queue is ready on day one. After 30 days, the leader sees for each initiative in that area whether the status calculated from its data matched the status it reported, and how many date or budget changes became recorded decisions.

<!-- coaching-notes-stage-1 -->
<!--
Concept type: ASSUMED commercial product (rationale: target is a role found across companies, Director to CTO; Tallmast is a fictional design partner). Unconfirmed: the MIT license (nexomalabs) and the episode series (S1E8, S2E5, Manager Playbook Shorts) suggest it could instead be an open-source teaching project. If so, the pricing, buyer and moat questions in the Internal FAQ change to adoption effort and sustainability. [Superseded 2026-11-25: see stage-5 notes.]

Inputs: docs/company-context.md (all scenario numbers) and the brainstorming memlog. The brainstorm is INCOMPLETE: it paused at the start of Job to Be Done; Assumption Reversal and Reverse Brainstorming were not run. Brainstorm results are thin; most of the content below is coach-drafted and needs the user's challenge.

Assumptions challenged in the brainstorm:
- Job 5 ("check later whether the decision worked") is the weakest: the buyer is the graded party, outcomes lag months, attribution is confounded, and it depends on job 4's success measures.
- Job 4 alone is a form; owners and deadlines risk becoming the project tracker the user ruled out.
- User: "the org hid nothing, nobody owned the total." Coach: green for nine months was itself the hiding; the status rated whether each sprint was done, not whether the project would finish.
- "Nobody owned the total": owning is management, and the product cannot assign it; but the total existed nowhere as a number. The product cannot create the owner; it can remove the excuse.

Job statement (user, adopted): "When finance asks when we're done, give an honest date and two or three options to change it, before they have to ask." Coach adjustment: the honest date is a range plus what has to be true for it.

User context: a real project reported green for nine months while scope grew each sprint; it surfaced when finance asked "at this pace, when are we done?" The fear is walking in with bad news and nothing to offer but an apology.

Research that shaped the framing (see Sources): engineering intelligence platforms measure engineering activity (Jellyfish, LinearB, Swarmia, DX, Faros; Gartner published a Magic Quadrant for Developer Productivity Insight Platforms in May 2026). Cortex sells an "AI chief of staff for engineering leaders" (since Oct 2025), the closest match to the job. [Corrected 2026-11-25: Cortex markets an AI chief of staff use case built on its MCP server; it isn't a separate product.] Jellyfish is extending its buyer to CFOs and controllers via R&D capitalization. Planview markets AI that surfaces budget variance and drafts reallocation options. Developer backlash targets individual scoring more than team-level measurement. The "mum effect" (reluctance to report bad news) is an established research finding.
-->

<!-- coaching-notes-stage-2 -->
<!--
Rejected headline framings: "AI boardroom" (leads with technology, a how not a why); "a dashboard for VPs" (the thing the user said it is not); "decision intelligence" (jargon a customer wouldn't use).
Alternative headlines offered: (B) "[Product]: walk into the money conversation with an honest date and three ways to change it"; (C) "[Product] finds the problems your green status reports hide, and prices your way out."
Positioning: decisions and money, not engineering activity. AI is in How It Works, not the headline.
Coach proposals NOT yet validated by the user: job 5 reframed as assumption checks (decision returns to the queue when an assumption breaks); directors see flags at the same moment as the leader; "no date moves quietly" (every slip becomes a recorded decision). [All three accepted 2026-11-25; job 5 also keeps the dated review. See stage-5 notes.]
Self-challenge, weakest claims in this draft:
1. "Connects read-only ... loads 26 weeks of history ... ready on day one": unproven; everything so far runs on clean fictional seed data.
2. The 30-day pilot measure is invented, not agreed.
3. Both quotes are placeholders or fictional; they are not evidence that anyone wants this.
4. The headline is long; it passes the "so what?" test but not the one-breath test.
Alternative customer quote considered (CFO): "I don't mind bad news. I mind bad news in October with no plan attached. This time the plan arrived with three options already priced, and we picked one in the meeting." (Grace Whitfield, CFO)
-->

---

## Customer FAQ

*Questions from four people at a company like Tallmast: a skeptical VP of Engineering (the buyer), a CFO, a director who fears being micromanaged, and a CEO. Where we can't answer honestly yet, the answer says so, says what it would take to find out, and names the gate decided on 2026-11-25. "Blocks the public demo" means it must be cleared before the Tallmast demo ships. "Blocks the first paid pilot" means it must be cleared before a real customer's data goes in.*

### The skeptical VP of Engineering

### Q: We already pay for an engineering analytics tool, and our portfolio tool tracks investment. Why would I add another one?

A: Engineering analytics tools such as Jellyfish, LinearB, Swarmia, DX and Faros measure how engineering works: flow, DORA, where engineering time goes, and AI adoption. Portfolio tools such as Planview and Jira Align plan where the money goes. [Product] starts from the decision in front of you and the money attached to it. Did a date move, did a reported status disagree with the data, and what are your options? It reads exports from the tools you already have rather than replacing them.

**Not answerable yet, and the overlap has grown since the first draft.** Each of the five jobs already has an incumbent doing part of it:
- *What needs you, and what green hides:* Cortex markets an "AI chief of staff" use case built on its MCP server. It surfaces the most critical concerns across an organization, and Cortex flags at-risk teams early.
- *Priced options:* Planview's Anvi drafts reallocation options with impact estimates and a recommended scenario.
- *Did it work:* OnePlan's November 2026 release compares the projected benefits of strategic investments with the benefits realized, and opens portfolio data to ChatGPT, Claude and Copilot.
- *The CFO:* Jellyfish sells R&D capitalization to finance.

What we claim nobody does is the join: one loop from a team's signal to the money to a recorded decision to its review, under three guarantees. The AI never produces a number, nobody deletes a flag, and the record can't be quietly rewritten. A join is harder to show than a feature, and a buyer may still see a feature. *To find out:* first, a written comparison from public material of what Cortex, Planview and Jellyfish can and can't show for the crisis week. Jellyfish and Cortex sell through demos, and Jellyfish doesn't publish pricing, so the comparison has to rely on product pages, documentation and recorded walkthroughs. Planview publishes an on-demand scenario-planning demo. Later comes a live demo comparison. OnePlan belongs in both, since its November 2026 release covers part of job 5. **Gate:** the written comparison blocks the PRD, and the live comparison blocks the public demo. Neither exists yet.

### Q: My teams' data is a mess. Half the tickets have no estimate, and the incident severities are inconsistent. How can your "honest date" be honest when the input isn't?

A: The date is calculated from scope added and scope finished per sprint, and it shows its inputs. [Product] gives the most likely date first, then the range and what has to be true for it. When scope grows as fast as work gets done, it says "no finish date at this pace" instead of making up a date. When the data is too thin to forecast, it says so and names which data is missing.

**Not answerable yet.** Every rule and forecast so far runs on clean, seeded, fictional data designed so the rules trip. The public demo can't test this, because the Tallmast data is clean by design. We don't know what share of real organizations have data good enough for a useful range, or how often the answer would be "can't forecast." *To find out:* run the forecast on one real team's exported ticket history, anonymized and kept outside the demo data, and see how wide the range is. **Gate:** blocks the first paid pilot.

### Q: Who enters the data? If my directors have to update anything by hand, they won't.

A: In the MVP, nothing connects to your tools. Team signals, budget, actuals and commitments arrive as file imports of exports from your systems of record. Decisions are typed in by the people making them: the option chosen, the owner, the review date, the success measures, the assumptions, and the parts of any "Not now."

A few facts live in no tool. The first list has eight fields a person must keep current:
- how many engineers have working knowledge of each critical system (a count, never names)
- how many times each decision was postponed, and its review dates
- the cost of delay for each decision
- the success criteria and assumptions for each decision
- the reported status of each initiative, taken from status reports
- estimates of size and cost, with who made each one and when
- for each deferral: the reason, the condition that ends the wait, the tripwire, the owner and the review date (the engine counts the cost of delay)
- departures that change a key-person count (count only)

**Partly answerable.** The list exists; its cost doesn't. We haven't measured the minutes per week, and if the answer turns out to be "the VP's Sunday evening," the VP's time is the hidden price of the product. File import adds a second hidden cost: someone has to export and upload fresh files every week, and no document says who. *To find out:* time each field and the weekly export on the Tallmast demo, then again in the first pilot. **Gate:** the minutes per week block the public demo. Some manual entry is an accepted trade-off.

### Q: How many alerts will I get? Five of my twelve teams run above 100% planned capacity.

A: Every alert shows the rule, its threshold and the version of that threshold. The Monday queue holds three to five decisions, and everything else lands on *Doesn't need you, and why*, with the reason. The starter rules include a deliberate negative test: the observability decision must not reach the VP's queue.

**Not answerable yet, and the demo won't answer it.** We don't know the right thresholds for a real organization, or whether the overcommitment rule (above 100% for 2 or more sprints) flags almost every team in a stretched organization. If it does, [Product] becomes the alarm everyone tunes out. Counting alerts on the 26 seeded weeks tells us what the seed generator was built to produce, not what a real organization will see.

There's a sharper problem inside the demo itself. By our count, at least eight decisions meet the rules for the VP's queue on crisis-week Monday. Four come from the decision-debt table: the billing retirement, SRE staffing, the AI pilot and the lease. Four or five more come from the day's events: the vulnerability, the Sev-2 and SLA threat, the resignations, the migration cutover and the 15% plan. The queue holds three to five. Either related decisions get grouped by the constraint they share, or some decisions that need the VP don't appear. The PRD hasn't said which. *To find out:* count alerts per rule per week on the seeded history now, and again in the first pilot week on real data. **Gate:** fast-follow, measured on the seeded weeks before the public demo.

### The CFO

### Q: Can I trust the numbers enough to put them in front of the board?

A: This is the strongest answer we have. Every number is calculated by code with tests, using exact decimal arithmetic, never floating point. The engine must reproduce Tallmast's finance facts exactly: $7.2M remaining ($3.4M committed plus $3.8M uncommitted), about $0.57M truly discretionary, and three forecasts of $17.1M run-rate, $20.24M commitment-aware and $21.18M if the change order is signed. The AI never produces a number. It writes arguments around numbers the engine computed, a validator rejects any AI-written number that doesn't trace to an engine fact, and a test proves the validator works. [Product] never decides whether a cost is CapEx or OpEx. It follows the controller's capitalization policy.

**Not answerable yet.** In the MVP, budget, actuals and commitments arrive as a file import. We don't know what file a real finance team will hand over: an ERP export, a planning-tool export, or a spreadsheet someone maintains by hand. Every reconciliation gap there is a number the CFO will catch before we do. *To find out:* ask one finance team what file they'd actually give us, and import it. **Gate:** the import format blocks the first paid pilot. Direct connections are out of the MVP.

One more gap sits inside the demo. The Tallmast CFO doesn't say whether 15% means 15% of this year's budget or a 15% lower run-rate. The engine facts cover only the first reading ($3.0M). The PRD has to decide whether the engine calculates the second reading too, or whether the board only names it as missing information.

### Q: When you show me "options," who priced them, and how do I know the savings are real?

A: The money in each option comes from the budget lines and commitments and is calculated by code. Examples are the $540K lease, the $940K change order and the cost of each pending request. The consequences for people, delivery and security are AI judgment, labeled as judgment and never shown as a number.

**Decided:** estimates are visibly marked as estimates, with who made them and when. Several inputs are estimates someone typed in, not facts: "~$45K/month" to keep the legacy billing system, "~$108K/month" burn on the AI pilot, "~16 team-weeks" for the returns portal. [Product] can do exact arithmetic on a guess, and that's the dangerous part. **Gate:** blocks the public demo.

**Still open:** what happens to a figure calculated from an estimate. If an option's cost adds an actual to an estimate, the total should be marked as an estimate too. That rule reaches further than it looks. The $20.24M commitment-aware forecast assumes that Q4 cloud repeats Q3 and that the remaining discretionary money gets spent, so under that rule the headline forecast is itself an estimate. That's the honest answer, and the PRD should say so.

### The director who fears being micromanaged

### Q: Is this a surveillance tool that will be used to grade me?

A: [Product] uses team-level metrics only and never scores an individual's performance, including how accurate a director's forecasts were. That's a fixed product rule, not a setting. A flag names the rule and the data, not a verdict on a person. The director sees every flag about their area at the same moment as their VP and can add context and options. Directors can raise a flag themselves before any rule fires, and the record shows when. That's credit for early bad news, kept as a timestamp, never a leaderboard. [Product] never records who viewed a flag. It records the flag's age, the cost of delay and the choices people make.

**The honest part we can't wave away:** a flag still names an owner. "Customer Platform Reliability reports green, silent-failure rule tripped, owner: Renee Okafor" is a public correction of her status report, however neutral the wording, and nobody can delete it. Developer backlash in this market targets scoring individuals and tying numbers to reviews, and [Product] avoids that. But it does sit one level up, comparing a director's report with the data. **Not answerable yet:** whether directors experience that as help or as an ambush. If directors game the inputs, for example by filing a Sev-2 as a Sev-3, the rules go quiet and green status comes back. *To find out:* show the silent-failure flag to two or three real directors and watch their reaction. **Gate:** blocks the first paid pilot.

### Q: Will my VP use this instead of talking to me?

A: We can't stop a leader from managing by dashboard. The design pushes the other way. Every flag comes with a suggested question for the director rather than a conclusion, such as "What has to be true for that date?", which is the coaching move the context file describes for an over-optimistic director. A decision can't name an owner until that owner accepts it. Acceptance is an explicit choice on the record, not a read receipt.

**Not answerable yet:** whether that changes behavior. **Gate:** accepted trade-off, with a written rule: [Product] supports the conversation and never replaces it.

### The CEO

### Q: I want a date. Why does your tool give me a range?

A: **Decided:** the CEO brief leads with the most likely date. Then it gives the range, what has to be true for it, and the decision that would narrow it, such as adding capacity, cutting scope or accepting a later date. A bare single date is how the green-for-nine-months project happened, so the range stays, but it comes second.

**Not answerable yet:** whether a CEO reads that as an answer or as hedging. The Tallmast CEO "wants a clear answer and a date," and she's fictional. This gap isn't on any gate list. *To find out:* add it to the five-VP walkthrough, and ask each VP to read the crisis-week CEO brief the way their own CEO would.

### Q: Can my VP edit what the brief tells me?

A: **Decided: no.** Nobody can delete or soften a flag. The VP can add a response and choose the recommendation, and the CEO brief lists every rule that fired, with the VP's response next to it. If the VP could remove flags, the green-outside, red-inside problem would simply move up one level, from director-to-VP to VP-to-CEO.

**What the decision costs, and what's still open:**
- **Will a VP buy a tool that reports past them?** That's the riskiest assumption in the brief: the leader wants to know. Our answer is that [Product] records reasoning, not inaction. A priced, dated deferral is the VP's defense in the CEO meeting, and silence is the liability. That's an argument, not evidence. **Gate:** evidence that a real VP would pay blocks the first paid pilot.
- **What happens when a flag is wrong?** A bad import, such as a misfiled severity, can trip a rule, and the flag can't be deleted. Without a correction path, false flags pile up in the CEO brief and embarrass the VP. The likely answer is that corrected data re-runs the rule and the flag closes as "source data corrected," with its history kept. Nobody has decided this yet.

### Q: Does the AI make the decision?

A: No. [Product] recommends, and only a human makes a decision final. The AI advisors each take a position before seeing the others, challenge assumptions and name the missing information, and dissent stays visible. Without quorum, the answer is "No quorum: executive judgment required." An advisor that fails is shown as failed, never silently skipped. The decision record says who decided, and it's append-only and hash-chained, so tampering is detectable.

**Still open for the PRD:** the quorum size, who holds the red-line veto and what counts as a red line, the round limit, and whether a failed advisor counts as absent for quorum.

---

## Internal FAQ

*Questions from the builders' side: can we actually pull this off, and should we? [Product] is a commercial product from Nexoma Labs, built in public, so the buyer, the price and the moat are all in scope.*

### Q: Would a real VP pay for this, or is it a great demo built on perfect fictional data?

A: This is still the question we haven't answered, and the 2026-11-25 decisions moved it later, not sooner. Every rule, forecast and scenario was designed around Tallmast, a company built so that the rules trip at the right moment. No real technology leader has seen it, used it or said they'd pay for it. Buyer evidence now blocks the first paid pilot instead of the PRD. That means the PRD and the public demo get built before anyone who might buy the product has seen the idea. For a product built in public, where the demo doubles as the pitch, that's a defensible choice. It's a costly one if the walkthroughs come back cold after months of building.

**Not answerable yet.** *To find out:* walk five real Directors or VPs through the crisis week, with no real company data entering the product. Ask whether they'd buy a product that keeps their deferrals on the record, and what they'd stop using to make room for it. The walkthrough needs this PRFAQ and a paper crisis week, not software, so it can run before the PRD even though no gate requires it. **Gate:** blocks the first paid pilot.

### Q: What's the hardest technical problem?

A: Two problems, and neither one is the rules.

**Getting trustworthy data in.** File import narrows this problem but doesn't remove it. Every organization models teams, initiatives, severities and budgets differently. The rules need 8-week trends and 26 weeks of history, and the finance engine needs actuals and commitments that reconcile. For the demo, the seed generator solves it. For the first pilot, the import format has to map one real organization's exports onto the engine's model. *To find out:* map the fields for one real issue tracker export and one real budget spreadsheet. **Gate:** the budget and actuals import format blocks the first paid pilot.

**The validator.** "Reject any AI-written number that doesn't trace to an engine fact" sounds like one test, but it's a language problem. The AI will write "three strategies," "a 24-hour plan," "two senior engineers," "Jan 5," "nearly 80%" for 78.9%, and "about half" for a ratio it worked out itself. The validator has to tell structural numbers from claims, catch numbers written as words, and decide whether a rounded engine value counts as tracing. The clean design is for AI text to refer to engine values by name and for code to insert them, with any other number failing. Even then, someone has to write down the allowlist of structural numbers. *To find out:* write the validator's rules and run them against the board's output on the crisis week. **Gate:** the MVP's success criteria require it ("no number comes from the AI").

Architecture is deliberately out of scope for this document.

### Q: Doesn't key-person risk break the "team-level only" rule?

A: It strains it. Key-person risk isn't a performance score, but it needs data about individuals: who knows the legacy billing integration, and who has resigned. Tallmast's starter rule trips "once Alex and Priya leave." The proposed line is to store only counts per critical system ("1 engineer with working knowledge"), never names, and the list of human-kept fields already assumes it.

**Not answerable yet. It's a line to draw, and counts aren't anonymous in small teams.** When the billing-integration count drops from 3 to 1 on the day two people resign, everyone on a seven-person team knows who they were. Counts reduce the exposure; they don't remove it. The MVP's success criteria require this rule to trip, so the decision sits on the demo's critical path. The brief says it probably needs an ADR before anything is built, but no gate names it, and the repository has no ADRs yet. Two definitions are also missing: what counts as a "critical system" (the AI Route Optimization model pipeline already has a bus factor of 1), and when a departure is recorded (the resignation date or the last day). *To find out:* write an ADR on key-person data before the PRD defines the data model, and have someone with privacy expertise read it.

### Q: Where does AI add value, and where is it a risk?

A: **Code with tests:** every threshold, rule, forecast, money figure and percentage; "no finish date at this pace"; alert counts; the Monday queue's ranking and what lands on *Doesn't need you* (the rules decide this, not the AI); the cost of delay and tripwire checks; quorum counting, round limits and the hash chain; every number in the CEO brief.

**AI judgment:** drafting the two or three options, each advisor's argument, challenging unsupported assumptions, naming missing information, suggesting the question to ask a director, summarizing a director's context, and writing the CEO brief's prose around engine values.

**The risk:** AI-written text that contains a number. **Decided:** AI text refers to engine values by name, and code inserts the numbers. A validator rejects any AI-written number that doesn't trace to an engine fact, and a test fails if one gets through. The open part is the validator's rules (see the hardest technical problem).

**A second risk nobody has priced:** the board runs four advisors, each taking a position independently, over bounded rounds, for every decision. We don't know what one board run costs in model calls or how long it takes. The PRD needs both before it sets the round limit.

### Q: Why us, and why now? What's the moat?

A: *Why now:* AI can argue the options and draft the brief, which used to take a chief of staff. Status reporting still hides bad news, and the mum effect is well documented. Incumbents are also opening their data to general AI assistants: Cortex through its MCP server, and OnePlan through one released in November 2026.

*Why us:* the series. Building in public puts the product in front of technology leaders every episode. We have no numbers on that audience yet, so it's a hope, not an asset.

*Moat:* the brief bets on the decision record and the board design together. Both are weaker than they sound:
- **The board design is published in the episodes.** A pattern taught in public is a pattern anyone can copy.
- **The decision record is a switching cost, not a moat.** It's worth something only after a leader has used [Product] for quarters, and it's worth nothing on the day a competitor pitches.
- **The cheapest competitor is a leader with a general AI assistant.** Point it at Cortex's and OnePlan's MCP servers and you get a passable "board" over real data, with no new vendor.

What a general assistant can't promise is what [Product] guarantees: the AI never produces a number, nobody deletes a flag, and nobody quietly rewrites the record. Those guarantees, plus the join from team signal to money to decision, are the most credible moat we have, and they're exactly what the competitor comparison has to show. **Not answerable yet.**

### Q: Who pays, and how much?

A: **Decided:** [Product] is a commercial product from Nexoma Labs, built in public, and the leader is the buyer. **Not answerable yet:** the price, the pricing model and whose budget pays. Two things make this harder than it looks:
- **Seats don't work.** The users are the leader and a handful of directors, six people at Tallmast. Engineering analytics tools price by the developers they cover. Jellyfish doesn't publish pricing; Vendr reports an average of about $84K a year, and an earlier secondhand estimate put tools like it at $50K–$120K a year for 50–150 seats. [Product]'s value grows with the budget and teams under management, not with logins, so per-seat pricing on six users won't come close to those numbers.
- **[Product] would be a line in the budget it analyzes.** In its own demo, the VP has about $0.57M of truly discretionary money, and a new tool is exactly the kind of vendor line a 15% cut goes looking for. The price has to be justified against one avoided surprise, such as $45K a month of billing decision debt, or a $540K lease decided late.

A paid pilot needs a price by definition, but pricing isn't on the gate list yet.

### Q: What's our legal exposure from a record nobody can delete?

A: The read-receipts decision raised this question and didn't finish it. We dropped "seen, no action" partly because it created a discoverable "you knew on this date" line. Undeletable flags and dated deferrals create the same line. If the CVSS 9.8 vulnerability flag gets a "Not now" and the vulnerability is then exploited, the record shows who deferred it, when and why. A record of reasoning reads better than a record of inaction, but in a lawsuit or a regulator's inquiry it's still evidence. Two more exposures:
- **The append-only, hash-chained record holds personal data:** owner names, responses, and who decided. Data-protection laws such as the GDPR give people a right to have personal data erased in many cases, and an append-only chain can't erase. The usual fixes are to keep personal data outside the chain and refer to it by ID, or to encrypt it with a key that can be destroyed. Either one is an architecture decision.
- **Retention.** Customers will ask how long the record is kept, and whether they can place a legal hold on it.

**Not answerable yet.** *To find out:* have a lawyer read the decision-record and flag rules before the first paid pilot, and put the personal-data line in the same ADR as key-person data.

### Q: What kills this?

A: Six ways, in rough order of likelihood:
1. **The leader doesn't want to know.** If the VP doesn't want bad news on the record, accuracy doesn't matter and nobody buys it.
2. **Directors game the inputs.** The rules go quiet, and green status comes back.
3. **A general AI assistant over the incumbents' data is "good enough,"** and the join never gets the chance to prove itself.
4. **The leader stops keeping the decision record,** so jobs 4 and 5 die and [Product] becomes a dashboard.
5. **One confident wrong number in front of a CFO:** a misread budget import, or an estimate shown as a fact.
6. **Importing each new customer's data costs more than they'll pay.**

### Q: What does it take to build, and how long?

A: **Not answerable yet, by design.** There's no architecture yet, and the repository has no ADRs. What changed on 2026-11-25 is that the MVP scope is now fixed, and it isn't small:
- a web app with leader and director views
- file import of team signals, budget, actuals, commitments, decision debt and the human-kept fields
- five rules on versioned thresholds
- the finance engine at full S2E5 detail
- the date forecast with its range
- the Monday queue and *Doesn't need you, and why*
- flags, including director-raised flags
- a hash-chained decision record with one-step slips and "Not now" deferrals
- an advisor board with quorum, veto, bounded rounds and failure handling
- the validator
- the CEO brief
- assumption alerts and dated reviews

The deterministic core (rules, forecasts, money) is small and testable, and the Tallmast facts are a ready-made test suite. The board, the validator and the import are where the time goes. The planning documents don't say who is building it or how many people that is, so no estimate here would be honest. *To find out:* write the architecture and the first ADRs, then size the work against the team that actually exists.

<!-- coaching-notes-stage-3 -->
<!--
Gaps revealed by customer questions (proposed classification; product owner to confirm): [Decided 2026-11-25 with changes; see stage-5 notes.]
- Differentiation vs Cortex AI chief of staff, Planview AI reallocation, Jellyfish-to-CFO: launch blocker (show the difference in one demo).
- Honest date on messy real data: launch blocker.
- Fields no tool holds (bus factor, postponement count, cost of delay, success criteria): launch blocker for the list; accepted trade-off for some manual entry.
- Alert volume and thresholds: fast-follow; measure before launch.
- Budget/actuals import format: launch blocker; direct connection is a fast-follow.
- Estimates vs actuals labelling: launch blocker.
- Director reaction to flags (help vs ambush): launch blocker.
- VP managing by dashboard: accepted trade-off with a written rule (support the conversation, never replace it).
- CEO range vs date: fast-follow; decide the default format first.
- Can the VP edit the CEO brief: launch blocker; product decision that defines who the product is for.
Requirements signals: estimates visibly marked with author and date; every flag shows rule, threshold version, data and owner; directors see flags at the same moment; suggested question per flag; decision cannot name an owner who hasn't seen it [replaced 2026-11-25: owner must accept]; "no finish date at this pace" output.
-->

<!-- coaching-notes-stage-4 -->
<!--
Feasibility risks: data integration and reconciliation; rules depend on 8-week trends and 26 weeks of history; finance import format unknown.
Unknowns with "what would it take to find out":
- Real-VP demand: walkthrough with five real Directors/VPs; before PRD.
- Integration effort: map fields for one real issue tracker and one budget sheet.
- Key-person data: decide counts-not-names; likely an ADR.
- Concept type and buyer: product owner decision; before PRD.
Technical constraints surfaced: deterministic money (BigDecimal, explicit scale and rounding); AI never produces a number (enforce through named engine values plus a test that fails on AI-written numbers); team-level metrics only; Tallmast fictional data only in demos.
Strategic positioning: decisions plus money, not engineering activity; the decision record is the only accumulating asset.
-->

<!-- coaching-notes-stage-5 -->
<!--
Decisions applied 2026-11-25 (source: final brief and addendum in briefs/brief-ai-boardroom-2026-11-25/):
- Concept type confirmed: commercial product from Nexoma Labs, built in public; the episode series is how it's built. Supersedes the stage-1 "assumed commercial / MIT license" note. The MIT license was removed from the repo (commit d2130d2); licensing is settled separately.
- Codename removed from this document; "[Product]" throughout, including the title and the coaching notes.
- Gap gates decided, replacing the stage-3 proposals. Blocks the PRD: a written comparison from public material of what Cortex, Planview and Jellyfish can and can't show for the crisis week. Blocks the public demo: estimates marked with who and when; the human-kept field list with minutes per week; a live demo comparison with Cortex, Planview and Jellyfish. Blocks the first paid pilot: honest dates on messy data; the budget and actuals import format; director reaction to flags; evidence a real VP would pay. Fast-follow: alert volume, measured on the 26 seeded weeks before the public demo. Accepted trade-off: VP managing by dashboard, with the written rule.
- Settled outright: the CEO brief leads with the most likely date, then the range and what has to be true (was a fast-follow); nobody can delete or soften a flag and the brief lists every rule that fired with the VP's response (was a launch-blocking product decision); no read receipts; the five-part "Not now"; the warning goes out at once with the cost of delay and options attach within days; the board rules; append-only, hash-chained record; file import only, no integrations in the MVP.
- Press release edited to match: "Import" replaces "Connect"; the Monday queue (3-5, ranked) replaces the daily list; observability shown as a five-part "Not now"; undeletable flags and director-raised flags; board rules; owner accepts; append-only record; job 5 now keeps the dated review and leaders grade their own calls (the old "doesn't try to grade" line contradicted the brief); the CEO brief leads with the most likely date.
- Stage-3 requirement "a decision cannot name an owner who hasn't seen it" replaced by "the owner must accept": the old wording needed a read receipt, which the no-read-receipts decision rules out.
- Buyer evidence moved from "before the PRD" to "blocks the first paid pilot". The Verdict recommends running the walkthrough before the PRD anyway.
- Late brief decisions applied (brief memlog, 01:33): "cost of delay" everywhere, never "cost of waiting"; the competitor gate split into a written comparison from public material (blocks the PRD) and a live demo comparison (blocks the public demo); Cortex described as an "AI chief of staff" use case built on its MCP server, not a separate product. Coach addition: put OnePlan in both comparisons.

New findings in this pass (coach-raised, not yet reviewed by the product owner):
- Monday queue cap (3-5) vs crisis week: at least 8 decisions qualify; grouping by shared constraint gives exactly 5 (Customer Platform; the migration; the 15% plan; SRE staffing; the AI pilot).
- The $940K change order doesn't meet the decision-debt rule as written (no monthly cost, no stated deadline, not postponed).
- Estimate propagation makes the $20.24M forecast itself an estimate.
- No correction path for a wrong flag that can't be deleted.
- The review grade must stay on the decision; a per-leader hit rate would be an individual performance score. The "30 days later" section MVP criterion 9 needs isn't in the context file yet.
- Undeletable flags and deferrals create the same discoverable line the read-receipt decision avoided; personal data in an append-only chain conflicts with erasure rights.
- Counts aren't anonymous in small teams; "critical system" is undefined (the AI Route model pipeline has bus factor 1); departure timing undefined.
- Per-seat pricing fails on ~6 users; [Product] would be a discretionary line in the budget it analyzes.
- The validator is a language problem (structural numbers, number words, rounding, derived ratios).
- Board run cost and latency unpriced.
- Competitive refresh (2026-11-25): Cortex flags at-risk teams and surfaces top concerns; Planview Anvi drafts reallocation options with impact estimates and a recommended scenario, with an on-demand demo; OnePlan's November 2026 release adds outcome tracking (projected vs realized benefits) and an MCP server for ChatGPT, Claude and Copilot; Jellyfish pricing isn't public (Vendr average about $84K a year) and it sells through demos.
-->

---

## The Verdict

### Concept strength

**The thinking is forged. The evidence isn't.** After the 2026-11-25 decisions, [Product] has a sharp job, a principled design and a demo specification precise enough to test line by line. It also has no contact with a buyer, a differentiation claim that rests on a join nobody has demonstrated, and a gate order that lets the PRD and the public demo get built before any buyer has reacted. The concept needs more heat. That isn't because the idea is soft. It's because every claim the product depends on is still the team's own.

### Forged in steel

- **The job and the money moment.** "When finance asks when we're done, give an honest date and two or three options to change it" is concrete and felt, and the Tallmast numbers make it land. A 15% cut is 78.9% of the uncommitted money, only $0.57M is actually discretionary, and a $17.1M forecast is really $20.24M. "15% isn't 15%" is the most persuasive idea in this document.
- **Code for numbers, a board for arguments.** The CFO answer is the strongest in either FAQ because it's enforceable: named engine values, a validator, a test, and a ready-made test suite in the S2E5 facts. It answers the buyer's fear about AI before they voice it.
- **Reported status versus calculated status.** The silent-failure rule is deterministic, explainable and versioned, and it shows an owner. It's the clearest single difference from activity dashboards.
- **No silent drift, and no silent ignoring.** The five-part "Not now" turns ignoring into a dated, priced judgment, and the observability example proves the negative path works. Dropping read receipts kept the principle without pointing surveillance at the buyer.
- **The not-building list.** No individual scores, leaderboards, read receipts, dashboards or chat home screen. It's specific enough to settle arguments during the build.

### Needs more heat

These are promising but undefined, and the PRD has to define each one:

- **The Monday queue holds three to five, and crisis-week Monday has at least eight.** One fix that fits the data is grouping decisions by the constraint they share:
  - Customer Platform: the vulnerability, the Sev-2s, the resignations and the billing retirement
  - the migration: the cutover, the lease and the change order
  - the 15% plan
  - SRE staffing
  - the AI pilot

  That's five. The grouping has to be code, or the demo fails its own success criterion. The $940K change order also doesn't meet the decision-debt rule as written, though it plainly needs the VP.
- **The validator's rules:** structural numbers, number words, rounding, and ratios the AI works out itself.
- **Estimates that flow into totals.** Marking inputs is decided. Marking what's calculated from them isn't, and it touches the $20.24M headline.
- **A correction path for a wrong flag** that isn't deletion.
- **The board's open parameters:** quorum size, veto holder and red lines, round limit, and whether a failed advisor counts against quorum. Add the cost and time of one board run.
- **The review grade.** MVP criterion 9 needs the "30 days later" record, and the context file doesn't have that section yet; it gets written after S1E8. "Leaders grade their own calls" also needs a definition that keeps the grade on the decision: met or missed against its own success measures, and what was learned. A per-leader hit rate would be an individual performance score, which the project rules forbid, and it would be the read-receipt problem pointed at the buyer again. The Vision's "which options worked" has to be aggregated by decision type and assumption, never by person.
- **The weekly export.** File import means someone uploads fresh files every week. Name who.
- **The 15% reading.** The PRD must decide whether to calculate the run-rate reading too.
- **"Critical system."** It needs a definition before the key-person test means anything.
- **The 30-day pilot measure** in Getting Started is still invented, not agreed.

### Cracks in the foundation

1. **There's no buyer evidence, and the gates allow building without it.** Buyer evidence now blocks the first paid pilot, so the PRD and the public demo can be finished before one real VP has reacted. *To address it:* run the five-VP walkthrough on paper before the PRD. Two weeks of conversations is cheap next to months of building.
2. **The difference is a join, and an incumbent already covers each part of it.** Cortex surfaces concerns and at-risk teams. Planview drafts priced reallocation options. OnePlan tracks whether investments paid off. Jellyfish sells to the CFO. A general assistant over their MCP servers can imitate the board. By the brief's own rule, the PRD waits for a written comparison from public material, and it doesn't exist yet. *To address it:* write the comparison now, with OnePlan added. If it can't show a difference on the crisis week that a buyer would pay for, rebuild the positioning around the guarantees before writing the PRD.
3. **"The leader wants to know" has a design answer and no evidence, and the answer cuts both ways.** The record that defends a VP's reasoning in the CEO meeting is the same record that's discoverable after an incident. *To address it:* ask the walkthrough question directly ("would you buy a product that keeps your deferrals on the record?"), and get the legal read before the first paid pilot.
4. **The moat is mostly hope.** The board design is published in the episodes, and the decision record is worth nothing on day one. *To address it:* stop calling the board design a moat. Make the guarantees (no AI numbers, no deleted flags, no rewritten record) the product's identity, and test whether buyers pay for them.
5. **Gaming has no defense yet.** If directors downgrade severities, the strongest rule goes quiet. *To address it:* consider applying "no silent drift" to severities, so that a reclassified incident becomes a recorded change with who made it and why. That requires incident history in the import.

### What we still can't answer

| What we can't answer | How we'd find out | Gate |
|---|---|---|
| Whether a real VP wants this, and would pay | Five-VP paper walkthrough of the crisis week | First paid pilot (recommended: before the PRD) |
| Whether buyers see a difference from Cortex, Planview, OnePlan and Jellyfish | A written comparison from public material, then a live demo comparison | Written: blocks the PRD. Live: blocks the public demo |
| Whether real data supports an honest date | Forecast one real team's exported history | First paid pilot |
| What file a finance team will hand over | Ask one finance team, and import it | First paid pilot |
| Whether directors read a flag as help or as an ambush | Show the silent-failure flag to two or three directors | First paid pilot |
| How many minutes a week the human-kept fields and the export cost | Time them on the demo | Public demo |
| How many alerts a real organization gets | Count on the seeded weeks, then in the first pilot week | Fast-follow |
| Whether a CEO accepts a most likely date with a range | Add it to the VP walkthrough | None yet |
| The price, the pricing model and whose budget pays | Decide it, and test it in the VP walkthrough | None yet; has to precede a paid pilot |
| What one board run costs and how long it takes | Run the board on the crisis week | None yet |
| Where the key-person and personal-data lines fall | An ADR, plus a privacy read | None yet; on the demo's critical path |
| The legal exposure of a record nobody can delete | A lawyer's review | None yet |
| Who builds it, and how long it takes | Architecture, ADRs, then sizing | None yet |

### Before the PRD

1. Write the competitor comparison from public material, with OnePlan added. This is the PRD gate the brief sets.
2. Run the five-VP walkthrough on paper. No gate requires it yet; this Verdict recommends it.
3. Write the first ADR: key-person data, and personal data in the decision record.
4. Then write the PRD from the [distillate](prfaq-ai-boardroom-distillate.md), treating every "Needs more heat" item as something it must define.

---

## Sources

- [Gartner Magic Quadrant for Developer Productivity Insight Platforms, May 2026 (via Swarmia)](https://www.swarmia.com/blog/2026-gartner-magic-quadrant-developer-productivity-insight/)
- [Jellyfish vs LinearB vs DX vs Swarmia: what we learned evaluating engineering intelligence platforms](https://tianpan.co/forum/t/jellyfish-vs-linearb-vs-dx-vs-swarmia-what-we-learned-evaluating-engineering-intelligence-platforms/312)
- [Sacra: Jellyfish research (DevFinOps expands buyer to CFOs and controllers)](https://sacra.com/research/jellyfish)
- [G2: Jellyfish pricing (not published)](https://g2.com/products/jellyfish-2024-07-15/pricing)
- [Vendr: Jellyfish pricing data](https://www.vendr.com/marketplace/jellyfish-co)
- [Cortex: Announcing the AI chief of staff for engineering leaders](https://cortex.io/post/announcing-the-ai-chief-of-staff-for-engineering-leaders)
- [Cortex: AI chief of staff use case page](https://www.cortex.io/products/ai-chief-of-staff)
- [Planview: Strategic Portfolio Management](https://www.planview.com/products-solutions/solutions/strategic-portfolio-management/)
- [Planview Anvi: Capacity Rebalancing prompt](https://success.planview.com/Shared_capabilities/Planview_Anvi/Planview_Prompt_Library/Capacity_Rebalancing_prompt)
- [Planview: on-demand scenario planning demo](https://info.planview.com/Scenario-Planning-_demo-on-demand_sp_en_reg.html)
- [OnePlan November 2026 release: Strategic Execution Management and MCP server (press release)](https://www.webull.com/news/15910453992670208)
- [Tempo: Planview alternatives for portfolio leaders in 2026](https://www.tempo.io/blog/planview-alternatives)
- [Swarmia: developer-friendly software engineering intelligence tools](https://www.swarmia.com/blog/developer-friendly-software-engineering-intelligence-tools/)
- [Retool: How to measure developer productivity](https://retool.com/blog/how-to-measure-developer-productivity)
- [Park, Im and Keil: Overcoming the Mum Effect in IT Project Reporting (JAIS, 2008)](https://aisel.aisnet.org/jais/vol9/iss7/1)
- [Microsoft blog: There's no room for watermelons](https://learn.microsoft.com/en-us/archive/blogs/anitag/theres-no-room-for-watermelons)
