# WonderfulLife.ca Premium Beta

A production-oriented Next.js App Router beta based on the approved bright Vancouver summer homepage.

## Included
- Premium responsive homepage and navigation pages
- Approved hero artwork in `public/images/wonderfullife-hero.png`
- Interactive Ask Zoey chat using the OpenAI Responses API
- Graceful demo answer when no OpenAI key is configured
- Supabase SSR email/password authentication
- Member dashboard and saved-content integration
- Row-level-security database schema
- Vercel-ready environment configuration

## Setup
1. Copy `.env.example` to `.env.local`.
2. Add Supabase URL and publishable/anon key.
3. Add an OpenAI API key to activate live Zoey answers.
4. Run `database/schema.sql` once in the Supabase SQL Editor.
5. In Supabase Auth URL Configuration add your production URL and `/auth/callback` redirect.
6. Run:

```bash
npm install
npm run dev
```

## Vercel environment variables
- `NEXT_PUBLIC_SITE_URL=https://wonderfullife.ca`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `OPENAI_MODEL=gpt-5-mini`

## Important launch review
Before accepting payments or publishing health/product claims, complete legal, privacy, accessibility, product-link, analytics and content review.
