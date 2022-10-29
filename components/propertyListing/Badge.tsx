import React from "react";

interface Props {
  type: string;
}
const style =
  "absolute top-5 left-5 bg-blue-500 text-white px-5 py-1 rounded-full shadow z-10 capitalize opacity-90";
function Badge({ type }: Props) {
  switch (type.toLowerCase()) {
    case "hot": {
      return <span className={`${style} bg-rose-500 ` }>{type}</span>;
    }
    case "superhot": {
      return <span className={`${style} bg-orange-400`}>{type}</span>;
    }
    case "premium": {
      return <span className={`${style} bg-emerald-700`}>{type}</span>;
    }
    case "free": {
      return null
    }
    default: {
      return <span className={`${style} bg-emerald-700`}>{type}</span>;
    }
  }
}

export default Badge;
