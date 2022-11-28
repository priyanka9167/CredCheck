import Link from "next/link";

export default function RegisterForm()  {
    return (
        <form>
        <div className="row g-3">
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="FirstName" placeholder="First Name"/>
                    <label htmlFor="Fname">First Name</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="email" className="form-control" id="LastName" placeholder="Last Name"/>
                    <label htmlFor="Lname">Last Name</label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <input type="text" className="form-control" id="Email" placeholder="Email"/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="Password" placeholder="Password"/>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="ConfirmPassword" placeholder="ConfirmPassword"/>
                    <label htmlFor="confirm-pass">Confirm Password</label>
                </div>
            </div>
            {/* <div className="col-12">
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 100+"px"}}></textarea>
                    <label htmlFor="message">Message</label>
                </div>
            </div> */}
            <div className="col-12">
                <button className="btn btn-primary py-3 px-4" type="submit">Register</button>
                <Link href="/login">
                Login
                </Link>
            </div>
        </div>
    </form>
    )
}