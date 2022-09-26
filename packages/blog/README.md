This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependdencies

- Next, React, React DOM
- @hojjat/components
- Styled component: this package needs react-is as a `peer-dependency`. Also babel-plugin-styled-components is used because of [this issue](https://github.com/vercel/next.js/issues/7322). And this one is added for types `@types/styled-components`
