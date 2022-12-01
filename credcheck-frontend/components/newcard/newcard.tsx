export default function NewCard() {
    return (
        //         <form action="/send-data-here" method="post">
        //   <label htmlFor="first">First name:</label>
        //   <input type="text" id="first" name="first" />
        //   <label htmlFor="last">Last name:</label>
        //   <input type="text" id="last" name="last" />
        //   <button type="submit">Submit</button>
        // </form>
        <div className="container mt-4">
             <form>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Card Number</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject"> MM/YY</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Card Holder Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">CVV</label>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4" type="submit">Add</button>
                            </div>
                        </div>
                    </form> 
            {/* <form>
                <div className="form-container">
                    <div className="personal-information">
                        <h1>Payment Information</h1>
                    </div>

                    <input id="column-left" type="text" name="first-name" placeholder="First Name" />
                    <input id="column-right" type="text" name="last-name" placeholder="Surname" />
                    <input id="input-field" type="text" name="number" placeholder="Card Number" />
                    <input id="column-left" type="text" name="expiry" placeholder="MM / YY" />
                    <input id="column-right" type="text" name="cvc" placeholder="CCV" />

                    <div className="card-wrapper"></div>

                    <input id="input-field" type="text" name="streetaddress" placeholder="Streed Address" />
                    <input id="column-left" type="text" name="city" placeholder="City" />
                    <input id="column-right" type="text" name="zipcode" placeholder="ZIP code" />
                    <input id="input-field" type="email" name="email" placeholder="Email" />
                   
                </div>
                <div className="col-12">
                    <button className="btn btn-primary py-3 px-4" type="submit">Add</button>
                </div>
            </form> */}
        </div>
    )
}