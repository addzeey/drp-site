export const Homepage = () => {
    return (
        <section className="w-100 p-5 container d-flex flex-column justify-content-center align-items-center">
            <div className="wrapper w-50 d-flex justify-content-center">
            <div className="card w-75">
                <img src="images/RPLOGO.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">ECO Roleplay</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="btn btn-primary w-100 p-2">Login</a>
                    </div>
            </div>
            </div>
        </section>
    )
}