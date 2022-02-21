import './Home.css'

export default function Home() {
    return (
        <main>
            <section className="banner">
                <img src="/images/pades-banner.jpeg" alt="banner" />
            </section>
            <section className='content'>
                <h3 style={{padding: '10px'}}>Featured Products</h3>
                <div className="products-card-wrapper">
                    <div className="card">
                        <img src="https://via.placeholder.com/180X150" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/180X150" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/180X150" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}