<script>
    import {
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
        mdiShareVariant,
        mdiThumbDownOutline,
        mdiFire,
        mdiDisc,
        mdiDotsVertical,
        mdiMenu,
    } from "@mdi/js";

    let recorder;
    let player;
    let stopButton;

    const startRecording = function () {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: false })
            .then(handleSuccess);
    };
    const handleSuccess = function (stream) {
        const options = { mimeType: "audio/webm" };
        const recordedChunks = [];
        const mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.addEventListener("dataavailable", function (e) {
            if (e.data.size > 0) recordedChunks.push(e.data);
        });

        mediaRecorder.addEventListener("stop", function () {
            downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
            downloadLink.download = "acetest.wav";
        });

        stopButton.addEventListener("click", function () {
            mediaRecorder.stop();
        });

        mediaRecorder.start();
    };

    onMount(() => {
        recorder.addEventListener("change", function (e) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            player.src = url;
        });
    });
</script>

<Card>
    <CardTitle>Raise some inspiration and:</CardTitle>

    <Container>
        <Row>
            <Col>
                <input
                    id="recorder"
                    bind:this={recorder}
                    type="file"
                    accept="audio/*"
                    capture
                />
            </Col>
        </Row>
    </Container>

    <CardActions>
        <Button text>Drop the Beef!</Button>
    </CardActions>
</Card>
