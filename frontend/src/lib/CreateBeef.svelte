<script>
    import {
        Icon,
        Button,
        Container,
        Row,
        Col,
        Card,
        CardTitle,
        CardActions,
    } from "svelte-materialify";
    import { onMount } from "svelte";
    import {
        mdiAutorenew,
        mdiPlayOutline,
        mdiRecord,
        mdiStopCircleOutline,
    } from "@mdi/js";

    let player;
    let recorder;
    let mediaRecorder;
    let isRecording = false;
    let recordFinished = false;
    let recordedChunks = [];
    let fileBlob = null;
    let url = null;

    const submitBeef = async function () {
        const data = new FormData();

        data.append("file", fileBlob);
        data.append("userId", "b5cf8941-d987-418f-bde7-1f0ea4249dee");

        const res = await fetch("http://localhost:3000/beef", {
            method: "POST",
            body: data,
        });

        const json = await res.json();
    };

    const playRecorded = function () {
        player.play();
    };

    const clearRecorded = function () {
        recordFinished = false;
    };

    const startRecording = function () {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: false })
            .then(handleSuccess);
    };
    const stopRecording = function () {
        mediaRecorder.stop();
    };

    const handleSuccess = function (stream) {
        isRecording = true;
        const options = { mimeType: "audio/webm" };
        mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.addEventListener("dataavailable", function (e) {
            if (e.data.size > 0) recordedChunks.push(e.data);
        });

        mediaRecorder.addEventListener("stop", function () {
            fileBlob = new Blob(recordedChunks);
            url = URL.createObjectURL(fileBlob);
            isRecording = false;
            recordFinished = true;
            player.src = url;
        });

        mediaRecorder.start();
    };

    onMount(() => {});
</script>

<Card>
    <CardTitle>Raise some inspiration and:</CardTitle>

    <Container>
        <Row>
            <Col>
                {#if recordFinished}
                    <Button class="green-text" on:click={playRecorded}>
                        <Icon path={mdiPlayOutline} />
                    </Button>
                    <Button class="black-text" on:click={clearRecorded}>
                        <Icon path={mdiAutorenew} />
                    </Button>
                    <span> URL : {url} </span>
                {:else if isRecording}
                    <Button class="black-text" on:click={stopRecording}>
                        <Icon path={mdiStopCircleOutline} />
                    </Button>
                {:else}
                    <Button class="red-text" on:click={startRecording}>
                        <Icon path={mdiRecord} />
                    </Button>
                {/if}
            </Col>
        </Row>
    </Container>
    {#if recordFinished}
        <CardActions>
            <Button on:click={submitBeef}>Drop the Beef!</Button>
        </CardActions>
    {/if}
    <audio hidden bind:this={player} id="player" controls />
    <input
        id="recorder"
        bind:this={recorder}
        type="file"
        accept="audio/*"
        capture
        hidden
    />
</Card>
