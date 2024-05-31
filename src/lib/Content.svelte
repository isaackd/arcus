<script context="module" lang="ts">
    export enum ContentState {
        Home,
        Mask,
        Appearance,
        Properties,
    };

    import type { ArcusConfig } from "../App.svelte";
</script>

<script lang="ts">
    import maskIcon from "../assets/mask.svg";
    import downloadIcon from "../assets/download.svg";
	import brushIcon from "../assets/brush.svg";
	import propertiesIcon from "../assets/properties.svg";

    import AppearanceMenu from "./AppearanceMenu.svelte";
    import PropertiesMenu from "./PropertiesMenu.svelte";
    import MaskMenu from "./MaskMenu.svelte";

    let state: ContentState = ContentState.Home;
    export let config: ArcusConfig;
    export let updateWordcloud: () => void;
    export let handleDownload: () => void;

    function handleScaleChange(ev: InputEvent) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            config.scale = parseInt(target.value, 10);
        }
    }
</script>


<div id="content">

    <div id="home" hidden={state !== ContentState.Home}>
        <textarea
            bind:value={config.text}
            name="" placeholder="Write text here" id="text"
        />
        <div id="controls">
            <div id="scale-container">
                <span>Scale</span>

                <select name="" id="" on:input={handleScaleChange}>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="4">4x</option>
                    <option value="6">6x</option>
                </select>
            </div>
            <div id="buttons">
                <!-- <button on:click={() => state = ContentState.Mask}>
                    <img src={maskIcon} alt="">
                </button> -->
                <button title="Download your Wordcloud" on:click={handleDownload}>
                    <img src={downloadIcon} width="24" alt="">
                </button>
                <button title="Edit appearance" on:click={() => state = ContentState.Appearance}>
                    <img src={brushIcon} alt="">
                </button>
                <button title="Edit properties" on:click={() => state = ContentState.Properties}>
                    <img src={propertiesIcon} alt="">
                </button>
            </div>
        </div>
        <button id="update-button" on:click={updateWordcloud}>Update</button>
    </div>
    <AppearanceMenu bind:contentState={state} bind:config={config} />
    <PropertiesMenu bind:contentState={state} bind:config={config} />
    <!-- <MaskMenu bind:contentState={state} bind:config={config} /> -->
</div>

<style>
    #content {
        max-width: 390px;
    }
</style>
