import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Upload,
  Save,
  Eye,
  LogOut,
  Loader2,
  ArrowLeft,
  CheckCircle2,
  Camera,
} from "lucide-react";
import { OmLogo } from "@/components/wedding/OmLogo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  fetchWeddingConfig,
  saveWeddingConfig,
  uploadPhoto,
  defaultWeddingConfig,
  type WeddingConfig,
  type EventInfo,
  type FamilySide,
} from "@/lib/wedding-config";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const EDIT_PASSWORD = "Raju@40045005";
const AUTH_SESSION_KEY = "wedi_admin_v1";

// ─────────────────────────────────────────────────────────────
// Route definition
// ─────────────────────────────────────────────────────────────

export const Route = createFileRoute("/edit")({
  head: () => ({
    meta: [
      { title: "Invitation Admin — Edit" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EditPage,
});

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────

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
        className="mb-1 block text-xs uppercase tracking-widest"
        style={{ color: "#C9A84C", fontFamily: "var(--font-serif-elegant)" }}
      >
        {label}
      </span>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-[#C9A84C]/30 bg-white/[0.07] text-[#F5E6A3] placeholder:text-white/20 focus:border-[#C9A84C] focus:bg-white/10"
      />
    </label>
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
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "rgba(201,168,76,0.05)",
        border: "1px solid rgba(201,168,76,0.22)",
      }}
    >
      <h4
        className="text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
      >
        {title}
      </h4>
      <div className="grid grid-cols-2 gap-3">
        <Field
          label="Date"
          value={value.date}
          onChange={(v) => onChange({ ...value, date: v })}
        />
        <Field
          label="Time"
          value={value.time}
          onChange={(v) => onChange({ ...value, time: v })}
        />
      </div>
      <Field
        label="Venue"
        value={value.venue}
        onChange={(v) => onChange({ ...value, venue: v })}
      />
      <Field
        label="Address"
        value={value.address ?? ""}
        onChange={(v) => onChange({ ...value, address: v })}
      />
    </div>
  );
}

function PhotoField({
  label,
  value,
  uploading = false,
  onFile,
  circle = false,
}: {
  label: string;
  value: string;
  uploading?: boolean;
  onFile: (file: File) => void;
  circle?: boolean;
}) {
  return (
    <div className="space-y-2">
      <span
        className="block text-xs uppercase tracking-widest"
        style={{ color: "#C9A84C", fontFamily: "var(--font-serif-elegant)" }}
      >
        {label}
      </span>
      <label
        className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white/5"
        style={{
          background: "rgba(201,168,76,0.05)",
          border: uploading
            ? "1.5px solid #C9A84C"
            : "1px solid rgba(201,168,76,0.22)",
        }}
      >
        {/* Preview */}
        <div
          className={`relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden transition-all ${circle ? "rounded-full" : "rounded-xl"}`}
          style={{
            border: "2px solid rgba(201,168,76,0.4)",
            background: "rgba(107,15,26,0.3)",
          }}
        >
          {uploading ? (
            <Loader2
              className="h-6 w-6 animate-spin"
              style={{ color: "#C9A84C" }}
            />
          ) : value ? (
            <img
              src={value}
              alt={label}
              className="h-full w-full object-cover"
            />
          ) : (
            <span style={{ color: "#C9A84C", fontSize: 22 }}>+</span>
          )}
          {/* Success tick overlay */}
          {!uploading && value && (
            <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600">
              <CheckCircle2 className="h-3.5 w-3.5 text-white" />
            </span>
          )}
        </div>

        {/* Button */}
        <div>
          <div
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition hover:opacity-80"
            style={{
              background: "rgba(201,168,76,0.12)",
              color: "#F5E6A3",
              fontFamily: "var(--font-serif-elegant)",
            }}
          >
            <Upload className="h-4 w-4" />
            <span>{uploading ? "Uploading…" : "Choose Photo"}</span>
          </div>
          <p
            className="mt-1 text-[11px]"
            style={{
              color: "rgba(245,230,163,0.35)",
              fontFamily: "var(--font-serif-elegant)",
            }}
          >
            JPG, PNG, WebP — max 50 MB
          </p>
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
            // reset so same file can be re-selected
            e.target.value = "";
          }}
        />
      </label>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Password Gate
// ─────────────────────────────────────────────────────────────

function PasswordGate({
  onLogin,
  password,
  setPassword,
  error,
}: {
  onLogin: (e: React.FormEvent) => void;
  password: string;
  setPassword: (v: string) => void;
  error: boolean;
}) {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #1a0a05 0%, #2C1810 50%, #1a0a05 100%)",
      }}
    >
      {/* Decorative background glow */}
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-sm"
      >
        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1.5px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "3.5rem", color: "#C9A84C", lineHeight: 1 }}
            >
              <OmLogo />
            </motion.div>
            <h1
              className="mt-4 text-lg"
              style={{
                fontFamily: "var(--font-royal)",
                color: "#F5E6A3",
                letterSpacing: "0.08em",
              }}
            >
              Invitation Admin
            </h1>
            <p
              className="mt-1.5 text-sm"
              style={{
                color: "rgba(245,230,163,0.5)",
                fontFamily: "var(--font-serif-elegant)",
              }}
            >
              Enter your password to manage the invitation
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: `1.5px solid ${error ? "#f87171" : "rgba(201,168,76,0.35)"}`,
                  color: "#F5E6A3",
                  fontFamily: "var(--font-serif-elegant)",
                }}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs"
                  style={{ color: "#f87171" }}
                >
                  Incorrect password. Please try again.
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
                color: "#6B0F1A",
                border: "1.5px solid #6B0F1A",
                fontFamily: "var(--font-serif-elegant)",
                boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
              }}
            >
              Enter
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="mt-5 text-center">
          <Link
            to="/"
            className="text-xs transition-opacity hover:opacity-80"
            style={{
              color: "rgba(201,168,76,0.45)",
              fontFamily: "var(--font-serif-elegant)",
            }}
          >
            ← Back to Invitation
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Admin Loading State
// ─────────────────────────────────────────────────────────────

function AdminLoadingState() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #1a0a05, #2C1810, #1a0a05)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "3rem", color: "#C9A84C" }}
      >
        ✦
      </motion.div>
      <p
        className="mt-4 text-sm"
        style={{
          color: "rgba(201,168,76,0.65)",
          fontFamily: "var(--font-serif-elegant)",
        }}
      >
        Loading invitation data…
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────────────────────

function EditPage() {
  // Auth state persisted for the browser session
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(AUTH_SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [draft, setDraft] = useState<WeddingConfig>(defaultWeddingConfig);
  // Map of fieldKey → true while Supabase Storage upload is in progress
  const [uploading, setUploading] = useState<Record<string, boolean>>({});

  // Fetch current config from Supabase after successful login
  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    fetchWeddingConfig()
      .then((cfg) => setDraft(cfg))
      .catch(() =>
        toast.error("Could not load config. Showing defaults.")
      )
      .finally(() => setLoading(false));
  }, [authenticated]);

  // ── Auth ─────────────────────────────────────────────────
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === EDIT_PASSWORD) {
      try {
        sessionStorage.setItem(AUTH_SESSION_KEY, "1");
      } catch {
        // private browsing — ignore
      }
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } catch {}
    setAuthenticated(false);
    setPasswordInput("");
  };

  // ── Photo Upload ─────────────────────────────────────────
  /**
   * Upload a file to Supabase Storage immediately on select.
   * Shows a blob URL preview while uploading, then replaces with permanent URL.
   */
  const handlePhotoFile = async (
    fieldKey: string,
    file: File,
    setter: (url: string) => void
  ) => {
    // Instant local preview
    setter(URL.createObjectURL(file));
    setUploading((u) => ({ ...u, [fieldKey]: true }));
    try {
      const permanentUrl = await uploadPhoto(file, fieldKey);
      setter(permanentUrl);
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Photo upload failed. Please try again.");
      setter(""); // clear broken preview
    } finally {
      setUploading((u) => ({ ...u, [fieldKey]: false }));
    }
  };

  // ── Save ─────────────────────────────────────────────────
  const handleSave = async () => {
    const anyStillUploading = Object.values(uploading).some(Boolean);
    if (anyStillUploading) {
      toast("Please wait for photos to finish uploading first.");
      return;
    }
    setSaving(true);
    try {
      await saveWeddingConfig(draft);
      toast("Invitation saved successfully!", {
        style: {
          background: "#FDF6EC",
          color: "#6B0F1A",
          border: "1px solid #C9A84C",
          fontFamily: "var(--font-serif-elegant)",
        },
      });
    } catch {
      toast.error("Failed to save. Check your internet connection.");
    } finally {
      setSaving(false);
    }
  };

  // ── Guards ────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <PasswordGate
        onLogin={handleLogin}
        password={passwordInput}
        setPassword={(v) => {
          setPasswordInput(v);
          setPasswordError(false);
        }}
        error={passwordError}
      />
    );
  }

  if (loading) return <AdminLoadingState />;

  const anyUploading = Object.values(uploading).some(Boolean);

  // ── Render ────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #1a0a05 0%, #2C1810 45%, #150805 100%)",
      }}
    >
      {/* ── Sticky Header ── */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(18,7,3,0.93)",
          borderColor: "rgba(201,168,76,0.22)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "#C9A84C", fontFamily: "var(--font-serif-elegant)" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              View Invitation
            </Link>
            <span style={{ color: "rgba(201,168,76,0.25)" }}>|</span>
            <h1
              style={{
                fontFamily: "var(--font-royal)",
                color: "#F5E6A3",
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
              }}
            >
              Invitation Admin
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {anyUploading && (
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{
                  color: "#C9A84C",
                  fontFamily: "var(--font-serif-elegant)",
                }}
              >
                <Loader2 className="h-3 w-3 animate-spin" />
                Uploading photos…
              </span>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
              style={{
                color: "rgba(201,168,76,0.5)",
                fontFamily: "var(--font-serif-elegant)",
              }}
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
            <button
              onClick={handleSave}
              disabled={saving || anyUploading}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
                color: "#6B0F1A",
                border: "1.5px solid #6B0F1A",
                fontFamily: "var(--font-serif-elegant)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.25)",
              }}
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Page Title ── */}
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-script)",
            color: "#C9A84C",
            fontSize: "2.8rem",
            lineHeight: 1.1,
          }}
        >
          Customize Your Invitation
        </h2>
        <p
          className="mt-2 text-sm"
          style={{
            color: "rgba(245,230,163,0.45)",
            fontFamily: "var(--font-serif-elegant)",
          }}
        >
          Changes are saved to Supabase and reflected live on the invitation
        </p>
        {/* Decorative divider */}
        <div className="mx-auto mt-4 flex items-center gap-3" style={{ width: "fit-content" }}>
          <div className="h-px w-16" style={{ background: "rgba(201,168,76,0.3)" }} />
          <span style={{ color: "#C9A84C", fontSize: "0.7rem" }}>✦</span>
          <div className="h-px w-16" style={{ background: "rgba(201,168,76,0.3)" }} />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-5xl px-6 pb-28">
        <Tabs defaultValue="couple" className="w-full">
          {/* Tab bar */}
          <TabsList
            className="mb-8 grid w-full grid-cols-4"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "1rem",
              height: "auto",
              padding: "0.25rem",
            }}
          >
            {(
              [
                { value: "couple", label: "Couple" },
                { value: "events", label: "Events" },
                { value: "family", label: "Family" },
                { value: "photos", label: "Gallery" },
              ] as const
            ).map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-xl py-2 text-xs uppercase tracking-widest transition-all duration-200 data-[state=active]:shadow-md"
                style={{
                  fontFamily: "var(--font-serif-elegant)",
                  color: "#F5E6A3",
                }}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ════════ COUPLE TAB ════════ */}
          <TabsContent value="couple" className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Bride Card */}
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.22)",
                }}
              >
                <h3
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
                >
                  Bride
                </h3>
                <Field
                  label="Bride Name"
                  value={draft.brideName}
                  onChange={(v) => setDraft({ ...draft, brideName: v })}
                />
                <PhotoField
                  label="Bride Photo"
                  value={draft.bridePhoto}
                  uploading={uploading["bride-photo"]}
                  onFile={(f) =>
                    handlePhotoFile("bride-photo", f, (url) =>
                      setDraft((d) => ({ ...d, bridePhoto: url }))
                    )
                  }
                  circle
                />
              </div>

              {/* Groom Card */}
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.22)",
                }}
              >
                <h3
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
                >
                  Groom
                </h3>
                <Field
                  label="Groom Name"
                  value={draft.groomName}
                  onChange={(v) => setDraft({ ...draft, groomName: v })}
                />
                <PhotoField
                  label="Groom Photo"
                  value={draft.groomPhoto}
                  uploading={uploading["groom-photo"]}
                  onFile={(f) =>
                    handlePhotoFile("groom-photo", f, (url) =>
                      setDraft((d) => ({ ...d, groomPhoto: url }))
                    )
                  }
                  circle
                />
              </div>
            </div>

            {/* Wedding Details Card */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.22)",
              }}
            >
              <h3
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
              >
                Wedding Details
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
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
                <Field
                  label="Wedding Time"
                  value={draft.weddingTime}
                  onChange={(v) => setDraft({ ...draft, weddingTime: v })}
                />
                <Field
                  label="Main Venue"
                  value={draft.venue}
                  onChange={(v) => setDraft({ ...draft, venue: v })}
                />
                <Field
                  label="Venue Address"
                  value={draft.venueAddress}
                  onChange={(v) => setDraft({ ...draft, venueAddress: v })}
                />
              </div>
            </div>
          </TabsContent>

          {/* ════════ EVENTS TAB ════════ */}
          <TabsContent value="events">
            <div className="grid gap-5 sm:grid-cols-2">
              <EventEditor
                title="Mehendi"
                value={draft.mehendi}
                onChange={(v) => setDraft({ ...draft, mehendi: v })}
              />
              <EventEditor
                title="Haldi"
                value={draft.haldi}
                onChange={(v) => setDraft({ ...draft, haldi: v })}
              />
              <EventEditor
                title="Wedding"
                value={draft.wedding}
                onChange={(v) => setDraft({ ...draft, wedding: v })}
              />
              <EventEditor
                title="Reception"
                value={draft.reception}
                onChange={(v) => setDraft({ ...draft, reception: v })}
              />
            </div>
          </TabsContent>

          {/* ════════ FAMILY TAB ════════ */}
          <TabsContent value="family">
            <div className="grid gap-5 md:grid-cols-2">
              {(["bride", "groom"] as const).map((side) => (
                <div
                  key={side}
                  className="rounded-2xl p-6 space-y-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.22)",
                  }}
                >
                  <h3
                    className="text-xs uppercase tracking-[0.2em]"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
                  >
                    {side === "bride" ? "Bride's Family" : "Groom's Family"}
                  </h3>

                  {(["father", "mother", "brother", "sister"] as const).map(
                    (rel) => {
                      const photoKey = `${rel}Photo` as keyof FamilySide;
                      const fieldKey = `family-${side}-${rel}`;
                      const name = draft.family[side][rel] as string;
                      const photo = draft.family[side][photoKey] as string;

                      return (
                        <div
                          key={rel}
                          className="flex items-center gap-3 rounded-xl p-3"
                          style={{
                            background: "rgba(201,168,76,0.04)",
                            border: "1px solid rgba(201,168,76,0.18)",
                          }}
                        >
                          {/* Photo circle */}
                          <label
                            className="relative grid h-12 w-12 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full transition hover:opacity-80"
                            style={{
                              border: "2px solid rgba(201,168,76,0.45)",
                              background:
                                "linear-gradient(135deg, rgba(107,15,26,0.5), rgba(44,24,16,0.5))",
                            }}
                          >
                            {uploading[fieldKey] ? (
                              <Loader2
                                className="h-4 w-4 animate-spin"
                                style={{ color: "#C9A84C" }}
                              />
                            ) : photo ? (
                              <img
                                src={photo}
                                alt={rel}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span
                                className="text-xs font-bold"
                                style={{ color: "#C9A84C" }}
                              >
                                {name
                                  .split(" ")
                                  .filter(Boolean)
                                  .slice(0, 2)
                                  .map((p) => p[0])
                                  .join("") || "+"}
                              </span>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f)
                                  handlePhotoFile(fieldKey, f, (url) =>
                                    setDraft((d) => ({
                                      ...d,
                                      family: {
                                        ...d.family,
                                        [side]: {
                                          ...d.family[side],
                                          [photoKey]: url,
                                        },
                                      },
                                    }))
                                  );
                                e.currentTarget.value = "";
                              }}
                            />
                            {/* Camera badge */}
                            <span
                              className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full"
                              style={{
                                background: "#6B0F1A",
                                color: "#F5E6A3",
                              }}
                            >
                              <Camera className="h-2 w-2" />
                            </span>
                          </label>

                          {/* Name field */}
                          <div className="flex-1">
                            <Field
                              label={rel}
                              value={name}
                              onChange={(v) =>
                                setDraft((d) => ({
                                  ...d,
                                  family: {
                                    ...d.family,
                                    [side]: { ...d.family[side], [rel]: v },
                                  },
                                }))
                              }
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* ════════ GALLERY TAB ════════ */}
          <TabsContent value="photos">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.22)",
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-royal)" }}
                >
                  Photo Gallery
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    setDraft({ ...draft, photos: [...defaultWeddingConfig.photos] })
                  }
                  className="text-xs underline transition-opacity hover:opacity-70"
                  style={{
                    color: "rgba(201,168,76,0.45)",
                    fontFamily: "var(--font-serif-elegant)",
                  }}
                >
                  Reset to defaults
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {draft.photos.map((p, i) => {
                  const fk = `gallery-${i}`;
                  return (
                    <label
                      key={i}
                      className="group relative cursor-pointer overflow-hidden rounded-xl transition-all hover:opacity-90"
                      style={{
                        aspectRatio: "1",
                        border: uploading[fk]
                          ? "2px solid #C9A84C"
                          : "1.5px solid rgba(201,168,76,0.25)",
                        background: "rgba(107,15,26,0.25)",
                      }}
                    >
                      {/* Existing photo */}
                      {p && (
                        <img
                          src={p}
                          alt={`Photo ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      )}

                      {/* Hover / empty overlay */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-200 ${
                          p
                            ? "bg-black/55 opacity-0 group-hover:opacity-100"
                            : "opacity-100"
                        }`}
                      >
                        {uploading[fk] ? (
                          <Loader2
                            className="h-7 w-7 animate-spin"
                            style={{ color: "#C9A84C" }}
                          />
                        ) : (
                          <>
                            <Upload
                              className="h-6 w-6"
                              style={{ color: "#F5E6A3" }}
                            />
                            <span
                              className="text-xs"
                              style={{
                                color: "#F5E6A3",
                                fontFamily: "var(--font-serif-elegant)",
                              }}
                            >
                              {p ? "Replace" : `Photo ${i + 1}`}
                            </span>
                          </>
                        )}
                      </div>

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f)
                            handlePhotoFile(fk, f, (url) =>
                              setDraft((d) => {
                                const photos = [...d.photos];
                                photos[i] = url;
                                return { ...d, photos };
                              })
                            );
                          e.currentTarget.value = "";
                        }}
                      />
                    </label>
                  );
                })}
              </div>

              <p
                className="mt-4 text-center text-xs"
                style={{
                  color: "rgba(245,230,163,0.3)",
                  fontFamily: "var(--font-serif-elegant)",
                }}
              >
                Click any photo to replace it. Photos are uploaded to Supabase
                Storage immediately.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* ── Bottom Action Bar ── */}
        <div
          className="mt-8 flex items-center justify-between rounded-2xl px-6 py-5"
          style={{
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
            style={{ color: "#C9A84C", fontFamily: "var(--font-serif-elegant)" }}
          >
            <Eye className="h-4 w-4" />
            Preview Live Invitation
          </Link>

          <button
            onClick={handleSave}
            disabled={saving || anyUploading}
            className="flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
              color: "#6B0F1A",
              border: "1.5px solid #6B0F1A",
              fontFamily: "var(--font-serif-elegant)",
              boxShadow: "0 6px 28px rgba(201,168,76,0.3)",
            }}
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
