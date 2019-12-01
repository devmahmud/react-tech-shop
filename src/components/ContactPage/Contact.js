import React from "react";
import Title from "../Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 py-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/xnqnpqeg"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="10"
                placeholder="Write your message"
              ></textarea>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  className="form-control bg-primary text-white"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
