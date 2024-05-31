<script lang="ts">
    import MenuHeader from "./MenuHeader.svelte";
    import Property from "./Property.svelte";
    import icon from "$lib/assets/mask.svg";

    import previousIcon from "$lib/assets/previous.svg";
    import nextIcon from "$lib/assets/next.svg";
    import codeIcon from "$lib/assets/code.svg";
    import { ContentState } from "./Content.svelte";

    let relativeScaling: string = "50";
    let backgroundColor: string = "000000";

    export let contentState: ContentState;
</script>

<div id="mask-menu" hidden={contentState !== ContentState.Mask}>
    <MenuHeader
        title="Mask"
        icon={icon}
        bind:contentState={contentState} />

    <div id="properties">
        <Property title="Regex" description="Determines what a &quot;word&quot; is">
            <div id="regex-content">
                <input class="code" type="text" value="\\w[\\w']*">
                <textarea class="code" name="" id="" rows="10" value="Test 123 your regex here"></textarea>
            </div>
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
