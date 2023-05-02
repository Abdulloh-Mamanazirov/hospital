import React,{ useState } from 'react'
import { Tabs } from "antd";

const About = () => {
    const [title, setTitle] = useState("About us")
    
  return (
    <div>
      <section className="about">
        <div className="bg-gradient-to-r from-blue-300 to-transparent p-6 md:py-28 lg:pl-52">
          <h2 className="text-6xl font-semibold">{title}</h2>
          <p className="my-3 mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit ipsa incidunt.
          </p>
        </div>
      </section>
      <section className="container w-11/12 mx-auto py-3">
        <div>
          <Tabs
            defaultActiveKey="1"
            tabPosition={"top"}
            onChange={(e) => setTitle(e)}
            style={{
              minHeight: 520,
              fontSize: "17px",
            }}
            items={[
              {
                label: "About Us",
                key: "About Us",
                children: (
                  <p>
                    "lorem" was established in 2023 summer. "lorem" is a unique
                    combination of a team of professionals with rich experience,
                    advanced innovative technologies and the latest equipment.
                    The center offers a wide range of services in many fields.
                    Quality health care can and should be affordable. See for
                    yourself. Welcome!
                  </p>
                ),
              },
              {
                label: "Our Mission",
                key: "Our Mission",
                children: (
                  <p>
                    Is to provide the highest achievable standards of health
                    care and other programs that may enhance the quality of life
                    of members of the diplomatic corps and their families,
                    accredited foreign staff of the international
                    representations and their families, and individual foreign
                    citizens registered with the government of Uzbekistan.As an
                    extension to the purpose specified in the Charter, The
                    Clinic additionally provides physical examination for the US
                    Embassy, German Embassy Immigration Programs and others as
                    needed. These services are provided through foreign
                    organization contracts."lorem" cares about the community,
                    patients, and its employees. TIC is committed to developing
                    a culture of excellence – a culture that encourages and
                    supports excellence in patient care, teaching, and service
                    to patients, customers, fellow employees, and our community.
                    To achieve this goal, "lorem" fosters an environment in
                    which the pursuit of excellence is part of all its
                    activities.
                  </p>
                ),
              },
              {
                label: "Our Values",
                key: "Our Values",
                children: (
                  <ul className="aboutUl">
                    <li>
                      <b>Primary value</b>
                      <br /> The needs of the patient come first.
                    </li>
                    <li>
                      <b>Value statements</b> <br /> These values, which guide
                      TIC’s mission, are an expression of the vision and intent
                      of our founders, the diplomatic missions in Tashkent,
                      Uzbekistan.
                    </li>
                    <li>
                      <b>Respect</b> – treat everyone in our diverse community,
                      including patients, their families and colleagues, with
                      dignity.
                    </li>
                    <li>
                      <b>Compassion</b> – provide the best care, treating
                      patients and family members with sensitivity and empathy.
                    </li>
                    <li>
                      <b>Integrity</b> – adhere to the highest standards of
                      professionalism, ethics and personal responsibility,
                      worthy of the trust our patients place in us.
                    </li>
                    <li>
                      <b> Healing</b> – inspire hope and nurture the well-being
                      of the whole person, respecting physical and emotional
                      needs of the patients.
                    </li>
                    <li>
                      <b> Teamwork</b> – value the contributions of all,
                      blending the skills of individual staff members in
                      unsurpassed collaboration.
                    </li>
                    <li>
                      <b>Excellence</b> – deliver the best outcomes and highest
                      quality service through the dedicated effort of every team
                      member.
                    </li>
                    <li>
                      <b>Innovation</b> – infuse and energize the organization,
                      enhancing the lives of those we serve, through the
                      creative ideas and unique talents of each employee.
                    </li>
                    <li>
                      <b>Stewardship</b> – sustain and reinvest in our mission
                      and extended communities by wisely managing our human,
                      natural and material resources.
                    </li>
                    <li>
                      <b>A diverse community</b> – TIC is committed to ensuring
                      that the value of diversity is upheld in everything that
                      we do for our patients, families, visitors, customers, the
                      broader community, employees, and all those individuals,
                      groups, and organizations that help us to achieve our
                      mission. TIC is committed to ensuring that patient care,
                      service delivery, and the healing environment is designed
                      in a way that respects the individuality of patients,
                      visitors, and employees.
                    </li>
                  </ul>
                ),
              },
              {
                label: "Facilities",
                key: "Facilities",
                children: (
                  <div className="flex flex-wrap gap-8 items-center justify-center">
                    {new Array(6).fill(0).map((e) => {
                      return (
                        <div className="relative bg-white rounded-xl">
                          <img
                            className="max-w-xs rounded-xl"
                            src="https://st2.depositphotos.com/1105977/8291/i/600/depositphotos_82917414-stock-photo-colorful-autumn-landscape-with-yellow.jpg"
                            alt="d"
                          />
                          <p className="absolute bottom-0 p-3 pt-12 w-full rounded-xl text-white bg-gradient-to-t from-black to-transparent">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ),
              },
              {
                label: "Employment",
                key: "Employment",
                children: (
                  <div>
                    <p>
                      At "lorem", we aim to create a positive, inclusive
                      environment for our staff. We welcome applications from
                      passionate, driven people who would like to join our
                      community and help us to achieve our goals. "lorem" is an
                      Equal Opportunity Employer. We respect and seek to empower
                      each individual and support the diverse culture,
                      perspectives, skills and experiences within our community.
                      Open vacancies are posted on this page. If there are no
                      open or relevant vacancies below, but you are an expat in
                      Namangan and have a medical training background , you are
                      welcome to submit an unsolicited application.
                    </p>
                    <br />
                    <strong>We have current openings:</strong>
                    <ul className="list-disc pl-10">
                      <li>International Medical Doctor</li>
                      <li>
                        International Medical Nurse in Tashkent International
                        School For
                      </li>
                    </ul>
                    <p className="mt-20">
                      For more information please call us.
                    </p>
                  </div>
                ),
              }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default About
