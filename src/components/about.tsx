import Image from 'next/image'

const link = (href: string, text: string) => <a target="_blank" rel="noreferrer" href={href} className="underline hover:bg-black hover:text-white">{text}</a>

const press = [
  { date: '05.2026', outlet: 'The Block', title: 'MoonPay announces fourth acquisition of the year with Decent as it launches MoonPay Trade', href: 'https://www.theblock.co/news/deals/2026-05-21-moonpay-announces-fourth-acquisition-of-the-year-with-decent-as-it-launches-moonpay-trade-402206' },
  { date: '05.2026', outlet: 'CoinDesk', title: 'MoonPay expands into tokenized assets and DeFi markets with new platform for banks', href: 'https://www.coindesk.com/business/2026/05/21/moonpay-expands-into-tokenized-assets-and-defi-markets-with-new-platform-for-banks' },
  { date: '2026', outlet: 'The Defiant', title: 'Franklin Templeton Benji and MoonPay Trade bring stablecoin swaps onchain', href: 'https://thedefiant.io/news/tradfi-and-fintech/franklin-templeton-benji-moonpay-trade-onchain-stablecoin-swaps' },
  { date: '07.2023', outlet: 'Fast Company', title: "Gen Z workers don't love their jobs, so they're changing work culture", href: 'https://www.fastcompany.com/90911418/gen-z-workers-dont-love-their-jobs-so-theyre-changing-work-culture' },
]

export default function About() {
  return (
    <div className="font-light p-8 w-full min-h-[83vh]">
      <div className="flex gap-8 items-center mb-12">
        <Image src="/pfp.png" height={60} width={60} alt="pfp" />
        <p className="text-[30px]">Charlie Durbin</p>
      </div>

      <p className="md:w-1/2">I co-founded {link('https://decent.xyz', 'Decent')} in 2021 and built the first protocol enabling chain-abstracted transactions. Decent was acquired by {link('https://www.moonpay.com', 'MoonPay')} and became MoonPay Trade. I now work on MoonPay Trade, extending that infrastructure to tokenized assets, DeFi markets, and institutions, including onchain liquidity facilities with Franklin Templeton's Benji platform and Wisdom Tree.</p>
      <p className="md:w-1/2 py-4">I started researching crypto in 2017, publishing independent work on how Bitcoin {link('https://github.com/cdsiren/capital-flight', 'Bitcoin & Capital Flight')} and {link('https://dataspace.princeton.edu/handle/88435/dsp013r074x802', 'information cascades in financial markets')} — a thread that still runs through how I think about mechanism design.</p>
      <p className="md:w-1/2">In a prior life I played professional lacrosse and won a world championship with the Cannons in 2020.</p>
      <p className="md:w-1/2 py-4">Find me on {link('https://twitter.com/cdsiren', 'Twitter')}, {link('https://www.linkedin.com/in/charlie-durbin-b88544131/', 'LinkedIn')}, and {link('https://github.com/cdsiren', 'GitHub')}.</p>

      <h2 className="font-medium pt-12 pb-4">Press</h2>
      {press.map(p => (
        <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="block md:w-1/2 py-2 hover:text-orange-400">
          <span className="font-medium">{p.outlet}</span> · {p.title} <span className="whitespace-nowrap">({p.date})</span>
        </a>
      ))}
    </div>
  )
}
