import { useEffect, useState } from 'react'

export default function Intro() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section className="3xl:leading-[170px] 3xl:text-[150px] 2xl:leading-[90px] 2xl:text-[90px] lg:text-[65px] lg:leading-[75px] sm:leading-[60px] sm:text-[50px] font-light tracking-wider p-8 3xl:p-16 min-h-screen flex flex-col justify-between">
      <h1>Charlie<br />Work</h1>
      <div>
        <p>{size.width <= 785 ? 'mobile' : 'desktop'},</p>
        <p>{size.width} x {size.height} px,</p>
        <p>New York, NY</p>
      </div>
      <div className="pb-16" />
    </section>
  )
}
