import Image from "next/image";

const navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light  ">
    //   <Image src="/Group 33092.png" alt="Logo" width={50} height={50} />
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarTogglerDemo02"
    //     aria-controls="navbarTogglerDemo02"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <section className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           Home <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Link
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link disabled" href="#">
    //           Disabled
    //         </a>
    //       </li>
    //     </ul>
    //     <form className="form-inline my-2 my-lg-0">
    //       <input
    //         className="form-control mr-sm-2"
    //         type="search"
    //         placeholder="Search"
    //       />
    //       <button
    //         className="btn btn-outline-success my-2 my-sm-0"
    //         type="submit"
    //       >
    //         Search
    //       </button>
    //     </form>
    //   </section>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/Group 33092.png" alt="Logo" width={128} height={48} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active   font-weight-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  " aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact us
                </a>
              </li>
              <button
                width={134}
                height={45}
                style={{ backgroundColor: "#f63e7b" }}
                className="btn   text-white  mx-3 p-2"
              >
                Login
              </button>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default navbar;
