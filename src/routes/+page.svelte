<script lang="ts">
    import { useSillyHookGenerator } from "$lib/methods";
    import { theSillyHook } from "$lib/consts";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="wrapper">
    <h1>Silly Hooks Generator!</h1>

    <h3>{$theSillyHook}</h3>
    <Button on:click={useSillyHookGenerator}>
        Generate me a silly hook!
    </Button>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
</style>
