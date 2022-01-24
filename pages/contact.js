import Layout from "../components/layout";
const contact = () => {
  return (
    <section  style={{ backgroundColor: "#fff8f5" }}>
      <div   className="container  my-2 py-2">
        <div className="text-center mt-3 p-2">
          <h2 className="fw-bold">
            Let us handle your project, professionally.
          </h2>
        </div>
        {/* form start */}
        <form  >
  <div className="form-row p-3 m-2  row gy-5" >
     <div className="row  "><div className="col">
      <input type="text" className="form-control" placeholder="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name"/>
    </div></div>
    {/* 2nd line */}
    <div className="row"><div className="col">
      <input type="email" className="form-control" placeholder="Email"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Phone"/>
    </div></div>
    
    <div className="row  ">
    <div className="col">
      <input type="email" className="form-control" placeholder="Massege"/>
    </div>
    </div>
  </div>
</form>
      </div>
    </section>
  );
};

export default contact;
