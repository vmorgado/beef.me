<script>
	import {
		Button,
		Container,
		Row,
		Col,
		Card,
		CardTitle,
		CardActions,
		Icon,
	} from "svelte-materialify";
	import { onMount } from "svelte";
	import {
		mdiShareVariant,
		mdiThumbDownOutline,
		mdiFire,
		mdiDisc,
	} from "@mdi/js";

	let player;

	onMount(() => {
		console.log(player);
	});
</script>

<Card>
	<CardTitle>Vitor Morgado</CardTitle>
	<Container>
		<Row>
			<Col colls={12}>
				<audio bind:this={player} id="player" controls />
			</Col>
		</Row>
	</Container>
	<CardActions>
		<Button class="pink-text mr-2">
			<Icon class="mr-2" path={mdiFire} /> Lit
		</Button>
		<Button class="indigo-text mr-2">
			<Icon class="mr-2" path={mdiThumbDownOutline} /> Whack
		</Button>
		<Button class="black-text">
			<Icon class="mr-2" path={mdiDisc} /> Remix
		</Button>
		<div style="flex-grow:1" />
		<Button right icon class="blue-text">
			<Icon path={mdiShareVariant} />
		</Button>
	</CardActions>
</Card>
