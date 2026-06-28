import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand, Camera, Frame, Download } from "lucide-react";
import { useWeddingConfig } from "@/lib/wedding-config";

const BURGUNDY = "#6B0F1A";
const GOLD = "#C9A84C";
const GOLD_LIGHT = "#F5E6A3";
const CREAM = "#FDF6EC";

const PAISLEY_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C9A84C' stroke-width='1' opacity='0.5'><circle cx='60' cy='60' r='28'/><path d='M60 32 C 80 40 80 80 60 88 C 40 80 40 40 60 32 Z'/><circle cx='60' cy='60' r='6'/></g></svg>\")";

function LotusDivider() {
  return (
    <svg width="120" height="22" viewBox="0 0 120 22" className="mx-auto">
      <line x1="0" y1="11" x2="44" y2="11" stroke={GOLD} strokeWidth="1" />
      <line x1="76" y1="11" x2="120" y2="11" stroke={GOLD} strokeWidth="1" />
      <path d="M60 4 C66 8 66 14 60 18 C54 14 54 8 60 4 Z" fill={GOLD} />
      <circle cx="60" cy="11" r="1.5" fill={BURGUNDY} />
    </svg>
  );
}

function CameraIcon() {
  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 0.85, 1] }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3 }}
      className="mx-auto"
    >
      <rect x="3" y="9" width="30" height="20" rx="3" fill="none" stroke={GOLD} strokeWidth="1.8" />
      <rect x="13" y="5" width="10" height="6" rx="1.5" fill="none" stroke={GOLD} strokeWidth="1.8" />
      <circle cx="18" cy="19" r="6" fill="none" stroke={GOLD} strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.5" fill={GOLD} />
      <circle cx="28" cy="14" r="1.2" fill={GOLD} />
    </motion.svg>
  );
}

function FilmStrip({ photos, onOpen }: { photos: string[]; onOpen: (i: number) => void }) {
  const loop = [...photos, ...photos];
  return (
    <div
      className="relative my-8 overflow-hidden rounded-md"
      style={{ background: "#2C1810", border: `1px solid ${GOLD}40` }}
    >
      {/* sprocket holes */}
      <div className="flex justify-between px-2 py-1">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`t${i}`} className="block h-2 w-2 rounded-full" style={{ background: GOLD }} />
        ))}
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-3 px-3 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {loop.map((src, i) => (
            <button
              key={i}
              onClick={() => onOpen(i % photos.length)}
              className="relative shrink-0 overflow-hidden rounded"
              style={{
                width: "var(--strip-w, 120px)",
                aspectRatio: "16/9",
                border: `1px solid ${GOLD}80`,
              }}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-between px-2 py-1">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`b${i}`} className="block h-2 w-2 rounded-full" style={{ background: GOLD }} />
        ))}
      </div>
      <style>{`@media (max-width: 640px){ .film-strip-mobile{--strip-w:90px;} }`}</style>
    </div>
  );
}

function PhotoCard({
  src,
  index,
  height,
  onOpen,
}: {
  src: string;
  index: number;
  height: number;
  onOpen: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => onOpen(index)}
      className="group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-xl"
      style={{ height, breakInside: "avoid", border: `1px solid ${GOLD}50` }}
    >
      <img
        src={src}
        loading="lazy"
        alt={`Memory ${index + 1}`}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />
      <div
        className="pointer-events-none absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0"
        style={{ background: "rgba(107,15,26,0.5)" }}
      >
        <div className="absolute right-3 top-3" style={{ color: GOLD_LIGHT }}>
          <Frame size={20} />
        </div>
        <div className="grid h-full place-items-center">
          <Expand size={40} color={GOLD_LIGHT} className="scale-0 transition-transform duration-300 group-hover:scale-100" />
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const next = useCallback(() => onIndex((index + 1) % photos.length), [index, photos.length, onIndex]);
  const prev = useCallback(() => onIndex((index - 1 + photos.length) % photos.length), [index, photos.length, onIndex]);
  const [dir, setDir] = useState(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") { setDir(1); next(); }
      else if (e.key === "ArrowLeft") { setDir(-1); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); setDir(-1); prev(); }}
        aria-label="Previous"
        className="fixed left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full sm:left-4 sm:h-12 sm:w-12"
        style={{ background: GOLD, color: BURGUNDY }}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setDir(1); next(); }}
        aria-label="Next"
        className="fixed right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full sm:right-4 sm:h-12 sm:w-12"
        style={{ background: GOLD, color: BURGUNDY }}
      >
        <ChevronRight />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="fixed right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full text-[#2C1810] sm:h-12 sm:w-12"
        style={{ background: "rgba(255,255,255,0.85)" }}
      >
        <X />
      </button>

      <div
        className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -50) { setDir(1); next(); }
          else if (dx > 50) { setDir(-1); prev(); }
          touchX.current = null;
        }}
      >
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.img
            key={index}
            src={photos[index]}
            alt={`Photo ${index + 1}`}
            custom={dir}
            initial={(d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 })}
            animate={{ x: 0, opacity: 1 }}
            exit={(d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 })}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            style={{ border: `2px solid ${GOLD}66` }}
          />
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div
        className="fixed bottom-24 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1 text-xs tracking-[0.2em]"
        style={{
          background: "rgba(0,0,0,0.55)",
          color: GOLD_LIGHT,
          fontFamily: "var(--font-royal)",
          border: `1px solid ${GOLD}55`,
        }}
      >
        {index + 1} / {photos.length}
      </div>

      {/* Thumbs */}
      <div
        className="fixed bottom-3 left-1/2 z-10 flex max-w-[96vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-lg px-2 py-2"
        style={{ background: "rgba(0,0,0,0.45)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > index ? 1 : -1); onIndex(i); }}
            className="shrink-0 overflow-hidden rounded"
            style={{
              width: 60,
              height: 45,
              border: i === index ? `2px solid ${GOLD}` : `1px solid ${GOLD}40`,
            }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function PhotoBooth({ photo, bride, groom, date }: { photo: string; bride: string; groom: string; date: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const download = async () => {
    if (!frameRef.current) return;
    setDownloading(true);
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(frameRef.current, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = "wedding-memory.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mt-16 text-center">
      <h3
        style={{
          fontFamily: "var(--font-royal)",
          color: BURGUNDY,
          fontSize: "1.4rem",
          fontWeight: 700,
        }}
      >
        📸 Strike a Pose!
      </h3>
      <p
        className="mt-1"
        style={{ fontFamily: "var(--font-serif-elegant)", fontStyle: "italic", color: GOLD }}
      >
        Download your favorite with our wedding frame
      </p>

      <div className="mx-auto mt-6 flex flex-col items-center gap-5">
        <div
          ref={frameRef}
          className="relative w-[92vw] max-w-md overflow-hidden rounded-xl p-3"
          style={{
            background: `linear-gradient(135deg, ${BURGUNDY}, #4a0a13)`,
            border: `3px double ${GOLD}`,
            boxShadow: `0 0 0 6px ${CREAM}, 0 0 0 8px ${GOLD}`,
          }}
        >
          {/* Arch */}
          <div
            className="rounded-t-[120px] rounded-b-md p-3"
            style={{ background: `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD})` }}
          >
            <div
              className="px-4 pt-2 pb-3 text-center"
              style={{
                fontFamily: "var(--font-script, 'Great Vibes', cursive)",
                color: BURGUNDY,
                fontSize: "1.4rem",
                lineHeight: 1.1,
              }}
            >
              {groom} <span style={{ fontFamily: "var(--font-royal)" }}>&</span> {bride}
            </div>
            <div className="overflow-hidden rounded-md" style={{ border: `2px solid ${BURGUNDY}` }}>
              <img src={photo} alt="frame" crossOrigin="anonymous" className="block h-64 w-full object-cover sm:h-80" />
            </div>
            <div
              className="mt-2 text-center uppercase tracking-[0.25em]"
              style={{
                fontFamily: "var(--font-royal)",
                color: BURGUNDY,
                fontSize: "0.7rem",
              }}
            >
              {date}
            </div>
          </div>
          {/* corners */}
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <span
              key={c}
              className="absolute h-5 w-5"
              style={{
                top: c.startsWith("t") ? 6 : "auto",
                bottom: c.startsWith("b") ? 6 : "auto",
                left: c.endsWith("l") ? 6 : "auto",
                right: c.endsWith("r") ? 6 : "auto",
                border: `2px solid ${GOLD}`,
                borderRadius: 4,
              }}
            />
          ))}
        </div>

        <button
          onClick={download}
          disabled={downloading}
          className="group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] shadow-lg transition hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
            color: BURGUNDY,
            fontFamily: "var(--font-royal)",
            border: `1.5px solid ${BURGUNDY}`,
          }}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            {downloading ? "Preparing…" : "Download Frame"}
          </span>
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </button>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const { config } = useWeddingConfig();
  const photos = config.photos.filter(Boolean);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const open = (i: number) => setLightboxIdx(i);
  const close = () => setLightboxIdx(null);

  const featured = photos[0];
  const rest = photos.slice(1);

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:px-10 md:py-[120px]"
      style={{ background: CREAM }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: PAISLEY_BG, backgroundSize: "120px 120px", opacity: 0.08 }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
          className="text-center"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <CameraIcon />
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mt-3"
            style={{
              fontFamily: "var(--font-royal)",
              color: BURGUNDY,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            Captured Moments
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mt-2"
            style={{
              fontFamily: "var(--font-serif-elegant)",
              fontStyle: "italic",
              color: GOLD,
              fontSize: "1.1rem",
            }}
          >
            Every picture tells our love story
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-3">
            <LotusDivider />
          </motion.div>
        </motion.div>

        {/* Film strip */}
        <div className="film-strip-mobile">
          <FilmStrip photos={photos} onOpen={open} />
        </div>

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-10 mt-2 max-w-4xl"
          >
            <div
              className="cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => open(0)}
              style={{
                outline: `3px solid ${GOLD}`,
                outlineOffset: "6px",
                border: `1px solid ${GOLD}80`,
              }}
            >
              <img
                src={featured}
                alt="Our Story Begins"
                loading="lazy"
                className="block h-[280px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-center"
              style={{
                fontFamily: "var(--font-serif-elegant)",
                fontStyle: "italic",
                color: BURGUNDY,
                fontSize: "1.1rem",
              }}
            >
              ❝ Our Story Begins ❞
            </motion.p>
          </motion.div>
        )}

        {/* Masonry */}
        <div className="hidden md:block">
          <div style={{ columnCount: 3, columnGap: 16 }}>
            {rest.map((src, i) => (
              <PhotoCard
                key={i}
                src={src}
                index={i + 1}
                height={i % 2 === 0 ? 380 : 260}
                onOpen={open}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {rest.map((src, i) => (
            <PhotoCard
              key={i}
              src={src}
              index={i + 1}
              height={window.innerWidth >= 480 ? 240 : 200}
              onOpen={open}
            />
          ))}
        </div>

        {/* Photo booth */}
        <PhotoBooth
          photo={featured || ""}
          bride={config.brideName}
          groom={config.groomName}
          date={config.weddingDate}
        />
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIdx}
            onIndex={setLightboxIdx}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  );
}