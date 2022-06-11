import React from "react";
import { Helmet } from "react-helmet";
import HeaderTwo from "../../../../components/header/HeaderTwo";
import ContactAddress from "../../../../components/contact/address/ContactAddress";
import ContactForm from "../../../../components/contact/form/ContactForm";
import FooterTwo from "../../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import CallToActionThree from "../../../../components/call-to-action/CallToActionThree";

const ContactCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>
          Contact Customer Support || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four space-fix">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Contact us</h6>
                <h2>Feel free to contact us or just say hi!</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-four */}

      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <img
              src="/njsw36/static/images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="/njsw36/static/images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

          <div className="form-style-classic mt-200 md-mt-80">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-style-two */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-130">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default ContactCustomerSupport;
