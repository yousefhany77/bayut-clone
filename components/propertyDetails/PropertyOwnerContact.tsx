import { PhoneNumber } from "../../types";
import { priceFormater } from "../../utilities/PriceFormer";
import {
  BsFillTelephoneFill,
  BsFillPersonLinesFill,
  BsWhatsapp,
} from "react-icons/bs";
interface Props {
  phoneNumber: PhoneNumber;
  contactName: string;
  price: number;
  purpose: string;
  rentFrequency?: string | null;
}
function PropertyOwnerContact({
  phoneNumber,
  contactName,
  price,
  purpose,
  rentFrequency,
}: Props) {
  return (
    <div className="text-slate-600 flex flex-col gap-3">
      <span className="flex items-end gap-2 text-slate-700 ">
        <h2 className="text-lg">{priceFormater(price)}</h2>
        {purpose === "for-rent" ? (
          <span className="font-semibold text-lg">/ {rentFrequency}</span>
        ) : null}
      </span>
      <span className="flex items-center gap-2 mb-3 ">
        <BsFillPersonLinesFill size={22} />{" "}
        <span className="text-lg font-semibold">{contactName}</span>
      </span>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="flex items-center gap-1">
          <BsFillTelephoneFill /> <span>{phoneNumber?.mobile}</span>
        </span>
        <span className="flex items-center gap-2">
          <BsFillTelephoneFill /> <span>{phoneNumber?.phone}</span>
        </span>
      </div>
      <a href={`https://wa.me/${phoneNumber?.whatsapp}`}>
        <span className="flex items-center gap-2 hover:underline hover:font-bold transition-all ease-in duration-100 ">
          <BsWhatsapp /> <span> {phoneNumber?.whatsapp}</span>
        </span>
      </a>
      <button className="mt-5 bg-yellow-400 text-white font-medium  py-2 rounded-lg transition-colors duration-150 ease-in hover:bg-yellow-500 shadow-md">
        Contact Us
      </button>
    </div>
  );
}

export default PropertyOwnerContact;
