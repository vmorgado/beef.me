<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Home from "./routes/Home.svelte";
    import Register from "./routes/Register.svelte";
    import TopAppBar, { Section, Title, AutoAdjust } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";

    let topAppBar;
</script>

<main>
    <Router>
        <TopAppBar bind:this={topAppBar} variant="standard">
            <Section>
                <IconButton class="material-icons">menu</IconButton>
                <Title>Beef Me</Title>
            </Section>
            <Section align="end">
                <title>
                    <Link to="/">Home</Link>
                </title>
                <title>
                    <Link to="/register">Register</Link>
                </title>
            </Section>
        </TopAppBar>

        <AutoAdjust {topAppBar}>
            <div class="wrapper">
                <Route path="/">
                    <Home />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </div>
        </AutoAdjust>
    </Router>
</main>
<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
    />
    <link
        rel="stylesheet"
        href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
    />
    <link
        rel="stylesheet"
        href="https://unpkg.com/svelte-material-ui/bare.css"
    />
</svelte:head>

<style>
    :global(#smui-app),
    :global(body),
    :global(html) {
        display: block !important;
        height: auto !important;
        width: auto !important;
        position: static !important;
    }
    .wrapper {
        width: 768px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
