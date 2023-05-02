import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const Home = () => {
    Aos.init()
  return (
    <div>
      <div className="container w-10/12 mx-auto pt-14">
        {/* Showcase */}
        <header className="flex items-center showcaseHeader">
          <section className="w-1/2 showcaseText" data-aos="fade-right" data-aos-duration="1500">
            <h1 className="text-6xl font-semibold">
              <span className="text-blue-500 text-7xl">We care</span>
              <br />
              <span>about your health</span>
            </h1>
            <p className="opacity-80 py-5">
              Good health is the state of mental, physical and social well being
              and it does not just mean absence of diseases.
            </p>
            <Link to="/contact">
              <button className="flex items-center bg-blue-500 text-white p-3 rounded-xl headerBtn hover:bg-blue-600">
                Book an appointment<i className="fa fa-chevron-right"></i>
              </button>
            </Link>
          </section>
          <section className="w-1/2 showcaseImg" data-aos="fade-left" data-aos-duration="1500">
            <div className="relative grid place-items-center">
              <img
                className="w-10/12 z-10 p-3 aspect-square rounded-full object-cover"
                src="./showcase.png"
                alt="showcase"
              />
              <div className="w-9/12 bg-blue-500 aspect-square rounded-full shadow-2xl absolute bottom-[-45px] border-[28px] grid box-content">
                <span className="border-[28px] border-white rounded-full"></span>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="absolute left-0 top-10 rounded-full bg-white bg-opacity-70 backdrop-blur-sm border border-gray-300 shadowing p-3 px-5 flex items-center gap-3 cardBounce hover:animate-none ">
                <i className="fa-solid fa-search  text-4xl text-blue-500"></i>
                <span className="opacity-70">
                  <p className="text-lg font-semibold ">
                    Well qualified doctors
                  </p>
                  <p>Treat with care</p>
                </span>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" className="absolute left-10 z-20 rounded-full bg-white bg-opacity-70 backdrop-blur-sm border border-gray-300 shadowing p-3 px-5 flex items-center gap-3 cardBounce hover:animate-none ">
                <i className="fa-solid fa-clipboard-list  text-4xl text-blue-500"></i>
                <span className="opacity-70">
                  <p className="text-lg font-semibold ">Book an appointment</p>
                  <p>Online appointment</p>
                </span>
              </div>
              <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"
                href="tel:+998912345678"
                className="absolute right-10 top-44 z-20 rounded-full bg-white bg-opacity-70 backdrop-blur-sm border border-gray-300 shadowing p-3 px-5 flex items-center gap-3 cardBounce hover:animate-none "
              >
                <span className="opacity-70">
                  <p className="text-lg font-semibold ">Contact</p>
                  <p>+998 91 234 56 78</p>
                </span>
                <i className="fa-solid fa-phone  text-4xl text-blue-500"></i>
              </a>
            </div>
          </section>
        </header>
        {/* Services */}
        <section className="pt-32">
          <h2 className="text-center text-5xl font-semibold">
            Our Medical Services
          </h2>
          <p className="text-center opacity-70 py-3">
            We are dedicated to serve you best medical services
          </p>
          <div className="flex items-center justify-evenly flex-wrap pt-10 gap-5">
            <div data-aos="fade-right" className="homeServiceCards min-w-[23%] bg-white p-12 border border-gray-200 rounded-2xl shadow-2xl text-center serviceCard">
              <i className="text-8xl fa-solid fa-flask-vial"></i>
              <p className="pt-5">Well equipped lab</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className="homeServiceCards min-w-[23%] bg-white p-12 border border-gray-200 rounded-2xl shadow-2xl text-center serviceCard">
              <i className="text-8xl fa-solid fa-truck-medical"></i>
              <p className="pt-5">Emergancy ambulance</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="400" className="homeServiceCards min-w-[23%] bg-white p-12 border border-gray-200 rounded-2xl shadow-2xl text-center serviceCard">
              <i className="text-8xl fa-solid fa-user-doctor"></i>
              <p className="pt-5">Appointments</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="600" className="homeServiceCards min-w-[23%] bg-white p-12 border border-gray-200 rounded-2xl shadow-2xl text-center serviceCard">
              <i className="text-8xl fa-solid fa-headset"></i>
              <p className="pt-5">Call center</p>
            </div>
          </div>
        </section>
        {/* Doctors */}
        <section className="pt-32">
          <h2 className="text-center text-5xl font-semibold">
            Meet our Doctors
          </h2>
          <p className="text-center opacity-70 py-3">
            Well qualified doctors are ready to serve you
          </p>
          <div className="doctorsWrapper py-10">
            <div data-aos="fade-down-right" data-aos-offset="200" className="doctorCard p-5 bg-white rounded-xl shadowing flex flex-col gap-4">
              <img
                className="rounded-lg"
                src="https://media.istockphoto.com/id/1224749418/photo/concentrated-young-female-physician-working-on-computer-doing-online-research.jpg?s=612x612&w=0&k=20&c=j2PP2ktQGsJTLLDBt8HHLk8Eg4rywc0QaJ7f7OIWA7E="
                alt="doctor"
              />
              <span className="text-center">
                <h3 className="text-3xl font-medium">Dr. Terry Henry</h3>
                <p className="text-lg opacity-80">Cardiologist</p>
              </span>
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star-half-stroke text-blue-500"></i>
              </span>
              <Button variant="contained">Book an appointment</Button>
            </div>
            <div data-aos="fade-down-left" data-aos-offset="200" className="doctorCard p-5 bg-white rounded-xl shadowing flex flex-col gap-4">
              <img
                className="rounded-lg"
                src="https://media.istockphoto.com/id/1224749418/photo/concentrated-young-female-physician-working-on-computer-doing-online-research.jpg?s=612x612&w=0&k=20&c=j2PP2ktQGsJTLLDBt8HHLk8Eg4rywc0QaJ7f7OIWA7E="
                alt="doctor"
              />
              <span className="text-center">
                <h3 className="text-3xl font-medium">Dr. Terry Henry</h3>
                <p className="text-lg opacity-80">Cardiologist</p>
              </span>
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star-half-stroke text-blue-500"></i>
              </span>
              <Button variant="contained">Book an appointment</Button>
            </div>
            <div data-aos="fade-up-right" data-aos-offset="200" className="doctorCard p-5 bg-white rounded-xl shadowing flex flex-col gap-4">
              <img
                className="rounded-lg"
                src="https://media.istockphoto.com/id/1224749418/photo/concentrated-young-female-physician-working-on-computer-doing-online-research.jpg?s=612x612&w=0&k=20&c=j2PP2ktQGsJTLLDBt8HHLk8Eg4rywc0QaJ7f7OIWA7E="
                alt="doctor"
              />
              <span className="text-center">
                <h3 className="text-3xl font-medium">Dr. Terry Henry</h3>
                <p className="text-lg opacity-80">Cardiologist</p>
              </span>
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star-half-stroke text-blue-500"></i>
              </span>
              <Button variant="contained">Book an appointment</Button>
            </div>
            <div data-aos="fade-up-left" data-aos-offset="200" className="doctorCard p-5 bg-white rounded-xl shadowing flex flex-col gap-4">
              <img
                className="rounded-lg"
                src="https://media.istockphoto.com/id/1224749418/photo/concentrated-young-female-physician-working-on-computer-doing-online-research.jpg?s=612x612&w=0&k=20&c=j2PP2ktQGsJTLLDBt8HHLk8Eg4rywc0QaJ7f7OIWA7E="
                alt="doctor"
              />
              <span className="text-center">
                <h3 className="text-3xl font-medium">Dr. Terry Henry</h3>
                <p className="text-lg opacity-80">Cardiologist</p>
              </span>
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star text-blue-500"></i>
                <i className="fa-solid fa-star-half-stroke text-blue-500"></i>
              </span>
              <Button variant="contained">Book an appointment</Button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/doctors">
              <Button variant="outlined" className="w-3/12 doctorsSeeMoreBtn">
                See more
              </Button>
            </Link>
          </div>
        </section>
        {/* Diagnostics */}
        <section className="my-32 rounded-xl diagnostics">
          <div className="bg-gradient-to-r from-slate-300 to-transparent rounded-xl p-6 py-28">
            <h2 className="text-5xl font-semibold">Diagnostics</h2>
            <p className="my-3 mb-4">
              We offer the region’s most comprehensive range of diagnostic
              services.
            </p>
            <Link to="/contact#appForm">
              <Button
                variant="contained"
                sx={{ borderRadius: "15px", padding: 1.5, paddingX: 4 }}
              >
                Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>
      {/* Map */}
      <section>
        <h2 className="text-center text-5xl font-semibold">How to find us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d451.5296174810173!2d71.97750231377772!3d40.936803795799946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1681744726327!5m2!1sen!2s"
          height="450"
          allowFullScreen={true}
          className="w-full mt-7"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;