import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "saifulEmailService@17",
        "template_s2ftyt8",
        form.current,
        "oUxxPtTgGe6BKOr8J"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your message have been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="mt-12">
      <SectionTitle heading={"Get In Touch"}></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 w-3/4 mx-auto">
        <div className="card w-72 bg-gradient-to-r from-info to-success text-white">
          <div className="card-body items-center text-center">
            <BsFillTelephoneOutboundFill className="text-4xl"></BsFillTelephoneOutboundFill>
            <h2 className="card-title">Phone</h2>
            <p>+8801781-281193</p>
          </div>
        </div>
        <div className="card w-72 bg-slate-500 text-white">
          <div className="card-body items-center text-center">
            <GoLocation className="text-4xl "></GoLocation>
            <h2 className="card-title">Address</h2>
            <p>Kallyanpur,Dhaka-1216</p>
          </div>
        </div>
        <div className="card w-72 bg-gradient-to-r from-success to-info  text-white">
          <div className="card-body items-center text-center">
            <AiOutlineMail className="text-4xl"></AiOutlineMail>
            <h2 className="card-title">Email</h2>
            <p>saifulislam975317@gmail.com</p>
          </div>
        </div>
      </div>

      <form
        className="flex flex-col mt-8 mx-auto w-1/2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none"
            name="message"
            placeholder="write your message here..."
          ></textarea>
        </div>

        <input className="btn btn-info my-4" type="submit" value="send" />
      </form>
    </div>
  );
};

export default ContactUs;
