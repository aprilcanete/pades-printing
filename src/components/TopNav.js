import './TopNav.css'

export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="nav-content">
                <img src="/images/phone-icon.png" alt="phone icon" />
                <span>123456789</span>
                <img src="/images/email-icon.png" alt="mail icon" />
                <span>padesprinting@yahoo.com</span>
            </div>
            <div className="nav-content">
                <img src="/images/account-icon.png" alt="user icon" />
                <span>Log in</span>
                <img src="/images/shopping-cart-icon.png" alt="cart icon" />
                <span>Cart</span>
            </div>
        </div>
    )
}