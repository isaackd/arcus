<script lang="ts">
    import backIcon from "$lib/assets/arrow_back.svg";
    import { ContentState } from "./Content.svelte";

    export let title: string;
    export let icon: string;

    export let contentState: ContentState;

    function handleBack() {
        contentState = ContentState.Home;
    }
</script>

<div id="header">
    <img id="back" src={backIcon} alt="" on:click={handleBack}>
    <span>{title}</span>
    <img id="icon" src={icon} alt="Menu icon">
</div>

<style>
    #header {
        display: flex;
        padding: 1rem 0px;
        border-bottom: 1px solid var(--divider);
        margin-bottom: 1rem;
    }
    span {
        font-size: 18px;
        font-weight: bold;
        margin-left: 2rem;
        margin-right: 8px;
    }

    #icon {
        width: 24px;
    }

    #back {
        cursor: pointer;
    }
</style>
