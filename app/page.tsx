import { Inter } from 'next/font/google'
import styles from './page.module.css'

import { WebR } from '@r-wasm/webr'
import { RDouble } from '@r-wasm/webr/robj-main';

// Ensure that evaluation results from webR are not cached
export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

// Explicitly set the webR base URL to the webR npm package directory
const webR = new WebR({
  baseUrl: './node_modules/@r-wasm/webr/dist/',
});

async function getRandomNumbers() {
    await webR.init();
    const result = await webR.evalR('rnorm(25,10,10)') as RDouble;
    try {
      return await result.toArray();
    } finally {
      webR.destroy(result);
    }
}

export default async function Home() {
  const values = await getRandomNumbers();
  return (
    <main className={styles.main}>
    <div className={inter.className}>
      <h1>WebR Next.js Example</h1>
      <h2>Here are some normally distributed random numbers:</h2>
      <div>
        {values.map((n, idx) => <p key={idx}>{n}</p>)}
      </div>
    </div>
  </main>
  )
}
