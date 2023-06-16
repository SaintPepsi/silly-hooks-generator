<script lang="ts">
    import { useSillyHookGenerator } from "$lib/methods";
    import { theSillyHook } from "$lib/consts";
</script>

<div class="wrapper">
    <h1>Silly Hooks Generator!</h1>

    <h3>{$theSillyHook}</h3>
    <button on:click={useSillyHookGenerator}>
        Generate me a silly hook!
    </button>
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
