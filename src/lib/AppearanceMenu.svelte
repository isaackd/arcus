<script lang="ts">
    import MenuHeader from "./MenuHeader.svelte";
    import Property from "./Property.svelte";
    import icon from "../assets/brush.svg";

    import previousIcon from "../assets/previous.svg";
    import nextIcon from "../assets/next.svg";
    import codeIcon from "../assets/code.svg";
    import { ContentState } from "./Content.svelte";
    import type { ArcusConfig } from "../App.svelte";

    let relativeScaling: string = "50";
    let backgroundColor: string = "000000";

    function handlePropertyChange(ev: Event, property: string, int: boolean = true) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            let val: number | string = target.value;
            if (int) {
                val = parseInt(target.value, 10);
            }
            config.appearance[property] = val;
        }
    }

    function handleMaxFontSizeChange(ev: Event, property: string, int: boolean = true) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            let val = parseInt(target.value, 10);
            if (val === 0) {
                val = null;
            }
            config.appearance[property] = val;
        }
    }

    function handlePercentageChange(ev: Event, property: string) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            config.appearance[property] = parseInt(target.value, 10) / 100;
        }
    }

    export let contentState: ContentState;
    export let config: ArcusConfig;
</script>

<div id="appearance-menu" hidden={contentState !== ContentState.Appearance}>
    <MenuHeader
        title="Appearance"
        icon={icon}
        bind:contentState={contentState} />

    <div id="properties">
        <Property title="Font" description="The font used for words in the image">
            <select id="font-select">
                <option value="Ubuntu">Ubuntu</option>
            </select>
            <div class="nav-buttons">
                <button class="icon-button" title="Previous font">
                    <img src={previousIcon} alt="">
                </button>
                <button class="icon-button" title="Next font">
                    <img src={nextIcon} alt="">
                </button>
            </div>
        </Property>

        <Property title="Color function" description="The method used to color the wordcloud">
            <select>
                <option selected value="rainbow">Rainbow</option>
                <option value="monochrome">Monochrome</option>
            </select>

            <button class="icon-button" title="Open code editor">
                <img src={codeIcon} alt="">
            </button>

        </Property>

        <Property title="Background color" description="The background color of the image">
            <input
                type="color"
                on:input={e => handlePropertyChange(e, "backgroundColor", false)}
                value={config.appearance.backgroundColor}
            >
            <input type="text" id="color-value"
                value={config.appearance.backgroundColor}
            >
        </Property>

        <Property title="Margin" description="Empty space surrounding each word">
            <select
                id=""
                on:input={e => handlePropertyChange(e, "margin")}
                value={config.appearance.margin.toString()}
            >
                <option value="2">2px</option>
                <option value="4">4px</option>
                <option value="6">6px</option>
                <option value="8">8px</option>
            </select>
        </Property>

        <Property title="Minimum font size" description="The smallest size that text can be">
            <select
                id=""
                on:input={e => handlePropertyChange(e, "minimumFontSize")}
                value={config.appearance.minimumFontSize.toString()}
            >
                <option selected value="4">4px</option>
                <option value="8">8px</option>
                <option value="12">12px</option>
                <option value="16">16px</option>
            </select>
        </Property>

        <Property title="Maximum font size" description="The largest size that text can be. If set to &quot;Auto&quot;, the size is determined based on the dimensions of the image">
            <select id=""
                on:input={e => handleMaxFontSizeChange(e, "maximumFontSize")}
                value={(config.appearance.maximumFontSize || 0).toString()}
            >
                <option value="0">Auto</option>
                <option value="8">8px</option>
                <option value="16">16px</option>
                <option value="24">24px</option>
                <option value="24">32px</option>
                <option value="68">64px</option>
                <option value="110">128px</option>
            </select>
        </Property>

        <Property title="Font step" description="How much the font size is decreased each time there is no more space at a specific font size">
            <select
                name=""
                id=""
                on:input={e => handlePropertyChange(e, "fontStep")}
                value={config.appearance.fontStep.toString()}
            >
                <option value="1">1px</option>
                <option value="2">2px</option>
                <option value="4">4px</option>
                <option value="8">8px</option>
                <option value="16">16px</option>
            </select>
        </Property>

        <Property title="Relative scaling" description="How much of an impact word frequency has on the font size of a word">
            <input
                type="range"
                class="relative-scaling"
                min="0"
                max="100"
                step="10"
                on:input={e => handlePercentageChange(e, "relativeScaling")}
                value={config.appearance.relativeScaling * 100}
            >
            <input type="text" class="percentage-text" maxlength="4" value={Math.floor(config.appearance.relativeScaling * 100) + "%"}>
        </Property>
    </div>
</div>


<style>
    #properties {
        overflow-y: auto;
        height: 100%;
        padding-bottom: 4rem;
        scrollbar-width: none;
    }
    #properties::-webkit-scrollbar {
        display: none;
    }
    .icon-button {
        width: 56px;
    }
    .nav-buttons {
        display: flex;
        gap: 8px;
    }

    .relative-scaling {
        width: 100%;
    }

    .percentage-text {
        width: 30%;
        max-width: 80px;
    }

    #color-value {
        width: 110px;
        text-transform: uppercase;
    }

    #appearance-menu {
        height: 100%;
    }

</style>
