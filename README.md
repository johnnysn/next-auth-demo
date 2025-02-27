# NextAuth integrated with Spring Authorization Server demo

This is a [Next.js](https://nextjs.org) project using [NextAuth.js](https://next-auth.js.org/) to authenticate with the [Spring Authorization Server](https://docs.spring.io/spring-authorization-server/reference/getting-started.html) project.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/).
2. Create a `.env` file in the root of this project and add the environment variables as listed in `.env.example`.
3. Setup and run this [Spring Authorization Server demo](https://github.com/johnnysn/authserverdemo) locally.

## Getting Started

I recommend you install the project dependencies with `pnpm`:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
