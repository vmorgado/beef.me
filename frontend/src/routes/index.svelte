<script>
	import {
		AppBar,
		Button,
		Icon,
		Menu,
		ListItem,
		MaterialApp,
		Container,
		Row,
		Col,
	} from "svelte-materialify";
	import { onMount } from "svelte";
	import { mdiDotsVertical, mdiMenu } from "@mdi/js";
	import Beef from "$lib/Beef.svelte";
	import CreateBeef from "$lib/CreateBeef.svelte";

	let recorder;
	let player;
	let stopButton;
</script>

<MaterialApp>
	<AppBar>
		<div slot="icon">
			<Button fab depressed>
				<Icon path={mdiMenu} />
			</Button>
		</div>
		<span slot="title">Beef Me Application</span>
		<div style="flex-grow:1" />
		<Button>Options</Button>
		<Menu right>
			<div slot="activator">
				<Button fab depressed>
					<Icon path={mdiDotsVertical} />
				</Button>
			</div>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</Menu>
	</AppBar>
	<Container style="max-width: 768px;">
		<Row>
			<Col colls={12}>
				<CreateBeef />
			</Col>
		</Row>

		<Row>
			<Col colls={12}>
				<Beef />
			</Col>
		</Row>
	</Container>
</MaterialApp>
