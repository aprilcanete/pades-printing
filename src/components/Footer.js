import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className='footer-about'>
                    <img src="/images/pades-logo.png" alt="" />
                    <p>72 Dollar, Novaliches, Quezon City, <br></br> Metro Manila, Philippines</p>
                    <p>+63 2 738 1070</p>
                    <a href="https://www.facebook.com/PADESprintingServices/"><img src="/images/facebook-icon.png" alt="" /></a>
                    <a href="https://">  <img src="/images/twitter-icon.png" alt="" /></a>
                    <br></br>
                    <br></br>
                    <a href="/about">About Us</a>
                </div>
                <div className="footer-side">
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
            </div>
            {/* <a href="https://www.freepik.com/psd/mockup">Mockup psd created by freepik - www.freepik.com</a>
            <a href='https://www.freepik.com/psd/brochure'>Brochure psd created by freepik - www.freepik.com</a> */}
            <div className='bottom'>
                <p>Copyright &copy; 2022 - PADES Printing</p>
            </div>
        </footer>
    )
}