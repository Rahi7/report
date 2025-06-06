import React from "react";

const ServiceCard = ({ icon: Icon, title, description, link, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        link ? "cursor-pointer hover:scale-[1.03]" : "cursor-default opacity-70"
      } bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl shadow-xl w-72 p-6 transition-transform transform duration-300 ease-in-out`}
    >
      <div className="mb-5 flex justify-center">
        <Icon size={40} /> {/* Render the icon component */}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
