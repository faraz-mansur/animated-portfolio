import "./hero.scss";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>FARAZ MANSUR</h2>
                    <h1>Web developer and UI designer</h1>
                    <div className="buttons">
                        <button>See the Latest Works</button>
                        <button>Connect</button>
                    </div>
                    <img src="/scroll.png" alt="" />
                </div>
                <div className="imageContainer">
                    <img src="/hero.png" alt="" />
                </div>
            </div>
        </div>
    )
}
