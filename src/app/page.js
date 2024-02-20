import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Image
        alt="not vissible"
        width={300}
        height={300}
        src={"/public/image.png"}
      />
    </div>
  );
};

export default page;
