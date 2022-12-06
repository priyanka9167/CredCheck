export default function Header() {
    return (
        <div className="container">
        <nav className="d-flex navbar navbar-expand-lg bg-white navbar-light sticky-top">
            <a href="index.html" className="navbar-brand d-flex align-items-center">
                <h2 className="m-0 text-primary"><img className="img-fluid me-2" src="img/icon-1.png" alt=""
                    style={{ width: 45 + 'px' }} />CredCheck</h2>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-4 py-lg-0">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu shadow-sm m-0">
                            <a href="feature.html" className="dropdown-item">Feature</a>
                            <a href="token.html" className="dropdown-item">Token Sale</a>
                            <a href="faq.html" className="dropdown-item">FAQs</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <div className="right dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">User Profile</a>
                        <div className="dropdown-menu right">
                            <a href="#" className="left-dropdown-item">Profile</a>
                            <a href="#" className="dropdown-item">Account setting</a>
                            <a href="#" className="dropdown-item">Sign out</a>
                            <a href="#" className="dropdown-item">404 Page</a>
                        </div>
                    </div>

                </div>
                
                {/* <div className="h-100 d-lg-inline-flex align-items-center d-none">
               <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                       className="fab fa-facebook-f"></i></a>
               <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                       className="fab fa-twitter"></i></a>
               <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i
                       className="fab fa-linkedin-in"></i></a>
           </div> */}
            </div>
        </nav>
        </div>
    )
}