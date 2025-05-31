---
title: My Medium Articles
description: Thoughtful articles on software development, philosophy in tech, and personal experiences
date: 2024-12-01
draft: false
slug: /pensieve/medium-articles
tags:
  - Writing
  - Philosophy
  - Software Development
  - Personal Experience
  - Medium
---

I write thoughtful articles on Medium exploring various topics from software development philosophy to personal experiences in tech. Here are some of my published articles:

## Latest Articles

### [Dirty Room Theory](https://medium.com/@aniketbiswas/dirty-room-theory-4fb1f0b48bc6)

_Published on Medium_

An interesting perspective on software development practices and how small inefficiencies can compound over time, drawing parallels between maintaining clean code and keeping a tidy workspace.

### [Ship of Theseus and Software Development](https://medium.com/@aniketbiswas/ship-of-theseus-and-software-development-3579a1d05eaa)

_Published on Medium_

Exploring the philosophical paradox of the Ship of Theseus through the lens of software development, examining how applications evolve and transform while maintaining their core identity.

### [My Internship Experience: Learning, Fun, Hard Goodbyes](https://medium.com/@aniketbiswas/my-internship-experience-learning-fun-hard-goodbyes-d9cc64e3213e)

_Published on Medium_

A personal reflection on my internship journey, sharing insights about the learning process, memorable experiences, and the emotional aspects of transitioning from internship to full-time roles.

---

You can find more of my articles on [Medium](https://medium.com/@aniketbiswas) where I share insights about software development, philosophy in tech, and personal experiences in the industry.

## How to Embed Medium Articles

If you want to embed specific Medium articles directly in your portfolio, you can:

1. **Use Medium's RSS Feed**: Medium provides RSS feeds for user profiles
2. **Fetch articles via API**: Use Medium's API or third-party services
3. **Manual curation**: Add articles manually as markdown posts (like this one)
4. **Medium embeds**: Use Medium's embed codes for specific articles

```javascript
// Example: Fetching Medium articles via RSS
const MEDIUM_RSS_URL = 'https://medium.com/feed/@aniketbiswas';

async function fetchMediumArticles() {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_RSS_URL}`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}
```
