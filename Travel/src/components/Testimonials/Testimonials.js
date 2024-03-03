import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./Testimonials.css"; // Import the CSS file for styling

export default function Testimonials() {
  return (
    <div className="background-container">
      <div className="card-container">
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="8" lg="6" xl="4">
              <MDBCard>
                <MDBCardBody className="m-3">
                  <MDBRow className="align-items-center">
                    <MDBCol lg="4" className="d-flex justify-content-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                        alt="woman avatar"
                        className="circular-image"
                      />
                    </MDBCol>
                    <MDBCol lg="8">
                      <p className="text-muted fw-light mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas, voluptates
                        omnis nulla ea odio quia similique corrupti magnam.
                      </p>
                      <p className="fw-bold lead mb-2">
                        <strong>Anna Smith</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Product manager</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
