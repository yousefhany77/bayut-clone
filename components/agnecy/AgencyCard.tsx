import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BsFillPersonLinesFill,
  BsFillTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useQuery } from "react-query";
import { getAgencyDetails } from "../../utilities/bayutAPI";
import Spinner from "../layout/Spinner";
import { PhoneNumber } from "../../types";
import { Hit } from "./agnecyTypes";
import Link from "next/link";
import Modal from "../Modal";
import { IoExit } from "react-icons/io5";
import ContactForm from "./ContactForm";
interface HasInfo {
  hasInfo: boolean;
  agencyInfo: Hit;
  name?: never;
  phoneNumber?: never;
  contactName?: never;
}
interface NoInfo {
  agencyInfo?: never;
  hasInfo?: never;
  name: string;
  phoneNumber: PhoneNumber;
  contactName: string;
}
type Props = NoInfo | HasInfo;
function AgencyCard({
  name,
  phoneNumber,
  contactName,
  hasInfo = false,
  agencyInfo,
}: Props) {
  const { data, isLoading } = useQuery(
    name as string,
    () => getAgencyDetails(name as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24 * 2,
      staleTime: 1000 * 60 * 60 * 24,
      enabled: !hasInfo,
    }
  );
  const [agency, setHits] = useState<Hit>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasInfo && agencyInfo) {
      setHits(agencyInfo);
    } else {
      setHits(data);
    }
  }, [agencyInfo, data, hasInfo]);

  if (isLoading && !agency) return <Spinner />;
  if (!agency) return <h2> Not Found</h2>;

  return (
    <div className="w-full bg-blue-100/50  p-4 md:p-6    rounded-xl shadow ">
      <Modal isOpen={isOpen}>
        <div className="flex items-center justify-center h-full">
          <div className="bg-white px-5 py-2 rounded-lg">
            <div className="flex items-center justify-between my-5">
              <h2 className="text-lg text-slate-700">Contact Us</h2>
              <span
                onClick={() => setIsOpen(false)}
                className="rounded-full text-rose-500 cursor-pointer hover:text-rose-700 transition-colors duration-100 ease-in flex gap-2 items-center justify-end"
              >
                Exit
                <IoExit size={22} />
              </span>
            </div>
            <div className="shadow-inner px-2 py-3 rounded-lg bg-slate-50">
              <ContactForm />
            </div>
          </div>
        </div>
      </Modal>

      <div className=" flex items-center gap-3  ">
        <div className="rounded-full bg-white cursor-pointer overflow-hidden  shadow-md w-20 h-20 relative">
          <Image
            src={agency.logo.url}
            layout="fill"
            alt={`${agency.name} Logo`}
            objectFit="contain"
            className="!p-3"
          />
        </div>
        <div className=" flex  flex-col  w-fit ">
          <div className="flex">
            <h2 className="capitalize  mr-1  cursor-pointer text-sm max-w-[24ch]  md:text-lg font-semibold flex items-center  ">
              {agency.name}
            </h2>
            {agency.licenses && (
              <MdVerified className="text-emerald-500 ml-2 " size={22} />
            )}
          </div>
          <div className="font-normal flex gap-x-2 text-center flex-wrap md:text-start text-sm md:text-base text-slate-700 ">
            {" "}
            <span>
              <span className="font-medium ">Agents: </span>
              {agency.agentsCount}
            </span>
            <span>
              {" "}
              <span className="font-medium ">For Rent:</span>{" "}
              {agency.stats.adsRentCount}
            </span>{" "}
            <span>
              <span className="font-medium ">For Sale:</span>{" "}
              {agency.stats.adsSaleCount}
            </span>
          </div>
          {agency.locations.length === 0 ? (
            <span>Online Only</span>
          ) : (
            <a
              target={"_blank"}
              href={`https://www.google.com/maps/@${agency?.locations[0].geography.lat},${agency?.locations[0].geography.lng},19.29z`}
              className="underline flex items-center gap-2 text-slate-700 "
              title="Go to Location on the map 📌🗺️"
              rel="noreferrer"
            >
              {agency.location}
              <FaLocationArrow size={10} className="text-yellow-500 " />{" "}
            </a>
          )}
        </div>
      </div>
      <button className="bg-slate-600 h-8 rounded-lg text-white w-full mt-6 hover:bg-slate-800 transition-colors duration-200 ease-in-out">
        {" "}
        <Link href={`/agencies/properties?slug=${agency.slug}`}>
          List Agency properties
        </Link>
      </button>

      <hr className="border-2 rounded-full border-slate-200 my-6" />
      <section className="px-4">
        <div className="md:hidden">
          <span className="flex items-center gap-2 mb-3 ">
            <BsFillPersonLinesFill size={22} />{" "}
            <span className="text-lg font-semibold">
              {hasInfo ? agency.name : contactName}
            </span>
          </span>
          <div className="flex gap-2 flex-col justify-between">
            <span className="flex items-center gap-1">
              <BsFillTelephoneFill />{" "}
              <span>
                {hasInfo
                  ? agency.phoneNumber.phone
                    ? agency.phoneNumber.phone
                    : "No contact Details"
                  : phoneNumber?.mobile}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <BsFillTelephoneFill />{" "}
              <span>
                {hasInfo
                  ? agency.phoneNumber.proxyPhone
                    ? agency.phoneNumber.proxyPhone
                    : "No contact Details"
                  : phoneNumber?.phone}
              </span>
            </span>
            <a
              target={"black"}
              rel="noreferrer"
              href={`https://wa.me/${
                hasInfo ? agency.phoneNumber.phone : phoneNumber?.whatsapp
              }`}
            >
              <span className="flex items-center gap-2 hover:underline hover:font-bold transition-all ease-in duration-100 ">
                <BsWhatsapp />{" "}
                <span>
                  {" "}
                  {hasInfo
                    ? agency.phoneNumber.phone
                      ? agency.phoneNumber.phone
                      : "No contact Details"
                    : phoneNumber?.whatsapp}
                </span>
              </span>
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="my-3 bg-yellow-400 text-white font-medium  py-2 rounded-lg transition-colors duration-150 ease-in hover:bg-yellow-500 shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
        <h2 className="mb-1  md:text-lg">
          Categories ({agency.stats.categoryTypes.length})
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 truncate gap-1">
          {agency.stats.categoryTypes.map((category, i) => (
            <li className="list-inside list-disc " key={i}>
              {category}
            </li>
          ))}
        </ul>
        <h2 className="mt-3 mb-1 md:text-lg">
          Sevice Area ({agency.stats.serviceAreas.length})
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {agency.stats.serviceAreas.map((Area, i) => (
            <li
              className="list-inside list-disc truncate gap-1 hover:overflow-visible"
              key={i}
            >
              {Area}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AgencyCard;
