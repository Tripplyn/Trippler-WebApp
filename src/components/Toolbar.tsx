import * as React from 'react';
import { useRouter } from 'next/router';

export default function Toolbar() {
  const router = useRouter()

  return(
    <nav className="bg-background border-gray-200  p-3 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-8">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            router.push('/menu')
            }
          }
        >
          <img src="/logo.png" className="h-6 mr-3 h-9" alt="Trippler Logo" />
          <span className="self-center text-xl font-semibold text-white">Trippler</span>
        </div>
        <div className="flex md:order-2">
          <img src="/gustavo.png" className="h-6 mr-3 h-9 rounded-full" alt="Gustavo" />
        </div>
      </div>
    </nav>
  )
}

