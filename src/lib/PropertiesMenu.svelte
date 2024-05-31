<script lang="ts">
    import MenuHeader from "./MenuHeader.svelte";
    import Property from "./Property.svelte";
    import icon from "$lib/assets/properties.svg";

    import previousIcon from "$lib/assets/previous.svg";
    import nextIcon from "$lib/assets/next.svg";
    import codeIcon from "$lib/assets/code.svg";
    import { ContentState } from "./Content.svelte";
    import type { ArcusConfig } from "../routes/+page.svelte";

    let relativeScaling: string = "50";
    let backgroundColor: string = "000000";

    export let contentState: ContentState;
    export let config: ArcusConfig;

    function handlePropertyChange(ev: Event, property: string, int: boolean = true) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            let val: number | string = target.value;
            if (int) {
                val = parseInt(target.value, 10);
            }
            config.properties[property] = val;
        }
    }

    function handleBooleanChange(ev: Event, property: string) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            config.properties[property] = selectToBool(target.value);
        }
    }

    function handlePercentageChange(ev: Event, property: string) {
        const target = ev.target as HTMLSelectElement;

        if (target) {
            config.properties[property] = parseInt(target.value, 10) / 100;
        }
    }

    function selectToBool(value: string) {
        return value === "yes" ? true : false;
    }
    function boolToSelect(value: boolean) {
        return value ? "yes" : "no";
    }
</script>

<div id="properties-menu" hidden={contentState !== ContentState.Properties}>
    <MenuHeader
        title="Properties"
        icon={icon}
        bind:contentState={contentState} />

    <div id="properties">
        <Property title="Regex" description="Determines what a &quot;word&quot; is">
            <div id="regex-content">
                <input
                    class="code"
                    type="text"
                    value={config.properties.regex}
                    on:input={e => handlePropertyChange(e, "regex", false)}
                >
                <!-- <textarea class="code" name="" id="" rows="10" value="Test 123 your regex here"></textarea> -->
            </div>
        </Property>

        <Property title="Exclude words" description="Exclude these words from the wordcloud">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                on:change={e => handlePropertyChange(e, "excludeWords", false)}>
{config.properties.excludeWords}
            </textarea>

        </Property>

        <Property title="Repeat words" description="Place the same words multiple times if there aren't enough to reach the word limit">
            <select
                id=""
                on:input={e => handleBooleanChange(e, "repeatWords")}
                value={boolToSelect(config.properties.repeatWords)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
        </Property>

        <Property title="Word limit" description="The maximum amount of words to place">
            <select
                id=""
                on:input={e => handlePropertyChange(e, "wordLimit")}
                value={config.properties.wordLimit.toString()}
            >
                <option selected value="100">100</option>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="800">800</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
            </select>
        </Property>

        <Property title="Minimum word length" description="The minimum amount of letters in a word">
            <select
                id=""
                on:input={e => handlePropertyChange(e, "minimumWordLength")}
                value={config.properties.minimumWordLength.toString()}>
                <option selected value="1">1 letter</option>
                <option value="2">2 letters</option>
                <option value="3">3 letters</option>
                <option value="4">4 letters</option>
                <option value="5">5 letters</option>
            </select>
        </Property>

        <Property title="Exclude numbers" description="Exclude matches consisting of only numeric characters">
            <select
                id=""
                on:input={e => handleBooleanChange(e, "excludeNumbers")}
                value={boolToSelect(config.properties.excludeNumbers)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
        </Property>

        <Property title="Rotate chance" description="How likely it is for a word to be rotated">
            <input
                type="range"
                class="rotate-chance"
                min="0"
                max="100"
                step="10"
                on:input={e => handlePercentageChange(e, "rotateChance")}
                value={config.properties.rotateChance * 100}
            >
            <input type="text" class="percentage-text" value={Math.floor(config.properties.rotateChance * 100) + "%"}>
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

    .rotate-chance {
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

    #properties-menu {
        height: 100%;
    }

    #regex-content {
        width: 100%
    }

    #regex-content input, #regex-content textarea {
        width: 100%;
    }

    #regex-content textarea {
        margin-top: 1rem;
    }

</style>
