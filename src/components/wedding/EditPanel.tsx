import { useState, type ChangeEvent } from "react";
import { Pencil, X, Upload } from "lucide-react";
import { toast } from "sonner";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useWeddingConfig, type WeddingConfig, type EventInfo, type FamilySide } from "@/lib/wedding-config";

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span
        className="mb-1 block text-xs uppercase tracking-[0.18em]"
        style={{ color: "#6B0F1A", fontFamily: "var(--font-serif-elegant)" }}
      >
        {label}
      </span>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-[#C9A84C]/60 bg-white/60 text-[#2C1810]"
      />
    </label>
  );
}

function PhotoUpload({
  label,
  value,
  onChange,
  circle = false,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  circle?: boolean;
}) {
  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onChange(url);
  };
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid h-16 w-16 shrink-0 place-items-center overflow-hidden bg-[#6B0F1A]/10 ${circle ? "rounded-full" : "rounded-md"}`}
        style={{ border: "1.5px solid #C9A84C" }}
      >
        {value ? (
          <img src={value} alt={label} className="h-full w-full object-cover" />
        ) : (
          <span style={{ color: "#6B0F1A", fontFamily: "var(--font-script)", fontSize: 24 }}>
            +
          </span>
        )}
      </div>
      <label className="flex-1">
        <span
          className="mb-1 block text-xs uppercase tracking-[0.18em]"
          style={{ color: "#6B0F1A", fontFamily: "var(--font-serif-elegant)" }}
        >
          {label}
        </span>
        <div
          className="flex h-9 cursor-pointer items-center gap-2 rounded-md border px-3 text-xs hover:bg-[#6B0F1A]/5"
          style={{ borderColor: "rgba(201,168,76,0.6)", color: "#6B0F1A" }}
        >
          <Upload className="h-3.5 w-3.5" />
          <span>Choose photo…</span>
          <input type="file" accept="image/*" className="hidden" onChange={onFile} />
        </div>
      </label>
    </div>
  );
}

function EventEditor({
  title,
  value,
  onChange,
}: {
  title: string;
  value: EventInfo;
  onChange: (next: EventInfo) => void;
}) {
  return (
    <div
      className="rounded-lg p-3"
      style={{ background: "rgba(107,15,26,0.05)", border: "1px solid rgba(201,168,76,0.4)" }}
    >
      <h4
        className="mb-2"
        style={{ color: "#6B0F1A", fontFamily: "var(--font-royal)", fontWeight: 700 }}
      >
        {title}
      </h4>
      <div className="grid grid-cols-2 gap-2">
        <Field label="Date" value={value.date} onChange={(v) => onChange({ ...value, date: v })} />
        <Field label="Time" value={value.time} onChange={(v) => onChange({ ...value, time: v })} />
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2">
        <Field label="Venue" value={value.venue} onChange={(v) => onChange({ ...value, venue: v })} />
        <Field
          label="Address"
          value={value.address ?? ""}
          onChange={(v) => onChange({ ...value, address: v })}
        />
      </div>
    </div>
  );
}

export function EditPanel() {
  const { config, setConfig } = useWeddingConfig();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<WeddingConfig>(config);

  const openPanel = () => {
    setDraft(config);
    setOpen(true);
  };
  const save = () => {
    setConfig(draft);
    setOpen(false);
    toast("✨ Invitation updated!", {
      style: {
        background: "#FDF6EC",
        color: "#6B0F1A",
        border: "1px solid #C9A84C",
        fontFamily: "var(--font-serif-elegant)",
      },
    });
  };

  const updFamily = (side: "bride" | "groom", key: keyof FamilySide, v: string) =>
    setDraft((d) => ({ ...d, family: { ...d.family, [side]: { ...d.family[side], [key]: v } } }));

  const updPhoto = (i: number, url: string) =>
    setDraft((d) => {
      const photos = [...d.photos];
      photos[i] = url;
      return { ...d, photos };
    });

  return (
    <>
      <button
        onClick={openPanel}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-2xl transition hover:scale-105 sm:bottom-6 sm:right-6"
        style={{
          background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
          color: "#6B0F1A",
          border: "1.5px solid #6B0F1A",
          fontFamily: "var(--font-serif-elegant)",
        }}
        aria-label="Edit invitation"
      >
        <Pencil className="h-4 w-4" />
        <span>Edit</span>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto p-0 sm:max-w-md"
          style={{ background: "#FDF6EC", borderLeft: "2px solid #C9A84C" }}
        >
          <div
            className="sticky top-0 z-10 flex items-center justify-between border-b px-5 py-4"
            style={{
              background: "#FDF6EC",
              borderColor: "rgba(201,168,76,0.5)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-royal)",
                color: "#6B0F1A",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              Customize Your Invitation
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full hover:bg-[#6B0F1A]/10"
              aria-label="Close"
              style={{ color: "#6B0F1A" }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-5 py-4 pb-28">
            <Tabs defaultValue="couple">
              <TabsList className="grid w-full grid-cols-4 bg-[#6B0F1A]/10">
                <TabsTrigger value="couple">Couple</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>

              <TabsContent value="couple" className="mt-4 space-y-4">
                <Field label="Bride Name" value={draft.brideName} onChange={(v) => setDraft({ ...draft, brideName: v })} />
                <Field label="Groom Name" value={draft.groomName} onChange={(v) => setDraft({ ...draft, groomName: v })} />
                <PhotoUpload label="Bride Photo" value={draft.bridePhoto} circle onChange={(url) => setDraft({ ...draft, bridePhoto: url })} />
                <PhotoUpload label="Groom Photo" value={draft.groomPhoto} circle onChange={(url) => setDraft({ ...draft, groomPhoto: url })} />
                <Field
                  label="Wedding Date"
                  type="date"
                  value={draft.weddingDateISO}
                  onChange={(v) => {
                    const formatted = v
                      ? new Date(v).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : draft.weddingDate;
                    setDraft({ ...draft, weddingDateISO: v, weddingDate: formatted });
                  }}
                />
                <Field label="Wedding Time" value={draft.weddingTime} onChange={(v) => setDraft({ ...draft, weddingTime: v })} />
                <Field label="Main Venue" value={draft.venue} onChange={(v) => setDraft({ ...draft, venue: v })} />
                <Field label="Venue Address" value={draft.venueAddress} onChange={(v) => setDraft({ ...draft, venueAddress: v })} />
              </TabsContent>

              <TabsContent value="events" className="mt-4 space-y-3">
                <EventEditor title="Mehendi" value={draft.mehendi} onChange={(v) => setDraft({ ...draft, mehendi: v })} />
                <EventEditor title="Haldi" value={draft.haldi} onChange={(v) => setDraft({ ...draft, haldi: v })} />
                <EventEditor title="Wedding" value={draft.wedding} onChange={(v) => setDraft({ ...draft, wedding: v })} />
                <EventEditor title="Reception" value={draft.reception} onChange={(v) => setDraft({ ...draft, reception: v })} />
              </TabsContent>

              <TabsContent value="family" className="mt-4 space-y-4">
                {(["bride", "groom"] as const).map((side) => (
                  <div key={side} className="space-y-3">
                    <h4
                      className="uppercase tracking-[0.2em]"
                      style={{
                        color: "#6B0F1A",
                        fontFamily: "var(--font-serif-elegant)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {side === "bride" ? "Bride's Family" : "Groom's Family"}
                    </h4>
                    {(["father", "mother", "brother", "sister"] as const).map((rel) => {
                      const photoKey = `${rel}Photo` as keyof FamilySide;
                      const photoVal = draft.family[side][photoKey] as string;
                      const name = draft.family[side][rel] as string;
                      const ini = name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((p) => p[0]?.toUpperCase())
                        .join("");
                      return (
                        <div
                          key={rel}
                          className="flex items-center gap-3 rounded-lg p-2"
                          style={{
                            background: "rgba(107,15,26,0.05)",
                            border: "1px solid rgba(201,168,76,0.35)",
                          }}
                        >
                          <label className="relative grid h-12 w-12 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full"
                            style={{ border: "2px solid #C9A84C", background: "linear-gradient(135deg, #F5E6A3, #C9A84C)" }}
                          >
                            {photoVal ? (
                              <img src={photoVal} alt={rel} className="h-full w-full object-cover" />
                            ) : (
                              <span style={{ color: "#6B0F1A", fontFamily: "var(--font-royal)", fontSize: 14, fontWeight: 700 }}>
                                {ini || "+"}
                              </span>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) updFamily(side, photoKey, URL.createObjectURL(f));
                              }}
                            />
                            <span className="absolute -bottom-0 -right-0 grid h-4 w-4 place-items-center rounded-full bg-[#6B0F1A] text-[8px] text-[#F5E6A3]">📷</span>
                          </label>
                          <div className="flex-1">
                            <Field
                              label={rel}
                              value={name}
                              onChange={(v) => updFamily(side, rel, v)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="photos" className="mt-4">
                <div className="grid grid-cols-3 gap-3">
                  {draft.photos.map((p, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1.5 rounded-md p-2"
                      style={{ background: "rgba(107,15,26,0.05)", border: "1px solid rgba(201,168,76,0.4)" }}
                    >
                      <div
                        className="grid aspect-square w-full place-items-center overflow-hidden rounded"
                        style={{ background: "#6B0F1A", border: "1px solid #C9A84C" }}
                      >
                        {p ? (
                          <img src={p} alt={`photo ${i + 1}`} className="h-full w-full object-cover" />
                        ) : (
                          <span style={{ color: "#F5E6A3", fontSize: 12 }}>Empty</span>
                        )}
                      </div>
                      <label
                        className="flex cursor-pointer items-center gap-1 text-[10px] uppercase tracking-widest"
                        style={{ color: "#6B0F1A", fontFamily: "var(--font-serif-elegant)" }}
                      >
                        <Upload className="h-3 w-3" />
                        Replace
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) updPhoto(i, URL.createObjectURL(f));
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div
            className="fixed bottom-0 right-0 w-full border-t px-5 py-4 sm:max-w-md"
            style={{ background: "#FDF6EC", borderColor: "rgba(201,168,76,0.5)" }}
          >
            <button
              onClick={save}
              className="w-full rounded-full py-3 text-sm font-semibold tracking-[0.2em] uppercase shadow-lg transition hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #6B0F1A, #8a1424)",
                color: "#F5E6A3",
                border: "1.5px solid #C9A84C",
                fontFamily: "var(--font-serif-elegant)",
              }}
            >
              Save &amp; Preview
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}