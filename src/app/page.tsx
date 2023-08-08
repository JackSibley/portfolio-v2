import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 leading-relaxed antialiased">
      <div className="fon-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-slate-200 text-4xl font-bold tracking-tight sm:text-5xl">
                <a href="/"> Jack Sibley</a>
              </h1>
              <h2 className="text-slate-200 mt-3 text-lg font-medium tracking-tight sm:text-xl">
                Graduate Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I am a recent University graduate with a strong software
                development foundation.{" "}
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="active group flex items-center py-3"
                      href="#about"
                    >
                      <span className="nav-indicator bg-slate-600 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 mr-4 h-px w-8 transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none"></span>
                      <span className="nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-xs font-bold uppercase tracking-widest">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator bg-slate-600 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 mr-4 h-px w-8 transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none"></span>
                      <span className="nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-xs font-bold uppercase tracking-widest">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator bg-slate-600 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 mr-4 h-px w-8 transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none"></span>
                      <span className="nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-xs font-bold uppercase tracking-widest">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
}
