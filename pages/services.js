import Image from "next/image";
import Layout from "../components/layout";

const services = () => {
  return (
    <>
      <div className="text-center mt-3 p-2    ">
        <h2 className="fw-bold">
          Our Awesome
          <span style={{ color: "#f63e7b" }} className="mx-2">
            Services
          </span>
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2 p-2">
        <div className="col p-2  ">
          <div className="card h-100  border-0">
            <div className="text-center  my-2 p-2  ">
              <Image src="/Group 1372.png" alt="Logo" width={72} height={72} />
            </div>

            <h3 className="card-title text-cenetr   text-center">
              Anti Age Face Treatment
            </h3>
            <h6
              style={{ color: "#f63e7b" }}
              className="fs-3 text-center py-2 my-1"
            >
              $99
            </h6>
            <p
              className="card-text text-center  m-1  fs-5"
              style={{ color: "#646464" }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className="col p-2  bg-white">
          <div className="card h-100  border-0">
            <div className="text-center  my-2 p-2  ">
              <Image src="/Group 1373.png" alt="Logo" width={72} height={72} />
            </div>

            <h3 className="card-title text-cenetr   text-center">
              Anti Age Face Treatment
            </h3>
            <h6
              style={{ color: "#f63e7b" }}
              className="fs-3 text-center py-2 my-1"
            >
              $99
            </h6>
            <p
              className="card-text text-center  m-1  fs-5"
              style={{ color: "#646464" }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="col p-2  ">
          <div className="card h-100  border-0">
            <div className="text-center  my-2 p-2  ">
              <Image src="/Group 1374.png" alt="Logo" width={72} height={72} />
            </div>

            <h3 className="card-title text-cenetr   text-center">
              Anti Age Face Treatment
            </h3>
            <h6
              style={{ color: "#f63e7b" }}
              className="fs-3 text-center py-2 my-1"
            >
              $99
            </h6>
            <p
              className="card-text text-center  m-1  fs-5"
              style={{ color: "#646464" }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
