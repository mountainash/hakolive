# Welcome to Hako Live

https://hakolive.vercel.app

## What is Hako?

Hako is a small (physically - it's a small shop) Craft Beer shop in Winterthur (the 5th largest city in small Switzerland). While they are still open in these times of COVID, they can't run their usual in-store dégustation, so have resorted to sending out a harsé of 10 beers and holding a Zoom meetup about once a month (fun times!).

## But what is this repo for?

As a web nerd I decided to hack together some kind of mashup between the beers that Hako picks for the session and Untappd (a very popular beer-drinking social network).

## Why?

Many Software Developer roles in Zürich require React (and/or Next.js) requirements which I don't yet have... time for some JIT coding and this was the first idea that came into my head (...I may have been drinking beer at the time).

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
### Shell

1. `npm run dev` OR `yarn dev`
1. Open http://localhost:3000

### Docker Compose

Using [dockette/vercel](https://github.com/dockette/vercel) with NodeJS and [Vercel CLI](https://vercel.com/docs/cli#commands/dev).

1. Create a token at https://vercel.com/account/tokens
1. Add the token value to `VERCEL_TOKEN=` key the `.env` file in the project root
1. `docker-compose build`
1. `docker-compose run nextjs npm install`
1. `docker-compose up`
1. Open http://localhost:3000

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Vercel CLI Documentation](https://vercel.com/docs/cli#commands/dev)
- [React Documentation](https://reactjs.org/docs/)

## Deploy on Vercel

One way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.