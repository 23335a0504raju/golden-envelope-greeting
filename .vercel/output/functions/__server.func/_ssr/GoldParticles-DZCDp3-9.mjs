import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as CanvasTexture, n as useFrame, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GoldParticles-DZCDp3-9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Particles({ count = 350 }) {
	const ref = (0, import_react.useRef)(null);
	const { positions, speeds } = (0, import_react.useMemo)(() => {
		const positions = new Float32Array(count * 3);
		const speeds = new Float32Array(count);
		for (let i = 0; i < count; i++) {
			positions[i * 3 + 0] = (Math.random() - .5) * 18;
			positions[i * 3 + 1] = (Math.random() - .5) * 14;
			positions[i * 3 + 2] = (Math.random() - .5) * 8;
			speeds[i] = .05 + Math.random() * .15;
		}
		return {
			positions,
			speeds
		};
	}, [count]);
	useFrame((_, delta) => {
		const pts = ref.current;
		if (!pts) return;
		const arr = pts.geometry.attributes.position.array;
		for (let i = 0; i < count; i++) {
			arr[i * 3 + 1] += speeds[i] * delta;
			arr[i * 3 + 0] += Math.sin((arr[i * 3 + 1] + i) * .5) * delta * .05;
			if (arr[i * 3 + 1] > 7) {
				arr[i * 3 + 1] = -7;
				arr[i * 3 + 0] = (Math.random() - .5) * 18;
			}
		}
		pts.geometry.attributes.position.needsUpdate = true;
		pts.rotation.z += delta * .01;
	});
	const texture = (0, import_react.useMemo)(() => {
		const c = document.createElement("canvas");
		c.width = 64;
		c.height = 64;
		const ctx = c.getContext("2d");
		const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
		g.addColorStop(0, "rgba(245,230,163,1)");
		g.addColorStop(.4, "rgba(201,168,76,0.6)");
		g.addColorStop(1, "rgba(201,168,76,0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, 64, 64);
		return new CanvasTexture(c);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			args: [positions, 3],
			count,
			itemSize: 3
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .18,
			map: texture,
			transparent: true,
			depthWrite: false,
			blending: 2,
			sizeAttenuation: true
		})]
	});
}
function GoldParticles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			camera: {
				position: [
					0,
					0,
					8
				],
				fov: 55
			},
			gl: {
				antialias: true,
				alpha: true
			},
			dpr: [1, 2],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {})
		})
	});
}
//#endregion
export { GoldParticles };
