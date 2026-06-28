import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as fetchWeddingConfig, c as uploadPhoto, i as defaultWeddingConfig, o as saveWeddingConfig, r as cn, t as OmLogo } from "./wedding-config-Df5D44hn.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { _ as LoaderCircle, a as LogOut, g as ArrowLeft, i as Save, n as Upload, p as Camera, s as Eye, v as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit-BDLYCD26.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var EDIT_PASSWORD = "Raju@40045005";
var AUTH_SESSION_KEY = "wedi_admin_v1";
function Field({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-xs uppercase tracking-widest",
			style: {
				color: "#C9A84C",
				fontFamily: "var(--font-serif-elegant)"
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "border-[#C9A84C]/30 bg-white/[0.07] text-[#F5E6A3] placeholder:text-white/20 focus:border-[#C9A84C] focus:bg-white/10"
		})]
	});
}
function EventEditor({ title, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl p-5 space-y-4",
		style: {
			background: "rgba(201,168,76,0.05)",
			border: "1px solid rgba(201,168,76,0.22)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xs font-semibold uppercase tracking-[0.2em]",
				style: {
					color: "#C9A84C",
					fontFamily: "var(--font-royal)"
				},
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Date",
					value: value.date,
					onChange: (v) => onChange({
						...value,
						date: v
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Time",
					value: value.time,
					onChange: (v) => onChange({
						...value,
						time: v
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Venue",
				value: value.venue,
				onChange: (v) => onChange({
					...value,
					venue: v
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Address",
				value: value.address ?? "",
				onChange: (v) => onChange({
					...value,
					address: v
				})
			})
		]
	});
}
function PhotoField({ label, value, uploading = false, onFile, circle = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs uppercase tracking-widest",
			style: {
				color: "#C9A84C",
				fontFamily: "var(--font-serif-elegant)"
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white/5",
			style: {
				background: "rgba(201,168,76,0.05)",
				border: uploading ? "1.5px solid #C9A84C" : "1px solid rgba(201,168,76,0.22)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden transition-all ${circle ? "rounded-full" : "rounded-xl"}`,
					style: {
						border: "2px solid rgba(201,168,76,0.4)",
						background: "rgba(107,15,26,0.3)"
					},
					children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "h-6 w-6 animate-spin",
						style: { color: "#C9A84C" }
					}) : value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: value,
						alt: label,
						className: "h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							color: "#C9A84C",
							fontSize: 22
						},
						children: "+"
					}), !uploading && value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-white" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition hover:opacity-80",
					style: {
						background: "rgba(201,168,76,0.12)",
						color: "#F5E6A3",
						fontFamily: "var(--font-serif-elegant)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: uploading ? "Uploading…" : "Choose Photo" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px]",
					style: {
						color: "rgba(245,230,163,0.35)",
						fontFamily: "var(--font-serif-elegant)"
					},
					children: "JPG, PNG, WebP — max 50 MB"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: "image/*",
					className: "hidden",
					onChange: (e) => {
						const f = e.target.files?.[0];
						if (f) onFile(f);
						e.target.value = "";
					}
				})
			]
		})]
	});
}
function PasswordGate({ onLogin, password, setPassword, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		style: { background: "linear-gradient(135deg, #1a0a05 0%, #2C1810 50%, #1a0a05 100%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full",
			style: { background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: "easeOut"
			},
			className: "relative w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl p-8",
				style: {
					background: "rgba(255,255,255,0.03)",
					border: "1.5px solid rgba(201,168,76,0.3)",
					backdropFilter: "blur(24px)",
					boxShadow: "0 32px 80px rgba(0,0,0,0.6)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { scale: [
								1,
								1.06,
								1
							] },
							transition: {
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut"
							},
							style: {
								fontSize: "3.5rem",
								color: "#C9A84C",
								lineHeight: 1
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmLogo, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-lg",
							style: {
								fontFamily: "var(--font-royal)",
								color: "#F5E6A3",
								letterSpacing: "0.08em"
							},
							children: "Invitation Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm",
							style: {
								color: "rgba(245,230,163,0.5)",
								fontFamily: "var(--font-serif-elegant)"
							},
							children: "Enter your password to manage the invitation"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onLogin,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "Password",
						autoFocus: true,
						className: "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200",
						style: {
							background: "rgba(255,255,255,0.07)",
							border: `1.5px solid ${error ? "#f87171" : "rgba(201,168,76,0.35)"}`,
							color: "#F5E6A3",
							fontFamily: "var(--font-serif-elegant)"
						}
					}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: -4
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "mt-2 text-xs",
						style: { color: "#f87171" },
						children: "Incorrect password. Please try again."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full rounded-full py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
						style: {
							background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
							color: "#6B0F1A",
							border: "1.5px solid #6B0F1A",
							fontFamily: "var(--font-serif-elegant)",
							boxShadow: "0 4px 24px rgba(201,168,76,0.25)"
						},
						children: "Enter"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-xs transition-opacity hover:opacity-80",
					style: {
						color: "rgba(201,168,76,0.45)",
						fontFamily: "var(--font-serif-elegant)"
					},
					children: "← Back to Invitation"
				})
			})]
		})]
	});
}
function AdminLoadingState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center",
		style: { background: "linear-gradient(135deg, #1a0a05, #2C1810, #1a0a05)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: { opacity: [
				.4,
				1,
				.4
			] },
			transition: {
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut"
			},
			style: {
				fontSize: "3rem",
				color: "#C9A84C"
			},
			children: "✦"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm",
			style: {
				color: "rgba(201,168,76,0.65)",
				fontFamily: "var(--font-serif-elegant)"
			},
			children: "Loading invitation data…"
		})]
	});
}
function EditPage() {
	const [authenticated, setAuthenticated] = (0, import_react.useState)(() => {
		try {
			return sessionStorage.getItem(AUTH_SESSION_KEY) === "1";
		} catch {
			return false;
		}
	});
	const [passwordInput, setPasswordInput] = (0, import_react.useState)("");
	const [passwordError, setPasswordError] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(defaultWeddingConfig);
	const [uploading, setUploading] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (!authenticated) return;
		setLoading(true);
		fetchWeddingConfig().then((cfg) => setDraft(cfg)).catch(() => toast.error("Could not load config. Showing defaults.")).finally(() => setLoading(false));
	}, [authenticated]);
	const handleLogin = (e) => {
		e.preventDefault();
		if (passwordInput === EDIT_PASSWORD) {
			try {
				sessionStorage.setItem(AUTH_SESSION_KEY, "1");
			} catch {}
			setAuthenticated(true);
			setPasswordError(false);
		} else setPasswordError(true);
	};
	const handleLogout = () => {
		try {
			sessionStorage.removeItem(AUTH_SESSION_KEY);
		} catch {}
		setAuthenticated(false);
		setPasswordInput("");
	};
	/**
	* Upload a file to Supabase Storage immediately on select.
	* Shows a blob URL preview while uploading, then replaces with permanent URL.
	*/
	const handlePhotoFile = async (fieldKey, file, setter) => {
		setter(URL.createObjectURL(file));
		setUploading((u) => ({
			...u,
			[fieldKey]: true
		}));
		try {
			setter(await uploadPhoto(file, fieldKey));
		} catch (err) {
			console.error("Upload error:", err);
			toast.error("Photo upload failed. Please try again.");
			setter("");
		} finally {
			setUploading((u) => ({
				...u,
				[fieldKey]: false
			}));
		}
	};
	const handleSave = async () => {
		if (Object.values(uploading).some(Boolean)) {
			toast("Please wait for photos to finish uploading first.");
			return;
		}
		setSaving(true);
		try {
			await saveWeddingConfig(draft);
			toast("Invitation saved successfully!", { style: {
				background: "#FDF6EC",
				color: "#6B0F1A",
				border: "1px solid #C9A84C",
				fontFamily: "var(--font-serif-elegant)"
			} });
		} catch {
			toast.error("Failed to save. Check your internet connection.");
		} finally {
			setSaving(false);
		}
	};
	if (!authenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordGate, {
		onLogin: handleLogin,
		password: passwordInput,
		setPassword: (v) => {
			setPasswordInput(v);
			setPasswordError(false);
		},
		error: passwordError
	});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLoadingState, {});
	const anyUploading = Object.values(uploading).some(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		style: { background: "linear-gradient(160deg, #1a0a05 0%, #2C1810 45%, #150805 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-50 border-b",
				style: {
					background: "rgba(18,7,3,0.93)",
					borderColor: "rgba(201,168,76,0.22)",
					backdropFilter: "blur(18px)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center justify-between px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 text-sm transition-opacity hover:opacity-70",
								style: {
									color: "#C9A84C",
									fontFamily: "var(--font-serif-elegant)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "View Invitation"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "rgba(201,168,76,0.25)" },
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontFamily: "var(--font-royal)",
									color: "#F5E6A3",
									fontSize: "0.9rem",
									letterSpacing: "0.12em"
								},
								children: "Invitation Admin"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							anyUploading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-xs",
								style: {
									color: "#C9A84C",
									fontFamily: "var(--font-serif-elegant)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Uploading photos…"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80",
								style: {
									color: "rgba(201,168,76,0.5)",
									fontFamily: "var(--font-serif-elegant)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), "Sign out"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleSave,
								disabled: saving || anyUploading,
								className: "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
								style: {
									background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
									color: "#6B0F1A",
									border: "1.5px solid #6B0F1A",
									fontFamily: "var(--font-serif-elegant)",
									boxShadow: "0 4px 20px rgba(201,168,76,0.25)"
								},
								children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saving ? "Saving…" : "Save"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-6 pt-10 pb-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							fontFamily: "var(--font-script)",
							color: "#C9A84C",
							fontSize: "2.8rem",
							lineHeight: 1.1
						},
						children: "Customize Your Invitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						style: {
							color: "rgba(245,230,163,0.45)",
							fontFamily: "var(--font-serif-elegant)"
						},
						children: "Changes are saved to Supabase and reflected live on the invitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-4 flex items-center gap-3",
						style: { width: "fit-content" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-px w-16",
								style: { background: "rgba(201,168,76,0.3)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#C9A84C",
									fontSize: "0.7rem"
								},
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-px w-16",
								style: { background: "rgba(201,168,76,0.3)" }
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-6 pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "couple",
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "mb-8 grid w-full grid-cols-4",
							style: {
								background: "rgba(201,168,76,0.07)",
								border: "1px solid rgba(201,168,76,0.22)",
								borderRadius: "1rem",
								height: "auto",
								padding: "0.25rem"
							},
							children: [
								{
									value: "couple",
									label: "Couple"
								},
								{
									value: "events",
									label: "Events"
								},
								{
									value: "family",
									label: "Family"
								},
								{
									value: "photos",
									label: "Gallery"
								}
							].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: tab.value,
								className: "rounded-xl py-2 text-xs uppercase tracking-widest transition-all duration-200 data-[state=active]:shadow-md",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: "#F5E6A3"
								},
								children: tab.label
							}, tab.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "couple",
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl p-6 space-y-4",
									style: {
										background: "rgba(255,255,255,0.03)",
										border: "1px solid rgba(201,168,76,0.22)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs uppercase tracking-[0.2em]",
											style: {
												color: "#C9A84C",
												fontFamily: "var(--font-royal)"
											},
											children: "Bride"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Bride Name",
											value: draft.brideName,
											onChange: (v) => setDraft({
												...draft,
												brideName: v
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoField, {
											label: "Bride Photo",
											value: draft.bridePhoto,
											uploading: uploading["bride-photo"],
											onFile: (f) => handlePhotoFile("bride-photo", f, (url) => setDraft((d) => ({
												...d,
												bridePhoto: url
											}))),
											circle: true
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl p-6 space-y-4",
									style: {
										background: "rgba(255,255,255,0.03)",
										border: "1px solid rgba(201,168,76,0.22)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs uppercase tracking-[0.2em]",
											style: {
												color: "#C9A84C",
												fontFamily: "var(--font-royal)"
											},
											children: "Groom"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Groom Name",
											value: draft.groomName,
											onChange: (v) => setDraft({
												...draft,
												groomName: v
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoField, {
											label: "Groom Photo",
											value: draft.groomPhoto,
											uploading: uploading["groom-photo"],
											onFile: (f) => handlePhotoFile("groom-photo", f, (url) => setDraft((d) => ({
												...d,
												groomPhoto: url
											}))),
											circle: true
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl p-6 space-y-4",
								style: {
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(201,168,76,0.22)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs uppercase tracking-[0.2em]",
									style: {
										color: "#C9A84C",
										fontFamily: "var(--font-royal)"
									},
									children: "Wedding Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Wedding Date",
											type: "date",
											value: draft.weddingDateISO,
											onChange: (v) => {
												const formatted = v ? new Date(v).toLocaleDateString("en-GB", {
													day: "numeric",
													month: "long",
													year: "numeric"
												}) : draft.weddingDate;
												setDraft({
													...draft,
													weddingDateISO: v,
													weddingDate: formatted
												});
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Wedding Time",
											value: draft.weddingTime,
											onChange: (v) => setDraft({
												...draft,
												weddingTime: v
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Main Venue",
											value: draft.venue,
											onChange: (v) => setDraft({
												...draft,
												venue: v
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Venue Address",
											value: draft.venueAddress,
											onChange: (v) => setDraft({
												...draft,
												venueAddress: v
											})
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventEditor, {
										title: "Mehendi",
										value: draft.mehendi,
										onChange: (v) => setDraft({
											...draft,
											mehendi: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventEditor, {
										title: "Haldi",
										value: draft.haldi,
										onChange: (v) => setDraft({
											...draft,
											haldi: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventEditor, {
										title: "Wedding",
										value: draft.wedding,
										onChange: (v) => setDraft({
											...draft,
											wedding: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventEditor, {
										title: "Reception",
										value: draft.reception,
										onChange: (v) => setDraft({
											...draft,
											reception: v
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "family",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5 md:grid-cols-2",
								children: ["bride", "groom"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl p-6 space-y-4",
									style: {
										background: "rgba(255,255,255,0.03)",
										border: "1px solid rgba(201,168,76,0.22)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs uppercase tracking-[0.2em]",
										style: {
											color: "#C9A84C",
											fontFamily: "var(--font-royal)"
										},
										children: side === "bride" ? "Bride's Family" : "Groom's Family"
									}), [
										"father",
										"mother",
										"brother",
										"sister"
									].map((rel) => {
										const photoKey = `${rel}Photo`;
										const fieldKey = `family-${side}-${rel}`;
										const name = draft.family[side][rel];
										const photo = draft.family[side][photoKey];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 rounded-xl p-3",
											style: {
												background: "rgba(201,168,76,0.04)",
												border: "1px solid rgba(201,168,76,0.18)"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "relative grid h-12 w-12 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full transition hover:opacity-80",
												style: {
													border: "2px solid rgba(201,168,76,0.45)",
													background: "linear-gradient(135deg, rgba(107,15,26,0.5), rgba(44,24,16,0.5))"
												},
												children: [
													uploading[fieldKey] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
														className: "h-4 w-4 animate-spin",
														style: { color: "#C9A84C" }
													}) : photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: photo,
														alt: rel,
														className: "h-full w-full object-cover"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold",
														style: { color: "#C9A84C" },
														children: name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("") || "+"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: "image/*",
														className: "hidden",
														onChange: (e) => {
															const f = e.target.files?.[0];
															if (f) handlePhotoFile(fieldKey, f, (url) => setDraft((d) => ({
																...d,
																family: {
																	...d.family,
																	[side]: {
																		...d.family[side],
																		[photoKey]: url
																	}
																}
															})));
															e.currentTarget.value = "";
														}
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full",
														style: {
															background: "#6B0F1A",
															color: "#F5E6A3"
														},
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-2 w-2" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: rel,
													value: name,
													onChange: (v) => setDraft((d) => ({
														...d,
														family: {
															...d.family,
															[side]: {
																...d.family[side],
																[rel]: v
															}
														}
													}))
												})
											})]
										}, rel);
									})]
								}, side))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "photos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl p-6",
								style: {
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(201,168,76,0.22)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs uppercase tracking-[0.2em]",
											style: {
												color: "#C9A84C",
												fontFamily: "var(--font-royal)"
											},
											children: "Photo Gallery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setDraft({
												...draft,
												photos: [...defaultWeddingConfig.photos]
											}),
											className: "text-xs underline transition-opacity hover:opacity-70",
											style: {
												color: "rgba(201,168,76,0.45)",
												fontFamily: "var(--font-serif-elegant)"
											},
											children: "Reset to defaults"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
										children: draft.photos.map((p, i) => {
											const fk = `gallery-${i}`;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "group relative cursor-pointer overflow-hidden rounded-xl transition-all hover:opacity-90",
												style: {
													aspectRatio: "1",
													border: uploading[fk] ? "2px solid #C9A84C" : "1.5px solid rgba(201,168,76,0.25)",
													background: "rgba(107,15,26,0.25)"
												},
												children: [
													p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: p,
														alt: `Photo ${i + 1}`,
														className: "h-full w-full object-cover"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-200 ${p ? "bg-black/55 opacity-0 group-hover:opacity-100" : "opacity-100"}`,
														children: uploading[fk] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
															className: "h-7 w-7 animate-spin",
															style: { color: "#C9A84C" }
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
															className: "h-6 w-6",
															style: { color: "#F5E6A3" }
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs",
															style: {
																color: "#F5E6A3",
																fontFamily: "var(--font-serif-elegant)"
															},
															children: p ? "Replace" : `Photo ${i + 1}`
														})] })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: "image/*",
														className: "hidden",
														onChange: (e) => {
															const f = e.target.files?.[0];
															if (f) handlePhotoFile(fk, f, (url) => setDraft((d) => {
																const photos = [...d.photos];
																photos[i] = url;
																return {
																	...d,
																	photos
																};
															}));
															e.currentTarget.value = "";
														}
													})
												]
											}, i);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-center text-xs",
										style: {
											color: "rgba(245,230,163,0.3)",
											fontFamily: "var(--font-serif-elegant)"
										},
										children: "Click any photo to replace it. Photos are uploaded to Supabase Storage immediately."
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between rounded-2xl px-6 py-5",
					style: {
						background: "rgba(201,168,76,0.05)",
						border: "1px solid rgba(201,168,76,0.22)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-sm transition-opacity hover:opacity-80",
						style: {
							color: "#C9A84C",
							fontFamily: "var(--font-serif-elegant)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), "Preview Live Invitation"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleSave,
						disabled: saving || anyUploading,
						className: "flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50",
						style: {
							background: "linear-gradient(135deg, #F5E6A3, #C9A84C)",
							color: "#6B0F1A",
							border: "1.5px solid #6B0F1A",
							fontFamily: "var(--font-serif-elegant)",
							boxShadow: "0 6px 28px rgba(201,168,76,0.3)"
						},
						children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saving ? "Saving…" : "Save Changes"]
					})]
				})]
			})
		]
	});
}
//#endregion
export { EditPage as component };
