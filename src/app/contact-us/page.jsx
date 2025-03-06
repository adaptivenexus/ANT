"use client";

import { useState } from "react";

const ContactUs = () => {
  const [subject, setSubject] = useState("general");

  return (
    <section className="min-h-screen text-black mt-8">
      <div className="wrapper space-y-8">
        <div className="space-y-3 text-center">
          <h4 className="heading-4 text-primary">Contact Us</h4>
          <p className="subtitle-text text-secondary-foreground">
            Any questions or remarks ? just write a message !
          </p>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex gap-8 rounded-2xl overflow-hidden p-4 bg-white shadow-2xl flex-1">
            <div className="flex-1 p-4 md:p-8">
              <form className="space-y-8">
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name "
                      className="outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                    />
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="firstName">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="lastName">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="+1 234-567-890"
                      className="outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h6 className="subtitle-text font-semibold">
                    Select Subject
                  </h6>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="service">Service Details</option>
                    <option value="quote">Request a Quote</option>
                    <option value="project">Project Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message"
                    className="w-full outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                    rows={2}
                  ></textarea>
                </div>
                <p>
                  By registering, you agree to the processing of your personal
                  data by ANT a describe in the privacy policy{" "}
                </p>
                <button
                  type="submit"
                  className="block ml-auto w-max py-3 px-6 subtitle-text bg-primary rounded-md hover:opacity-80 transition-all duration-300 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-2/5 space-y-5">
            <div className="bg-white shadow-2xl p-5 rounded-2xl overflow-hidden space-y-5">
              <h4 className="heading-4">Give us a call</h4>

              <p className="heading-4">+1 904 800 9254</p>
              <p className="subtitle-text border-b border-blue-500 text-blue-500">
                Get Support 24/7
              </p>
            </div>
            <div className="bg-white shadow-2xl p-5 rounded-2xl overflow-hidden space-y-5">
              <h4 className="heading-4">Leave us some Feedback</h4>
              <p className="subtitle-text">
                Good or bad we will love to hear it all.
              </p>
              <button type="button" className="btn-primary text-white">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
