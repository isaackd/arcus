<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="property">
    <span class="title">{title}</span>
    <span class="description">{description}</span>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .property {
        display: flex;
        flex-flow: column nowrap;

        margin-bottom: 24px;
    }

    .title {
        font-weight: 500;
        color: var(--darker);
    }

    .description {
        font-size: 14px;
        color: var(--dark);
        margin-bottom: 1rem;
    }

    .content {
        display: flex;
        gap: 1rem;
    }

</style>
