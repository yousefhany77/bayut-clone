import React, { useEffect, useState } from "react";

interface Valid {
  email: boolean | undefined;
  phone: boolean | undefined;
}
import axios from "axios";
const options = {
  method: "GET",
  mode: "no-cors",
  params: { format: "json" },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GEO_KEY,
    "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
  },
};

function ContactForm() {
  const [valid, setValid] = useState<Valid>({
    email: undefined,
    phone: undefined,
  });
  const [touched, setTouched] = useState<Valid>({
    email: false,
    phone: false,
  });
  const isValidEmail = (email: string) => {
    const isValid = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );

    setTouched((prev) => ({ ...prev, email: true }));
    setValid((prev) => ({ ...prev, email: isValid }));
    return isValid;
  };
  const [location, setLocation] = useState<string>("");
  useEffect(() => {
    const locate = async () => {
      const { data } = await axios.get(
        "https://ip-geo-location.p.rapidapi.com/ip/check",
        options
      );
      setLocation(data.country.code);
    };
    const timer = setTimeout(() => {
      locate();
      console.log("Hello");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const isValidPhone = async (phone: string) => {
    if (phone.length > 6 && location.length > 1) {
      try {
        const { data } = await axios.get(
          "https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp",
          {
            params: { number: phone, country: location },
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CHECKPHONE_KEY,
              "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
            },
          }
        );
        setValid((prev) => ({ ...prev, phone: data.isValidNumber }));
        return data.isValidNumber;
      } catch (error) {
        console.log(error);
      }
    }
    setTouched((prev) => ({ ...prev, phone: true }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      email: event.target.elements.email.value,
      name: event.target.elements.name.value,
      countryCode: event.target.elements.name.countryCode,
      phone: event.target.elements.name.phone,
    });
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)} className="grid gap-3">
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        autoFocus
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        className={`py-3  rounded-lg px-4 shadow`}
      />

      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="w-full relative">
        {touched.email && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {valid.email ? "✅" : "❌"}
          </span>
        )}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your E-Mail"
          className={`p-3 rounded-lg px-4 shadow w-full ${
            valid.email === false && touched.email
              ? "border-2 border-red-400 outline-none"
              : null
          }`}
          onChange={(event) => isValidEmail(event.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="text"
          name="countryCode"
          className="w-[6ch] rounded-lg px-4 py-3  shadow"
          placeholder="country Code"
          defaultValue={location}
          onChange={(event) => setLocation(event?.target?.value)}
        />
        <div className="w-full relative">
          {touched.phone && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              {valid.phone ? "✅" : "❌"}
            </span>
          )}
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
            className={`p-3 rounded-lg px-4 shadow w-full ${
              valid.phone === false && touched.phone
                ? "border-2 border-red-400 outline-none"
                : null
            }`}
            onChange={(event) => isValidPhone(event.target.value)}
          />
        </div>
      </div>
      <button className="bg-yellow-400 w-full text-lg text-slate-50 my-2 h-10 rounded-lg hover:bg-yellow-600 transition-colors ease-out">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
