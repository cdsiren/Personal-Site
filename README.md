# cdurbin.xyz

Personal site: a markdown blog plus an about page and reading list. Next.js pages router, Tailwind, no CMS, no env vars, no external calls.

```
npm install
npm run dev     # http://localhost:3333
npm run build
```

## Adding a post

Drop a markdown file in `_posts/` and a cover image under `public/assets/`:

```
---
title: 'Post Title'
coverImage: '/assets/blog/post-title/cover.png'
date: '01.31.2024'
type: 'Blog'
topic: 'Payments'
excerpt: One sentence shown on mobile and in the meta description.
---
Body in markdown.
```

The filename is the URL slug. Posts sort by `date` (MM.DD.YYYY), newest first.
