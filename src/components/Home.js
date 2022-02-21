import './Home.css'

export default function Home() {
    return (
        <main>
            <section className="banner">
                <img src="/images/pades-banner.png" alt="banner" />
            </section>
            <section className='content'>
                <h3 style={{padding: '10px'}}>Featured Products</h3>
                <div className="products-card-wrapper">
                    <div className="card">
                        <img src="/images/product-banner.jpg" className="card-img-top" alt="product banner"/>
                        <div className="card-body">
                            <h6 className="card-title">Banners</h6>
                            <a href="/products/banners" className="btn btn-primary">View all Banners</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/product-brochure.jpg" className="card-img-top" alt="product brochure"/>
                        <div className="card-body">
                            <h6 className="card-title">Brochures</h6>
                            <a href="/products/brochure" className="btn btn-primary">View all Brochures</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/product-business-card.jpg" className="card-img-top" alt="product business card"/>
                        <div className="card-body">
                            <h6 className="card-title">Business Cards</h6>
                            <a href="/products/business-card" className="btn btn-primary">View all Business cards</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}