import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Check, ChevronDown, Code2, Cpu, Heart, LockKeyhole,
  Music2, Pause, Play, RotateCcw, Sparkles, Terminal, Trophy,
  Volume2, VolumeX, Wifi, Zap
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

function Stars() {
  const stars = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 71) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 10) * .4
  })), []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,.18),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(236,72,153,.12),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,.12),transparent_30%)]" />
      <div className="grid-bg absolute inset-0 opacity-70" />
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.75, 0.15], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + s.delay, repeat: Infinity, delay: s.delay }}
        />
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} className="mb-10">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[.25em] text-fuchsia-300/80">
        <span className="h-px w-8 bg-fuchsia-400/50" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">{text}</p>}
    </motion.div>
  );
}

function BootScreen({ onEnter }) {
  const lines = [
    "Loading memories...",
    "Loading happiness...",
    "Loading beautiful moments...",
    "Loading love..."
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCount(c => Math.min(c + 1, lines.length)), 650);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .7 }}
      className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="absolute h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[110px]" />
      <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8 }}
        className="glass glow-border w-full max-w-2xl rounded-3xl p-7 sm:p-12">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-2"><Code2 size={20} /></div>
            <div><p className="font-mono text-xs text-white/45">PERSONAL SYSTEM</p><p className="font-semibold">KATY OS</p></div>
          </div>
          <div className="font-mono text-xs text-emerald-300">v28.08.26</div>
        </div>
        <div className="font-mono">
          <p className="text-sm text-white/40">KATY OS</p>
          <p className="mt-1 text-2xl font-bold tracking-tight sm:text-4xl">Birthday Edition</p>
          <div className="my-8 h-px bg-white/10" />
          <p className="text-white/45">System initializing...</p>
          <div className="my-6 space-y-2 text-sm text-white/70">
            {lines.slice(0, count).map((line, i) => (
              <motion.div key={line} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>
                <span className="mr-2 text-fuchsia-300">›</span>{line}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <Check size={17} /> SYSTEM READY
          </div>
          <motion.button
            disabled={count < lines.length}
            initial={{ opacity: 0 }} animate={{ opacity: count === lines.length ? 1 : .45 }}
            whileHover={{ scale: count === lines.length ? 1.02 : 1 }}
            onClick={onEnter}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-fuchsia-300/30 bg-fuchsia-500/15 px-5 py-4 font-semibold transition hover:bg-fuchsia-500/25 disabled:cursor-not-allowed"
          >
            ENTER <ArrowRight size={17} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero({ onStart }) {
  return (
    <section id="top" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[.18em] text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            KATY OS • ONLINE
          </div>
          <p className="mb-3 font-mono text-sm text-fuchsia-300/80">SYSTEM MESSAGE / 28.08.2026</p>
          <h1 className="text-5xl font-extrabold tracking-[-.04em] sm:text-7xl md:text-8xl">
            Happy Birthday,<br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Katy</span> <span className="text-white">♥</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            To my sister by heart, this little corner of the internet is just for you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={onStart} className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5">
              Begin the experience <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </button>
            <a href="#profile" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white/75 transition hover:bg-white/10">
              Explore system <ChevronDown size={17} />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="mt-20 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.2em] text-white/25">
          <Cpu size={14} /> Personal build • no database • made with code
        </motion.div>
      </div>
    </section>
  );
}

function Profile() {
  const stats = [
    ["Kindness", "∞"], ["Energy", "100%"], ["Good Vibes", "100%"], ["Special Person Level", "MAX"]
  ];
  return (
    <section id="profile" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="01 / system profile" title="User profile" text="A completely scientific assessment. The methodology is questionable. The results are not." />
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-3xl p-6 sm:p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/25 to-blue-500/20 p-4"><Heart className="text-fuchsia-200" /></div>
            <div><p className="font-mono text-xs text-white/35">USER PROFILE</p><h3 className="text-xl font-bold">Katy</h3></div>
            <span className="ml-auto rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 font-mono text-[10px] text-emerald-300">LEGENDARY</span>
          </div>
          <div className="space-y-6">
            {stats.map(([label, value], i) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm"><span className="text-white/55">{label}</span><span className="font-mono text-white/80">{value}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: i === 0 ? "100%" : "100%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * .15 }}
                    className="progress-shine h-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-5">
          {[
            ["∞", "Laughs generated", Sparkles],
            ["∞", "Bad days fixed", Heart],
            ["100%", "Good memories", Trophy],
            ["ON", "Favorite person", Wifi]
          ].map(([value, label, Icon], i) => (
            <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} transition={{ delay: i * .08 }}
              className="glass rounded-3xl p-5 sm:p-6">
              <Icon size={18} className="mb-8 text-fuchsia-300/80" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="mt-1 text-xs leading-5 text-white/40">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quest() {
  const levels = [
    {
      q: "What happens when Katy enters the room?",
      options: ["Everything becomes more fun", "The Wi-Fi gets faster", "The computer crashes"],
      answer: 0
    },
    {
      q: "Select Katy's official status.",
      options: ["Normal human", "Legendary sister", "System administrator of everyone's happiness"],
      answer: 1
    },
    {
      q: "Final question: what is Katy's birthday?",
      options: ["28 August", "Some random Tuesday", "Every day, obviously"],
      answer: 0
    }
  ];
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [selected, setSelected] = useState(null);
  const [complete, setComplete] = useState(false);

  const choose = (i) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => {
      if (i === levels[level].answer) {
        if (level === levels.length - 1) setComplete(true);
        else { setLevel(level + 1); setSelected(null); }
      } else setSelected(null);
    }, 650);
  };

  const reset = () => { setStarted(false); setLevel(0); setSelected(null); setComplete(false); };

  return (
    <section id="quest" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="02 / interactive protocol" title="Mission: make Katy smile" text="Three levels. Zero pressure. One very obvious winner." />
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass glow-border overflow-hidden rounded-3xl">
        {!started ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 rounded-2xl bg-fuchsia-500/10 p-4"><Zap className="text-fuchsia-300" /></div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-white/35">MISSION PROTOCOL</p>
            <h3 className="mt-3 text-3xl font-bold">Ready to begin?</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/45">Answer a few highly rigorous questions about the most important system user.</p>
            <button onClick={() => setStarted(true)} className="mt-8 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black">START MISSION</button>
          </div>
        ) : complete ? (
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[360px] flex-col items-center justify-center p-8 text-center">
            <div className="mb-5 rounded-full border border-emerald-300/25 bg-emerald-300/10 p-4"><Trophy className="text-emerald-300" /></div>
            <p className="font-mono text-xs text-emerald-300">MISSION COMPLETE ✓</p>
            <h3 className="mt-3 text-3xl font-bold">Level ∞ unlocked</h3>
            <p className="mt-3 text-white/55">MOST SPECIAL SISTER</p>
            <button onClick={() => document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10">
              UNLOCK THE SURPRISE <LockKeyhole size={16} />
            </button>
            <button onClick={reset} className="mt-4 flex items-center gap-2 text-xs text-white/35 hover:text-white/70"><RotateCcw size={13} /> Replay mission</button>
          </motion.div>
        ) : (
          <div className="min-h-[360px] p-6 sm:p-10">
            <div className="mb-10 flex items-center justify-between font-mono text-[11px] text-white/35">
              <span>LEVEL {String(level + 1).padStart(2, "0")}</span><span>{level + 1} / {levels.length}</span>
            </div>
            <h3 className="max-w-3xl text-2xl font-bold sm:text-3xl">{levels[level].q}</h3>
            <div className="mt-8 grid gap-3">
              {levels[level].options.map((option, i) => {
                const isSelected = selected === i;
                const correct = i === levels[level].answer;
                return (
                  <button key={option} onClick={() => choose(i)}
                    className={`flex items-center justify-between rounded-2xl border p-4 text-left text-sm transition ${
                      isSelected && correct ? "border-emerald-300/40 bg-emerald-300/10" :
                      isSelected ? "border-rose-300/40 bg-rose-300/10" :
                      "border-white/10 bg-white/[.03] hover:border-fuchsia-300/30 hover:bg-fuchsia-300/5"
                    }`}>
                    <span>{option}</span>{isSelected && <Check size={17} />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function Analytics() {
  const bars = [30, 39, 45, 52, 60, 66, 73, 82, 90, 99];
  return (
    <section id="analytics" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="03 / telemetry" title="Katy analytics — 2026 report" text="Real-time metrics from a totally legitimate and definitely peer-reviewed happiness engine." />
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["99.99%", "Happiness generated"],
          ["∞", "Kindness level"],
          ["HIGH", "Fun detected"],
          ["LEGENDARY", "Sister level"],
          ["100%", "Smile probability"],
          ["∞", "Days making life better"]
        ].map(([v, l], i) => (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .05 }}
            key={l} className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-white/35">{l}</p>
            <p className="mt-3 text-2xl font-bold bg-gradient-to-r from-fuchsia-200 to-blue-200 bg-clip-text text-transparent">{v}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div><p className="font-mono text-xs text-white/35">IMPACT / LIFETIME</p><h3 className="mt-1 text-lg font-semibold">Impact on My Life</h3></div>
            <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">TREND ↑</span>
          </div>
          <div className="mt-10 flex h-52 items-end gap-2 sm:gap-3">
            {bars.map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: .8, delay: i * .07 }}
                className="progress-shine min-w-0 flex-1 rounded-t-lg opacity-80" />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[9px] text-white/25"><span>START</span><span>NOW</span></div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2 font-mono text-xs text-white/35"><Terminal size={14} /> LIVE LOG</div>
          <div className="mt-7 space-y-4 font-mono text-[11px] leading-5 text-white/55">
            {[
              "[INFO] Katy detected...",
              "[INFO] Happiness increased.",
              "[INFO] Smile detected.",
              "[INFO] Birthday mode activated.",
              "[STATUS] Everything is better with Katy around."
            ].map((x, i) => <motion.p key={x} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .25 }}>
              <span className="mr-2 text-fuchsia-300">›</span>{x}
            </motion.p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const message = `> Initializing birthday message...

Hey Katy,

I could have simply sent you a birthday message,
but that would have been way too ordinary.

So I built you a little corner of the internet.

Not because I had to,
but because you're not just anyone to me.

You're my sister,
one of the people who make life brighter,
and someone I am incredibly lucky to have.

I hope this new year brings you
beautiful moments, lots of laughter,
peace, success,
and everything you deserve.

Happy Birthday, Katy ❤️

Stay exactly who you are.

— Your favorite developer`;

function TerminalMessage() {
  const [started, setStarted] = useState(false);
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setShown(message.slice(0, i));
      if (i >= message.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <section id="terminal" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="04 / developer channel" title="A message from the developer" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-white/10 bg-[#07070b] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[.025] px-4 py-3">
          <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-white/20" /><i className="h-2.5 w-2.5 rounded-full bg-white/20" /><i className="h-2.5 w-2.5 rounded-full bg-white/20" /></div>
          <div className="font-mono text-[10px] text-white/25">birthday-message.sh</div>
          <Terminal size={14} className="text-white/25" />
        </div>
        <div className="min-h-[440px] p-5 font-mono text-xs leading-6 text-white/70 sm:p-8 sm:text-sm sm:leading-7">
          {!started ? (
            <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
              <Terminal className="mb-5 text-fuchsia-300/70" size={30} />
              <p className="text-white/50">A private developer channel is waiting.</p>
              <button onClick={() => setStarted(true)} className="mt-6 flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-sans text-xs font-semibold text-black">EXECUTE MESSAGE <Play size={14} /></button>
            </div>
          ) : (
            <pre className="whitespace-pre-wrap font-mono">{shown}<span className="cursor-blink">▋</span></pre>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function Final({ onReplay }) {
  const confetti = useMemo(() => Array.from({ length: 38 }, (_, i) => ({
    left: `${(i * 47) % 100}%`,
    delay: (i % 8) * .18,
    duration: 3 + (i % 4) * .6,
    rotate: i * 31
  })), []);
  return (
    <section id="final" className="relative z-10 flex min-h-[85vh] items-center justify-center overflow-hidden px-5 py-24">
      {confetti.map((c, i) => (
        <motion.span key={i} className="absolute top-0 h-2 w-1 rounded-full bg-fuchsia-300/70"
          style={{ left: c.left }} initial={{ y: -20, rotate: c.rotate, opacity: 0 }} whileInView={{ y: "90vh", opacity: [0, 1, 1, 0], rotate: c.rotate + 240 }}
          viewport={{ once: true }} transition={{ duration: c.duration, delay: c.delay, ease: "easeIn" }} />
      ))}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[.35em] text-fuchsia-300/60">SYSTEM MESSAGE</p>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">Today isn't just another day.</h2>
        <p className="mt-5 text-xl text-white/65 sm:text-2xl">It's <span className="text-fuchsia-300">KATY DAY.</span> 🎂</p>
        <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
        <p className="text-2xl font-semibold sm:text-3xl">Happy Birthday, my sister. <span className="text-pink-300">♥</span></p>
        <p className="mt-5 font-mono text-sm tracking-[.45em] text-white/35">28 • 08 • 2026</p>
        <button onClick={onReplay} className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75 transition hover:bg-white/10">
          <RotateCcw size={16} /> REPLAY THE EXPERIENCE
        </button>
      </motion.div>
    </section>
  );
}

function MusicButton({ audioRef }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label="Toggle birthday music"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}

function App() {
  const [booted, setBooted] = useState(false);
  const [secret, setSecret] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const audioRef = useRef(null);
  useEffect(() => {
    if (logoClicks >= 5) {
      setSecret(true);
      setLogoClicks(0);
    }
  }, [logoClicks]);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key.toLowerCase() === "k") window.__katyKeys = (window.__katyKeys || "") + "k";
      else if (e.key.toLowerCase() === "a") window.__katyKeys = (window.__katyKeys || "") + "a";
      else if (e.key.toLowerCase() === "t") window.__katyKeys = (window.__katyKeys || "") + "t";
      else if (e.key.toLowerCase() === "y") {
        window.__katyKeys = (window.__katyKeys || "") + "y";
        if (window.__katyKeys.endsWith("katy")) { setSecret(true); window.__katyKeys = ""; }
      } else window.__katyKeys = "";
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);

const enter = () => {
  // Start the birthday music after the user's ENTER click
  if (audioRef.current) {
    audioRef.current.volume = 0.65;

    audioRef.current
      .play()
      .then(() => {
        console.log("Birthday music started 🎵");
      })
      .catch((error) => {
        console.log("Music autoplay was blocked:", error);
      });
  }

  setBooted(true);

  setTimeout(() => {
    document
      .getElementById("top")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 80);
};

  const replay = () => {
    setBooted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08060f] text-white">
      <audio
  ref={audioRef}
  src="/music/birthday.mp3"
  loop
  preload="auto"
/>
      <Stars />
      <AnimatePresence mode="wait">
        {!booted && <BootScreen key="boot" onEnter={enter} />}
      </AnimatePresence>

      {booted && (
        <>
          <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-[#08060f]/65 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
              <button onClick={() => setLogoClicks(c => c + 1)} className="flex items-center gap-2 font-mono text-xs tracking-[.18em] text-white/70">
                <span className="rounded-md bg-white/10 p-1.5"><Code2 size={14} /></span>KATY OS
              </button>
              <div className="hidden items-center gap-5 font-mono text-[10px] text-white/30 sm:flex">
                <a href="#profile" className="hover:text-white/70">PROFILE</a>
                <a href="#quest" className="hover:text-white/70">QUEST</a>
                <a href="#analytics" className="hover:text-white/70">ANALYTICS</a>
                <a href="#terminal" className="hover:text-white/70">TERMINAL</a>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> ONLINE
              </div>
            </div>
          </header>

          <main>
            <Hero onStart={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })} />
            <Profile />
            <Quest />
            <Analytics />
            <TerminalMessage />
            <Final onReplay={replay} />
          </main>

          <footer className="relative z-10 border-t border-white/5 px-5 py-8 text-center font-mono text-[10px] tracking-[.15em] text-white/25">
            KATY OS • BIRTHDAY EDITION • BUILT WITH ♥ AND A LOT OF CODE
          </footer>

          <MusicButton audioRef={audioRef} />

          <AnimatePresence>
            {secret && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-md"
                onClick={() => setSecret(false)}>
                <motion.div initial={{ y: 25, scale: .96 }} animate={{ y: 0, scale: 1 }} onClick={e => e.stopPropagation()}
                  className="glass glow-border w-full max-w-lg rounded-3xl p-7 text-center sm:p-10">
                  <div className="mx-auto mb-5 w-fit rounded-2xl bg-fuchsia-500/10 p-4"><LockKeyhole className="text-fuchsia-300" /></div>
                  <p className="font-mono text-xs text-fuchsia-300">🔓 SECRET FEATURE UNLOCKED</p>
                  <h3 className="mt-4 text-2xl font-bold">You found the hidden message.</h3>
                  <p className="mt-5 text-sm leading-7 text-white/60">
                    If you're reading this, just know that you're very, very special to me. ♥
                    <br /><br />Happy Birthday, my sister.
                  </p>
                  <button onClick={() => setSecret(false)} className="mt-7 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">CLOSE SECRET</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;