import './Videos.css';

const Videos = () => {
    return (
        <section className="videos">
            <h2>Recomendações</h2>
            <p>
                Dê uma passadinha no nosso youtube e venha conhecer algumas das nossas campanhas de sucesso:
            </p>
            <iframe width="90%" height="240px" src="https://www.youtube.com/embed/CqBS1qqjNCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    );
}

export default Videos;