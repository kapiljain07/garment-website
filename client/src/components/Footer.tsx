export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-white/80">
          © {year} Minakshi Creation. All rights reserved.
        </div>
        <div className="text-xs text-white/60">
          Premium garment manufacturing • Men / Women / Kids • OEM & Private Label
        </div>
      </div>
    </footer>
  )
}

