

export default function GetQuote({ items }) {
    let products = items.filter(item => item.title == 'Products' )

    return (
        <>
            <h1>Request A Quote</h1>
            <form className="form quote row g-3">
                <div className="col-md-12">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>What are you looking for?</option>
                        <option disabled>Printing Service</option>
                        {
                            products[0].subMenu.map((menu, idx) => {
                                return (
                                    <option value={idx} key={idx}>&#160;&#160;{menu.title}</option>
                                )         
                            })
                        }
                        <option>Design Service</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Contact number" aria-label="Contact number"/>
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email"/>
                </div>
                <div className="col-md-12">
                    <input type="name" className="form-control" placeholder="Full name" aria-label="Full name"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Additional Details"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
                
            </form>
        </>
        
       
    )
}