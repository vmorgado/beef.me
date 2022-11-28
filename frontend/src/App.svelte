<script>
   import { Router, Route, Link } from "svelte-navigator";
   import Home from "./routes/Home.svelte";
   import Register from "./routes/Register.svelte";
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
    </nav>
    <div>
        <Route path="/">
            <Home />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
    </div>

</Router>

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
</style>
