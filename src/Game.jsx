function Game({ image, title, platform, rating }) {
    const fallbackImage =
        "https://placehold.co/800x600/111/daa520?text=Game";

    return (
        <article className="game-card">
            <img
                src={image || fallbackImage}
                alt={title}
                onError={(event) => {
                    event.currentTarget.src = fallbackImage;
                }}
            />

            <div className="game-info">
                <div className="game-platform">
                    {platform}
                </div>

                <h2>{title}</h2>

                <div>
                    <span className="stars">
                        {"★".repeat(rating)}
                        {"☆".repeat(5 - rating)}
                    </span>

                    <span className="rating">
                        {rating} / 5
                    </span>
                </div>
            </div>
        </article>
    );
}

export default Game;
