
<main>
</main>
<script>

    import Button from "@smui/button";
    import Card, { Content, Actions } from "@smui/card";
    import { Label, Icon } from "@smui/common";

    let name = "";
    let showCard = false;
</script>
<main>
    <Card style="width: 360px; margin: 2em auto;">
        <Content />
        <Actions>
            <Button
                href="https://github.com/hperrin/svelte-material-ui"
                target="_blank"
                style="text-decoration: none;"
            >
                <Label>GitHub Repo</Label>
            </Button>
            <Button
                href="https://sveltematerialui.com/"
                target="_blank"
                style="text-decoration: none;"
            >
                <Label>Website</Label>
            </Button>
        </Actions>
    </Card>
</main>
