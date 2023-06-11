import React from "react";

const AboutUS = () => {
  return (
    <div className="bg-white h-screen">
      <div className="space-y-4 w-8/12 mx-auto py-10">
        <p className="text-6xl font-bold">About Us</p>
        <div className="text-lg space-y-4">
          <p>
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.{" "}
          </p>
          <p>We focus on Career trend, news, smart job etc.</p>
          <p>If you want to contact us: you can send an email</p>
          <p>to <span className="text-blue-500">contact.deshcareer@gmail.com</span></p>
          <p>
            If you want to meet with us, you can come to our office based on an
            appointment.{" "}
          </p>
          <p>Our Office address:</p>
          <p>House: 13/3,</p>
          <p>Road: 2,</p>
          <p>Shyamoly, Dhaka-1207</p>
          <p>+8801880811047</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
