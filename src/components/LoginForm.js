import './LoginForm.css'

const LoginForm = () => {

    return (
        <>
            {/* <div className={`${isShowLogin ? "active" : ""} show`}> */}
                <div className="login-form">
                    <div className="form-box solid">
                        <form action="">
                            <h1>Login</h1>
                             <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <input type="submit" value="LOGIN" className="login-btn" />
                        </form>
                    </div>
                </div>
            {/* </div>   */}
        </>
       
    )
}

export default LoginForm;