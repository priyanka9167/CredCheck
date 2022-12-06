export default function Footer(): JSX.Element {
    return (
        <div className="container-fluid bg-light footer  wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-12">
                    <h1 className="text-primary mb-4"><img className="img-fluid me-2" src="img/icon-1.png" alt="" style={{width: 45 +'px'}}/>CredCheck</h1>
                    <span>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</span>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}