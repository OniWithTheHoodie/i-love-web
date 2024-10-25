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
        </article>
    </section>
</section>  

<style>
    section {
        display: flex;
        flex-direction: column;
    }

    .container {
        display: inline-block;
    }

    article {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .post {
        display: flex;
        justify-content: center;
        width: 300px;
        height: 300px;
        border: 2px solid black;
        box-shadow: black 10px 10px;
        position: relative;
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
    }
</style>