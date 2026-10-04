export default function Footer() {
  return (
    <footer className="3xl:text-3xl text-sm border-t border-black flex justify-center py-4">
      <div className="flex items-center gap-8 py-4 font-light">
        <p className="uppercase">Contact</p>
        <a href="https://twitter.com/cdsiren" target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white">Twitter</a>
        <a href="https://github.com/cdsiren" target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white">GitHub</a>
      </div>
    </footer>
  )
}
