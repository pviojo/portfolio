import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-gray text-gray-100 mt-8">
        <div className="grid grid-cols-[1fr_auto] gap-10 items-center">
          <div className="pl-10 pb-10">
            <div className="text-6xl font-bold dark:text-white mb-4">
              Pablo Viojo
            </div>
            <div className="font-light text-base block mb-8">
              Business, Technology and Operations
            </div>
            <div className="block">
              <a
                href="https://linkedin.com/in/pviojo"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 32 }} />
              </a>
              <a
                href="https://github.com/pviojo"
                className="ml-6"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 32 }} />
              </a>
            </div>
          </div>
          <div className="pt-0  pr-0">
            <Image
              src="/images/im3.png"
              alt=""
              width="400"
              height="400"
              style={{ transform: "scale(-1, 1);" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-2 text-gray-100 p-10 mb-20">
        <div className="text-2xl mb-8">Experience</div>
        2021 - Present &middot; Tech Leader at Grin
        <br />
        <br />
        2017 - 2021 &middot; Former COO and CTO at Groupon Latam.
        <br />
        <br />
        2015 - 2017 &middot; Cofounder at Latam Builders.
        <br />
        <br />
        2013 - 2015 &middot; Former COO and cofounder at babytuto.com
        <br />
        <br />
        2010 - 2023 &middot; Former COO, CTO and cofounder at Groupon Latam.
        <br />
        <br />
        Experience in Operations Management focused on the design and control of
        processes in the e-commerce industry developing and implementing
        different KPIs. Having managed Groupon operations in Chile, Argentina,
        Uruguay, Perú, Colombia, Panamá, Mexico and Puerto Rico and cofounded my
        own e-commerce company (babytuto.com) I have a strong knowledge of the
        Latinoamerica e-commerce reality.
        <br />
        <br />
        Beside this, I&apos;m a software developer. primarily focused on UI/UX,
        architecture and development. Advanced skills on Python, Javascript,
        React, PHP, MySQL, PostgreSQL, etc.
        <div className="text-2xl mb-8 mt-16">Skills</div>
        <div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            Operations Management
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            {" "}
            Project Management
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            Logisitic
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            IT Consultancy
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            Software engineering
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            Python
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            Javascript
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            React
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            PHP
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            MySQL
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            PostgreSQL
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            AWS
          </div>
          <div className="bg-gray p-2 rounded-lg inline-block mr-2 mb-4">
            GCP
          </div>
        </div>
      </div>
    </>
  );
}
