import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Ear, ScanSearch, MessageCircle, Disc3, SlidersHorizontal, Gauge, Drum, Mic, Lightbulb,
  ArrowDown, ArrowRight, Check, Mail, Clock, Menu, X, Instagram, Youtube, Music2, CheckCircle2, Quote,
} from "lucide-react";
import logo from "@/assets/logo-jr.png.asset.json";
import heroImg from "@/assets/estudio-mezclas.jpeg.asset.json";
import retrato from "@/assets/estudio-retrato.jpeg.asset.json";
import monitores from "@/assets/estudio-monitores.jpeg.asset.json";
import teclado from "@/assets/estudio-teclado.jpeg.asset.json";
import piano from "@/assets/piano.jpeg.asset.json";
import {
  site, socials, gallery, nav, marquee, about, services, process, works, testimonials, faq, projectTypes, ui,
  type Lang, type T,
} from "@/data/juanma";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juanma Rodríguez — Productor Musical en Barcelona" },
      { name: "description", content: "Producción musical, mezcla, mastering, beats y grabación en Barcelona. Trabajo presencial y a distancia." },
      { property: "og:title", content: "Juanma Rodríguez — Productor Musical en Barcelona" },
      { property: "og:description", content: "Producción, mezcla, mastering y beats a medida. Barcelona · presencial y a distancia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const traitIcons = { ear: Ear, detail: ScanSearch, talk: MessageCircle } as const;
const serviceIcons: Record<string, typeof Disc3> = { prod: Disc3, mix: SlidersHorizontal, master: Gauge, beat: Drum, rec: Mic, advice: Lightbulb };
const socialIcons = { Instagram, YouTube: Youtube, Spotify: Music2, TikTok: Music2 } as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const t = (x: T) => x[lang];
  useReveal();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const activeSocials = socials.filter((s) => s.url);

  return (
    <div className="overflow-x-hidden">
      <Header lang={lang} setLang={setLang} t={t} />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroImg.url} alt="Juanma Rodríguez trabajando en la mesa de mezclas de su estudio" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        {/* VINILO DEL HERO */}
        <div aria-hidden className="absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-80 sm:block md:right-6 lg:right-12">
          <div className="vinyl vinyl-holed animate-spin-vinyl relative h-[18rem] w-[18rem] lg:h-[24rem] lg:w-[24rem]">
            <img src={retrato.url} alt="" className="absolute inset-[24%] rounded-full object-cover" />
            <div className="vinyl-shine absolute inset-0" />
          </div>
          <div className="spindle-ring absolute left-1/2 top-1/2 h-[6.5%] w-[6.5%] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">{t(site.role)}</p>
          <h1 className="text-[19vw] uppercase leading-[0.82] sm:text-[16vw] lg:text-[13rem]">
            Juanma<br /><span className="text-primary">Rodríguez</span>
          </h1>
          <div aria-hidden className="mt-6 flex h-8 items-center gap-[2px]">
            {Array.from({ length: 90 }).map((_, i) => (
              <span
                key={i}
                className="wave-line"
                style={{
                  animationDelay: `${-i * 0.045}s`,
                  animationDuration: `${1.2 + Math.sin(i * 0.35) * 0.5}s`,
                  height: `${20 + Math.abs(Math.sin(i * 0.22)) * 80}%`,
                }}
              />
            ))}
          </div>
          <p className="mt-6 max-w-md text-xl text-muted-foreground md:text-2xl">{t(site.tagline)}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#trabajos" className="glow rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:scale-105">{t(ui.listen)}</a>
            <a href="#contacto" className="rounded-full border border-foreground/40 px-7 py-3.5 font-semibold transition hover:border-primary hover:text-primary">{t(ui.contact)}</a>
          </div>
        </div>
        <a href="#sobre-mi" aria-label={t(ui.down)} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-foreground/40 p-3 text-foreground">
          <ArrowDown />
        </a>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="animate-marquee flex w-max whitespace-nowrap font-display text-3xl uppercase md:text-4xl">
          {Array.from({ length: 4 }).flatMap((_, i) => marquee.map((m) => <span key={`${i}${m}`} className="px-6">{m} ·</span>))}
        </div>
      </div>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 md:grid-cols-2">
        <div className="reveal relative">
          <img src={teclado.url} alt="Juanma sonriendo junto al teclado y la consola de su estudio" className="aspect-[4/5] w-full rounded-lg object-cover" loading="lazy" />
          <img src={retrato.url} alt="Retrato de Juanma en el estudio" className="absolute -bottom-10 -right-4 hidden w-48 rounded-lg border-4 border-background object-cover md:block" loading="lazy" />
          <div aria-hidden className="rings-bg absolute -left-16 -top-16 -z-10 h-64 w-64" />
        </div>
        <div className="reveal">
          <Eyebrow>{t(nav[1]!.label)}</Eyebrow>
          <h2 className="text-5xl uppercase md:text-7xl">{t(about.title)}</h2>
          {about.bio.map((p, i) => <p key={i} className="mt-6 text-lg leading-relaxed text-muted-foreground">{t(p)}</p>)}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {about.traits.map((tr) => {
              const Icon = traitIcons[tr.icon as keyof typeof traitIcons];
              return (
                <div key={tr.icon}>
                  <Icon className="mb-3 h-7 w-7 text-primary" />
                  <h3 className="font-sans text-base font-bold">{t(tr.title)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(tr.text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="ring-divider mx-auto max-w-5xl" />

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-28">
        <Eyebrow>{t(ui.servicesTitle)}</Eyebrow>
        <h2 className="reveal text-5xl uppercase md:text-7xl">{t(ui.whatWeDo)}</h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon] ?? Disc3;
            return (
              <article key={s.icon} className="reveal group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
                <div aria-hidden className="rings-bg absolute -right-20 -top-20 h-48 w-48 opacity-0 transition duration-500 group-hover:opacity-60" />
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                <Icon className="my-5 h-9 w-9 text-primary" />
                <h3 className="text-2xl uppercase">{t(s.title)}</h3>
                <p className="mt-3 text-muted-foreground">{t(s.text)}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.includes.map((x, k) => <li key={k} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{t(x)}</li>)}
                </ul>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">{t(ui.ask)} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              </article>
            );
          })}
        </div>
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 rounded-lg bg-primary p-10 text-primary-foreground md:flex-row md:items-center">
          <p className="font-display text-3xl uppercase md:text-4xl">{t(ui.band)}</p>
          <a href="#contacto" className="rounded-full bg-ink px-7 py-3.5 font-semibold text-foreground transition hover:scale-105">{t(ui.contact)}</a>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-ink py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <Eyebrow>{t(nav[4]!.label)}</Eyebrow>
            <h2 className="reveal text-5xl uppercase md:text-7xl">{t(ui.processTitle)}</h2>
            <ol className="mt-12 space-y-8">
              {process.map((p, i) => (
                <li key={i} className="reveal flex gap-6 border-b border-border pb-8">
                  <span className="font-display text-5xl text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="text-2xl uppercase">{t(p.title)}</h3>
                    <p className="mt-2 text-muted-foreground">{t(p.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <img src={monitores.url} alt="Juanma de espaldas frente a los monitores, con el tatuaje de un micrófono en el brazo" className="reveal aspect-[4/5] w-full rounded-lg object-cover" loading="lazy" />
        </div>
      </section>

      {/* TRABAJOS */}
      <section id="trabajos" className="relative overflow-hidden py-28">
        <img src={piano.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Eyebrow>{t(ui.worksTitle)}</Eyebrow>
          <h2 className="reveal text-5xl uppercase md:text-7xl">{t(ui.onTurntable)}</h2>
          <WorksFocus t={t} />

        </div>
      </section>

      {/* EL ESTUDIO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>{t(ui.studioEyebrow)}</Eyebrow>
          <h2 className="reveal text-5xl uppercase md:text-7xl">{t(ui.studioTitle)}</h2>
        </div>
        {/* ESTANTERÍA DE VINILOS */}
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-center gap-x-3 gap-y-0 sm:gap-x-4">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className="group w-[31%] sm:w-[17%]"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <div className="relative overflow-hidden rounded-sm border border-border shadow-xl transition duration-300 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-2xl">
                  <img src={g.src} alt={t(g.caption)} className="aspect-square w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">
                  <span className="font-display text-primary">0{i + 1}</span> {t(g.caption)}
                </figcaption>
              </figure>
            ))}
          </div>
          <div aria-hidden className="shelf-plank relative h-3 rounded-sm" />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Eyebrow>{t(ui.testimonialsTitle)}</Eyebrow>
        {testimonials.length === 0 ? (
          <div className="reveal relative overflow-hidden rounded-lg border border-border bg-card p-12 md:p-16">
            <div aria-hidden className="rings-bg absolute -right-24 -top-24 h-72 w-72 opacity-40" />
            <Quote className="relative mx-auto mb-4 h-12 w-12 text-primary" />
            <p className="text-xl text-muted-foreground">{t(ui.testimonialsEmpty)}</p>
          </div>
        ) : (
          testimonials.map((q, i) => <blockquote key={i} className="mb-8 text-2xl">“{t(q.quote)}” <cite className="block text-base text-primary">{q.author}</cite></blockquote>)
        )}
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="reveal mb-10 text-5xl uppercase md:text-6xl">{t(ui.faqTitle)}</h2>
        <div className="divide-y divide-border border-y border-border">
          {faq.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {t(f.q)}<span className="text-2xl text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-base text-muted-foreground">{t(f.a)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-ink py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>{t(nav[6]!.label)}</Eyebrow>
          <h2 className="reveal text-5xl uppercase md:text-7xl">{t(ui.contactTitle)}</h2>
          <ContactForm t={t} />
          <div className="mt-12 text-center">
            <ContactRow />
            {activeSocials.length > 0 && <div className="mt-6"><Socials list={activeSocials} /></div>}
            <p className="mt-4 text-muted-foreground">{t(site.location)}</p>
          </div>
        </div>
      </section>

      {/* PIE */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <img src={logo.url} alt="Logo JR de Juanma Rodríguez" className="h-24 w-24" />
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="hover:text-primary">{t(n.label)}</a>)}
          </nav>
          {activeSocials.length > 0 && <Socials list={activeSocials} />}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">© 2026 Juanma Rodríguez — {t(ui.rights)}</p>
      </footer>
    </div>
  );
}

function ContactRow() {
  if (!site.whatsapp && !site.email) return null;
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {site.whatsapp && <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105"><MessageCircle className="h-5 w-5" />WhatsApp</a>}
      {site.email && <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"><Mail className="h-5 w-5" />{site.email}</a>}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
      <span className="inline-block h-3 w-3 rounded-full border-2 border-primary" />{children}
    </p>
  );
}

function Socials({ list }: { list: typeof socials }) {
  return (
    <div className="flex justify-center gap-3">
      {list.map((s) => {
        const Icon = socialIcons[s.name];
        return (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} className="rounded-full border border-border p-3 transition hover:border-primary hover:text-primary">
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

function Header({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: (x: T) => string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "bg-background/90 backdrop-blur border-b border-border" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo.url} alt="Logo JR" className="h-12 w-12" />
          <span className="hidden font-display text-xl uppercase sm:block">Juanma Rodríguez</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{t(n.label)}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-border p-0.5 text-xs font-bold">
            {(["es", "en"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-full px-2.5 py-1 uppercase ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{l}</button>
            ))}
          </div>
          <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-105 md:block">{t(ui.cta)}</a>
          <button className="lg:hidden" aria-label="Menú" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 lg:hidden">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2 font-display text-2xl uppercase">{t(n.label)}</a>)}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">{t(ui.cta)}</a>
        </nav>
      )}
    </header>
  );
}

function ContactForm({ t }: { t: (x: T) => string }) {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-md border border-input bg-card px-4 py-3 outline-none transition focus:border-primary";
  if (sent) {
    return (
      <div className="mt-10 flex items-start gap-4 rounded-lg border border-primary bg-card p-8">
        <CheckCircle2 className="h-8 w-8 shrink-0 text-primary" />
        <p className="text-lg">{t(ui.thanks)}</p>
      </div>
    );
  }
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium">{t(ui.name)}<input required maxLength={100} className={field} /></label>
      <label className="grid gap-2 text-sm font-medium">{t(ui.email)}<input required type="email" maxLength={255} className={field} /></label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">{t(ui.type)}
        <select required className={field} defaultValue="">
          <option value="" disabled>—</option>
          {projectTypes.map((p) => <option key={p.value} value={p.value}>{t(p.label)}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">{t(ui.message)}<textarea required rows={5} maxLength={2000} className={field} /></label>
      <button type="submit" className="glow rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:scale-[1.02] sm:col-span-2">{t(ui.send)}</button>
    </form>
  );
}
