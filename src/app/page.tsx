import { Suspense } from 'react' // Para aguardar componentes individuais carregar

import { GitHubProfile } from '@/components/gitHubProfile'
import { LongWaitComponent } from '@/components/longWaitComponent'

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>Rodrigo Programista</p>

      <Suspense fallback={<p>Carregando LongWaitComponent...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GitHubProfile...</p>}>
        <GitHubProfile />
      </Suspense>
    </div>
  )
}