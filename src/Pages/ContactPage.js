import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/email.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
          <Title title="Contact Info" span="Contact Info"></Title>
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44746.37503467104!2d-73.7473802314163!3d45.49702381323975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9180faceface3%3A0xb28b84ea5ee62835!2sSaint-Laurent%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1621912181138!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-sect">
          <ContactItem icon={phone} text={"514-623-0667"} title={"Phone"} />
          <ContactItem
            icon={email}
            text={"trantuochuy@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text={"Montreal, Quebec"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
