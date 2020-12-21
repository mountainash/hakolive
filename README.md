# Welcome to Hako Live

https://hakolive.vercel.app

## What is Hako?

Hako is a small (physically - it's a small shop) Craft Beer shop in Winterthur (the 5/6th biggest city in small Switzerland). While they are still open in these times of COVID, they can't run their usual in-store digestation and have resorted to sending out a harsé of 10 beers and holding a Zoom meetup about once a month (fun times!).

## But what is this repo for?

As a web nerd I decided to hack together some kind of mashup between the beers that Hako picks for the session and Untappd (a very popular beer-drinking social network).

## Why?

Well, I wanted too!?!

AND I'm applying for a job at a workplace that has React and Next.js requirements which I don't yet have... time for some JIT coding - I also noticed that their own website is hosted on [vercel.app](https://vercel.app/) which provides free hosting - see the output at https://hakolive.vercel.app

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
1. `docker-compose up`
1. Open http://localhost:3000

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Vercel CLI Documentation](https://vercel.com/docs/cli#commands/dev)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.