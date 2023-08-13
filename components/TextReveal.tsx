export const TextRevealTW = (text: string) => {
  return (
    <>
      <h1 className="overflow-hidden pb-1 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        {text.match(/./gu)!.map((char, index) => (
          <a
            className="inline-block animate-text-reveal [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
            href="/"
          >
            {char === " " ? "\u00A0" : char}
          </a>
        ))}
      </h1>
    </>
  );
};
