import {Login} from '@components/Login'
export const Homepage = () => {
    return (
        <section className="w-100 p-5 container d-flex flex-column justify-content-center align-items-center">
            <div className="wrapper w-50 d-flex justify-content-center">
            <div className="card w-75">
                <img src="images/RPLOGO.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title">Dimworld Roleplay</h1>
                    </div>
                    <Login />
            </div>
            </div>
        </section>
    )
}