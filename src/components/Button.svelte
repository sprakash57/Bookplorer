<style lang="scss">
    .btn {
        background: red;
        color: white;
        padding: 0.375rem 0.75rem;
        background-color: rgba(204, 218, 226, 0.349);
        box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
            -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        line-height: 1.5;

        &:active {
            box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
                inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
        }

        &:hover {
            color: rgba(139, 139, 139, 0.788);
            cursor: pointer;
        }
    }
</style>

<main><button class="btn">Buy on Amazon</button></main>
