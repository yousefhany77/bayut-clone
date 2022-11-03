import React from "react";
import ContactForm from "../../components/agnecy/ContactForm";
function contact() {
  // Function to handle API response

  return (
    <div className="flex items-center w-full bg-blue-500">
      <div className="bg-slate-200 p-5">
        <ContactForm />
      </div>
    </div>
  );
}

export default contact;
