import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wedding-config-Df5D44hn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OmLogo({ className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 100 100",
		className,
		style: {
			width: "1em",
			height: "1em",
			display: "inline-block",
			fill: "currentColor",
			...style
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 45 35 C 45 25 30 25 30 35 C 30 45 45 45 45 55 C 45 65 30 65 30 55 M 50 35 C 65 25 65 45 50 35 M 65 45 C 75 45 75 55 65 55 M 50 25 C 55 20 60 20 65 25",
				stroke: "currentColor",
				strokeWidth: "6",
				strokeLinecap: "round",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 30 55 C 30 70 45 75 55 65",
				stroke: "currentColor",
				strokeWidth: "6",
				strokeLinecap: "round",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "15",
				r: "5",
				fill: "currentColor"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var supabase = createClient("https://zvqreucdaynwdjwolnma.supabase.co", "sb_publishable_WnSL0UMA2ENM227SN4WdLQ_Oit8o15d");
var defaultWeddingConfig = {
	brideName: "Priya Sharma",
	groomName: "Arjun Reddy",
	bridePhoto: "",
	groomPhoto: "",
	weddingDate: "15 February 2026",
	weddingDateISO: "2026-02-15",
	weddingTime: "10:00 AM",
	venue: "Sri Kalyana Mandapam",
	venueAddress: "MG Road, Visakhapatnam, Andhra Pradesh",
	mehendi: {
		date: "13 Feb 2026",
		time: "4:00 PM",
		venue: "Bride's Residence",
		address: ""
	},
	haldi: {
		date: "14 Feb 2026",
		time: "9:00 AM",
		venue: "Bride's Residence",
		address: ""
	},
	wedding: {
		date: "15 Feb 2026",
		time: "10:00 AM",
		venue: "Sri Kalyana Mandapam",
		address: "MG Road, Visakhapatnam"
	},
	reception: {
		date: "15 Feb 2026",
		time: "7:00 PM",
		venue: "Grand Kakatiya Hall",
		address: ""
	},
	family: {
		bride: {
			father: "Ramesh Sharma",
			fatherPhoto: "",
			mother: "Lakshmi Sharma",
			motherPhoto: "",
			brother: "Karthik Sharma",
			brotherPhoto: "",
			sister: "Divya Sharma",
			sisterPhoto: ""
		},
		groom: {
			father: "Suresh Reddy",
			fatherPhoto: "",
			mother: "Padma Reddy",
			motherPhoto: "",
			brother: "Vikram Reddy",
			brotherPhoto: "",
			sister: "Sneha Reddy",
			sisterPhoto: ""
		}
	},
	photos: [
		"https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900",
		"https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900",
		"https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900",
		"https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
		"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
		"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900"
	]
};
var CONFIG_TABLE = "wedding_config";
var CONFIG_ROW_ID = 1;
var PHOTO_BUCKET = "wedding-photos";
/** Fetch the saved wedding config from Supabase. Falls back to defaultWeddingConfig on error. */
async function fetchWeddingConfig() {
	try {
		const { data, error } = await supabase.from(CONFIG_TABLE).select("config").eq("id", CONFIG_ROW_ID).single();
		if (error || !data?.config || Object.keys(data.config).length === 0) return defaultWeddingConfig;
		return {
			...defaultWeddingConfig,
			...data.config
		};
	} catch {
		return defaultWeddingConfig;
	}
}
/** Save (upsert) the entire wedding config to Supabase. */
async function saveWeddingConfig(config) {
	const { error } = await supabase.from(CONFIG_TABLE).upsert({
		id: CONFIG_ROW_ID,
		config,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	});
	if (error) throw error;
}
/**
* Upload a photo file to Supabase Storage.
* @param file  The File object to upload.
* @param pathKey  A unique slug used to build the storage path (e.g. "bride-photo").
* @returns The permanent public URL of the uploaded image.
*/
async function uploadPhoto(file, pathKey) {
	const ext = file.name.split(".").pop() ?? "jpg";
	const fileName = `${pathKey.replace(/[^a-zA-Z0-9-]/g, "-")}-${Date.now()}.${ext}`;
	const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(fileName, file, {
		upsert: true,
		contentType: file.type
	});
	if (error) throw error;
	const { data } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl(fileName);
	return data.publicUrl;
}
var WeddingConfigContext = (0, import_react.createContext)(null);
/**
* Wrap your page in this provider. Pass `initialConfig` (fetched from Supabase)
* so the invitation renders with live data from the first paint.
*/
function WeddingConfigProvider({ children, initialConfig }) {
	const [config, setConfig] = (0, import_react.useState)(initialConfig ?? defaultWeddingConfig);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingConfigContext.Provider, {
		value: {
			config,
			setConfig
		},
		children
	});
}
function useWeddingConfig() {
	const ctx = (0, import_react.useContext)(WeddingConfigContext);
	if (!ctx) throw new Error("useWeddingConfig must be used inside WeddingConfigProvider");
	return ctx;
}
//#endregion
export { fetchWeddingConfig as a, uploadPhoto as c, defaultWeddingConfig as i, useWeddingConfig as l, WeddingConfigProvider as n, saveWeddingConfig as o, cn as r, supabase as s, OmLogo as t };
