import Image from 'next/image'
import type { Tab } from '../pages'

type Props = {
  active: Tab
  setActive: (tab: Tab) => void
  smoothScroll: (id: string) => void
}

const hover = 'hover:bg-black hover:text-white m:hover:bg-white m:hover:text-black'

export default function Navbar({ active, setActive, smoothScroll }: Props) {
  const tab = (name: Tab, className = '') => (
    <button onClick={() => { setActive(name); smoothScroll(active) }} className={`${hover} ${className} flex items-center gap-2 w-fit`}>
      {name}{active === name && ' ↓'}
    </button>
  )

  return (
    <nav className="3xl:text-3xl grid sm:grid-cols-6 grid-cols-4 items-center p-8 font-light">
      <button onClick={() => smoothScroll('intro')} className="font-thin flex items-center">
        [ C ,
        <span className="px-1">
          <Image className="m:hidden" src="/favicon/favi.png" height={18} width={18} alt="logo" />
          <Image className="hidden m:block" src="/logo-white.png" height={18} width={18} alt="logo" />
        </span>
        ]
      </button>
      {tab('Work', 'sm:col-span-2')}
      {tab('About')}
      <p className="sm:inline-block hidden" />
      {tab('Reading List')}
    </nav>
  )
}
