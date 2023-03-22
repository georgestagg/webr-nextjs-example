# Example of using webR in a React Server Component with Next.js

This repo contains an example of using webR as part of a [Next.js](https://nextjs.org/) application, originally bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

In this example webR is running an R session server-side through the use of [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components), rather than running directly in the user's browser. Here webR runs in a process on the application server, with the R output communicated to the end user through the Next.js framework.

## Getting started

* Clone this repo and `cd` into the new directory.
* Install the required JavaScript libraries: `npm install`.
* Run the development server: `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Loading webR in a server component

TypeScript source code showing an example of loading webR and using it in a page can be found in the file `app/page.tsx`. Note that at the moment there are some extra steps required so that the webR loader works correctly in a server component,

 * WebR must be configured by explicitly giving the path to the package installation directory, so that the R wasm binaries can be found by the server. For a standard webR installation this can be done by setting the optional webR setting `baseUrl: './node_modules/@r-wasm/webr/dist/'`.

 * Next.js must be told to consistently re-render the page, by setting `export const dynamic = 'force-dynamic'`. Without this, randomised results from webR will be cached, which is probably not what is intended when evaluating R code with webR.
