import React, { Component } from "react";
import contact from "../../assets/astronaut.png";
import bannerImage from "../../assets/Plane.png";
import "./contact.css";
import emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isFormVisible: true
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_1sv9t6b', 'template_jhemkuw', this.form.current, 'ODSTkHwTRAirRD5Je')
      .then((result) => {
          console.log(result.text);
          window.alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          window.alert('Failed to send email. Please try again.');
      });
  };

  render() {
    return this.state.isFormVisible ? (
      <form ref={this.form} onSubmit={this.sendEmail}>
        <div className="getintouch mb-5">
          <div className="container">
            <div className="row">
            
              <div className="col-lg-6 col-md-12">
                <div className="title pt-1 pb-4 text-center">
                  <h4 className="sub-title text-capitalize">
                    Contact <span>Us</span>
                  </h4>
                </div>
                <div className="col-lg-6 col-md-12">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-10 col-md-8 col-12 text-center">
                    <img className="img-fluid" src={contact} alt="contact" />
                  </div>
                </div>
              </div>
                <div className="row">
                  <div className="form-group c col-md-6 col-12 mb-3">
                    <label htmlFor="first_name" className="mb-2 text-capitalize" style={{color: "#fff"}}>
                      
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control py-2 px-3"
                      id="first_name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group c col-md-6 col-12 mb-3">
                    <label htmlFor="last_name" className="mb-2 text-capitalize" style={{color: "#fff"}}>
                      
                    </label>
                    <input
                      type="text"
                      className="form-control py-2 px-3"
                      id="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group c col-12 mb-3">
                    <label htmlFor="e-mail" className="mb-2 text-capitalize" style={{color: "#fff"}}>
                     
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      className="form-control py-2 px-3"
                      id="e-mail"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group c col-12 mb-4">
                    <label htmlFor="textarea" className="mb-2 text-capitalize" style={{color: "#fff"}}>
                      
                    </label>
                    <textarea
                      className="form-control py-2 px-3"
                      id="textarea"
                      placeholder="Message"
                      rows="4"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-group text-center">
                      <input className="btn btn-outline-primary text-capitalize w-25 mx-auto my-3" type="submit" value="Send" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    ) : null;
  }
}

export default Contact;
