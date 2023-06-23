<script lang="ts">
    import { useSillyHookGenerator } from "$lib/methods";
    import { theSillyHook } from "$lib/consts";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="wrapper">
    <h1>Silly Hooks Generator!</h1>

    <table>
        <tbody>
            <tr>
                {#each $theSillyHook[0] as word}
                    <td>{word}</td>
                {/each}
            </tr>
            <tr>
                {#each $theSillyHook[1] as node}
                    <td>{node}</td>
                {/each}
            </tr>
        </tbody>
    </table>
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

    table {
        padding: 30px;
    }

    td {
        padding: 0 10px;
        text-align: center;
    }
</style>
