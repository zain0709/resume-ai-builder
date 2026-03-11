# ResumAI

AI-powered resume bullet enhancer. Paste raw job bullets → AI converts them to ATS-optimized achievements → pick a template → export as PDF.

## Tech Stack

- **Next.js 15** (App Router)
- **Supabase** (Auth + Postgres)
- **Tailwind CSS v4**
- **TypeScript**
- OpenAI API _(Day 3)_
- react-pdf _(Day 4)_

## Features

| Status | Feature |
|--------|---------|
| ✅ | Google OAuth (Supabase) |
| ✅ | Protected routes + session management |
| ✅ | Navbar + sidebar layout |
| ✅ | Dashboard UI |
| 🔜 | Bullets CRUD (Day 2) |
| 🔜 | AI enhancement via OpenAI (Day 3) |
| 🔜 | Template picker — Modern / Classic / Executive (Day 4) |
| 🔜 | PDF export (Day 4) |
| 🔜 | Vercel deploy (Day 5) |

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/zain0709/resume-ai-builder.git
cd resume-ai-builder
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Configure Supabase

- Enable **Google** as an OAuth provider in your Supabase project dashboard.
- Add `http://localhost:3000/auth/callback` as an allowed redirect URL.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/login`.

## Project Structure

```
app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Redirects to /login
├── globals.css
├── (app)/                  # Protected route group
│   ├── layout.tsx          # Navbar + sidebar
│   ├── actions.ts          # signOut server action
│   ├── dashboard/          # Main dashboard
│   └── login/              # Google OAuth login
│       ├── page.tsx
│       ├── actions.ts      # signInWithGoogle server action
│       └── GoogleButton.tsx # Client component with loading state
├── auth/
│   └── callback/           # OAuth redirect handler
lib/
└── supabase/
    ├── server.ts           # SSR Supabase client
    └── client.ts           # Browser Supabase client
middleware.ts               # Route protection
```
