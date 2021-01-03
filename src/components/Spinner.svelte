<script>
    export let size,
        center = false;
    const classes = [size, center ? "center" : ""].join(" ");
    console.log(classes);
</script>

<style>
    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loader {
        border: 4px solid var(--primary);
        -webkit-animation: spin 3s linear infinite; /* Safari */
        animation: spin 3s linear infinite;
    }
    .small {
        width: 20px;
        height: 20px;
    }
    .big {
        width: 40px;
        height: 40px;
    }
    .center {
        margin: 0 auto;
        position: relative;
        top: 50%;
    }
</style>

<div class={`loader ${classes}`} />
