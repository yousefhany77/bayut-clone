import { useRouter } from "next/router";
import React from "react";

function PropertyDetails() {
  const router = useRouter();
  console.log(router);
  return <div>PropertyDetails: {router.query.externalId}</div>;
}

export default PropertyDetails;
