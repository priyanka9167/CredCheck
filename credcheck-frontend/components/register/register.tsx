export default function ResgisterForm()  {
    return (
        <form>
        <div className="row g-3">
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                    <label htmlFor="name">Your Name</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                    <label htmlFor="email">Your Email</label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                    <label htmlFor="subject">Subject</label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 100+"px"}}></textarea>
                    <label htmlFor="message">Message</label>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary py-3 px-4" type="submit">Submit</button>
            </div>
        </div>
    </form>
    )
}