
function Card({ cardInfo }) {
    const { title, description, price, thumbnail } = cardInfo;
    console.log(cardInfo);
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>BDT {price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card