import { Anchor, Col, Row } from "antd";
import {Navbar} from "../Components";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="mb-10 shadow">
        <section className="services">
          <div className="bg-gradient-to-r from-blue-300 to-transparent p-6 md:py-28 lg:pl-52">
            <h2 className="page-title text-6xl font-semibold">Services</h2>
            <p className="my-3 mb-4 ">
              We offer the region’s most comprehensive range of diagnostic
              services.
            </p>
          </div>
        </section>
        <div className="container w-11/12 mx-auto pt-14 ">
          <h2 className="text-6xl font-semibold text-center my-5">
            Our Services
          </h2>
          <hr className="my-5" />
          <Row className="overflow-y-auto servicesScroll">
            <Col span={18}>
              <div
                id="family"
                className="flex flex-col items-center text-center"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Family Medicine</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./family.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="women"
                className="flex flex-col items-center text-center mt-64 "
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Women's Health</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./women's-health.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="men"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Men's Health</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./men's-health.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="children"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Children's Health</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./children's-health.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="physical"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Physical Theraphy</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./physical-theraphy.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="dentistry"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Dentistry</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./dentistry.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="chronic"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">
                  Chronic Disease Management
                </h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./chronic-disease.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="diagnostics"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Diagnostics</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./diagnostics.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
              <div
                id="lab"
                className="flex flex-col items-center text-center mt-64"
                style={{ height: "50vh" }}
              >
                <h3 className="text-4xl font-medium mb-3">Laboratory</h3>
                <img
                  className="rounded-xl lg:w-1/2"
                  src="./laboratory.jpg"
                  alt="image"
                />
                <p className="w-10/12 mt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quisquam ipsa repudiandae officia porro commodi
                  adipisci eos sed praesentium quos? Rem sit inventore quo omnis
                  laborum asperiores quis perferendis explicabo.
                </p>
              </div>
            </Col>
            <Col span={5}>
              <Anchor
                className="mt-20 anchors"
                items={[
                  {
                    key: "family",
                    href: "#family",
                    title: "Family Medicine",
                  },
                  {
                    key: "women",
                    href: "#women",
                    title: "Women's Health",
                  },
                  {
                    key: "men",
                    href: "#men",
                    title: "Men's Health",
                  },
                  {
                    key: "children",
                    href: "#children",
                    title: "Children's Health",
                  },
                  {
                    key: "physical",
                    href: "#physical",
                    title: "Physical Theraphy",
                  },
                  {
                    key: "dentistry",
                    href: "#dentistry",
                    title: "Dentistry",
                  },
                  {
                    key: "chronic",
                    href: "#chronic",
                    title: "Chronic Disease Management",
                  },
                  {
                    key: "diagnostics",
                    href: "#diagnostics",
                    title: "Diagnostics",
                  },
                  {
                    key: "lab",
                    href: "#lab",
                    title: "Laborotory",
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Services;

/*

*/
