# Finality (codename): project rules

- Demo data comes only from docs/company-context.md (fictional Tallmast Logistics). Never use real company data.
- Follow the ADRs in docs/adr/. If you think one is wrong, stop and say so. Never deviate silently.
- Deterministic core: rules, scenarios and money are code with tests. AI never produces a number shown to users.
- Money: BigDecimal with explicit scale and rounding. Never double or float.
- Module boundaries: no cross-module table access; use published APIs or events. The module verification test must pass.
- Every story: tests first for rules and calculations, then run the full test suite before saying "done".
- The Anthropic API key lives only in backend configuration. Never in front-end code, logs or commits.
- Team-level metrics only. Never build individual performance scores.
- Hooks in .claude/hooks/ guard secrets, destructive commands and the test suite. If a hook blocks you, don't work around it: tell me what you wanted to do and why.

- don't commit to the main branch always use the feature- branch and submit a pull request to the development branch for me to review and approve and I am only allow to merge.
