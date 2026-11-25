---
title: "PRFAQ: ai-boardroom (codename Finality)"
status: "internal-faq"
created: "2026-11-24"
updated: "2026-11-24"
stage: 4
inputs:
  - "docs/company-context.md"
  - "_bmad-output/brainstorming/brainstorm-tech-leader-decision-platform-2026-11-24/.memlog.md"
---

# Finality shows technology leaders the real date and the real cost, with options, before the CFO has to ask

## For VPs and CTOs who run ten or more teams through other managers: see what needs you today, catch the problems that green status reports hide, and walk into every money conversation with an honest date and two or three priced ways to change it.

**November 2027**: Finality, a decision platform for technology leaders, is available today. It's built for the Director, VP or CTO who manages through other managers, with several directors, a dozen teams, competing initiatives, a fixed budget and a CEO who wants an answer and a date. Finality adds up what no single report adds up and flags problems that status reports show as green. Before a leader commits to a decision, it shows what each option does to dates, money and people.

A technology leader with ten teams reads ten status reports. Each one can be true while the total is false. One project reported green for nine months. QA signed off every sprint and the product owner accepted every story, but every sprint planning added new requests and the release date quietly moved. The truth came out only when finance asked, "At this pace, when are we done?" The honest answer was "next year." At Tallmast Logistics, a regional freight company with a 90-person technology organization, the Customer APIs team reported green while the share of its releases that broke something rose from 9% to 21% in eight weeks. The same team ran at 118% of planned capacity for six sprints and had three serious incidents in fourteen days. When the CFO announced a 15% budget cut, the number sounded manageable, but it wasn't. The $3.0M cut was 78.9% of the money not yet committed, and only about $0.57M of that money was truly discretionary. Leaders usually learn these things in the meeting itself, with nothing to offer but an apology.

With Finality, a leader starts the day with a short list of what needs them, and an equally clear list of what doesn't, each with a reason. When a team's reported status disagrees with its own data, Finality shows the rule that tripped, the numbers behind it and the owner, to the leader and the director at the same moment. Dates and budgets can't move quietly. When one moves, someone has to accept the new date, cut scope or add capacity, and that choice is recorded. Before a decision, the leader sees two or three options side by side, with what each one does to the budget, the schedule, the teams involved and the risk of depending on one or two people. Every number is calculated by code and traces back to its source. The AI argues the options and drafts the brief, and it never produces a number.

> "Leaders don't get blindsided because they lack dashboards. They get blindsided because nobody adds up the total, and the bad news arrives with no options attached. Finality adds up the total, shows what the green report hides, and puts priced options on the table while there's still time to use them."
> — [Founder name], Finality

### How It Works

1. **Connect.** Finality reads from the issue tracker, the incident tool, the deployment pipeline and the budget with its commitments. Its access is read-only and it looks at team-level signals only. It never scores an individual.
2. **Start the day.** Two lists: *Needs you* and *Doesn't need you, and why*. At Tallmast, the observability-vendor consolidation (about $15K a month in savings not yet captured) stays off the VP's list on purpose, because it doesn't meet the threshold.
3. **See what green hides.** *Customer Platform Reliability reports green. The silent-failure rule tripped: 9% → 21% of releases broke something over 8 weeks, 118% planned capacity for 6 sprints, 3 serious incidents in 14 days. Owner: Director, Customer Engineering.* The director sees the same flag at the same moment and can add context before anyone asks.
4. **Test a decision before making it.** The CFO asks for a 15% cut. Finality shows what 15% means against what's left: $7.2M remaining, $3.8M of it uncommitted, about $0.57M of that discretionary. It also shows why the run-rate forecast of $17.1M looks comfortable when the forecast that counts commitments is $20.24M. A panel of AI advisors (finance, delivery, people and security) argues each option independently, challenges unsupported assumptions and names the missing information. The leader picks. Finality recommends and the leader decides.
5. **Commit.** The decision gets an owner, a review date, success measures, and the assumptions it depends on.
6. **Find out early when a decision stops making sense.** Finality doesn't try to grade, months later, whether a decision "worked." Instead it watches the assumptions behind the decision and tells you as soon as one stops being true. For example, the data-center lease decision assumed a migration pace the teams are no longer hitting. When that happens, the decision goes back into your queue.
7. **Brief the CEO.** The brief is one page, built from the same numbers, and every figure in it traces back to its source.

> "On the Monday everything broke at once, I didn't need another dashboard. I needed to see that three of the five fires ran through the same seven-person team, and what each way out would cost. I had that by Tuesday, and the CFO had her plan by Friday."
> — VP Technology, Tallmast Logistics

### Getting Started

A pilot starts with one director's area. Finality connects read-only to that area's issue tracker, incident tool and budget sheet, and loads the last 26 weeks of history, so the first *Needs you* list is ready on day one. After 30 days, the leader sees for each of those teams whether the status calculated from its data matched the status it reported, and how many date or budget changes became recorded decisions.

<!-- coaching-notes-stage-1 -->
<!--
Concept type: ASSUMED commercial product (rationale: target is a role found across companies, Director to CTO; Tallmast is a fictional design partner). Unconfirmed: the MIT license (nexomalabs) and the episode series (S1E8, S2E5, Manager Playbook Shorts) suggest it could instead be an open-source teaching project. If so, the pricing, buyer and moat questions in the Internal FAQ change to adoption effort and sustainability.

Inputs: docs/company-context.md (all scenario numbers) and the brainstorming memlog. The brainstorm is INCOMPLETE: it paused at the start of Job to Be Done; Assumption Reversal and Reverse Brainstorming were not run. Brainstorm results are thin; most of the content below is coach-drafted and needs the user's challenge.

Assumptions challenged in the brainstorm:
- Job 5 ("check later whether the decision worked") is the weakest: the buyer is the graded party, outcomes lag months, attribution is confounded, and it depends on job 4's success measures.
- Job 4 alone is a form; owners and deadlines risk becoming the project tracker the user ruled out.
- User: "the org hid nothing, nobody owned the total." Coach: green for nine months was itself the hiding; the status rated whether each sprint was done, not whether the project would finish.
- "Nobody owned the total": owning is management, and the product cannot assign it; but the total existed nowhere as a number. The product cannot create the owner; it can remove the excuse.

Job statement (user, adopted): "When finance asks when we're done, give an honest date and two or three options to change it, before they have to ask." Coach adjustment: the honest date is a range plus what has to be true for it.

User context: a real project reported green for nine months while scope grew each sprint; it surfaced when finance asked "at this pace, when are we done?" The fear is walking in with bad news and nothing to offer but an apology.

Research that shaped the framing (see Sources): engineering intelligence platforms measure engineering activity (Jellyfish, LinearB, Swarmia, DX, Faros; Gartner published a Magic Quadrant for Developer Productivity Insight Platforms in May 2026). Cortex sells an "AI chief of staff for engineering leaders" (since Oct 2025), the closest match to the job. Jellyfish is extending its buyer to CFOs and controllers via R&D capitalization. Planview markets AI that surfaces budget variance and drafts reallocation options. Developer backlash targets individual scoring more than team-level measurement. The "mum effect" (reluctance to report bad news) is an established research finding.
-->

<!-- coaching-notes-stage-2 -->
<!--
Rejected headline framings: "AI boardroom" (leads with technology, a how not a why); "a dashboard for VPs" (the thing the user said it is not); "decision intelligence" (jargon a customer wouldn't use).
Alternative headlines offered: (B) "Finality: walk into the money conversation with an honest date and three ways to change it"; (C) "Finality finds the problems your green status reports hide, and prices your way out."
Positioning: decisions and money, not engineering activity. AI is in How It Works, not the headline.
Coach proposals NOT yet validated by the user: job 5 reframed as assumption checks (decision returns to the queue when an assumption breaks); directors see flags at the same moment as the leader; "no date moves quietly" (every slip becomes a recorded decision).
Self-challenge, weakest claims in this draft:
1. "Connects read-only ... loads 26 weeks of history ... ready on day one": unproven; everything so far runs on clean fictional seed data.
2. The 30-day pilot measure is invented, not agreed.
3. Both quotes are placeholders or fictional; they are not evidence that anyone wants this.
4. The headline is long; it passes the "so what?" test but not the one-breath test.
Alternative customer quote considered (CFO): "I don't mind bad news. I mind bad news in October with no plan attached. This time the plan arrived with three options already priced, and we picked one in the meeting." (Grace Whitfield, CFO)
-->

---

## Customer FAQ

*Questions from four people at a company like Tallmast: a skeptical VP of Engineering (the buyer), a CFO, a director who fears being micromanaged, and a CEO. Where we can't answer honestly yet, the answer says so, says what it would take to find out, and proposes whether the gap is a launch blocker, a fast-follow or an accepted trade-off. Those classifications are proposals for the product owner to confirm.*

### The skeptical VP of Engineering

### Q: We already pay for an engineering analytics tool, and our portfolio tool tracks investment. Why would I add another one?

A: Engineering analytics tools such as Jellyfish, LinearB, Swarmia, DX and Faros measure how engineering works: flow, DORA, where engineering time goes, and AI adoption. Portfolio tools such as Planview and Jira Align plan where the money goes. Finality starts from the decision in front of you and the money attached to it. Did a date move, did a reported status disagree with the data, and what are your options? It should read from the tools you already have rather than replace them.

**Not answerable yet.** The overlap is real and growing. Jellyfish now sells to CFOs. Planview markets AI that drafts budget reallocation options. Cortex sells an "AI chief of staff for engineering leaders," which is very close to our job statement. We haven't evaluated any of them hands-on, and we don't know whether buyers will see the difference or see a feature. *To find out:* put the Tallmast crisis-week scenario through Cortex's and Planview's public demos and write down what they can and can't produce. *Needed before:* the PRD. *Proposed: launch blocker.* If the difference can't be shown in one demo, there's no product.

### Q: My teams' data is a mess. Half the tickets have no estimate, and the incident severities are inconsistent. How can your "honest date" be honest when the input isn't?

A: The date is a range calculated from scope added and scope finished per sprint, and it shows its inputs. When scope grows as fast as work gets done, Finality says "no finish date at this pace" instead of making up a date. When the data is too thin to forecast, it says so and names which data is missing.

**Not answerable yet.** Every rule and forecast so far runs on clean, seeded, fictional data designed so the rules trip. We don't know what share of real organizations have data good enough for a useful range, or how often the answer would be "can't forecast." *To find out:* run the forecast on one real team's exported ticket history (anonymized, outside the demo data) and see how wide the range is. *Needed before:* the PRD commits to "honest date" as the headline promise. *Proposed: launch blocker.*

### Q: Who enters the data? If my directors have to update anything by hand, they won't.

A: Team signals come read-only from systems of record. The only things typed in by hand are decisions: the option chosen, the owner, the review date and the assumptions, and the leader enters those.

**Partly not answerable.** Three of the five starter rules need data that lives in no tool. *Key-person risk* needs to know how many engineers have working knowledge of each critical system. *Decision debt* needs to know how many times a decision was postponed and what the delay costs per month. Decision review needs success criteria. Today that data exists only in the company-context file. Someone has to keep it current, and if it's the VP, the VP's time is the hidden price of the product. *To find out:* list every field the rules read, mark each one as "system of record" or "a human must keep it current," and estimate the minutes per week. *Proposed: launch blocker for the list, accepted trade-off for some manual entry.*

### Q: How many alerts will I get? Five of my twelve teams run above 100% planned capacity.

A: Every alert shows the rule, its threshold and the version of that threshold. The daily view separates *Needs you* from *Doesn't need you, and why*. The starter rules include a deliberate negative test: the observability decision must not reach the VP's queue.

**Not answerable yet.** We don't know the right thresholds for a real organization, or whether the overcommitment rule (above 100% for 2 or more sprints) would flag almost every team in a stretched organization. If it does, Finality becomes the alarm everyone tunes out. *To find out:* replay the 26 weeks of seeded history and count alerts per week per rule. Then do the same on one real team's history. *Proposed: fast-follow*, but measure the alert count before launch.

### The CFO

### Q: Can I trust the numbers enough to put them in front of the board?

A: This is the strongest answer we have. Every number is calculated by code with tests, using exact decimal arithmetic, never floating point. The engine must reproduce Tallmast's finance facts exactly: $7.2M remaining ($3.4M committed plus $3.8M uncommitted), about $0.57M truly discretionary, and three forecasts of $17.1M run-rate, $20.24M commitment-aware and $21.18M if the change order is signed. The AI never produces a number. It writes arguments around numbers the engine computed. Finality never decides whether a cost is CapEx or OpEx. It follows the controller's capitalization policy.

**Not answerable yet.** We don't know how the budget, actuals and commitments get into Finality in a real company: a spreadsheet upload, an ERP export, or a person retyping them. Every reconciliation gap there is a number the CFO will catch before we do. *To find out:* ask one finance team what file they'd actually give us. *Proposed: launch blocker* for the import format, *fast-follow* for any direct connection.

### Q: When you show me "options," who priced them, and how do I know the savings are real?

A: The money in each option comes from the budget lines and commitments and is calculated deterministically. Examples are the $540K lease, the $940K change order and the cost of each pending request. The consequences for people, delivery and security are AI judgment, labelled as judgment and never shown as a number.

**Not answerable yet.** Several inputs are estimates someone typed in, not facts: "~$45K/month" to keep the legacy billing system, "~$108K/month" burn on the AI pilot, "~16 team-weeks" for the returns portal. Finality can do exact arithmetic on a guess, and that's the dangerous part. We haven't decided how an estimate is shown differently from an actual. *Proposed: launch blocker.* Estimates must be visibly marked as estimates, with who made them and when.

### The director who fears being micromanaged

### Q: Is this a surveillance tool that will be used to grade me?

A: Finality uses team-level metrics only and never scores an individual's performance. That's a fixed product rule, not a setting. A flag names the rule and the data, not a verdict on a person. The director sees every flag about their area at the same moment as their VP and can attach context.

**The honest part we can't wave away:** a flag still names an owner. "Customer Platform Reliability reports green, silent-failure rule tripped, owner: Renee Okafor" is a public correction of her status report, however neutral the wording. Developer backlash in this market targets scoring individuals and tying numbers to reviews, and Finality avoids that. But it does sit one level up, comparing a director's report with the data. **Not answerable yet:** whether directors experience that as help or as an ambush. *To find out:* show the silent-failure flag to two or three real directors and watch their reaction. *Proposed: launch blocker.* If directors game the inputs (filing a Sev-2 as a Sev-3), the rules go quiet and the product dies.

### Q: Will my VP use this instead of talking to me?

A: We can't stop a leader from managing by dashboard. The design can push the other way. Every flag can come with a suggested question for the director rather than a conclusion, such as "What has to be true for that date?", which is the coaching move the context file describes for an over-optimistic director. A decision can't be recorded with an owner who hasn't seen it.

**Not answerable yet:** whether that changes behaviour. *Proposed: accepted trade-off*, but write the rule down: Finality supports the conversation and never replaces it.

### The CEO

### Q: I want a date. Why does your tool give me a range?

A: Because a single date is how the green-for-nine-months project happened. Finality gives a range, what has to be true for the early end, and the decision that would narrow it, for example adding capacity, cutting scope or accepting a later date.

**Not answerable yet.** The Tallmast CEO "wants a clear answer and a date." We don't know whether a CEO accepts a range or hears it as hedging. This is a real tension between our honesty principle and our buyer's boss. *To find out:* write the crisis-week CEO brief two ways, single date versus range plus condition, and test both. *Proposed: fast-follow*, but decide the default format before the CEO brief is built.

### Q: Can my VP edit what the brief tells me?

A: This is the question we hope nobody asks. If the VP can edit or remove flags before the CEO brief goes out, the green-outside, red-inside problem simply moves up one level, from director-to-VP to VP-to-CEO. If the VP can't, many VPs won't buy a tool that reports past them.

**Not answerable yet. It's a product decision, not a research question.** One possible middle path: the VP can add context and choose the recommendation, but can't delete a tripped rule. The brief lists every tripped rule with the VP's response next to it. *Proposed: launch blocker.* This decision defines who the product is for.

### Q: Does the AI make the decision?

A: No. Finality recommends and the leader decides. AI advisors argue the options independently, challenge assumptions and name the missing information. The leader picks, and the decision record says who decided.

---

## Internal FAQ

*Questions from the builders' side: can we actually pull this off, and should we?*

### Q: Would a real VP pay for this, or is it a great demo built on perfect fictional data?

A: This is the question we haven't said out loud. Every rule, forecast and scenario so far was designed around Tallmast, a company built so that the rules trip at the right moment. Nothing in the project shows that a real technology leader has seen it, used it or said they'd pay for it. **Not answerable yet.** *To find out:* show the crisis-week walkthrough to five real Directors or VPs (no real company data enters the product) and ask what they'd stop using to make room for it. *Needed before:* the PRD.

### Q: What's the hardest technical problem?

A: It isn't the rules, and it isn't the AI. It's getting trustworthy data in. Every organization models teams, initiatives, severities and budgets differently. The rules need 8-week trends and 26 weeks of history, and the finance engine needs actuals and commitments that reconcile. **Not answerable yet:** how long it takes to connect one real organization. *To find out:* map the fields for one real issue tracker and one budget spreadsheet format. Architecture is deliberately out of scope for this document.

### Q: Doesn't key-person risk break the "team-level only" rule?

A: It strains it. Key-person risk isn't a performance score, but it needs individual-level data: who has working knowledge of the legacy billing integration, and who has resigned. Tallmast's starter rule trips "once Alex and Priya leave," which means the product knows two named people resigned. That's HR-sensitive data, with privacy and legal exposure. **Not answerable yet: it's a line to draw.** One option is to store only counts per critical system ("1 engineer with working knowledge") and never names. This probably deserves an ADR before anything is built.

### Q: Where does AI add value, and where is it a risk?

A: **Deterministic (code with tests):** every threshold, every rule, every forecast, every money figure, every percentage, every "no finish date at this pace." **AI judgment:** drafting the two or three options, having the advisors argue them independently, challenging unsupported assumptions, naming missing information, suggesting the question to ask a director, and writing the CEO brief around numbers the engine produced. **The risk:** AI-written text that contains a number. The rule must be enforceable, not just a guideline. One way is for AI text to reference engine values by name, with the numbers inserted by code, and for tests to fail on any number the AI wrote itself.

### Q: Why us, and why now? What's the moat?

A: *Why now:* AI can argue the options and draft the brief, which used to take a chief of staff. Status reporting still hides bad news (the mum effect is well documented). *Moat:* weak, honestly. The rules are simple and anyone can copy them. Engineering analytics vendors are moving toward finance and AI assistants. The one asset that builds up over time is the decision record: decisions, assumptions and what happened next. **Not answerable yet:** whether that record is valuable enough that a leader wouldn't leave.

### Q: Who pays, and how much?

A: **Not answerable yet.** We haven't decided whether this is a commercial product, an internal tool or an open-source teaching project (the repository is MIT-licensed and tied to an episode series). If it's commercial, the buyer is probably the VP or CTO paying from their own budget. One third-party estimate puts engineering analytics tools at $50K–$120K a year for 50–150 seats, but it's a secondhand figure. *Needed before:* the PRD, because it changes what "first value" means.

### Q: What kills this?

A: Four ways, in order of likelihood:
1. **Directors game the inputs** and the rules go quiet, so the green status comes back.
2. **The leader stops keeping the decision record**, so jobs 4 and 5 die and Finality becomes a dashboard.
3. **One confident wrong number in front of a CFO**: a misread budget import or an estimate shown as a fact.
4. **Connecting each new customer costs more than they'll pay.**

### Q: What does it take to build, and how long?

A: **Not answerable yet, by design.** There's no architecture yet and no ADRs. What we do know: the deterministic core (rules, forecasts, money) is small and testable, and the Tallmast facts are a ready-made test suite. Data integration and the AI advisor layer are where the time goes.

<!-- coaching-notes-stage-3 -->
<!--
Gaps revealed by customer questions (proposed classification; product owner to confirm):
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
Requirements signals: estimates visibly marked with author and date; every flag shows rule, threshold version, data and owner; directors see flags at the same moment; suggested question per flag; decision cannot name an owner who hasn't seen it; "no finish date at this pace" output.
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

---

## Sources

- [Gartner Magic Quadrant for Developer Productivity Insight Platforms, May 2026 (via Swarmia)](https://www.swarmia.com/blog/2026-gartner-magic-quadrant-developer-productivity-insight/)
- [Jellyfish vs LinearB vs DX vs Swarmia: what we learned evaluating engineering intelligence platforms](https://tianpan.co/forum/t/jellyfish-vs-linearb-vs-dx-vs-swarmia-what-we-learned-evaluating-engineering-intelligence-platforms/312)
- [Sacra: Jellyfish research (DevFinOps expands buyer to CFOs and controllers)](https://sacra.com/research/jellyfish)
- [Cortex: Announcing the AI chief of staff for engineering leaders](https://cortex.io/post/announcing-the-ai-chief-of-staff-for-engineering-leaders)
- [Planview: Strategic Portfolio Management](https://www.planview.com/products-solutions/solutions/strategic-portfolio-management/)
- [Tempo: Planview alternatives for portfolio leaders in 2026](https://www.tempo.io/blog/planview-alternatives)
- [Swarmia: developer-friendly software engineering intelligence tools](https://www.swarmia.com/blog/developer-friendly-software-engineering-intelligence-tools/)
- [Retool: How to measure developer productivity](https://retool.com/blog/how-to-measure-developer-productivity)
- [Park, Im and Keil: Overcoming the Mum Effect in IT Project Reporting (JAIS, 2008)](https://aisel.aisnet.org/jais/vol9/iss7/1)
- [Microsoft blog: There's no room for watermelons](https://learn.microsoft.com/en-us/archive/blogs/anitag/theres-no-room-for-watermelons)
