import Image from "next/image";
import Layout from "../components/layout";
const about = () => {
  return (
    <>
      <div  style={{ backgroundColor: "#fff8f5" }}>
        <div className="justify-content-around align-items-center  row row-cols-1 row-cols-md-3 g-4 m-2 p-2">
          <div className="col">
            <Image src="/unsplash 1.png" alt="Logo" width={580} height={381} />
          </div>

          <div className="col  ">
            <div className="  mt-3 p-2   ">
              <h2 className="fw-bold fs-2">
                Let us handle your screen
                <span style={{ color: "#f63e7b" }} className="mx-2">
                  Professionally.
                </span>
              </h2>
            </div>
            <p className="card-text   m-1  fs-5" style={{ color: "#646464" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between">
              <div className="  mt-3 p-2   ">
                <h2 style={{ color: "#f63e7b" }} className="fw-bold fs-1">
                  500+
                </h2>
                <h6>Happy Customer</h6>
              </div>
              <div className="  mt-3 p-2   ">
                <h2 style={{ color: "#f63e7b" }} className="fw-bold fs-1">
                  16+
                </h2>
                <h6>Total Customer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
