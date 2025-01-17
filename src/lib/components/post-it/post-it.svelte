<section> 
    <section class="container">
        <h1>Digital gardning</h1>
        <article>
            <article class="post">
                <a href="/sprint13" class="post__link">
                    <h2>sprint 13</h2>
                </a>
            </article>
            <article class="post">
                <a href="/sprint14" class="post__link">
                    <h2>sprint 14</h2>
                </a>
            </article>
            <article class="post">
                <p class="post__link">
                    <span class="decovar-alpha-regular24-custom-instance">
                        This is my custom instance
                    </span>
                </p>
            </article>
        </article>
    </section>
</section>  

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1em;
        @media only screen and (min-width: 600px) and (max-width: 980px){
            display: flex;
            flex-direction: row;
            gap: 1em;
        }

        @media only screen and (min-width: 982px) {
        display: flex;
        flex-direction: column;
        }
    }

    .container {
        @media only screen and (min-width: 600px) and (max-width: 980px){
            display: inline-block;
            padding: 10px;
        }

        @media only screen and (min-width: 960px) {
        display: inline-block;
        }
    }

    article {
        width: 400px;

        @media only screen and (min-width: 600px) and (max-width: 980px){
            display: flex;
            flex-direction: row;
            gap: 1em;
            width: 700px;
        }

        @media only screen and (min-width: 960px) {
        display: flex;
        flex-direction: row;
        gap: 1em;
        width: 700px;
        }
    }

    .post {
        display: flex;
        justify-content: center;
        height: 300px;
        border: 2px solid black;
        box-shadow: black 10px 10px;
        position: relative;
        margin-bottom: 30px;
    }

    .post__link:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
    }

    a {
        text-decoration: none;
    }

    h2 {
        color: black;
        position: relative;
        font-family: var(--font-familiy);
    }

    .decovar-alpha-regular24-custom-instance {
        font-family: var(--font-familiy);
    }

</style>