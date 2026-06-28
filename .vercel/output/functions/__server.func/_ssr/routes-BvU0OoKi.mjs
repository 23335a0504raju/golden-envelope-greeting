import { o as __toESM } from "../_runtime.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as fetchWeddingConfig, i as defaultWeddingConfig, l as useWeddingConfig, n as WeddingConfigProvider, r as cn, s as supabase, t as OmLogo } from "./wedding-config-Df5D44hn.mjs";
import { a as LazyMotion, i as m, n as domAnimation, o as AnimatePresence, r as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { c as Expand, d as ChevronLeft, f as ChevronDown, h as BellOff, l as Download, m as Bell, o as Frame, r as Send, t as X, u as ChevronRight, v as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BvU0OoKi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MandalaBorder({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 560",
		className,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "goldStroke",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#F5E6A3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "#C9A84C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#8a6f24"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "url(#goldStroke)",
				strokeWidth: "1.2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14",
						y: "14",
						width: "372",
						height: "532",
						rx: "6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "22",
						y: "22",
						width: "356",
						height: "516",
						rx: "4",
						strokeDasharray: "2 4",
						opacity: "0.6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "30",
						y: "30",
						width: "340",
						height: "500",
						rx: "3"
					})
				]
			}),
			[
				[50, 50],
				[350, 50],
				[50, 510],
				[350, 510]
			].map(([cx, cy], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: `translate(${cx} ${cy})`,
				stroke: "url(#goldStroke)",
				strokeWidth: "1",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { r: "22" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "6",
						fill: "#C9A84C",
						stroke: "none"
					}),
					Array.from({ length: 12 }).map((_, k) => {
						const a = k / 12 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: Math.cos(a) * 14,
							y1: Math.sin(a) * 14,
							x2: Math.cos(a) * 22,
							y2: Math.sin(a) * 22
						}, k);
					})
				]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "url(#goldStroke)",
				fill: "none",
				strokeWidth: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 60 Q200 20 280 60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M140 70 Q200 38 260 70",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "200",
						cy: "38",
						r: "3",
						fill: "#C9A84C",
						stroke: "none"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "url(#goldStroke)",
				fill: "none",
				strokeWidth: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 500 Q200 540 280 500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M140 490 Q200 522 260 490",
					opacity: "0.7"
				})]
			})
		]
	});
}
function OmSymbol({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
			id: "omGold",
			cx: "50%",
			cy: "50%",
			r: "50%",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0%",
				stopColor: "#F5E6A3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "100%",
				stopColor: "#8a6f24"
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			x: "25",
			y: "25",
			width: "50",
			height: "50",
			overflow: "visible",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmLogo, { className: "w-full h-full text-[#C9A84C]" })
		})]
	});
}
function Diya$1({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 50",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "w-flicker",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "20",
					cy: "14",
					rx: "4",
					ry: "9",
					fill: "#F5E6A3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "20",
					cy: "16",
					rx: "2.4",
					ry: "6",
					fill: "#fff8d6"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 32 Q20 46 36 32 Q34 40 20 42 Q6 40 4 32 Z",
				fill: "#C9A84C",
				stroke: "#8a6f24",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "20",
				cy: "32",
				rx: "16",
				ry: "3",
				fill: "#8a6f24"
			})
		]
	});
}
var GoldParticles = (0, import_react.lazy)(() => import("./GoldParticles-DZCDp3-9.mjs").then((m) => ({ default: m.GoldParticles })));
function InvitationScreen({ onReveal } = {}) {
	const { config } = useWeddingConfig();
	const [phase, setPhase] = (0, import_react.useState)("envelope");
	const [audioOn, setAudioOn] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const t1 = setTimeout(() => setPhase("opening"), 1500);
		const t2 = setTimeout(() => setPhase("card-sliding"), 2600);
		const t3 = setTimeout(() => setPhase("card-open"), 3700);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
		};
	}, []);
	const trigger = () => {
		if (phase === "envelope") setPhase("opening");
	};
	const flapOpen = phase !== "envelope";
	const cardOut = phase === "card-sliding" || phase === "card-open";
	const cardOpen = phase === "card-open";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen w-full overflow-hidden",
		style: { background: "radial-gradient(ellipse at center, #6B0F1A 0%, #4a0a12 55%, #2a060c 100%)" },
		children: [
			mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldParticles, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setAudioOn((v) => !v),
				className: "absolute right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-[var(--w-gold)]/50 bg-[var(--w-burgundy-deep)]/70 text-[var(--w-gold-light)] backdrop-blur transition hover:scale-105 hover:border-[var(--w-gold)] sm:right-6 sm:top-6",
				"aria-label": audioOn ? "Mute music" : "Play music",
				children: [audioOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "h-5 w-5" }), audioOn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					autoPlay: true,
					loop: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/audio/wedding-ambient.mp3",
						type: "audio/mpeg"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-screen items-center justify-center px-4 py-10",
				style: { perspective: "1600px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-[min(78vw,360px)] md:w-[min(58vw,440px)] lg:w-[500px]",
					style: {
						aspectRatio: "1.5 / 1",
						transformStyle: "preserve-3d"
					},
					onClick: trigger,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 rounded-md shadow-2xl",
							style: {
								background: "linear-gradient(150deg, #7a1320 0%, #5a0d18 60%, #3d0810 100%)",
								border: "1px solid rgba(201,168,76,0.5)",
								boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.25) inset",
								zIndex: 1
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute left-1/2 bottom-0",
							style: {
								width: "62%",
								x: "-50%",
								zIndex: 10,
								transformOrigin: "bottom center"
							},
							initial: {
								y: "6%",
								scaleY: .55,
								opacity: 0
							},
							animate: cardOut ? {
								y: cardOpen ? "-44%" : "-28%",
								scaleY: 1,
								opacity: 1
							} : {
								y: "6%",
								scaleY: .55,
								opacity: 0
							},
							transition: {
								duration: 1.05,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {
								open: cardOpen,
								config
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 rounded-md",
							style: {
								background: "linear-gradient(180deg, #6e1220 0%, #5a0d18 55%, #3d0810 100%)",
								clipPath: "polygon(0 42%, 50% 88%, 100% 42%, 100% 100%, 0 100%)",
								borderLeft: "1px solid rgba(201,168,76,0.4)",
								borderRight: "1px solid rgba(201,168,76,0.4)",
								borderBottom: "1px solid rgba(201,168,76,0.4)",
								boxShadow: "0 -6px 18px -6px rgba(0,0,0,0.6)",
								zIndex: 20
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute inset-0",
							style: { zIndex: 21 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-[42%] h-px w-1/2",
								style: {
									background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.55))",
									transform: "rotate(28deg)",
									transformOrigin: "left center"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-[42%] h-px w-1/2",
								style: {
									background: "linear-gradient(270deg, transparent, rgba(201,168,76,0.55))",
									transform: "rotate(-28deg)",
									transformOrigin: "right center"
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "absolute left-0 right-0 top-0",
							style: {
								height: "58%",
								transformStyle: "preserve-3d",
								transformOrigin: "top center",
								zIndex: flapOpen ? 5 : 30
							},
							initial: { rotateX: 0 },
							animate: { rotateX: flapOpen ? -178 : 0 },
							transition: {
								duration: 1,
								ease: [
									.6,
									0,
									.3,
									1
								]
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: {
										clipPath: "polygon(0 0, 100% 0, 50% 100%)",
										background: "linear-gradient(180deg, #8a1424 0%, #6B0F1A 60%, #4a0a12 100%)",
										border: "1px solid rgba(201,168,76,0.5)",
										backfaceVisibility: "hidden"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: {
										clipPath: "polygon(0 0, 100% 0, 50% 100%)",
										background: "linear-gradient(180deg, #3a0810 0%, #5a0d18 60%, #7a1320 100%)",
										transform: "rotateX(180deg)",
										backfaceVisibility: "hidden"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2",
									style: { backfaceVisibility: "hidden" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "relative grid place-items-center rounded-full",
										style: {
											width: "clamp(52px, 13vw, 78px)",
											height: "clamp(52px, 13vw, 78px)",
											background: "radial-gradient(circle at 35% 30%, #e7c66a 0%, #C9A84C 45%, #8a6f24 100%)",
											boxShadow: "0 6px 14px rgba(0,0,0,0.55), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.35)",
											border: "2px solid #6B0F1A"
										},
										animate: phase === "envelope" ? {
											scale: [
												1,
												1.05,
												1
											],
											opacity: 1
										} : {
											scale: .85,
											opacity: 0
										},
										transition: {
											duration: phase === "envelope" ? 2.4 : .3,
											repeat: phase === "envelope" ? Infinity : 0,
											ease: "easeInOut"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-3/4 w-3/4" })
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase === "card-open" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-8 left-1/2 z-40 -translate-x-1/2 sm:bottom-12",
				initial: {
					y: 30,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				exit: { opacity: 0 },
				transition: {
					delay: .6,
					duration: .7
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onReveal?.(),
					className: "group relative overflow-hidden rounded-full px-7 py-3 text-sm tracking-[0.2em] uppercase shadow-[0_10px_30px_-10px_rgba(201,168,76,0.7)] transition hover:scale-[1.04] sm:px-9 sm:py-4 sm:text-base",
					style: {
						background: "linear-gradient(135deg, #6B0F1A 0%, #8a1424 50%, #6B0F1A 100%)",
						border: "1.5px solid #C9A84C",
						color: "#F5E6A3",
						fontFamily: "var(--font-serif-elegant)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: "View Invitation →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 w-shimmer opacity-0 transition group-hover:opacity-100" })]
				})
			}) })
		]
	});
}
/**
* The letter / message that slides out of the envelope.
* A single clean cream card — no fragile folding panels.
*/
function Letter({ open, config }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto overflow-hidden rounded-sm",
		style: {
			width: "100%",
			aspectRatio: "0.82 / 1",
			background: "linear-gradient(180deg, #fff8e8 0%, #FDF6EC 50%, #f3e6c8 100%)",
			boxShadow: "0 30px 60px -15px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(201,168,76,0.35)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandalaBorder, { className: "absolute inset-0 h-full w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya$1, { className: "absolute left-2 top-2 h-6 w-6 sm:left-3 sm:top-3 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya$1, { className: "absolute right-2 top-2 h-6 w-6 sm:right-3 sm:top-3 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya$1, { className: "absolute bottom-2 left-2 h-6 w-6 sm:bottom-3 sm:left-3 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya$1, { className: "absolute bottom-2 right-2 h-6 w-6 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative flex h-full flex-col items-center justify-center px-5 text-center sm:px-7",
				initial: { opacity: 0 },
				animate: { opacity: open ? 1 : 0 },
				transition: {
					delay: open ? .55 : 0,
					duration: .6
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-8 w-8 sm:h-10 sm:w-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-px w-12",
						style: { background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 italic",
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: "var(--w-ink)",
							fontSize: "clamp(0.7rem, 1.9vw, 0.95rem)",
							letterSpacing: "0.08em"
						},
						children: "You are cordially invited"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 uppercase tracking-[0.35em]",
						style: {
							color: "var(--w-burgundy)",
							fontFamily: "var(--font-serif-elegant)",
							fontSize: "clamp(0.55rem, 1.3vw, 0.7rem)"
						},
						children: "to the wedding of"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 leading-none",
						style: {
							fontFamily: "var(--font-script)",
							color: "var(--w-burgundy)",
							fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)",
							textShadow: "0 1px 0 rgba(255,255,255,0.6)"
						},
						children: config.brideName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "my-1",
						style: {
							fontFamily: "var(--font-royal)",
							color: "var(--w-gold)",
							fontSize: "clamp(0.75rem, 1.9vw, 0.95rem)",
							letterSpacing: "0.3em"
						},
						children: "&"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "leading-none",
						style: {
							fontFamily: "var(--font-script)",
							color: "var(--w-burgundy)",
							fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)",
							textShadow: "0 1px 0 rgba(255,255,255,0.6)"
						},
						children: config.groomName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-px w-16",
						style: { background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: "var(--w-ink)",
							fontSize: "clamp(0.65rem, 1.7vw, 0.8rem)",
							letterSpacing: "0.12em"
						},
						children: config.weddingDate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 px-2",
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: "var(--w-ink)",
							opacity: .75,
							fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)"
						},
						children: config.venue
					})
				]
			})
		]
	});
}
function FloralMandala({ inner = false }) {
	const petals = 16;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 600 600",
		className: "h-full w-full",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: `mg-${inner ? "i" : "o"}`,
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0%",
				stopColor: "#F5E6A3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "100%",
				stopColor: "#8a6f24"
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: `url(#mg-${inner ? "i" : "o"})`,
			strokeWidth: "0.9",
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "300",
					r: inner ? 60 : 110
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "300",
					r: inner ? 100 : 200,
					strokeDasharray: "2 6"
				}),
				!inner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "300",
					r: "270",
					strokeDasharray: "1 10"
				}),
				Array.from({ length: petals }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `rotate(${i * 360 / petals} 300 300)`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M300 ${inner ? 110 : 30} C 320 ${inner ? 170 : 110}, 320 ${inner ? 220 : 200}, 300 ${inner ? 250 : 270} C 280 ${inner ? 220 : 200}, 280 ${inner ? 170 : 110}, 300 ${inner ? 110 : 30} Z` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M300 ${inner ? 150 : 90} L 300 ${inner ? 230 : 250}`,
							strokeDasharray: "2 4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "300",
							cy: inner ? 130 : 60,
							r: "2.2",
							fill: "#E8C766",
							stroke: "none"
						})
					]
				}, i)),
				Array.from({ length: petals / 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					transform: `rotate(${i * 360 / (petals / 2) + 11.25} 300 300)`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M300 300 C 330 330, 360 360, 380 410 C 340 380, 310 350, 300 300 Z",
						opacity: "0.6"
					})
				}, `p-${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "300",
					r: "14",
					fill: "#E8C766",
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "300",
					r: "6",
					fill: "#6B0F1A",
					stroke: "none"
				})
			]
		})]
	});
}
function DiyaFlicker({ size = 28 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		width: size,
		height: size,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: `flameAmber-${size}`,
				cx: "0.5",
				cy: "0.7",
				r: "0.6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#FFF1B8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "55%",
						stopColor: "#FFB84D"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#E94E1B",
						stopOpacity: "0.4"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 32c2 6 8 9 16 9s14-3 16-9z",
				fill: "#C9A84C",
				stroke: "#E8C766",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 32h36",
				stroke: "#E8C766",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				style: {
					transformOrigin: "24px 22px",
					animation: "heroFlame 1.5s ease-in-out infinite"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "24",
					cy: "20",
					rx: "3.4",
					ry: "7",
					fill: `url(#flameAmber-${size})`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "24",
					cy: "22",
					rx: "1.6",
					ry: "3.6",
					fill: "#FFE7A8"
				})]
			})
		]
	});
}
function FloatingParticles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => {
			return [
				...Array(8).fill("diamond"),
				...Array(6).fill("star"),
				...Array(5).fill("petal")
			].map((type, i) => ({
				type,
				left: i * 53 % 100,
				size: 4 + i * 7 % 7,
				duration: 14 + i * 3 % 12,
				delay: i * .7 % 9,
				drift: (i % 5 - 2) * 6,
				opacity: .3 + i * 11 % 30 / 100
			}));
		}, []).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute bottom-[-20px] grid place-items-center",
			style: {
				left: `${p.left}%`,
				width: p.size * 2,
				height: p.size * 2,
				opacity: p.opacity,
				color: "#E8C766",
				fontSize: p.size * 2,
				["--drift"]: `${p.drift}px`,
				animation: `heroDrift ${p.duration}s linear ${p.delay}s infinite`,
				textShadow: "0 0 6px rgba(232,199,102,0.7)"
			},
			children: [
				p.type === "diamond" && "◆",
				p.type === "star" && "✦",
				p.type === "petal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 10 14",
					width: p.size * 1.6,
					height: p.size * 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M5 0 C 9 4, 9 10, 5 14 C 1 10, 1 4, 5 0 Z",
						fill: "#E8C766"
					})
				})
			]
		}, i))
	});
}
function CoupleCircle({ src, name, from, delay }) {
	const initial = (name?.[0] ?? "?").toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: from === "left" ? -60 : 60
		},
		animate: {
			opacity: 1,
			x: 0
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "group relative rounded-full transition-transform duration-300 hover:scale-[1.06]",
		style: {
			width: "clamp(150px, 30vw, 200px)",
			height: "clamp(150px, 30vw, 200px)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute inset-0 rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(201,168,76,0.55)]",
				style: { border: "3px solid #C9A84C" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute rounded-full",
				style: {
					inset: 7,
					border: "1.5px solid rgba(201,168,76,0.5)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute overflow-hidden rounded-full",
				style: {
					inset: 9,
					background: "radial-gradient(circle, #8B1A2A 0%, #6B0F1A 100%)",
					boxShadow: "inset 0 0 20px rgba(201,168,76,0.2)"
				},
				children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: name,
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full w-full place-items-center",
					style: {
						fontFamily: "'Great Vibes', cursive",
						color: "#F5E6A3",
						fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
						textShadow: "0 2px 12px rgba(0,0,0,0.5)"
					},
					children: initial
				})
			})
		]
	});
}
function useCountdown(targetISO, time) {
	const target = (0, import_react.useMemo)(() => {
		let hh = 10;
		let mm = 0;
		const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i.exec(time.trim());
		if (match) {
			hh = parseInt(match[1], 10) % 12;
			mm = parseInt(match[2], 10);
			if (/PM/i.test(match[3] || "")) hh += 12;
		}
		const iso = `${targetISO}T${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`;
		return new Date(iso).getTime();
	}, [targetISO, time]);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const diff = Math.max(0, target - now);
	return {
		d: Math.floor(diff / 864e5),
		h: Math.floor(diff / 36e5 % 24),
		m: Math.floor(diff / 6e4 % 60),
		s: Math.floor(diff / 1e3 % 60)
	};
}
function FlipCell({ value, label }) {
	const text = String(value).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		style: { perspective: 600 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center",
			style: {
				minWidth: "clamp(72px, 18vw, 90px)",
				padding: "12px 8px",
				background: "rgba(201,168,76,0.12)",
				border: "1px solid rgba(201,168,76,0.4)",
				borderRadius: 10,
				color: "#F5E6A3"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				initial: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						rotateX: -90,
						opacity: 0
					},
					animate: {
						rotateX: 0,
						opacity: 1
					},
					exit: {
						rotateX: 90,
						opacity: 0
					},
					transition: {
						duration: .3,
						ease: "easeOut"
					},
					style: {
						fontFamily: "'Cinzel Decorative', serif",
						fontSize: "clamp(2rem, 5vw, 2.8rem)",
						fontWeight: 700,
						display: "inline-block",
						transformOrigin: "center"
					},
					children: text
				}, text)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 uppercase",
			style: {
				color: "#FDF6EC",
				fontFamily: "'Cormorant Garamond', serif",
				letterSpacing: "0.2em",
				fontSize: "0.65rem"
			},
			children: label
		})]
	});
}
function CountdownSeparator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "self-start pt-[18px]",
		style: {
			color: "#C9A84C",
			fontSize: "1.5rem",
			fontFamily: "'Cinzel Decorative', serif"
		},
		children: ":"
	});
}
function HeroSection() {
	const { config } = useWeddingConfig();
	const { d, h, m, s } = useCountdown(config.weddingDateISO, config.weddingTime);
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .2
	});
	const scrollToNext = () => {
		const el = document.getElementById("events");
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		else window.scrollBy({
			top: window.innerHeight,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "hero",
		className: "relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 py-12 sm:py-16",
		style: { background: "radial-gradient(ellipse at top, #7a1320 0%, #6B0F1A 40%, #3d0810 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 grid place-items-center",
				style: { opacity: .12 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-[130vmin] w-[130vmin]",
					animate: { rotate: 360 },
					transition: {
						duration: 80,
						repeat: Infinity,
						ease: "linear"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralMandala, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 grid place-items-center",
				style: { opacity: .06 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-[80vmin] w-[80vmin]",
					animate: { rotate: -360 },
					transition: {
						duration: 100,
						repeat: Infinity,
						ease: "linear"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralMandala, { inner: true })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .5,
					duration: .8
				},
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingParticles, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse at 50% 30%, rgba(245,230,163,0.08), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex w-full max-w-3xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: inView ? {
							opacity: 1,
							y: 0
						} : {},
						transition: {
							delay: .8,
							duration: .7
						},
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiyaFlicker, { size: 36 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 italic",
							style: {
								fontFamily: "'Cormorant Garamond', serif",
								color: "#E8C766",
								fontSize: "clamp(0.95rem, 2.4vw, 1.2rem)",
								letterSpacing: "0.1em"
							},
							children: "Together Forever"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex w-full flex-col items-center gap-3 sm:mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								initial: {
									opacity: 0,
									x: -40,
									rotateY: 25
								},
								animate: inView ? {
									opacity: 1,
									x: 0,
									rotateY: 0
								} : {},
								transition: {
									duration: 1,
									ease: "easeOut",
									delay: 1.2
								},
								className: "py-1",
								style: {
									fontFamily: "var(--font-script)",
									color: "#F5E6A3",
									fontSize: "clamp(3.5rem, 11vw, 6rem)",
									lineHeight: 1.25,
									textShadow: "0 4px 18px rgba(0,0,0,0.6)",
									maxWidth: "100%",
									wordBreak: "break-word",
									transformPerspective: 800
								},
								children: config.groomName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: 0,
									opacity: 0
								},
								animate: inView ? {
									scale: 1,
									opacity: 1
								} : {},
								transition: {
									delay: 1.5,
									type: "spring",
									stiffness: 200,
									damping: 14
								},
								className: "grid place-items-center rounded-full",
								style: {
									width: "clamp(40px, 10vw, 56px)",
									height: "clamp(40px, 10vw, 56px)",
									background: "linear-gradient(135deg, #6B0F1A, #4a0a12)",
									border: "2px solid #C9A84C",
									color: "#F5E6A3",
									fontFamily: "var(--font-script)",
									fontSize: "clamp(1.4rem, 4vw, 2rem)",
									boxShadow: "0 6px 18px rgba(0,0,0,0.5)"
								},
								children: "&"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								initial: {
									opacity: 0,
									x: 40,
									rotateY: -25
								},
								animate: inView ? {
									opacity: 1,
									x: 0,
									rotateY: 0
								} : {},
								transition: {
									duration: 1,
									ease: "easeOut",
									delay: 1.8
								},
								className: "py-1",
								style: {
									fontFamily: "var(--font-script)",
									color: "#F5E6A3",
									fontSize: "clamp(3.5rem, 11vw, 6rem)",
									lineHeight: 1.25,
									textShadow: "0 4px 18px rgba(0,0,0,0.6)",
									maxWidth: "100%",
									wordBreak: "break-word",
									transformPerspective: 800
								},
								children: config.brideName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
								width: "220",
								height: "6",
								viewBox: "0 0 220 6",
								className: "mt-2 w-2/3 max-w-xs",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
									x1: "0",
									y1: "3",
									x2: "220",
									y2: "3",
									stroke: "#C9A84C",
									strokeWidth: "1.2",
									strokeDasharray: "220",
									initial: { strokeDashoffset: 220 },
									animate: inView ? { strokeDashoffset: 0 } : {},
									transition: {
										duration: .8,
										delay: 2.1,
										ease: "easeOut"
									}
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-10 flex items-center justify-center sm:mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleCircle, {
								src: config.groomPhoto,
								name: config.groomName,
								from: "left",
								delay: 2.4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-ml-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleCircle, {
									src: config.bridePhoto,
									name: config.brideName,
									from: "right",
									delay: 2.6
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								"aria-hidden": true,
								initial: {
									opacity: 0,
									scale: 0
								},
								animate: inView ? {
									opacity: 1,
									scale: 1
								} : {},
								transition: {
									delay: 3,
									duration: .5
								},
								className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
								style: { animation: "heroHeart 0.8s ease-in-out infinite" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									width: "20",
									height: "20",
									fill: "#E8C766",
									style: { filter: "drop-shadow(0 0 4px rgba(232,199,102,0.7))" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-7-4.35-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.65-9.5 9-9.5 9z" })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: inView ? {
							opacity: 1,
							scale: 1
						} : {},
						transition: {
							delay: 2.8,
							type: "spring",
							stiffness: 180,
							damping: 16
						},
						className: "mt-10 sm:mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-full px-6 py-3 sm:gap-4 sm:px-8 sm:py-3.5",
							style: {
								background: "linear-gradient(90deg, #C9A84C 0%, #F5E6A3 40%, #C9A84C 60%, #C9A84C 100%)",
								backgroundSize: "200% auto",
								animation: "heroShimmer 3s linear infinite",
								border: "1px solid rgba(255,255,255,0.5)",
								boxShadow: "0 18px 40px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.5)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiyaFlicker, { size: 28 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase",
										style: {
											color: "#4a0a12",
											fontFamily: "'Cinzel Decorative', serif",
											letterSpacing: "0.25em",
											fontSize: "0.7rem"
										},
										children: "Saving the Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "#3d0810",
											fontFamily: "'Cinzel Decorative', serif",
											fontWeight: 700,
											fontSize: "clamp(1.05rem, 3.4vw, 1.3rem)",
											letterSpacing: "0.08em"
										},
										children: config.weddingDate
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiyaFlicker, { size: 28 })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: inView ? {
							opacity: 1,
							y: 0
						} : {},
						transition: {
							delay: 3.1,
							duration: .7
						},
						className: "mt-8 flex items-start justify-center gap-2.5 sm:mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipCell, {
								value: d,
								label: "Days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipCell, {
								value: h,
								label: "Hours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipCell, {
								value: m,
								label: "Mins"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipCell, {
								value: s,
								label: "Secs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: inView ? { opacity: 1 } : {},
						transition: {
							delay: 3.4,
							duration: .7
						},
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "mx-auto h-10 w-10 opacity-80" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				onClick: scrollToNext,
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: 4,
					duration: .8
				},
				className: "relative z-10 mt-12 flex flex-col items-center sm:mt-16",
				"aria-label": "Scroll to next section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						duration: 1.5,
						repeat: Infinity,
						ease: "easeInOut"
					},
					style: { color: "#C9A84C" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 italic",
					style: {
						fontFamily: "'Cormorant Garamond', serif",
						color: "#C9A84C",
						fontSize: "0.85rem",
						letterSpacing: "0.1em"
					},
					children: "Scroll to explore"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes heroFlame {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          25% { transform: scaleY(1.15) scaleX(0.95); }
          50% { transform: scaleY(0.95) scaleX(1.05); }
          75% { transform: scaleY(1.1) scaleX(0.98); }
        }
        @keyframes heroShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroHeart {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes heroDrift {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate3d(var(--drift, 0px), -110vh, 0); opacity: 0; }
        }
      ` })
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var GOLD$3 = "#C9A84C";
var BURGUNDY$3 = "#6B0F1A";
var EVENT_META = [
	{
		key: "mehendi",
		label: "Mehendi",
		color: "#1f9e63"
	},
	{
		key: "haldi",
		label: "Haldi",
		color: "#d99a16"
	},
	{
		key: "wedding",
		label: "Wedding",
		color: "#6B0F1A"
	},
	{
		key: "reception",
		label: "Reception",
		color: "#8a4fbf"
	}
];
/** Parse loose date strings like "13 Feb 2026" or ISO "2026-02-15" → Date (local, midnight). */
function parseDate(s) {
	if (!s) return null;
	const d = new Date(s);
	if (Number.isNaN(d.getTime())) return null;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
var sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
function EventCalendar() {
	const { config } = useWeddingConfig();
	const events = (0, import_react.useMemo)(() => {
		return EVENT_META.map((m) => {
			const info = config[m.key];
			const date = m.key === "wedding" ? parseDate(config.weddingDateISO) ?? parseDate(info?.date) : parseDate(info?.date);
			return {
				...m,
				date,
				info
			};
		}).filter((e) => e.date instanceof Date);
	}, [config]);
	const [month, setMonth] = (0, import_react.useState)(parseDate(config.weddingDateISO) ?? events.find((e) => e.key === "wedding")?.date ?? /* @__PURE__ */ new Date());
	const [selected, setSelected] = (0, import_react.useState)(events.find((e) => e.key === "wedding")?.date);
	const modifiers = (0, import_react.useMemo)(() => Object.fromEntries(events.map((e) => [e.key, [e.date]])), [events]);
	const modifiersStyles = (0, import_react.useMemo)(() => Object.fromEntries(events.map((e) => [e.key, {
		background: e.color,
		color: "#fff",
		borderRadius: "9999px",
		fontWeight: 700,
		boxShadow: `0 4px 12px ${e.color}66`
	}])), [events]);
	const selectedEvent = selected ? events.find((e) => sameDay(e.date, selected)) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mt-16 max-w-4xl px-4 md:mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-center text-[1.5rem] text-[#6B0F1A] md:text-[2rem]",
				style: { fontFamily: "'Cinzel Decorative', serif" },
				children: "Mark Your Calendar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center italic text-[#C9A84C]",
				style: {
					fontFamily: "'Cormorant Garamond', serif",
					fontSize: "1.05rem"
				},
				children: "All our celebrations, at a glance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-start gap-8 md:grid-cols-[auto_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto rounded-3xl bg-white p-4 md:p-5",
					style: {
						border: `1.5px solid ${GOLD$3}55`,
						boxShadow: `0 16px 50px ${BURGUNDY$3}1f`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						mode: "single",
						selected,
						onSelect: setSelected,
						month,
						onMonthChange: setMonth,
						modifiers,
						modifiersStyles,
						showOutsideDays: true,
						className: "[--cell-size:2.5rem]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5",
						style: {
							background: "#fffdf7",
							border: `1px solid ${GOLD$3}40`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm uppercase tracking-[0.18em] text-[#6B0F1A]",
							style: { fontFamily: "'Cinzel Decorative', serif" },
							children: "Celebrations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelected(e.date);
									setMonth(e.date);
								},
								className: "flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-[#6B0F1A]/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-3.5 w-3.5 shrink-0 rounded-full",
										style: { background: e.color }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-[#2a1216]",
										style: {
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "1.05rem",
											fontWeight: 600
										},
										children: e.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#6B0F1A]",
										style: {
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "0.95rem"
										},
										children: e.date.toLocaleDateString("en-US", {
											day: "numeric",
											month: "short"
										})
									})
								]
							}) }, e.key))
						})]
					}), selectedEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5 text-white",
						style: {
							background: `linear-gradient(135deg, ${selectedEvent.color}, ${selectedEvent.color}cc)`,
							boxShadow: `0 12px 36px ${selectedEvent.color}40`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[1.3rem]",
								style: { fontFamily: "'Cinzel Decorative', serif" },
								children: selectedEvent.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "1.05rem"
								},
								children: [selectedEvent.date.toLocaleDateString("en-US", {
									weekday: "long",
									day: "numeric",
									month: "long",
									year: "numeric"
								}), selectedEvent.info?.time ? ` · ${selectedEvent.info.time}` : ""]
							}),
							selectedEvent.info?.venue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 opacity-90",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "1rem"
								},
								children: [
									"📍 ",
									selectedEvent.info.venue,
									selectedEvent.info.address ? `, ${selectedEvent.info.address}` : ""
								]
							})
						]
					})]
				})]
			})
		]
	});
}
var EVENTS = [
	{
		key: "mehendi",
		name: "Mehendi Ceremony",
		icon: "mehendi"
	},
	{
		key: "haldi",
		name: "Haldi Ceremony",
		icon: "haldi"
	},
	{
		key: "wedding",
		name: "Wedding Day",
		icon: "diya",
		isMain: true,
		showDirections: true
	},
	{
		key: "reception",
		name: "Reception",
		icon: "sparkles",
		showDirections: true
	}
];
function EventIcon({ type, isMain }) {
	const stroke = isMain ? "#E8C766" : "#C9A84C";
	switch (type) {
		case "mehendi": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "w-7 h-7 md:w-9 md:h-9",
			fill: "none",
			stroke,
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 42c-6-6-10-12-10-19a10 10 0 0120 0c0 7-4 13-10 19z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 14v18M19 22c2 2 3 5 3 8M29 22c-2 2-3 5-3 8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "14",
					r: "1.5",
					fill: stroke
				})
			]
		});
		case "haldi": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "w-7 h-7 md:w-9 md:h-9",
			fill: "none",
			stroke,
			strokeWidth: "1.6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "4",
				fill: stroke
			}), Array.from({ length: 8 }).map((_, i) => {
				const a = i * Math.PI / 4;
				const x = 24 + Math.cos(a) * 10;
				const y = 24 + Math.sin(a) * 10;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: x,
					cy: y,
					rx: "4",
					ry: "2.4",
					transform: `rotate(${i * 45} ${x} ${y})`
				}, i);
			})]
		});
		case "diya": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "w-8 h-8 md:w-10 md:h-10",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 30c2 6 8 9 14 9s12-3 14-9z",
					fill: "#C9A84C",
					stroke: "#E8C766",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 30h32",
					stroke: "#E8C766",
					strokeWidth: "1.4",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					style: {
						transformOrigin: "24px 22px",
						animation: "diyaFlicker 1.2s ease-in-out infinite alternate"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "24",
						cy: "20",
						rx: "3.2",
						ry: "6",
						fill: "url(#flameG)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "24",
						cy: "21",
						rx: "1.6",
						ry: "3.4",
						fill: "#FFE7A8"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "flameG",
					cx: "0.5",
					cy: "0.7",
					r: "0.6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#FFF1B8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "60%",
							stopColor: "#FFB84D"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#E94E1B",
							stopOpacity: "0.4"
						})
					]
				}) })
			]
		});
		case "sparkles": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "w-7 h-7 md:w-9 md:h-9",
			fill: stroke,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6l2.4 7.2L34 16l-7.6 2.8L24 26l-2.4-7.2L14 16l7.6-2.8z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38 28l1.4 4 4 1.4-4 1.4L38 39l-1.4-4.2-4-1.4 4-1.4z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 30l1.2 3.4 3.4 1.2-3.4 1.2L12 39l-1.2-3.2-3.4-1.2 3.4-1.2z" })
			]
		});
	}
}
function BottomMotif({ gold = "#C9A84C" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "w-full h-3 mt-4",
		viewBox: "0 0 200 12",
		preserveAspectRatio: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pattern", {
			id: `motif-${gold}`,
			x: "0",
			y: "0",
			width: "20",
			height: "12",
			patternUnits: "userSpaceOnUse",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "4",
					cy: "6",
					r: "1.2",
					fill: gold
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 2l2 4-2 4-2-4z",
					fill: gold,
					opacity: "0.85"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "6",
					r: "1.2",
					fill: gold
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "200",
			height: "12",
			fill: `url(#motif-${gold})`
		})]
	});
}
function MiniLotus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 60 30",
		className: "w-16 h-8 mx-auto",
		fill: "none",
		stroke: "#C9A84C",
		strokeWidth: "1.3",
		strokeLinecap: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 26c-8 0-14-4-14-10 0 6 6 10 14 10s14-4 14-10c0 6-6 10-14 10z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 26V8M22 22c-2-4 0-10 8-14M38 22c2-4 0-10-8-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "6",
				r: "1.6",
				fill: "#C9A84C"
			})
		]
	});
}
function EventCard({ def, info, side, index }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		amount: .2,
		once: true
	});
	const isMain = !!def.isMain;
	const xFrom = side === "left" ? -80 : 80;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `relative w-full md:w-1/2 flex ${side === "left" ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:ml-auto"} pl-12 md:pl-0`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "absolute top-10 left-[12px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#E8C766] shadow-[0_0_14px_4px_rgba(232,199,102,0.6)] animate-pulse"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.article, {
			initial: {
				opacity: 0,
				x: 0,
				y: 60
			},
			animate: inView ? {
				opacity: 1,
				x: 0,
				y: 0
			} : {},
			transition: {
				duration: .6,
				ease: "easeOut",
				delay: index * .05
			},
			style: { ["--x-from"]: `${xFrom}px` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.div, {
				initial: {
					opacity: 0,
					x: 0
				},
				animate: inView ? {
					opacity: 1,
					x: 0
				} : {
					opacity: 0,
					x: xFrom
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				whileTap: { scale: .98 },
				className: `group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5
            ${isMain ? "w-full md:w-[462px] border-2 border-[#E8C766] shadow-[0_10px_50px_rgba(107,15,26,0.35),0_0_30px_rgba(232,199,102,0.35)]" : "w-full md:w-[420px] border border-[rgba(201,168,76,0.4)] shadow-[0_8px_40px_rgba(107,15,26,0.10)] hover:shadow-[0_14px_50px_rgba(107,15,26,0.18)] hover:border-[rgba(201,168,76,0.8)]"}
          `,
				style: isMain ? { background: "linear-gradient(120deg, #6B0F1A 0%, #7d1422 40%, #6B0F1A 100%)" } : { background: "linear-gradient(135deg, #ffffff 0%, #FFFDF5 50%, #ffffff 100%)" },
				children: [isMain && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute inset-0 pointer-events-none opacity-60",
					style: {
						background: "linear-gradient(115deg, transparent 30%, rgba(232,199,102,0.25) 50%, transparent 70%)",
						backgroundSize: "200% 100%",
						animation: "mainShimmer 4s linear infinite"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium bg-[#E8C766] text-[#6B0F1A] -rotate-2 shadow",
					style: { fontFamily: "'Cinzel Decorative', serif" },
					children: "✦ Main Event ✦"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-6 md:p-8 flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							initial: { scale: 0 },
							animate: inView ? { scale: 1 } : {},
							transition: {
								type: "spring",
								stiffness: 220,
								damping: 14,
								delay: .15
							},
							className: `w-12 h-12 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mb-4
                ${isMain ? "bg-[#4a0a13] ring-2 ring-[#E8C766]" : "bg-[#6B0F1A] ring-2 ring-[#C9A84C]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventIcon, {
								type: def.icon,
								isMain
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: `text-[1.3rem] md:text-[1.6rem] leading-tight ${isMain ? "text-[#E8C766]" : "text-[#6B0F1A]"}`,
							style: { fontFamily: "'Cinzel Decorative', serif" },
							children: def.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.span, {
							initial: { scaleX: 0 },
							animate: inView ? { scaleX: 1 } : {},
							transition: {
								duration: .6,
								delay: .3
							},
							className: "block h-[2px] w-10 bg-[#C9A84C] mt-2 mb-4 origin-center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex items-center justify-center gap-4 ${isMain ? "text-[#FDF6EC]" : "text-[#2a1216]"}`,
							style: {
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: "1rem"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", info.date] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: isMain ? "text-[#E8C766]" : "text-[#C9A84C]",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🕐 ", info.time] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							style: { fontFamily: "'Cormorant Garamond', serif" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `text-base md:text-lg font-semibold ${isMain ? "text-[#E8C766]" : "text-[#C9A84C]"}`,
								children: ["📍 ", info.venue]
							}), info.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[0.9rem] mt-1 ${isMain ? "text-[#FDF6EC]/80" : "text-[#2a1216]/70"}`,
								children: info.address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomMotif, { gold: isMain ? "#E8C766" : "#C9A84C" }),
						def.showDirections && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://maps.google.com/?q=${encodeURIComponent((info.venue || "") + " " + (info.address || ""))}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: `mt-5 inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-full text-xs md:text-sm tracking-widest uppercase transition-colors duration-300
                  ${isMain ? "bg-[#E8C766] text-[#6B0F1A] hover:bg-[#FDF6EC]" : "bg-gradient-to-r from-[#6B0F1A] to-[#8a1422] text-[#E8C766] hover:bg-none hover:bg-[#E8C766] hover:text-[#6B0F1A]"}
                `,
							style: { fontFamily: "'Cinzel Decorative', serif" },
							children: "📍 Get Directions"
						})
					]
				})]
			})
		})]
	});
}
function Connector({ variant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative md:hidden pl-12 my-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block w-5 h-5",
			style: { animation: "connectorPulse 2s ease-in-out infinite" },
			children: variant === "lotus" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 20 20",
				fill: "#C9A84C",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 17c-4 0-7-2-7-5 0 3 3 5 7 5s7-2 7-5c0 3-3 5-7 5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 17V5",
					stroke: "#C9A84C",
					strokeWidth: "1.2"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 20 20",
				fill: "#C9A84C",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 2l5 8-5 8-5-8z" })
			})
		})
	});
}
function EventsTimeline() {
	const { config } = useWeddingConfig();
	const headRef = (0, import_react.useRef)(null);
	const headIn = useInView(headRef, {
		amount: .4,
		once: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyMotion, {
		features: domAnimation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "events",
			className: "relative w-full overflow-hidden py-20 md:py-[120px]",
			style: { background: "#FDF6EC" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 pointer-events-none",
					style: {
						opacity: .1,
						backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C9A84C' stroke-width='1'><path d='M60 10c20 10 30 30 20 50s-30 30-50 20-30-30-20-50 30-30 50-20z'/><circle cx='60' cy='60' r='6'/><path d='M30 60c10-20 50-20 60 0M30 60c10 20 50 20 60 0'/></g></svg>\")",
						backgroundSize: "180px 180px"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: headRef,
					className: "relative text-center px-4 mb-14 md:mb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.span, {
							initial: { scaleX: 0 },
							animate: headIn ? { scaleX: 1 } : {},
							transition: { duration: .5 },
							className: "block h-[2px] w-10 bg-[#C9A84C] mx-auto origin-center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: headIn ? {
								opacity: 1,
								y: 0
							} : {},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "mt-4 text-[2rem] md:text-[3rem] text-[#6B0F1A]",
							style: { fontFamily: "'Cinzel Decorative', serif" },
							children: "Our Sacred Celebrations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: headIn ? {
								opacity: 1,
								y: 0
							} : {},
							transition: {
								duration: .6,
								delay: .4
							},
							className: "mt-2 italic text-[#C9A84C] text-[1.1rem]",
							style: { fontFamily: "'Cormorant Garamond', serif" },
							children: "Every moment is a blessing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: headIn ? {
								opacity: 1,
								scale: 1
							} : {},
							transition: {
								duration: .6,
								delay: .6
							},
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniLotus, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-6xl mx-auto px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[2px] md:w-[3px]",
						style: { background: "linear-gradient(to bottom, transparent 0%, #C9A84C 8%, #E8C766 50%, #C9A84C 92%, transparent 100%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-12 md:gap-16",
						children: EVENTS.map((e, i) => {
							const side = i % 2 === 0 ? "left" : "right";
							const info = config[e.key];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
									def: e,
									info,
									side,
									index: i
								}), i < EVENTS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connector, { variant: i % 2 === 0 ? "lotus" : "diamond" })]
							}, e.key);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCalendar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-center mt-16 md:mt-24 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "italic text-[1.2rem] text-[#6B0F1A]",
						style: { fontFamily: "'Cormorant Garamond', serif" },
						children: "We look forward to celebrating with you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-2 mt-4 text-2xl",
						children: [
							0,
							1,
							2,
							3,
							4
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: "#E8C766",
								animation: `twinkle 1.6s ease-in-out ${i * .2}s infinite`,
								textShadow: "0 0 8px rgba(232,199,102,0.6)"
							},
							children: "⭐"
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes diyaFlicker {
            0% { transform: scale(1) translateY(0); opacity: 1; }
            100% { transform: scale(1.08) translateY(-1px); opacity: 0.92; }
          }
          @keyframes mainShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes connectorPulse {
            0%, 100% { transform: scale(1); opacity: 0.85; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.35; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.15); }
          }
        ` })
			]
		})
	});
}
var RELS = [
	"father",
	"mother",
	"brother",
	"sister"
];
var RELATION_LABEL = {
	bride: {
		father: "Father of the Bride",
		mother: "Mother of the Bride",
		brother: "Brother of the Bride",
		sister: "Sister of the Bride"
	},
	groom: {
		father: "Father of the Groom",
		mother: "Mother of the Groom",
		brother: "Brother of the Groom",
		sister: "Sister of the Groom"
	}
};
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}
function RelIcon({ rel }) {
	const stroke = "#E8C766";
	const cls = "w-6 h-6 transition-transform duration-300 group-hover:rotate-[15deg]";
	switch (rel) {
		case "father": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: cls,
			fill: "none",
			stroke,
			strokeWidth: "1.6",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 17l2-9 4 4 3-6 3 6 4-4 2 9z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M3 17h18v2H3z",
					fill: stroke
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "6",
					cy: "7",
					r: "1",
					fill: stroke
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "4",
					r: "1",
					fill: stroke
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "18",
					cy: "7",
					r: "1",
					fill: stroke
				})
			]
		});
		case "mother": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: cls,
			fill: stroke,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2"
			}), Array.from({ length: 6 }).map((_, i) => {
				const a = i * Math.PI / 3;
				const x = 12 + Math.cos(a) * 5;
				const y = 12 + Math.sin(a) * 5;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: x,
					cy: y,
					rx: "2.5",
					ry: "1.5",
					transform: `rotate(${i * 60} ${x} ${y})`
				}, i);
			})]
		});
		case "brother": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: cls,
			fill: "none",
			stroke,
			strokeWidth: "1.6",
			strokeLinecap: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l3 4-2 2 5 5-2 2-5-5-2 2-4-3z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "3",
				r: "0.8",
				fill: stroke
			})]
		});
		case "sister": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: cls,
			fill: "none",
			stroke,
			strokeWidth: "1.6",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 4a8 8 0 100 16 6 6 0 010-16z",
				fill: stroke,
				fillOpacity: "0.3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1z",
				fill: stroke
			})]
		});
	}
}
function MemberCard({ side, rel, name, photo, index }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		amount: .25,
		once: true
	});
	const xFrom = side === "bride" ? -50 : 50;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.div, {
		ref,
		initial: {
			opacity: 0,
			x: xFrom
		},
		animate: inView ? {
			opacity: 1,
			x: 0
		} : {},
		transition: {
			duration: .5,
			delay: index * .15,
			ease: "easeOut"
		},
		className: "group flex w-full items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-[3px]",
		style: {
			background: "rgba(255,255,255,0.06)",
			backdropFilter: "blur(12px)",
			border: "1px solid rgba(201,168,76,0.3)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(201,168,76,0.6)] sm:h-[72px] sm:w-[72px] md:h-[88px] md:w-[88px]",
				style: { border: "3px solid #C9A84C" },
				children: photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo,
					alt: `${rel} of the ${side}`,
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full w-full place-items-center",
					style: {
						background: "linear-gradient(135deg, #C9A84C 0%, #F5E6A3 50%, #C9A84C 100%)",
						color: "#6B0F1A",
						fontFamily: "'Cinzel Decorative', serif",
						fontSize: "1.2rem"
					},
					children: initials(name) || "?"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic",
					style: {
						color: "#E8C766",
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: "0.85rem"
					},
					children: RELATION_LABEL[side][rel]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					style: {
						color: "#FDF6EC",
						fontFamily: "'Cinzel Decorative', serif",
						fontSize: "1.1rem"
					},
					children: name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelIcon, { rel })
			})
		]
	});
}
function ColumnHeader({ side, fullName }) {
	const isBride = side === "bride";
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		amount: .4,
		once: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.div, {
		ref,
		initial: {
			opacity: 0,
			x: isBride ? -60 : 60
		},
		animate: inView ? {
			opacity: 1,
			x: 0
		} : {},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: "w-full rounded-2xl p-5 text-center",
		style: {
			background: isBride ? "linear-gradient(135deg, #C9A84C 0%, #F5E6A3 50%, #C9A84C 100%)" : "linear-gradient(135deg, #6B0F1A 0%, #8B1A2A 50%, #6B0F1A 100%)",
			border: `2px solid ${isBride ? "#6B0F1A" : "#E8C766"}`,
			boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-2 grid h-10 w-10 place-items-center",
				children: isBride ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 32 32",
					className: "h-8 w-8",
					fill: "#6B0F1A",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "3"
					}), Array.from({ length: 8 }).map((_, i) => {
						const a = i * Math.PI / 4;
						const x = 16 + Math.cos(a) * 7;
						const y = 16 + Math.sin(a) * 7;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: x,
							cy: y,
							rx: "3.4",
							ry: "2",
							transform: `rotate(${i * 45} ${x} ${y})`
						}, i);
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 32 32",
					className: "h-8 w-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M6 20c1 4 5 6 10 6s9-2 10-6z",
							fill: "#E8C766"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M4 20h24",
							stroke: "#E8C766",
							strokeWidth: "1.4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "16",
							cy: "14",
							rx: "2",
							ry: "4",
							fill: "#FFB84D"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				style: {
					color: isBride ? "#6B0F1A" : "#E8C766",
					fontFamily: "'Cinzel Decorative', serif",
					fontSize: "1.4rem"
				},
				children: isBride ? "Bride's Family" : "Groom's Family"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1",
				style: {
					color: isBride ? "#6B0F1A" : "#E8C766",
					fontFamily: "'Great Vibes', cursive",
					fontSize: "1.6rem",
					lineHeight: 1.1
				},
				children: fullName
			})
		]
	});
}
function FloatingDots() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: 14 }).map((_, i) => {
			const left = i * 73 % 100;
			const top = i * 37 % 100;
			const dur = 14 + i % 5 * 3;
			const size = 3 + i % 3;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full",
				style: {
					left: `${left}%`,
					top: `${top}%`,
					width: size,
					height: size,
					background: "#E8C766",
					opacity: .5,
					boxShadow: "0 0 8px rgba(232,199,102,0.7)",
					animation: `familyDrift ${dur}s ease-in-out ${i * .4}s infinite alternate`
				}
			}, i);
		})
	});
}
function Rings() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		amount: .5,
		once: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 140 80",
		className: "mx-auto h-16 w-32",
		fill: "none",
		stroke: "#E8C766",
		strokeWidth: "2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "55",
			cy: "40",
			r: "26",
			strokeDasharray: "170",
			strokeDashoffset: inView ? 0 : 170,
			style: { transition: "stroke-dashoffset 1.4s ease-out" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "90",
			cy: "40",
			r: "26",
			strokeDasharray: "170",
			strokeDashoffset: inView ? 0 : 170,
			style: { transition: "stroke-dashoffset 1.4s ease-out 0.4s" }
		})]
	});
}
function FamilySection() {
	const { config } = useWeddingConfig();
	const headRef = (0, import_react.useRef)(null);
	const headIn = useInView(headRef, {
		amount: .3,
		once: true
	});
	const renderColumn = (side) => {
		const fam = config.family[side];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColumnHeader, {
				side,
				fullName: side === "bride" ? config.brideName : config.groomName
			}), RELS.map((rel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
				side,
				rel,
				name: fam[rel],
				photo: fam[`${rel}Photo`],
				index: i
			}, rel))]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyMotion, {
		features: domAnimation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "family",
			className: "relative w-full overflow-hidden py-20 md:py-[120px]",
			style: { background: "#6B0F1A" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 pointer-events-none",
					style: {
						opacity: .05,
						backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><g fill='none' stroke='%23E8C766' stroke-width='0.8'><path d='M50 5l45 45-45 45L5 50z'/><circle cx='50' cy='50' r='20'/><path d='M5 50h90M50 5v90'/></g></svg>\")",
						backgroundSize: "140px 140px",
						animation: "familyPattern 60s linear infinite"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDots, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: headRef,
					className: "relative text-center px-4 mb-12 md:mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: headIn ? {
								opacity: 1,
								y: 0
							} : {},
							transition: { duration: .5 },
							className: "mx-auto mb-3 h-8 w-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 48 32",
								fill: "#E8C766",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 28h40v-4l-8-6 4-8-6 4-6-10-6 10-6-4 4 8-8 6z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "24",
									cy: "6",
									r: "2"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: headIn ? {
								opacity: 1,
								y: 0
							} : {},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "text-[1.8rem] md:text-[2.8rem]",
							style: {
								color: "#E8C766",
								fontFamily: "'Cinzel Decorative', serif"
							},
							children: "Families of the Blessed Union"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: headIn ? {
								opacity: 1,
								y: 0
							} : {},
							transition: {
								duration: .6,
								delay: .4
							},
							className: "mt-2 italic",
							style: {
								color: "#FDF6EC",
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: "1rem"
							},
							children: "With the blessings of our beloved families"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: headIn ? {
								opacity: 1,
								scale: 1
							} : {},
							transition: {
								duration: .5,
								delay: .6
							},
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 60 30",
								className: "mx-auto h-7 w-14",
								fill: "none",
								stroke: "#E8C766",
								strokeWidth: "1.3",
								strokeLinecap: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 24c-7 0-12-3-12-9 0 6 5 9 12 9s12-3 12-9c0 6-5 9-12 9z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 24V8" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "30",
										cy: "6",
										r: "1.4",
										fill: "#E8C766"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-[60px]",
						children: [
							renderColumn("bride"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative hidden md:flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]",
									style: { background: "linear-gradient(to bottom, transparent, #C9A84C 12%, #E8C766 50%, #C9A84C 88%, transparent)" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sticky top-1/2 -translate-y-1/2 flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-[120px] w-[120px] place-items-center rounded-full",
										style: {
											border: "2px dashed #E8C766",
											background: "rgba(0,0,0,0.25)",
											animation: "ringSpin 20s linear infinite"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 80 80",
											className: "h-16 w-16",
											style: { animation: "ringSpin 20s linear infinite reverse" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
												fill: "#E8C766",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "28",
														cy: "32",
														r: "8"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 60c0-8 4-14 8-14s8 6 8 14z" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "52",
														cy: "32",
														r: "8"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M44 60c0-8 4-14 8-14s8 6 8 14z" })
												]
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-center",
										style: {
											color: "#E8C766",
											fontFamily: "'Great Vibes', cursive",
											fontSize: "1.2rem"
										},
										children: "United by Love"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 md:hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-px flex-1",
										style: { background: "linear-gradient(to right, transparent, #C9A84C)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "#E8C766",
											fontFamily: "'Great Vibes', cursive",
											fontSize: "1.4rem"
										},
										children: "❝ United by Love ❞"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-px flex-1",
										style: { background: "linear-gradient(to left, transparent, #C9A84C)" }
									})
								]
							}),
							renderColumn("groom")
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-16 px-4 text-center md:mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rings, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 italic",
						style: {
							color: "#FDF6EC",
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: "1rem"
						},
						children: "With the blessings of both families"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes familyDrift {
            0% { transform: translateY(0) translateX(0); opacity: 0.35; }
            100% { transform: translateY(-30px) translateX(12px); opacity: 0.9; }
          }
          @keyframes familyPattern {
            0% { background-position: 0 0; }
            100% { background-position: 140px 140px; }
          }
          @keyframes ringSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        ` })
			]
		})
	});
}
var BURGUNDY$2 = "#6B0F1A";
var GOLD$2 = "#C9A84C";
var GOLD_LIGHT$2 = "#F5E6A3";
var CREAM$2 = "#FDF6EC";
var PAISLEY_BG = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C9A84C' stroke-width='1' opacity='0.5'><circle cx='60' cy='60' r='28'/><path d='M60 32 C 80 40 80 80 60 88 C 40 80 40 40 60 32 Z'/><circle cx='60' cy='60' r='6'/></g></svg>\")";
function LotusDivider$2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "120",
		height: "22",
		viewBox: "0 0 120 22",
		className: "mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "11",
				x2: "44",
				y2: "11",
				stroke: GOLD$2,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "76",
				y1: "11",
				x2: "120",
				y2: "11",
				stroke: GOLD$2,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 4 C66 8 66 14 60 18 C54 14 54 8 60 4 Z",
				fill: GOLD$2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "11",
				r: "1.5",
				fill: BURGUNDY$2
			})
		]
	});
}
function CameraIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
		width: "36",
		height: "36",
		viewBox: "0 0 36 36",
		initial: { scale: 1 },
		whileInView: { scale: [
			1,
			.85,
			1
		] },
		viewport: {
			once: true,
			amount: .6
		},
		transition: { duration: .3 },
		className: "mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "9",
				width: "30",
				height: "20",
				rx: "3",
				fill: "none",
				stroke: GOLD$2,
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "13",
				y: "5",
				width: "10",
				height: "6",
				rx: "1.5",
				fill: "none",
				stroke: GOLD$2,
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "19",
				r: "6",
				fill: "none",
				stroke: GOLD$2,
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "19",
				r: "2.5",
				fill: GOLD$2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "14",
				r: "1.2",
				fill: GOLD$2
			})
		]
	});
}
function FilmStrip({ photos, onOpen }) {
	const loop = [...photos, ...photos];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative my-8 overflow-hidden rounded-md",
		style: {
			background: "#2C1810",
			border: `1px solid ${GOLD$2}40`
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-between px-2 py-1",
				children: Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-2 w-2 rounded-full",
					style: { background: GOLD$2 }
				}, `t${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex gap-3 px-3 py-2",
					animate: { x: ["0%", "-50%"] },
					transition: {
						duration: 20,
						ease: "linear",
						repeat: Infinity
					},
					style: { width: "max-content" },
					children: loop.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onOpen(i % photos.length),
						className: "relative shrink-0 overflow-hidden rounded",
						style: {
							width: "var(--strip-w, 120px)",
							aspectRatio: "16/9",
							border: `1px solid ${GOLD$2}80`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-between px-2 py-1",
				children: Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-2 w-2 rounded-full",
					style: { background: GOLD$2 }
				}, `b${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@media (max-width: 640px){ .film-strip-mobile{--strip-w:90px;} }` })
		]
	});
}
function PhotoCard({ src, index, height, onOpen }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 40
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .6,
			delay: index * .1,
			ease: "easeOut"
		},
		onClick: () => onOpen(index),
		className: "group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-xl",
		style: {
			height,
			breakInside: "avoid",
			border: `1px solid ${GOLD$2}50`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			loading: "lazy",
			alt: `Memory ${index + 1}`,
			className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0",
			style: { background: "rgba(107,15,26,0.5)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-3 top-3",
				style: { color: GOLD_LIGHT$2 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { size: 20 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, {
					size: 40,
					color: GOLD_LIGHT$2,
					className: "scale-0 transition-transform duration-300 group-hover:scale-100"
				})
			})]
		})]
	});
}
function Lightbox({ photos, index, onClose, onIndex }) {
	const next = (0, import_react.useCallback)(() => onIndex((index + 1) % photos.length), [
		index,
		photos.length,
		onIndex
	]);
	const prev = (0, import_react.useCallback)(() => onIndex((index - 1 + photos.length) % photos.length), [
		index,
		photos.length,
		onIndex
	]);
	const [dir, setDir] = (0, import_react.useState)(0);
	const touchX = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowRight") {
				setDir(1);
				next();
			} else if (e.key === "ArrowLeft") {
				setDir(-1);
				prev();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		next,
		prev,
		onClose
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-[9999] flex items-center justify-center",
		style: {
			background: "rgba(0,0,0,0.92)",
			backdropFilter: "blur(4px)"
		},
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					setDir(-1);
					prev();
				},
				"aria-label": "Previous",
				className: "fixed left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full sm:left-4 sm:h-12 sm:w-12",
				style: {
					background: GOLD$2,
					color: BURGUNDY$2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					setDir(1);
					next();
				},
				"aria-label": "Next",
				className: "fixed right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full sm:right-4 sm:h-12 sm:w-12",
				style: {
					background: GOLD$2,
					color: BURGUNDY$2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onClose();
				},
				"aria-label": "Close",
				className: "fixed right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full text-[#2C1810] sm:h-12 sm:w-12",
				style: { background: "rgba(255,255,255,0.85)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex max-h-[85vh] max-w-[90vw] items-center justify-center overflow-hidden",
				onClick: (e) => e.stopPropagation(),
				onTouchStart: (e) => touchX.current = e.touches[0].clientX,
				onTouchEnd: (e) => {
					if (touchX.current == null) return;
					const dx = e.changedTouches[0].clientX - touchX.current;
					if (dx < -50) {
						setDir(1);
						next();
					} else if (dx > 50) {
						setDir(-1);
						prev();
					}
					touchX.current = null;
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					initial: false,
					custom: dir,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: photos[index],
						alt: `Photo ${index + 1}`,
						initial: {
							x: dir >= 0 ? "100%" : "-100%",
							opacity: .6
						},
						animate: {
							x: 0,
							opacity: 1
						},
						exit: {
							x: dir >= 0 ? "-100%" : "100%",
							opacity: .6
						},
						transition: {
							duration: .35,
							ease: "easeInOut"
						},
						className: "max-h-[85vh] max-w-[90vw] rounded-lg object-contain",
						style: { border: `2px solid ${GOLD$2}66` }
					}, index)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-24 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1 text-xs tracking-[0.2em]",
				style: {
					background: "rgba(0,0,0,0.55)",
					color: GOLD_LIGHT$2,
					fontFamily: "var(--font-royal)",
					border: `1px solid ${GOLD$2}55`
				},
				children: [
					index + 1,
					" / ",
					photos.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-3 left-1/2 z-10 flex max-w-[96vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-lg px-2 py-2",
				style: { background: "rgba(0,0,0,0.45)" },
				onClick: (e) => e.stopPropagation(),
				children: photos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setDir(i > index ? 1 : -1);
						onIndex(i);
					},
					className: "shrink-0 overflow-hidden rounded",
					style: {
						width: 60,
						height: 45,
						border: i === index ? `2px solid ${GOLD$2}` : `1px solid ${GOLD$2}40`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "h-full w-full object-cover"
					})
				}, i))
			})
		]
	});
}
function PhotoBooth({ photo, bride, groom, date }) {
	const frameRef = (0, import_react.useRef)(null);
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	const download = async () => {
		if (!frameRef.current) return;
		setDownloading(true);
		try {
			const { default: html2canvas } = await import("../_libs/html2canvas.mjs").then((n) => n.t);
			const canvas = await html2canvas(frameRef.current, {
				backgroundColor: null,
				useCORS: true,
				scale: 2
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				style: {
					fontFamily: "var(--font-royal)",
					color: BURGUNDY$2,
					fontSize: "1.4rem",
					fontWeight: 700
				},
				children: "📸 Strike a Pose!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1",
				style: {
					fontFamily: "var(--font-serif-elegant)",
					fontStyle: "italic",
					color: GOLD$2
				},
				children: "Download your favorite with our wedding frame"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-6 flex flex-col items-center gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: frameRef,
					className: "relative w-[92vw] max-w-md overflow-hidden rounded-xl p-3",
					style: {
						background: `linear-gradient(135deg, ${BURGUNDY$2}, #4a0a13)`,
						border: `3px double ${GOLD$2}`,
						boxShadow: `0 0 0 6px ${CREAM$2}, 0 0 0 8px ${GOLD$2}`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-t-[120px] rounded-b-md p-3",
						style: { background: `linear-gradient(180deg, ${GOLD_LIGHT$2}, ${GOLD$2})` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-4 pt-2 pb-3 text-center",
								style: {
									fontFamily: "var(--font-script, 'Great Vibes', cursive)",
									color: BURGUNDY$2,
									fontSize: "1.4rem",
									lineHeight: 1.1
								},
								children: [
									groom,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { fontFamily: "var(--font-royal)" },
										children: "&"
									}),
									" ",
									bride
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-md",
								style: { border: `2px solid ${BURGUNDY$2}` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo,
									alt: "frame",
									crossOrigin: "anonymous",
									className: "block h-64 w-full object-cover sm:h-80"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-center uppercase tracking-[0.25em]",
								style: {
									fontFamily: "var(--font-royal)",
									color: BURGUNDY$2,
									fontSize: "0.7rem"
								},
								children: date
							})
						]
					}), [
						"tl",
						"tr",
						"bl",
						"br"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute h-5 w-5",
						style: {
							top: c.startsWith("t") ? 6 : "auto",
							bottom: c.startsWith("b") ? 6 : "auto",
							left: c.endsWith("l") ? 6 : "auto",
							right: c.endsWith("r") ? 6 : "auto",
							border: `2px solid ${GOLD$2}`,
							borderRadius: 4
						}
					}, c))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: download,
					disabled: downloading,
					className: "group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] shadow-lg transition hover:scale-[1.02]",
					style: {
						background: `linear-gradient(135deg, ${GOLD_LIGHT$2}, ${GOLD$2})`,
						color: BURGUNDY$2,
						fontFamily: "var(--font-royal)",
						border: `1.5px solid ${BURGUNDY$2}`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative z-10 inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloading ? "Preparing…" : "Download Frame"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" })]
				})]
			})
		]
	});
}
function PhotoGallery() {
	const { config } = useWeddingConfig();
	const photos = config.photos.filter(Boolean);
	const [lightboxIdx, setLightboxIdx] = (0, import_react.useState)(null);
	const open = (i) => setLightboxIdx(i);
	const close = () => setLightboxIdx(null);
	const featured = photos[0];
	const rest = photos.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:px-10 md:py-[120px]",
		style: { background: CREAM$2 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: {
					backgroundImage: PAISLEY_BG,
					backgroundSize: "120px 120px",
					opacity: .08
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							amount: .3
						},
						variants: {
							hidden: {},
							show: { transition: { staggerChildren: .2 } }
						},
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										y: 10
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraIcon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: {
									hidden: {
										opacity: 0,
										y: 16
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								className: "mt-3",
								style: {
									fontFamily: "var(--font-royal)",
									color: BURGUNDY$2,
									fontSize: "clamp(2rem, 5vw, 3rem)",
									lineHeight: 1.1
								},
								children: "Captured Moments"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: {
									hidden: {
										opacity: 0,
										y: 10
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								className: "mt-2",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									fontStyle: "italic",
									color: GOLD$2,
									fontSize: "1.1rem"
								},
								children: "Every picture tells our love story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: { opacity: 0 },
									show: { opacity: 1 }
								},
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusDivider$2, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "film-strip-mobile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmStrip, {
							photos,
							onOpen: open
						})
					}),
					featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						transition: { duration: .7 },
						className: "mx-auto mb-10 mt-2 max-w-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cursor-pointer overflow-hidden rounded-2xl",
							onClick: () => open(0),
							style: {
								outline: `3px solid ${GOLD$2}`,
								outlineOffset: "6px",
								border: `1px solid ${GOLD$2}80`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: featured,
								alt: "Our Story Begins",
								loading: "lazy",
								className: "block h-[280px] w-full object-cover sm:h-[420px]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							whileInView: { opacity: 1 },
							viewport: { once: true },
							transition: {
								delay: .4,
								duration: .6
							},
							className: "mt-6 text-center",
							style: {
								fontFamily: "var(--font-serif-elegant)",
								fontStyle: "italic",
								color: BURGUNDY$2,
								fontSize: "1.1rem"
							},
							children: "❝ Our Story Begins ❞"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								columnCount: 3,
								columnGap: 16
							},
							children: rest.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
								src,
								index: i + 1,
								height: i % 2 === 0 ? 380 : 260,
								onOpen: open
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 md:hidden",
						children: rest.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
							src,
							index: i + 1,
							height: 220,
							onOpen: open
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoBooth, {
						photo: featured || "",
						bride: config.brideName,
						groom: config.groomName,
						date: config.weddingDate
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightboxIdx !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				photos,
				index: lightboxIdx,
				onIndex: setLightboxIdx,
				onClose: close
			}) })
		]
	});
}
var BURGUNDY$1 = "#6B0F1A";
var BURGUNDY_DEEP$1 = "#4a0a13";
var GOLD$1 = "#C9A84C";
var GOLD_LIGHT$1 = "#F5E6A3";
var CREAM$1 = "#FDF6EC";
var VENUE_PHONE = "+919876543210";
function LotusDivider$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "120",
		height: "22",
		viewBox: "0 0 120 22",
		className: "mx-auto",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "11",
				x2: "44",
				y2: "11",
				stroke: GOLD$1,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "76",
				y1: "11",
				x2: "120",
				y2: "11",
				stroke: GOLD$1,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 4 C66 8 66 14 60 18 C54 14 54 8 60 4 Z",
				fill: GOLD$1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "11",
				r: "1.5",
				fill: BURGUNDY$1
			})
		]
	});
}
function Gopuram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
		width: "64",
		height: "40",
		viewBox: "0 0 64 40",
		initial: {
			scale: .8,
			opacity: 0
		},
		whileInView: {
			scale: 1,
			opacity: 1
		},
		viewport: {
			once: true,
			amount: .5
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: "mx-auto",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: GOLD$1,
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6",
					y: "30",
					width: "52",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "10,30 32,4 54,30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "16,30 32,12 48,30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "32",
					y1: "2",
					x2: "32",
					y2: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "1.5",
					r: "1.5",
					fill: GOLD$1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "14",
					y1: "38",
					x2: "14",
					y2: "40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "50",
					y1: "38",
					x2: "50",
					y2: "40"
				})
			]
		})
	});
}
function MandalaBg() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
		viewBox: "0 0 400 400",
		className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20",
		style: {
			width: "min(140vw, 1200px)",
			height: "min(140vw, 1200px)",
			filter: "blur(2px)"
		},
		animate: { scale: [
			1,
			1.08,
			1
		] },
		transition: {
			duration: 12,
			repeat: Infinity,
			ease: "easeInOut"
		},
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: GOLD$1,
			strokeWidth: "0.6",
			children: [
				Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "200",
					y1: "200",
					x2: "200",
					y2: "20",
					transform: `rotate(${i * 360 / 24} 200 200)`
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "200",
					r: "60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "200",
					r: "100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "200",
					r: "140"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "200",
					r: "180"
				}),
				Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M200 60 C220 100 220 140 200 180 C180 140 180 100 200 60 Z",
					transform: `rotate(${i * 360 / 12} 200 200)`
				}, `p${i}`))
			]
		})
	});
}
function Particles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: 12 }).map(() => ({
			x: Math.random() * 100,
			d: 6 + Math.random() * 8,
			delay: Math.random() * 6,
			size: 2 + Math.random() * 3
		})), []).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute rounded-full",
			style: {
				left: `${p.x}%`,
				bottom: -10,
				width: p.size,
				height: p.size,
				background: GOLD_LIGHT$1,
				boxShadow: `0 0 8px ${GOLD$1}`
			},
			animate: {
				y: ["0vh", "-110vh"],
				opacity: [
					0,
					1,
					0
				]
			},
			transition: {
				duration: p.d,
				repeat: Infinity,
				ease: "linear",
				delay: p.delay
			}
		}, i))
	});
}
function GlassCard({ children, className = "", style = {}, fromLeft = true, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			x: fromLeft ? -80 : 80,
			opacity: 0
		},
		whileInView: {
			x: 0,
			opacity: 1
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .7,
			delay,
			ease: "easeOut"
		},
		className: `relative rounded-[20px] p-6 sm:p-8 ${className}`,
		style: {
			background: "rgba(255,255,255,0.06)",
			backdropFilter: "blur(16px)",
			border: `1.5px solid ${GOLD$1}59`,
			...style
		},
		children
	});
}
function ShimmerPill({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `relative inline-flex overflow-hidden rounded-full px-3 py-1 ${className}`,
		style: {
			background: `linear-gradient(135deg, ${GOLD_LIGHT$1}, ${GOLD$1})`,
			color: BURGUNDY$1,
			fontFamily: "var(--font-royal)",
			fontSize: "0.7rem",
			letterSpacing: "0.15em"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 uppercase",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute inset-y-0 left-0 w-1/3",
			style: { background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)" },
			animate: { x: ["-120%", "320%"] },
			transition: {
				duration: 2.6,
				repeat: Infinity,
				ease: "easeInOut"
			}
		})]
	});
}
function GoldButton({ children, href, onClick, outlined = false, full = false, type = "button", disabled = false }) {
	const cls = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.15em] uppercase transition disabled:opacity-60 ${full ? "w-full" : ""}`;
	const style = outlined ? {
		border: `1.5px solid ${GOLD$1}`,
		color: GOLD_LIGHT$1,
		background: "transparent",
		fontFamily: "var(--font-royal)"
	} : {
		background: `linear-gradient(135deg, ${GOLD_LIGHT$1}, ${GOLD$1})`,
		color: BURGUNDY$1,
		border: `1.5px solid ${BURGUNDY$1}`,
		fontFamily: "var(--font-royal)"
	};
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative z-10",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" })] });
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cls,
		style,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: cls,
		style,
		children: inner
	});
}
function DiamondChain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "100%",
		height: "10",
		viewBox: "0 0 200 10",
		preserveAspectRatio: "none",
		className: "my-4",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "diamondP",
			width: "14",
			height: "10",
			patternUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 1 L13 5 L7 9 L1 5 Z",
				fill: GOLD$1,
				opacity: "0.85"
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "200",
			height: "10",
			fill: "url(#diamondP)"
		})]
	});
}
function TransportCard({ icon, title, primary, distance, tip, cta, href, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .9
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .3
		},
		transition: {
			duration: .4,
			delay,
			ease: "easeOut"
		},
		className: "flex shrink-0 snap-start flex-col items-center gap-2 rounded-[14px] p-5 text-center",
		style: {
			background: `${GOLD$1}14`,
			border: `1px solid ${GOLD$1}40`,
			minWidth: 220
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { color: GOLD$1 },
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				style: {
					fontFamily: "var(--font-royal)",
					color: GOLD$1,
					fontSize: "1rem"
				},
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					color: CREAM$1,
					fontFamily: "var(--font-serif-elegant)",
					fontSize: "0.9rem"
				},
				children: primary
			}),
			distance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					color: CREAM$1,
					fontFamily: "var(--font-serif-elegant)",
					fontSize: "0.85rem",
					opacity: .85
				},
				children: distance
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "italic",
				style: {
					color: CREAM$1,
					fontFamily: "var(--font-serif-elegant)",
					fontSize: "0.85rem",
					opacity: .8
				},
				children: tip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-1 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition hover:bg-[#C9A84C]/10",
				style: {
					border: `1px solid ${GOLD$1}`,
					color: GOLD$1,
					fontFamily: "var(--font-royal)"
				},
				children: cta
			})
		]
	});
}
var CarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	width: "36",
	height: "36",
	viewBox: "0 0 36 36",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.6",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 22 L8 14 H28 L30 22 V28 H6 Z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "28",
			r: "2.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "25",
			cy: "28",
			r: "2.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "9",
			y1: "22",
			x2: "27",
			y2: "22"
		})
	]
});
var TrainIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	width: "36",
	height: "36",
	viewBox: "0 0 36 36",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.6",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "6",
			width: "20",
			height: "22",
			rx: "4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "8",
			y1: "18",
			x2: "28",
			y2: "18"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "13",
			cy: "23",
			r: "1.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "23",
			cy: "23",
			r: "1.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "11",
			y1: "30",
			x2: "7",
			y2: "34"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "25",
			y1: "30",
			x2: "29",
			y2: "34"
		})
	]
});
var PlaneIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: "36",
	height: "36",
	viewBox: "0 0 36 36",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.6",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M4 20 L32 12 L28 22 L18 22 L14 30 L12 30 L13 22 L4 22 Z",
		fill: "currentColor",
		fillOpacity: "0.15"
	})
});
var CompassIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: GOLD$1,
	strokeWidth: "1.6",
	initial: { rotate: 0 },
	whileInView: { rotate: 360 },
	viewport: {
		once: true,
		amount: .5
	},
	transition: {
		duration: 1.2,
		ease: "easeOut"
	},
	"aria-hidden": true,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
		points: "12,5 14,12 12,19 10,12",
		fill: GOLD$1
	})]
});
var SareeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	width: "40",
	height: "40",
	viewBox: "0 0 40 40",
	fill: "none",
	stroke: GOLD$1,
	strokeWidth: "1.6",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4 L24 10 L34 36 H6 L16 10 Z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 18 Q20 22 26 18" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "20",
			cy: "7",
			r: "1.5",
			fill: GOLD$1
		})
	]
});
var EnvelopeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
	width: "36",
	height: "36",
	viewBox: "0 0 36 36",
	fill: "none",
	stroke: GOLD$1,
	strokeWidth: "1.6",
	animate: { y: [
		0,
		-4,
		0
	] },
	transition: {
		duration: 3,
		repeat: Infinity,
		ease: "easeInOut"
	},
	"aria-hidden": true,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "8",
			width: "28",
			height: "20",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10 L18 20 L32 10" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 22 L18 26" })
	]
});
var HastamelapIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
	width: "80",
	height: "50",
	viewBox: "0 0 80 50",
	fill: "none",
	stroke: GOLD$1,
	strokeWidth: "1.5",
	initial: {
		pathLength: 0,
		opacity: 0
	},
	whileInView: {
		pathLength: 1,
		opacity: 1
	},
	viewport: {
		once: true,
		amount: .5
	},
	transition: {
		duration: 1.6,
		ease: "easeOut"
	},
	"aria-hidden": true,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
		d: "M10 35 Q20 15 32 25 L40 30 L48 25 Q60 15 70 35",
		initial: { pathLength: 0 },
		whileInView: { pathLength: 1 },
		viewport: { once: true },
		transition: { duration: 1.6 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
		d: "M32 25 L36 18 M40 30 L40 18 M48 25 L44 18",
		initial: { pathLength: 0 },
		whileInView: { pathLength: 1 },
		viewport: { once: true },
		transition: {
			duration: 1.6,
			delay: .3
		}
	})]
});
function Confetti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: 40 }).map(() => ({
			x: Math.random() * 100,
			d: 1.6 + Math.random() * 1.4,
			delay: Math.random() * .6,
			color: Math.random() > .5 ? GOLD$1 : BURGUNDY$1,
			rot: Math.random() * 360
		})), []).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute",
			style: {
				left: `${p.x}%`,
				top: -10,
				width: 6,
				height: 10,
				background: p.color,
				transform: `rotate(${p.rot}deg)`
			},
			initial: {
				y: 0,
				opacity: 0
			},
			animate: {
				y: "120vh",
				opacity: [
					0,
					1,
					1,
					0
				],
				rotate: p.rot + 360
			},
			transition: {
				duration: p.d,
				delay: p.delay,
				ease: "easeIn"
			}
		}, i))
	});
}
function RsvpForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)("Just me");
	const [attending, setAttending] = (0, import_react.useState)("yes");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const inputStyle = {
		background: "rgba(255,255,255,0.08)",
		border: `1px solid ${GOLD$1}66`,
		borderRadius: 8,
		color: CREAM$1,
		fontFamily: "var(--font-serif-elegant)",
		padding: "12px 14px",
		width: "100%",
		minHeight: 44,
		outline: "none"
	};
	const submit = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setErr("Please enter your name");
			return;
		}
		setErr(null);
		setLoading(true);
		setTimeout(() => {
			console.log("RSVP", {
				name,
				phone,
				guests,
				attending,
				message
			});
			setLoading(false);
			setDone(true);
		}, 1500);
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { fontSize: "2rem" },
				children: "✅"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 italic",
				style: {
					color: GOLD$1,
					fontFamily: "var(--font-serif-elegant)",
					fontSize: "1rem"
				},
				children: "Thank you! We can't wait to celebrate with you!"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-5 space-y-3",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .rsvp-input::placeholder { color: ${GOLD$1}66; }
        .rsvp-input:focus { border-color: ${GOLD$1} !important; box-shadow: 0 0 0 3px ${GOLD$1}33; }
        .rsvp-input:focus-visible { outline: 2px solid ${GOLD$1}; outline-offset: 2px; }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "rsvp-name",
				children: "Your Name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "rsvp-name",
				className: "rsvp-input",
				style: {
					...inputStyle,
					borderColor: err ? "#ef4444" : `${GOLD$1}66`
				},
				placeholder: "Enter your name...",
				value: name,
				onChange: (e) => setName(e.target.value),
				maxLength: 100,
				required: true
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs",
				style: { color: "#fca5a5" },
				children: err
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "rsvp-phone",
				children: "Phone or WhatsApp Number"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "rsvp-phone",
				type: "tel",
				className: "rsvp-input",
				style: inputStyle,
				placeholder: "Phone / WhatsApp number",
				value: phone,
				onChange: (e) => setPhone(e.target.value),
				maxLength: 20
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "rsvp-guests",
				children: "Number of Guests"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "rsvp-guests",
				className: "rsvp-input",
				style: inputStyle,
				value: guests,
				onChange: (e) => setGuests(e.target.value),
				children: [
					"Just me",
					"2",
					"3",
					"4",
					"5+"
				].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: g,
					style: {
						background: BURGUNDY_DEEP$1,
						color: CREAM$1
					},
					children: g
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-1 text-sm",
					style: {
						color: CREAM$1,
						fontFamily: "var(--font-serif-elegant)"
					},
					children: "Will you attend?"
				}), [{
					v: "yes",
					l: "Joyfully Attending"
				}, {
					v: "no",
					l: "Unable to Attend"
				}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3",
					style: {
						color: CREAM$1,
						fontFamily: "var(--font-serif-elegant)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-5 w-5 place-items-center rounded-full",
							style: { border: `2px solid ${GOLD$1}` },
							children: attending === o.v && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2.5 w-2.5 rounded-full",
								style: { background: GOLD$1 }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "attend",
							className: "sr-only",
							value: o.v,
							checked: attending === o.v,
							onChange: () => setAttending(o.v)
						}),
						o.l
					]
				}, o.v))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "rsvp-msg",
				children: "Message to the couple"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "rsvp-msg",
				rows: 3,
				className: "rsvp-input",
				style: {
					...inputStyle,
					resize: "vertical"
				},
				placeholder: "Share your blessings...",
				value: message,
				onChange: (e) => setMessage(e.target.value),
				maxLength: 500
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: loading,
				className: "group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-full disabled:opacity-70",
				style: {
					background: `linear-gradient(135deg, ${GOLD_LIGHT$1}, ${GOLD$1})`,
					color: BURGUNDY$1,
					border: `1.5px solid ${BURGUNDY$1}`,
					fontFamily: "var(--font-royal)",
					height: 52
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#6B0F1A] border-t-transparent" }) : "Send My RSVP 💌"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" })]
			})
		]
	});
}
function VenueSection() {
	const { config } = useWeddingConfig();
	const fullAddress = `${config.venue} ${config.venueAddress}`;
	const mapsQ = encodeURIComponent(fullAddress);
	const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQ}`;
	const embedSrc = `https://maps.google.com/maps?q=${mapsQ}&output=embed&z=15`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "venue",
		className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:px-10 md:py-[120px]",
		style: { background: BURGUNDY$1 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes borderShimmer {
          0%, 100% { box-shadow: 0 0 0 1px ${GOLD$1}, 0 0 12px ${GOLD$1}55; }
          50% { box-shadow: 0 0 0 1px ${GOLD_LIGHT$1}, 0 0 28px ${GOLD$1}aa; }
        }
        .rsvp-card { animation: borderShimmer 2s ease-in-out infinite; }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandalaBg, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							amount: .3
						},
						variants: {
							hidden: {},
							show: { transition: { staggerChildren: .2 } }
						},
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										y: 10
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gopuram, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: {
									hidden: {
										opacity: 0,
										y: 16
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								className: "mt-3",
								style: {
									fontFamily: "var(--font-royal)",
									color: GOLD$1,
									fontSize: "clamp(2rem, 5vw, 3rem)",
									lineHeight: 1.1
								},
								children: "The Sacred Venue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: {
									hidden: {
										opacity: 0,
										y: 10
									},
									show: {
										opacity: 1,
										y: 0
									}
								},
								className: "mt-2 italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: CREAM$1,
									fontSize: "1.1rem"
								},
								children: "Where two souls become one"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: { opacity: 0 },
									show: { opacity: 1 }
								},
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusDivider$1, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							fromLeft: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerPill, { children: "Main Celebration" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4",
									style: {
										fontFamily: "var(--font-royal)",
										color: GOLD$1,
										fontSize: "clamp(1.6rem, 3vw, 2rem)",
										lineHeight: 1.15
									},
									children: config.venue
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
									height: "3",
									viewBox: "0 0 200 3",
									preserveAspectRatio: "none",
									className: "mt-2 block w-full max-w-[220px]",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
										x1: "0",
										y1: "1.5",
										x2: "200",
										y2: "1.5",
										stroke: GOLD$1,
										strokeWidth: "2",
										initial: { pathLength: 0 },
										whileInView: { pathLength: 1 },
										viewport: { once: true },
										transition: {
											duration: .9,
											ease: "easeOut"
										}
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4",
									style: {
										color: CREAM$1,
										fontFamily: "var(--font-serif-elegant)",
										fontSize: "1rem",
										lineHeight: 1.6
									},
									children: ["📍 ", config.venueAddress]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: CREAM$1,
											fontFamily: "var(--font-serif-elegant)"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { color: GOLD$1 },
												children: "📅"
											}),
											" ",
											config.weddingDate
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: CREAM$1,
											fontFamily: "var(--font-serif-elegant)"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { color: GOLD$1 },
												children: "🕐"
											}),
											" ",
											config.weddingTime
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondChain, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: [
										{
											i: "🏛️",
											t: "Grand Ceremonial Hall"
										},
										{
											i: "🌿",
											t: "Lush Garden for Outdoor Rituals"
										},
										{
											i: "🍽️",
											t: "Traditional South Indian Feast"
										},
										{
											i: "🎶",
											t: "Live Nadaswaram & Thavil Music"
										}
									].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -10
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										viewport: {
											once: true,
											amount: .5
										},
										transition: {
											delay: .1 * i,
											duration: .4
										},
										className: "flex items-center gap-3",
										style: {
											color: CREAM$1,
											fontFamily: "var(--font-serif-elegant)"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												color: GOLD$1,
												fontSize: "1.2rem"
											},
											children: h.i
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.t })]
									}, h.t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
										href: mapsLink,
										full: true,
										children: "📍 Get Directions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
										href: `tel:${VENUE_PHONE}`,
										outlined: true,
										full: true,
										children: "📞 Call Venue"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								x: 80,
								opacity: 0
							},
							whileInView: {
								x: 0,
								opacity: 1
							},
							viewport: {
								once: true,
								amount: .15
							},
							transition: {
								duration: .7,
								ease: "easeOut"
							},
							className: "relative overflow-hidden rounded-[20px]",
							style: {
								border: `2px solid ${GOLD$1}66`,
								height: "var(--map-h, 380px)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@media (max-width: 767px){ .venue-map{--map-h:240px;} } @media (min-width:768px){ .venue-map{--map-h:380px;} }` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "venue-map h-full w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "Wedding Venue Location",
										src: embedSrc,
										className: "h-full w-full",
										style: {
											border: 0,
											filter: "sepia(20%) saturate(1.2)"
										},
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "absolute right-3 top-3 rounded-full px-3 py-1",
									style: {
										background: `linear-gradient(135deg, ${GOLD_LIGHT$1}, ${GOLD$1})`,
										color: BURGUNDY$1,
										fontFamily: "var(--font-royal)",
										fontSize: "0.75rem"
									},
									animate: { y: [
										0,
										-4,
										0
									] },
									transition: {
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut"
									},
									children: "📌 We're here!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-3 left-3 max-w-[80%] rounded-[10px] px-4 py-3",
									style: {
										background: "rgba(107,15,26,0.8)",
										backdropFilter: "blur(8px)",
										border: `1px solid ${GOLD$1}4d`
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											color: GOLD$1,
											fontFamily: "var(--font-royal)",
											fontSize: "0.9rem"
										},
										children: ["📍 ", config.venue]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											color: CREAM$1,
											fontFamily: "var(--font-serif-elegant)",
											fontSize: "0.8rem"
										},
										children: config.venueAddress
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							fromLeft: true,
							delay: .2,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompassIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: {
										fontFamily: "var(--font-royal)",
										color: GOLD$1,
										fontSize: "1.3rem"
									},
									children: "How To Reach"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransportCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarIcon, {}),
										title: "By Car",
										primary: "2.5 km from City Center",
										tip: "Ample parking available on-site",
										cta: "Open in Maps",
										href: mapsLink,
										delay: 0
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransportCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainIcon, {}),
										title: "By Train",
										primary: "Visakhapatnam Railway Station",
										distance: "8 km from venue — 20 min",
										tip: "Auto-rickshaws available at station exit",
										cta: "View Route",
										href: `https://www.google.com/maps/dir/Visakhapatnam+Railway+Station/${mapsQ}`,
										delay: .15
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransportCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneIcon, {}),
										title: "By Flight",
										primary: "Visakhapatnam Airport (VTZ)",
										distance: "12 km — 25 min by cab",
										tip: "Pre-book Ola/Uber from airport",
										cta: "Book Cab",
										href: "https://m.uber.com/",
										delay: .3
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								x: 80,
								opacity: 0
							},
							whileInView: {
								x: 0,
								opacity: 1
							},
							viewport: {
								once: true,
								amount: .15
							},
							transition: {
								duration: .7,
								delay: .2,
								ease: "easeOut"
							},
							className: "rounded-[20px] p-7",
							style: {
								background: `linear-gradient(160deg, ${GOLD$1}26, ${GOLD$1}0d)`,
								border: `1.5px solid ${GOLD$1}66`
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SareeIcon, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2",
											style: {
												fontFamily: "var(--font-royal)",
												color: GOLD$1,
												fontSize: "1.3rem"
											},
											children: "Dress Code"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "italic",
											style: {
												fontFamily: "var(--font-serif-elegant)",
												color: CREAM$1,
												fontSize: "1rem"
											},
											children: "Traditional Indian Attire"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: GOLD$1,
												fontFamily: "var(--font-royal)",
												fontSize: "0.95rem"
											},
											children: "Ladies 👗"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: CREAM$1,
												fontFamily: "var(--font-serif-elegant)",
												fontSize: "0.95rem"
											},
											children: "Saree or Salwar Kameez"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: CREAM$1,
												fontFamily: "var(--font-serif-elegant)",
												fontSize: "0.95rem",
												opacity: .9
											},
											children: "Colors: Bright silks welcome"
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: GOLD$1,
												fontFamily: "var(--font-royal)",
												fontSize: "0.95rem"
											},
											children: "Gentlemen 👔"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: CREAM$1,
												fontFamily: "var(--font-serif-elegant)",
												fontSize: "0.95rem"
											},
											children: "Dhoti & Kurta or Suits"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: CREAM$1,
												fontFamily: "var(--font-serif-elegant)",
												fontSize: "0.95rem",
												opacity: .9
											},
											children: "Colors: Pastels & Whites preferred"
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-center italic",
									style: {
										color: GOLD$1,
										fontFamily: "var(--font-serif-elegant)",
										fontSize: "0.85rem"
									},
									children: "🙏 Please avoid black and white as per tradition"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								x: 80,
								opacity: 0
							},
							whileInView: {
								x: 0,
								opacity: 1
							},
							viewport: {
								once: true,
								amount: .15
							},
							transition: {
								duration: .7,
								delay: .35,
								ease: "easeOut"
							},
							className: "rsvp-card relative rounded-[20px] p-7",
							style: {
								background: `linear-gradient(160deg, ${BURGUNDY_DEEP$1}, #7a1424)`,
								border: `2px solid ${GOLD$1}`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: {
										fontFamily: "var(--font-royal)",
										color: GOLD$1,
										fontSize: "1.4rem"
									},
									children: "Kindly RSVP"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "italic",
									style: {
										fontFamily: "var(--font-serif-elegant)",
										color: CREAM$1,
										fontSize: "0.95rem"
									},
									children: "We'd love to know you're coming!"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RsvpForm, {})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HastamelapIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							style: {
								fontFamily: "var(--font-royal)",
								color: GOLD$1,
								fontSize: "1.1rem"
							},
							children: [
								"Sri ",
								config.groomName,
								" weds Smt ",
								config.brideName
							]
						})]
					})
				]
			})
		]
	});
}
var TABLE = "wedding_blessings";
/** Fetch every blessing, newest first. Returns [] on any error. */
async function fetchBlessings() {
	try {
		const { data, error } = await supabase.from(TABLE).select("*").order("created_at", { ascending: false });
		if (error || !data) return [];
		return data;
	} catch {
		return [];
	}
}
/** Insert a blessing and return the saved row (with its DB id + timestamp). */
async function addBlessing(input) {
	try {
		const { data, error } = await supabase.from(TABLE).insert({
			name: input.name,
			relation: input.relation?.trim() ? input.relation.trim() : null,
			message: input.message
		}).select().single();
		if (error || !data) return null;
		return data;
	} catch {
		return null;
	}
}
/** Subscribe to new blessings inserted by other guests. Returns an unsubscribe fn. */
function subscribeBlessings(onInsert) {
	try {
		const channel = supabase.channel("wedding_blessings_rt").on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: TABLE
		}, (payload) => onInsert(payload.new)).subscribe();
		return () => {
			try {
				supabase.removeChannel(channel);
			} catch {}
		};
	} catch {
		return () => {};
	}
}
/** Human-friendly "x mins ago" from an ISO timestamp. */
function timeAgo(iso) {
	const then = new Date(iso).getTime();
	if (Number.isNaN(then)) return "";
	const secs = Math.max(0, Math.floor((Date.now() - then) / 1e3));
	if (secs < 45) return "just now";
	const mins = Math.floor(secs / 60);
	if (mins < 60) return `${mins} min${mins === 1 ? "" : "s"} ago`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
	const days = Math.floor(hrs / 24);
	if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
	return new Date(iso).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
var GOLD = "#C9A84C";
var GOLD_LIGHT = "#F5E6A3";
var BURGUNDY = "#6B0F1A";
var BURGUNDY_DEEP = "#4a0a12";
var CREAM = "#FDF6EC";
var sampleWishes = [
	{
		id: "seed-1",
		name: "Rajesh Uncle",
		relation: "Uncle of Groom",
		message: "Wishing you a lifetime of love and happiness!",
		time: ""
	},
	{
		id: "seed-2",
		name: "Anitha Aunty",
		relation: "Aunt of Bride",
		message: "May God bless this beautiful couple always. Congratulations!",
		time: ""
	},
	{
		id: "seed-3",
		name: "Karthik",
		relation: "Friend of Groom",
		message: "So happy for both of you! Wishing you joy forever",
		time: ""
	},
	{
		id: "seed-4",
		name: "Divya & Family",
		relation: "Cousins of Bride",
		message: "Our heartfelt blessings to the lovely couple",
		time: ""
	},
	{
		id: "seed-5",
		name: "Suresh Mama",
		relation: "Uncle of Bride",
		message: "May your bond grow stronger with each passing day",
		time: ""
	},
	{
		id: "seed-6",
		name: "Preethi",
		relation: "Friend of Bride",
		message: "Beautiful couple! Wishing you all the happiness in the world",
		time: ""
	}
];
var toWish = (b) => ({
	id: b.id,
	name: b.name,
	relation: b.relation,
	message: b.message,
	time: timeAgo(b.created_at)
});
function BlessingCard({ wish, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			scale: .92,
			opacity: 0,
			y: 24
		},
		animate: {
			scale: 1,
			opacity: 1,
			y: 0
		},
		transition: {
			type: "spring",
			stiffness: 240,
			damping: 22,
			delay: Math.min(index * .04, .4)
		},
		className: "mb-5 break-inside-avoid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group relative rounded-[16px] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1",
			style: {
				border: `1px solid ${GOLD}40`,
				boxShadow: `0 4px 22px ${BURGUNDY}12`
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute right-4 top-2 select-none",
					style: {
						color: `${GOLD}55`,
						fontFamily: "var(--font-script)",
						fontSize: "2.4rem",
						lineHeight: 1
					},
					"aria-hidden": true,
					children: "”"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full",
						style: {
							background: `linear-gradient(135deg, ${BURGUNDY}, ${BURGUNDY_DEEP})`,
							color: GOLD,
							fontFamily: "var(--font-royal)",
							fontSize: "1rem"
						},
						children: wish.name.charAt(0).toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate",
							style: {
								fontFamily: "var(--font-royal)",
								color: BURGUNDY,
								fontSize: "0.9rem",
								fontWeight: 700
							},
							children: wish.name
						}), wish.relation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate",
							style: {
								fontFamily: "var(--font-serif-elegant)",
								color: GOLD,
								fontSize: "0.78rem"
							},
							children: wish.relation
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 italic",
					style: {
						fontFamily: "var(--font-serif-elegant)",
						color: "#2C1810",
						fontSize: "0.98rem",
						lineHeight: 1.55
					},
					children: wish.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						style: {
							color: GOLD,
							fontSize: "0.72rem"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❤" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❤" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❤" })
						]
					}), wish.time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: "#999",
							fontSize: "0.72rem"
						},
						children: wish.time
					})]
				})
			]
		})
	});
}
function HandsIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
		viewBox: "0 0 80 80",
		width: "64",
		height: "64",
		initial: {
			pathLength: 0,
			opacity: 0
		},
		whileInView: {
			pathLength: 1,
			opacity: 1
		},
		viewport: { once: true },
		transition: {
			duration: 1.2,
			ease: "easeOut"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M20 65 Q15 50 22 35 Q26 25 32 22 L36 40 L40 50 L40 65 Z",
				fill: "none",
				stroke: GOLD,
				strokeWidth: "2",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M60 65 Q65 50 58 35 Q54 25 48 22 L44 40 L40 50 L40 65 Z",
				fill: "none",
				stroke: GOLD,
				strokeWidth: "2",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M40 50 L40 22",
				stroke: GOLD,
				strokeWidth: "1.5",
				fill: "none"
			})
		]
	});
}
function LotusDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-4 flex items-center justify-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 60,
				height: 1,
				background: `linear-gradient(90deg, transparent, ${GOLD})`
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: GOLD,
					fontSize: "1rem"
				},
				children: "❋"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 60,
				height: 1,
				background: `linear-gradient(90deg, ${GOLD}, transparent)`
			} })
		]
	});
}
function CenteredOm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			scale: .6,
			opacity: 0
		},
		whileInView: {
			scale: 1,
			opacity: 1
		},
		viewport: { once: true },
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 14
		},
		className: "mx-auto flex flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center rounded-full",
			style: {
				width: 64,
				height: 64,
				background: "radial-gradient(circle at 50% 40%, rgba(201,168,76,0.18), transparent 70%)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmLogo, { className: "h-10 w-10 text-[#E8C766]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center gap-2",
			style: { color: GOLD },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
					width: 40,
					height: 1,
					background: `linear-gradient(90deg, transparent, ${GOLD})`
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { fontSize: "0.7rem" },
					children: "✦"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
					width: 40,
					height: 1,
					background: `linear-gradient(90deg, ${GOLD}, transparent)`
				} })
			]
		})]
	});
}
function Diya({ delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		style: {
			width: 24,
			height: 36
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-0 left-1/2 -translate-x-1/2 rounded-b-full",
			style: {
				width: 24,
				height: 10,
				background: `linear-gradient(180deg, ${GOLD}, ${BURGUNDY_DEEP})`
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-flicker absolute left-1/2 -translate-x-1/2",
			style: {
				bottom: 10,
				width: 8,
				height: 18,
				background: `radial-gradient(circle at 50% 70%, ${GOLD_LIGHT}, ${GOLD} 60%, transparent 80%)`,
				borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
				animationDelay: `${delay}s`
			}
		})]
	});
}
function BlessingForm({ onSubmit, count }) {
	const [name, setName] = (0, import_react.useState)("");
	const [relation, setRelation] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const formRef = (0, import_react.useRef)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!name.trim()) newErrors.name = "Please enter your name";
		if (!message.trim()) newErrors.message = "Please share a blessing";
		setErrors(newErrors);
		if (Object.keys(newErrors).length) return;
		setStatus("loading");
		await onSubmit({
			name: name.trim(),
			relation: relation.trim(),
			message: message.trim()
		});
		setStatus("success");
		setTimeout(() => {
			setName("");
			setRelation("");
			setMessage("");
			setStatus("idle");
		}, 1200);
	};
	const charCount = message.length;
	const overLimit = charCount > 130;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			y: 40,
			opacity: 0
		},
		whileInView: {
			y: 0,
			opacity: 1
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: { duration: .6 },
		className: "mx-auto mt-8 max-w-[560px] rounded-[16px] bg-white p-7",
		style: {
			border: `1.5px solid ${GOLD}4d`,
			boxShadow: `0 8px 32px ${BURGUNDY}14`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: {
						fontFamily: "var(--font-royal)",
						color: BURGUNDY,
						fontSize: "1.2rem"
					},
					children: "Leave Your Blessings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "italic",
					style: {
						fontFamily: "var(--font-serif-elegant)",
						color: GOLD,
						fontSize: "0.9rem"
					},
					children: "Your wishes will appear on the wall above"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 italic",
					style: {
						fontFamily: "var(--font-serif-elegant)",
						color: GOLD,
						fontSize: "0.95rem"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: { scale: 1 },
							animate: { scale: [
								1,
								1.3,
								1
							] },
							transition: { duration: .3 },
							style: {
								display: "inline-block",
								fontWeight: 700
							},
							children: count
						}, count),
						" ",
						"blessings received"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			ref: formRef,
			onSubmit: handleSubmit,
			className: "mt-5 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Your name...",
					className: "w-full rounded-lg px-4 py-3 outline-none transition",
					style: {
						background: "#FDFAF5",
						border: `1px solid ${errors.name ? "#c33" : "#C9A84C66"}`,
						fontFamily: "var(--font-serif-elegant)",
						color: "#2C1810",
						fontSize: "1rem"
					},
					onFocus: (e) => e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}33`,
					onBlur: (e) => e.currentTarget.style.boxShadow = "none"
				}), errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs",
					style: { color: "#c33" },
					children: errors.name
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: relation,
					onChange: (e) => setRelation(e.target.value),
					placeholder: "e.g. Friend of Groom, Cousin of Bride...",
					className: "w-full rounded-lg px-4 py-3 outline-none",
					style: {
						background: "#FDFAF5",
						border: `1px solid ${GOLD}66`,
						fontFamily: "var(--font-serif-elegant)",
						color: "#2C1810",
						fontSize: "1rem"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: message,
							onChange: (e) => setMessage(e.target.value.slice(0, 150)),
							placeholder: "Share your heartfelt wishes for the couple...",
							rows: 4,
							className: "w-full resize-none rounded-lg px-4 py-3 outline-none",
							style: {
								background: "#FDFAF5",
								border: `1px solid ${errors.message ? "#c33" : "#C9A84C66"}`,
								fontFamily: "var(--font-serif-elegant)",
								color: "#2C1810",
								fontSize: "1rem"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-2 right-3 text-xs",
							style: {
								fontFamily: "var(--font-serif-elegant)",
								color: overLimit ? BURGUNDY : GOLD
							},
							children: [charCount, " / 150"]
						}),
						errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs",
							style: { color: "#c33" },
							children: errors.message
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: status !== "idle",
					className: "relative w-full overflow-hidden rounded-full px-6 py-3 transition",
					style: {
						background: status === "success" ? "linear-gradient(90deg, #2d8f4a, #1f6f37)" : `linear-gradient(90deg, ${BURGUNDY}, #8B1A2A)`,
						color: GOLD_LIGHT,
						fontFamily: "var(--font-royal)",
						fontSize: "1rem"
					},
					children: [
						status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#F5E6A3] border-t-transparent align-middle" }),
						status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Blessings Sent!"]
						}),
						status === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-center gap-2",
							children: ["Send Blessings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
						}),
						status === "loading" && " Sending..."
					]
				})
			]
		})]
	});
}
function BlessingsWall() {
	const [dbWishes, setDbWishes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let active = true;
		fetchBlessings().then((rows) => {
			if (active) setDbWishes(rows.map(toWish));
		});
		const unsub = subscribeBlessings((b) => {
			setDbWishes((prev) => prev.some((w) => w.id === b.id) ? prev : [toWish(b), ...prev]);
		});
		return () => {
			active = false;
			unsub();
		};
	}, []);
	const addWish = async (input) => {
		const tempId = `local-${Date.now()}`;
		const optimistic = {
			id: tempId,
			name: input.name,
			relation: input.relation || null,
			message: input.message,
			time: "just now"
		};
		setDbWishes((prev) => [optimistic, ...prev]);
		const saved = await addBlessing(input);
		if (saved) setDbWishes((prev) => {
			const withoutTemp = prev.filter((w) => w.id !== tempId);
			return withoutTemp.some((w) => w.id === saved.id) ? withoutTemp : [toWish(saved), ...withoutTemp];
		});
	};
	const wishes = (0, import_react.useMemo)(() => [...dbWishes, ...sampleWishes], [dbWishes]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden",
		style: {
			background: CREAM,
			padding: "80px 0 60px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.08]",
				style: {
					backgroundImage: "radial-gradient(circle at 20% 30%, #C9A84C 1px, transparent 2px), radial-gradient(circle at 80% 60%, #C9A84C 1px, transparent 2px)",
					backgroundSize: "80px 80px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { staggerChildren: .2 },
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandsIcon, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2",
								style: {
									fontFamily: "var(--font-royal)",
									color: BURGUNDY,
									fontSize: "clamp(2rem, 4vw, 3rem)"
								},
								children: "Wall of Blessings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: GOLD,
									fontSize: "1.1rem"
								},
								children: "Your love and blessings mean the world to us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusDivider, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: wishes.map((wish, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlessingCard, {
								wish,
								index: idx
							}, wish.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlessingForm, {
						onSubmit: addWish,
						count: wishes.length
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes bc-float-0 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-12px) rotate(0.5deg); } 66% { transform: translateY(-6px) rotate(-0.5deg); } }
        @keyframes bc-float-1 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-10px) rotate(-0.4deg); } 66% { transform: translateY(-4px) rotate(0.4deg); } }
        @keyframes bc-float-2 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-14px) rotate(0.6deg); } 66% { transform: translateY(-7px) rotate(-0.3deg); } }
        @keyframes bc-float-3 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-8px) rotate(-0.3deg); } 66% { transform: translateY(-12px) rotate(0.5deg); } }
        @keyframes bc-float-4 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-11px) rotate(0.4deg); } 66% { transform: translateY(-5px) rotate(-0.4deg); } }
        @keyframes bc-float-5 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-9px) rotate(-0.5deg); } 66% { transform: translateY(-13px) rotate(0.3deg); } }
      ` })
		]
	});
}
function CornerOrnament({ pos }) {
	const rot = {
		tl: 0,
		tr: 90,
		br: 180,
		bl: 270
	}[pos];
	const place = {
		tl: "left-3 top-3",
		tr: "right-3 top-3",
		bl: "left-3 bottom-3",
		br: "right-3 bottom-3"
	}[pos];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: `pointer-events-none absolute ${place} h-8 w-8 md:h-10 md:w-10`,
		viewBox: "0 0 40 40",
		fill: "none",
		style: { transform: `rotate(${rot}deg)` },
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 18 V8 a4 4 0 0 1 4-4 h10",
				stroke: GOLD,
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 20 q2-11 11-13",
				stroke: `${GOLD}88`,
				strokeWidth: "1",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "8",
				cy: "8",
				r: "1.6",
				fill: GOLD
			})
		]
	});
}
function ClosingMessage() {
	const config = useWeddingConfig().config;
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	const shareText = `You're invited to ${config.groomName} & ${config.brideName}'s wedding!`;
	const whatsappHref = typeof window !== "undefined" ? `https://wa.me/?text=${encodeURIComponent(`${shareText} ${window.location.href}`)}` : `https://wa.me/?text=${encodeURIComponent(shareText)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden",
		style: {
			background: BURGUNDY,
			padding: "80px 0"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "pointer-events-none absolute inset-0",
				animate: { rotate: 360 },
				transition: {
					duration: 200,
					repeat: Infinity,
					ease: "linear"
				},
				style: {
					backgroundImage: "radial-gradient(circle at center, transparent 40%, rgba(201,168,76,0.08) 41%, transparent 42%), radial-gradient(circle at center, transparent 60%, rgba(201,168,76,0.06) 61%, transparent 62%)",
					backgroundSize: "100% 100%"
				}
			}),
			[...Array(8)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "pointer-events-none absolute",
				initial: {
					y: "100%",
					opacity: 0
				},
				animate: {
					y: "-20%",
					opacity: [
						0,
						.8,
						0
					]
				},
				transition: {
					duration: 10 + i,
					repeat: Infinity,
					delay: i * .7,
					ease: "linear"
				},
				style: {
					left: `${i * 13 % 100}%`,
					color: GOLD,
					fontSize: "0.8rem"
				},
				children: "✦"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .95,
					opacity: 0
				},
				whileInView: {
					scale: 1,
					opacity: 1
				},
				viewport: { once: true },
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "relative mx-auto w-[92vw] max-w-[700px] rounded-[24px] p-8 md:p-12",
				style: {
					background: "linear-gradient(160deg, #5e0e19 0%, #4a0a12 55%, #380710 100%)",
					border: `1px solid ${GOLD}aa`,
					boxShadow: `0 30px 80px -20px rgba(0,0,0,0.65), inset 0 0 0 1px ${GOLD}33, inset 0 0 70px rgba(201,168,76,0.07)`
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-3 rounded-[18px]",
						style: { border: `1px solid ${GOLD}40` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { pos: "tl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { pos: "tr" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { pos: "bl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { pos: "br" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CenteredOm, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: CREAM,
									fontSize: "1.1rem"
								},
								children: "With joy in our hearts and blessings of the Almighty,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-4 max-w-full break-words px-2 text-center",
								style: {
									fontFamily: "var(--font-script)",
									color: GOLD,
									fontSize: "clamp(2rem, 5vw, 3.2rem)",
									lineHeight: 1.15,
									backgroundImage: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, ${GOLD} 100%)`,
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundSize: "200% 100%",
									animation: "w-shimmer 6s linear infinite"
								},
								children: [
									config.groomName,
									" & ",
									config.brideName
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: CREAM,
									fontSize: "1rem"
								},
								children: "together with their families,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: CREAM,
									fontSize: "1rem"
								},
								children: "joyfully invite you to be a part of their"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center",
								style: {
									fontFamily: "var(--font-royal)",
									color: GOLD,
									fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
									letterSpacing: "0.1em"
								},
								children: "Sacred Wedding Celebration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto mt-6 max-w-[460px] rounded-2xl px-6 py-5 text-center",
								style: {
									background: "rgba(0,0,0,0.22)",
									border: `1px solid ${GOLD}40`,
									boxShadow: `inset 0 0 0 1px ${GOLD}1a`
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													fontFamily: "var(--font-serif-elegant)",
													color: GOLD_LIGHT,
													fontSize: "1.15rem",
													letterSpacing: "0.04em"
												},
												children: ["📅 ", config.weddingDate]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												style: { color: `${GOLD}66` },
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													fontFamily: "var(--font-serif-elegant)",
													color: GOLD_LIGHT,
													fontSize: "1.15rem",
													letterSpacing: "0.04em"
												},
												children: ["🕐 ", config.weddingTime]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto my-3 h-px w-24",
										style: { background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontFamily: "var(--font-royal)",
											color: GOLD,
											fontSize: "1.02rem",
											letterSpacing: "0.02em"
										},
										children: config.venue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5",
										style: {
											fontFamily: "var(--font-serif-elegant)",
											color: `${CREAM}cc`,
											fontSize: "0.92rem"
										},
										children: config.venueAddress
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "my-6",
								style: {
									height: 1,
									background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center",
								style: {
									color: GOLD,
									fontSize: "1.2rem",
									fontFamily: "'Noto Sans Devanagari', serif"
								},
								children: "सर्वे भवन्तु सुखिनः"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center italic",
								style: {
									fontFamily: "var(--font-serif-elegant)",
									color: CREAM,
									opacity: .7,
									fontSize: "0.85rem"
								},
								children: "(May all beings be happy)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex justify-center gap-4 md:gap-6",
								children: [
									0,
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya, { delay: i * .2 }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontFamily: "var(--font-royal)",
										color: GOLD,
										fontSize: "0.9rem",
										letterSpacing: "0.1em"
									},
									children: "SHARE THIS INVITATION"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-col items-stretch justify-center gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappHref,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex h-11 items-center justify-center rounded-full px-5 transition hover:opacity-90",
										style: {
											background: "#25D366",
											color: "white",
											fontFamily: "var(--font-royal)",
											fontSize: "0.85rem"
										},
										children: "Share on WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleCopy,
										className: "inline-flex h-11 items-center justify-center rounded-full px-5 transition hover:opacity-90",
										style: {
											background: GOLD,
											color: BURGUNDY,
											fontFamily: "var(--font-royal)",
											fontSize: "0.85rem"
										},
										children: copied ? "✓ Copied!" : "📋 Copy Link"
									})]
								})]
							})
						]
					})
				]
			})
		]
	});
}
function AnimatedFooter() {
	const config = useWeddingConfig().config;
	const links = (0, import_react.useMemo)(() => [
		{
			label: "Our Story",
			id: "hero"
		},
		{
			label: "Events",
			id: "events"
		},
		{
			label: "Family",
			id: "family"
		},
		{
			label: "Gallery",
			id: "gallery"
		},
		{
			label: "Venue",
			id: "venue"
		}
	], []);
	const scrollTo = (id) => {
		if (id === "hero") {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative w-full overflow-hidden",
		style: {
			background: "#1A0508",
			padding: "40px 0 24px"
		},
		children: [[
			{
				top: 16,
				left: 16
			},
			{
				top: 16,
				right: 16
			},
			{
				bottom: 60,
				left: 16
			},
			{
				bottom: 60,
				right: 16
			}
		].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "pointer-events-none absolute",
			animate: {
				opacity: [
					.3,
					1,
					.3
				],
				scale: [
					1,
					1.3,
					1
				]
			},
			transition: {
				duration: 2 + i * .4,
				repeat: Infinity
			},
			style: {
				...p,
				color: GOLD,
				fontSize: "1rem"
			},
			children: "✦"
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { scale: 0 },
					whileInView: { scale: 1 },
					viewport: { once: true },
					transition: {
						type: "spring",
						stiffness: 150
					},
					className: "relative flex items-center justify-center",
					style: {
						width: 160,
						height: 120
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
						viewBox: "0 0 160 160",
						className: "absolute inset-0",
						animate: { rotate: 360 },
						transition: {
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "80",
							cy: "80",
							r: "60",
							fill: "none",
							stroke: "#C9A84C66",
							strokeWidth: "1",
							strokeDasharray: "2 6"
						}), [
							0,
							60,
							120,
							180,
							240,
							300
						].map((deg) => {
							const r = 60;
							const x = 80 + r * Math.cos(deg * Math.PI / 180);
							const y = 80 + r * Math.sin(deg * Math.PI / 180);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: x - 2.5,
								y: y - 2.5,
								width: 5,
								height: 5,
								fill: GOLD,
								transform: `rotate(45 ${x} ${y})`
							}, deg);
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-baseline",
						style: {
							fontFamily: "var(--font-script)",
							color: GOLD,
							fontSize: "clamp(4rem, 8vw, 5rem)",
							lineHeight: 1
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: config.groomName.charAt(0) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								marginLeft: "-0.4em",
								opacity: .85
							},
							children: config.brideName.charAt(0)
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					style: {
						fontFamily: "var(--font-script)",
						color: GOLD,
						fontSize: "1.8rem"
					},
					children: [
						config.groomName,
						" & ",
						config.brideName
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-royal)",
						color: CREAM,
						opacity: .6,
						fontSize: "0.85rem",
						letterSpacing: "0.15em"
					},
					children: config.weddingDate
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: { duration: .8 },
					className: "mt-4 flex items-center gap-2",
					style: {
						color: GOLD,
						fontSize: "0.8rem"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❋" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❋" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-5 grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:gap-6",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(l.id),
						className: "transition hover:text-[#C9A84C]",
						style: {
							fontFamily: "var(--font-royal)",
							color: `${CREAM}b3`,
							fontSize: "0.8rem",
							letterSpacing: "0.1em"
						},
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diya, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 w-full",
					style: {
						height: 1,
						background: `${GOLD}33`
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex w-full flex-col items-center justify-between gap-2 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "italic",
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: `${CREAM}80`,
							fontSize: "0.8rem"
						},
						children: [
							"Crafted with ❤ for ",
							config.groomName,
							" & ",
							config.brideName
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "italic",
						style: {
							fontFamily: "var(--font-serif-elegant)",
							color: `${CREAM}80`,
							fontSize: "0.8rem"
						},
						children: "© 2026 Wedding Invitation"
					})]
				})
			]
		})]
	});
}
function ScrollProgressBar() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? h.scrollTop / total * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed left-0 top-0 z-[9999] h-[3px] w-full",
		style: {
			background: "transparent",
			pointerEvents: "none"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			height: "100%",
			width: `${progress}%`,
			background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT}, ${GOLD})`,
			transition: "width 0.1s linear"
		} })
	});
}
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-6 left-6 z-[60] grid h-12 w-12 place-items-center rounded-full transition hover:opacity-90",
		style: {
			background: BURGUNDY,
			color: GOLD,
			border: `1px solid ${GOLD}80`,
			opacity: visible ? 1 : 0,
			pointerEvents: visible ? "auto" : "none",
			transition: "opacity 0.3s"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { fontSize: "1.2rem" },
			children: "↑"
		})
	});
}
function BlessingsClosing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlessingsWall, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingMessage, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedFooter, {})
	] });
}
function Index() {
	const [reveal, setReveal] = (0, import_react.useState)("idle");
	const [timerDone, setTimerDone] = (0, import_react.useState)(false);
	const [initialConfig, setInitialConfig] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setTimerDone(true), 1500);
		fetchWeddingConfig().then((cfg) => setInitialConfig(cfg)).catch(() => setInitialConfig(defaultWeddingConfig));
		return () => clearTimeout(t);
	}, []);
	const isReady = timerDone && initialConfig !== null;
	const startReveal = () => {
		if (reveal !== "idle") return;
		setReveal("closing");
		setTimeout(() => setReveal("opening"), 1150);
		setTimeout(() => setReveal("done"), 2900);
	};
	const showInvitation = reveal === "idle" || reveal === "closing";
	const showCurtains = reveal === "closing" || reveal === "opening";
	(0, import_react.useEffect)(() => {
		const shouldLock = !isReady || reveal !== "done";
		document.body.classList.toggle("scroll-lock", shouldLock);
		return () => document.body.classList.remove("scroll-lock");
	}, [isReady, reveal]);
	if (!isReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { scale: [
					1,
					1.1,
					1
				] },
				transition: {
					duration: 1,
					repeat: Infinity
				},
				style: {
					color: "#C9A84C",
					fontSize: "4rem"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmLogo, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 italic",
				style: {
					color: "#C9A84C",
					fontFamily: "var(--font-serif-elegant)",
					fontSize: "0.9rem"
				},
				children: "Loading your invitation…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-[3px] w-56 overflow-hidden rounded-full bg-[#C9A84C]/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { width: 0 },
					animate: { width: "100%" },
					transition: {
						duration: 1.5,
						ease: "linear"
					},
					style: {
						height: "100%",
						background: "linear-gradient(90deg, #C9A84C, #F5E6A3)"
					}
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingConfigProvider, {
		initialConfig,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgressBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsTimeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilySection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VenueSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlessingsClosing, {}),
				showInvitation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-[50]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationScreen, { onReveal: startReveal })
				}),
				showCurtains && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "fixed inset-y-0 left-0 z-[60] w-1/2",
					style: {
						background: "linear-gradient(90deg, #2a060c 0%, #4a0a12 60%, #8a1424 100%)",
						boxShadow: "inset -24px 0 50px rgba(0,0,0,0.55)",
						borderRight: "2px solid rgba(201,168,76,0.6)"
					},
					initial: { x: "-100%" },
					animate: { x: reveal === "closing" ? "0%" : "-100%" },
					transition: {
						duration: reveal === "closing" ? 1 : 1.5,
						ease: reveal === "closing" ? [
							.5,
							0,
							.75,
							0
						] : [
							.16,
							1,
							.3,
							1
						]
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "fixed inset-y-0 right-0 z-[60] w-1/2",
					style: {
						background: "linear-gradient(270deg, #2a060c 0%, #4a0a12 60%, #8a1424 100%)",
						boxShadow: "inset 24px 0 50px rgba(0,0,0,0.55)",
						borderLeft: "2px solid rgba(201,168,76,0.6)"
					},
					initial: { x: "100%" },
					animate: { x: reveal === "closing" ? "0%" : "100%" },
					transition: {
						duration: reveal === "closing" ? 1 : 1.5,
						ease: reveal === "closing" ? [
							.5,
							0,
							.75,
							0
						] : [
							.16,
							1,
							.3,
							1
						]
					}
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
			]
		})
	});
}
//#endregion
export { Index as component };
