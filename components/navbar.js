import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    
    <nav   className="container navbar navbar-expand-lg navbar-light  ">
      <div className="container-fluid">
      <Link  href="/">
        <a className="navbar-brand"  >
          <Image src="/Group 33092.png" alt="Logo" width={128} height={48} />
        </a>   
        </Link>
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
                <Link  href="/">
                <a
                  className="nav-link active   font-weight-bold"
                  aria-current="page"                  
                >
                  Home
                </a>
                 </Link>
              </li>
              <li className="nav-item">
              <Link  href="/services">
                <a className="nav-link active  " aria-current="page"  >
                  Services
                </a>  
                 </Link>
              </li>
              <li className="nav-item">
              <Link  href="/testimonial">
                <a className="nav-link active" aria-current="page" >
                  Our Team
                </a></Link>
              </li>
              <li className="nav-item"> <Link  href="/contact">
                <a className="nav-link active" aria-current="page" >
                  Contact us
                </a></Link>
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

export default Navbar;
