export default function LoginForm() {
    return (
        <div className="container mt-4">
                   <form>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">User Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
        </div>
    )
}