"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when field is being edited
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          subject: "general",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen text-black mt-8">
      <div className="wrapper max-w-[1280px] 2xl:max-w-[1600px] space-y-8">
        <div className="space-y-3 text-center">
          <h4 className="heading-4 text-primary">Contact Us</h4>
          <p className="subtitle-text text-secondary-foreground">
            Get in touch with our team for assistance, we're here for you!
          </p>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex gap-8 rounded-2xl overflow-hidden p-4 bg-white shadow-2xl flex-1">
            <div className="flex-1 p-4 md:p-8">
              {status.submitted && (
                <div
                  className={`mb-6 p-4 rounded-md ${status.success ? "bg-green-50 text-green-700 border border-green-300" : "bg-red-50 text-red-700 border border-red-300"}`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      className={`outline-none border ${errors.firstName ? "border-red-500" : "border-[#D1D1D1]"} font-medium rounded-md py-2 px-4`}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className={`outline-none border ${errors.lastName ? "border-red-500" : "border-[#D1D1D1]"} font-medium rounded-md py-2 px-4`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className={`outline-none border ${errors.email ? "border-red-500" : "border-[#D1D1D1]"} font-medium rounded-md py-2 px-4`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="phoneNumber">Phone Number (Optional)</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="+1 234-567-890"
                      className="outline-none border border-[#D1D1D1] font-medium rounded-md py-2 px-4"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h6 className="subtitle-text font-semibold">
                    Select Subject*
                  </h6>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    className={`w-full outline-none border ${errors.message ? "border-red-500" : "border-[#D1D1D1]"} font-medium rounded-md py-2 px-4`}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>
                <p>
                  By submitting your inquiry, you acknowledge and agree to our{" "}
                  <Link href={"/terms-and-conditions"} className="text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"/privacy-policy"} className="text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`block ml-auto w-max py-3 px-6 subtitle-text ${status.submitting ? "bg-gray-400" : "bg-primary hover:opacity-80"} rounded-md transition-all duration-300 text-white`}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-2/5 space-y-5">
            <div className="bg-white shadow-2xl p-5 rounded-2xl overflow-hidden space-y-5">
              <h4 className="heading-4">Speak with Our Team</h4>

              <p className="heading-4 flex items-center gap-2">
                <MdOutlinePhoneInTalk size={36} /> (904) 800-9254
              </p>
            </div>
            <div className="bg-white shadow-2xl p-5 rounded-2xl overflow-hidden space-y-5">
              <h4 className="heading-4">We Value Your Feedback!</h4>
              <p className="subtitle-text">
                Your feedback matters! Let's make things even better together.
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
