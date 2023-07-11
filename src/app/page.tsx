import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  return (
    <>
      <div className="bg-marked dark:text-gray-100 text-gray-700" >
        <div className="inner" >
          <div className="grid md:grid-cols-[1fr_400px] items-end h-[100dvh] md:h-auto md:pt-8">
            <div className="px-4 md:px-10 mt-8 mb-6 md:my-12 md:text-left text-center">
              <div className="font-light md:text-base text-base block mb-2  ">
                Business, Technology and Operations
              </div>
              <div className="md:text-6xl text-4xl font-bold dark:text-white mb-8 uppercase tracking-wide">
                Pablo Viojo
              </div>
              <div className="font-light text-sm block mb-8">
                Santiago, Chile (UTC-4)
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/pviojo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 32 }} />
                </a>
                <a
                  href="mailto:pviojo@gmail.com"
                  target="_blank"
                  className="ml-6"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 32 }} />
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
            <div className="md:block justify-items-end">
              <Image
                src="/images/image-smooth.png"
                alt=""
                className='px-4 md:mt-6 mt-6'
                width="800"
                height="720"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inner" >
        <div className="grid md:grid-cols-[1fr_400px] md:mt-8 md:mb-10 mb-20 items-stretch gap-10 text-gray-700 dark:text-gray-100">
          <div className="grid grid-rows-[auto]">
            <div className="p-8 md:p-10 mt-8 md:mt-0">
              <div className="text-2xl mb-8 color-purple">Experience</div>
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

            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr]">
            <div className="p-8 md:p-10">
              <div className="text-2xl mb-8 color-purple">Skills</div>
              <div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Operations Management
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Project Management
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Logisitic
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  IT Consultancy
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Software engineering
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Python
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  Javascript
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  React
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  PHP
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  MySQL
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  PostgreSQL
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  AWS
                </div>
                <div className="bg-marked p-2 text-sm rounded-lg inline-block mr-2 mb-4">
                  GCP
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10 md:mt-8">
              <div className="text-2xl mb-8 color-purple">Contact</div>
              <div className='mb-4'>
                <a
                  href="https://linkedin.com/in/pviojo"
                  target="_blank"
                  className="align-middle text-sm"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 22 }} className='mr-3 align-middle' />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:pviojo@gmail.com"
                  target="_blank"
                  className="align-middle text-sm"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 22 }} className='mr-3 align-middle' />
                  <span>pviojo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
