import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className='footer-about'>
                    <img src="https://via.placeholder.com/200X100" alt="" />
                    <p>Address</p>
                    <p>Contact</p>
                    <p>social icon</p>

                    <a href="/about">About Us</a>
                </div>
                <div className='footer-links'>
                    <h5>Services</h5>
                    <a href="">Print Service</a>
                    <a href="">Design Service</a>
                    <a href="">Products</a>
                </div>
                <div className='footer-links'>
                    <h5>Helpful Links</h5>
                    <a href="">FAQs</a>
                    <a href="">Request a quote</a>
                    <a href="">Contact us</a>
                </div>
            </div>
            <div className='bottom'>
                <p>Copyright &copy; 2022 - PADES Printing</p>
            </div>
        </footer>
    )
}