# Maker Faire Kochi: Meeting Minutes Posting Guide

This guide explains how to add new meeting minutes to the website repository to ensure a consistent format and a successful static site build.

---

## 📂 Directory Structure

All meeting minutes are stored under `src/content/blog/` as folder-based entries. Each entry must follow this structure:

```bash
src/content/blog/
  └── YYYY-MM-DD-short-slug/
      └── index.md
```

- **Folder Name:** Use the date of the meeting followed by a short kebab-case description (e.g., `2026-06-07-narrative-design`).
- **File Name:** Must be exactly `index.md` (or `index.mdx` if using MDX components).

---

## 🏷️ Frontmatter Configuration

At the very top of your `index.md` file, you must include a YAML frontmatter block. This block defines the metadata used by Astro to index and display the post:

```yaml
---
title: "Title of the Meeting Minutes"
description: "A short 1-2 sentence summary of what was discussed or decided."
date: "YYYY-MM-DD"
tags: ["planning", "sponsorship", "venue", "operations", "curation"]
---
```

### Frontmatter Fields:
- **`title`**: String. The title displayed in the archives list and at the top of the detail page.
- **`description`**: String. Briefly describes the meeting. Used for page SEO and preview snippets.
- **`date`**: Date string (`YYYY-MM-DD`). Used for sorting minutes chronologically.
- **`tags`**: List of strings. Tags to filter the post (e.g. `["site-visit", "venue"]`).

---

## 📝 Document Formatting Rules

To maintain high visual quality and avoid build-time errors, please follow these guidelines:

### 1. Heading Levels (CRITICAL)
- **Do NOT use level 1 headings (`# Heading`) in the body.** The title from your frontmatter is automatically rendered as the H1 title of the page.
- **Always start your body headings with level 2 (`## Heading`).**
- **Never place a level 3 heading (`### Subheading`) before a level 2 heading.** The Table of Contents (TOC) generator expects level 2 headings to be parent nodes. Placing level 3 headings first will cause the static build compiler to crash.

### 2. Standard Document Outline
Standardize the flow of your meeting minutes using these five standard sections:
- `## Meeting Details` (Date, Time, Location, Attendees)
- `## Agenda` (bulleted list)
- `## Discussions & Key Decisions` (broken down into H3 sections, e.g. `### 1. Venue Selection`)
- `## Action Items` (utilizing a markdown table or checkbox list with assignees and dates)
- `## Timeline & Next Steps`

---

## 📋 Copy-Paste Template

Below is the standard blank template. Copy this code into your new `index.md` file to get started:

```markdown
---
title: "Meeting Title Here"
description: "Brief summary of key decisions."
date: "2026-06-13"
tags: ["planning"]
---

## Meeting Details

- **Date:** June 13, 2026
- **Time:** 4:00 PM - 5:00 PM IST
- **Location:** Online / Physical Venue
- **Attendees:** Attendee 1, Attendee 2, Attendee 3

---

## Agenda

- [ ] Agenda Item 1
- [ ] Agenda Item 2

---

## Discussions & Key Decisions

### 1. Topic Title One
Provide clear context regarding what was discussed and what decisions were finalized.

### 2. Topic Title Two
Add details on subsequent topics. Use bold text to highlight major outcomes.

---

## Action Items

| Action Item | Assignee | Deadline | Status |
| :--- | :--- | :--- | :--- |
| Describe the task here | Name | Date | Pending |
| Describe another task | Name | Date | Pending |

---

## Timeline & Next Steps

Summarize the dependencies or targets for the next sync session.
```
