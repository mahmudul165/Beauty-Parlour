import Image from "next/image";
import React from "react";

const HeaderContainer = () => {
  return (
    <div  >
      <div className="justify-content-around align-items-center  row row-cols-1 row-cols-md-3 g-4 m-2 p-2">
        <div className="col m-2 p-2   ">
          <h5 className="fs-2 my-1 p-2">BEAUTY SALON</h5>
          <h5 className="fs-2  my-1 p-2"> FOR EVERY WOMEN</h5>
          <p className="P-2  py-2 my-2 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            fuga blanditiis, reprehenderit nemo nam eos autem! Amet porro
            aliquam et?
          </p>
          <button
            style={{ backgroundColor: "#f63e7b" }}
            className="btn  text-white fs-5 my-2 py-2"
          >
            Get an Appointment
          </button>
        </div>
        <div className="col">
          <Image
            src="/beautiful-young-asian-woman.png"
            alt="Logo"
            className="p-2 m-2"
            width={448}
            height={478}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
