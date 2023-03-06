<script>
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>DRPG: Character List</title>
	<meta name="description" content="Disgaea RPG: Character List" />
</svelte:head>

<h2>Character list</h2>
<ul>
	{#each data.charList as character}
		<li><a href="{base}/characters/{character.slug}">{character.name}</a></li>
	{/each}
</ul>
