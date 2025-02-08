import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-black">
      <div>
        <div className="space-y-3 text-center">
          <h4 className="heading-4 text-foreground">Get in Touch with Us</h4>
          <p className="subtitle-text text-secondary-foreground">
            Have questions, feedback, or need support? We're here to help—reach
            out anytime!
          </p>
        </div>
        <div className="wrapper p-8">
          <div className="flex gap-8 rounded-2xl overflow-hidden p-4 bg-white shadow-2xl">
            <div className="w-2/5 bg-gradient-to-b from-[#6E15FD] to-[#420D97] px-8 py-14 text-white rounded-2xl flex flex-col justify-between">
              <div>
                <h4 className="heading-4">Contact Information</h4>
                <p className="text-[#C9C9C9] subtitle-text">
                  Feel Free to Contact Us
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone />
                  <p>-1 234-567-890</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdMail />
                  <p>demo@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoLocationSharp />
                  <p>
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </p>
                </div>
              </div>
              <div className="text-white flex gap-4">
                <div className="p-3 bg-[#1B1B1B] w-max rounded-full">
                  <FaXTwitter size={20} />
                </div>
                <div className="p-3 bg-[#1B1B1B] w-max rounded-full">
                  <FaInstagram size={20} />
                </div>
                <div className="p-3 bg-[#1B1B1B] w-max rounded-full">
                  <FaWhatsapp size={20} />
                </div>
              </div>
            </div>
            <div className="flex-1 p-8">
              <form className="space-y-14">
                <div className="flex gap-4">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name "
                      className="outline-none border-black border-b py-2"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="outline-none border-black border-b py-2"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="firstName">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="outline-none border-black border-b py-2"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label htmlFor="lastName">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="+1 234-567-890"
                      className="outline-none border-black border-b py-2"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h6 className="subtitle-text font-semibold">
                    Select Subject
                  </h6>
                  <div className="flex flex-wrap gap-5">
                    <label htmlFor="subject1">
                      <input
                        type="radio"
                        name="subject"
                        id="subject1"
                        className="mr-2"
                      />
                      General Inquiry
                    </label>
                    <label htmlFor="subject1">
                      <input
                        type="radio"
                        name="subject"
                        id="subject1"
                        className="mr-2"
                      />
                      Service Details
                    </label>
                    <label htmlFor="subject1">
                      <input
                        type="radio"
                        name="subject"
                        id="subject1"
                        className="mr-2"
                      />
                      Request a Quote
                    </label>
                    <label htmlFor="subject1">
                      <input
                        type="radio"
                        name="subject"
                        id="subject1"
                        className="mr-2"
                      />
                      Project Consultation
                    </label>
                    <label htmlFor="subject1">
                      <input
                        type="radio"
                        name="subject"
                        id="subject1"
                        className="mr-2"
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message"
                    className="w-full outline-none border-black border-b py-2"
                    rows={1}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="block ml-auto w-max py-3 px-6 subtitle-text bg-primary rounded-md hover:opacity-80 transition-all duration-300 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
