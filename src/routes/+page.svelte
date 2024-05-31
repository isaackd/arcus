<script context="module" lang="ts">
    export enum ContentState {
        Home,
        Mask,
        Appearance,
        Properties,
    };

	export interface Appearance {
		font: Uint8Array | null;
		colorFunction: string;
		backgroundColor: string;
		margin: number;
		minimumFontSize: number;
		maximumFontSize: number;
		fontStep: number;
		relativeScaling: number;
	};

	export interface Properties {
		regex: string;
		excludeWords: string;
		repeatWords: boolean;
		wordLimit: number;
		minimumWordLength: number;
		excludeNumbers: boolean;
		rotateChance: number;
	};

	export interface ArcusConfig {
		text: String;
		mask: Uint8Array | null;
		appearance: Appearance;
		properties: Properties;
		scale: number;
	};
</script>

<script lang="ts">
	import init, { make_wordcloud } from "../wcloud_wasm.js";
	import { onMount } from "svelte";

	import logo from "../assets/logo.svg";
	import Content from "../lib/Content.svelte";
    import MaskMenu from "../lib/MaskMenu.svelte";

	let canvas: HTMLCanvasElement;
	let initializedWasm = false;

	$: if (config && initializedWasm) {
		console.log("updated");
		updateWordcloud();
	}

	const defaultAppearance = {
		font: new Uint8Array(),
		colorFunction: "none",
		backgroundColor: "#070f21",
		margin: 2,
		minimumFontSize: 4,
		maximumFontSize: null,
		fontStep: 1,
		relativeScaling: 0.5,
	};

	const defaultProperties = {
		regex: "\\w[\\w']*",
		excludeWords: ["a", "about", "above", "after", "again", "against"].join("\n"),
		repeatWords: true,
		wordLimit: 200,
		minimumWordLength: 1,
		excludeNumbers: true,
		rotateChance: 0.5,
	};

	let config: ArcusConfig = {
		text: "",
		mask: new Uint8Array(),
		appearance: defaultAppearance,
		properties: defaultProperties,
		scale: 1,
	};

	const width = 390;
	const height = 265;


	function updateWordcloud() {
		const cloudBuffer = make_wordcloud(config);
		const context = canvas.getContext("2d");

		const scaledWidth = width * config.scale;
		const scaledHeight = height * config.scale;

		canvas.setAttribute("width", scaledWidth.toString());
		canvas.setAttribute("height", scaledHeight.toString());

		const imageData = new ImageData(cloudBuffer, scaledWidth, scaledHeight);
		// context.putImageData(imageData, 0, 0);

		createImageBitmap(imageData).then(bitmap => {
			context.drawImage(bitmap, 0, 0);
		});
	}

	function downloadImage() {
        const link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvas.toDataURL()
        link.click();
    }

	onMount(async () => {
		await init();
		initializedWasm = true;

		// if (!canvas.isConnected) {
		// 	wordcloudImage.replaceWith(canvas);
		// }

		updateWordcloud();
	});
</script>

<div id="app">
<header>
	<img id="logo" src={logo} alt="Icon of a cloud">
	<h2 id="title">Arcus</h2>
</header>

<main>

	<div id="wordcloud-container">
		<canvas id="wordcloud-canvas" bind:this={canvas}></canvas>
	</div>

	<Content bind:config={config} handleDownload={downloadImage} updateWordcloud={updateWordcloud} />
</main>

</div>

<style>
	header {
		display: flex;
		gap: 4px;
	}
	
</style>
