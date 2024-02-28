import PostsList from "@/components/PostsList";
import {AUTHOR_ID} from "@/config";
import * as postsService from "@/lib/database/posts";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarCheck,
  faContactCard,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBlog,
  faBriefcase,
  faCog,
  faDownload,
  faExternalLink,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await postsService.getLatestPublishedPost(AUTHOR_ID);

  const projects = [
    {
      name: "Tools",
      description: "A small collection of tools. WIP",
      url: "https://tools.pablo-viojo.com",
    },
    {
      name: "Mathy",
      description:
        "A simple math game created to improve multiplication skills.",
      url: "https://mathy.pablo-viojo.com/",
    },
  ];
  return (
    <>
      <div className={`bg-marked dark:text-gray-100 text-gray-700`}>
        <div className='inner'>
          <div className='grid md:grid-cols-[1fr_400px] items-end h-[100dvh] md:h-auto md:pt-8'>
            <div className='px-4 md:px-10 mt-8 mb-6 md:my-12 md:text-left text-center'>
              <div className='font-light md:text-base text-base block mb-2  '>
                Business, Technology and Operations
              </div>
              <div
                className={`md:text-6xl text-4xl font-bold dark:text-white mb-8  tracking-wide bold-title`}
              >
                Pablo Viojo
              </div>
              <div>
                <a
                  href='https://linkedin.com/in/pviojo'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{fontSize: 32}} />
                </a>
                <a
                  href='mailto:pviojo@gmail.com'
                  target='_blank'
                  className='ml-6'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{fontSize: 32}} />
                </a>
                <a
                  href='https://github.com/pviojo'
                  className='ml-6'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faGithub} style={{fontSize: 32}} />
                </a>
              </div>
              <div className='font-light text-sm block mt-4'>
                Santiago, Chile (UTC-4)
              </div>
            </div>
            <div className='md:block justify-items-end'>
              <Image
                priority
                src='/images/image-smooth.png'
                alt=''
                className='px-4 md:mt-6 mt-6'
                width={200}
                height={165}
                style={{width: "100%", height: "auto"}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='inner'>
        <div className='grid md:grid-cols-[1fr_400px] md:mt-8 md:mb-10 mb-20 items-stretch gap-10 text-gray-700 dark:text-gray-100'>
          <div className='grid grid-rows-[auto]'>
            <div className='p-8 md:p-10 mt-8 md:mt-0'>
              <div className='section-title'>
                <FontAwesomeIcon
                  icon={faFlask}
                  style={{fontSize: 18}}
                  className='mr-2 align-middle -mt-1'
                />
                Experience
              </div>
              <div className='border-gray-200 dark:border-gray-600 border-b mb-8'>
                {[
                  [2021, 2023, "Tech Leader at Grin Scooters"],
                  [2017, 2021, "Former COO and CTO at Groupon Latam"],
                  [2015, 2017, "Cofounder at Latam Builders"],
                  [2013, 2015, "Former COO and cofounder at babytuto.com"],
                  [
                    2010,
                    2013,
                    "Former COO, CTO and cofounder at Groupon Latam",
                  ],
                ].map(([start, end, title]) => (
                  <p
                    key={`${start}-${end}-${title}`}
                    className='py-4 px-2 grid grid-cols-[20px_auto_1fr] gap-4 items-center'
                  >
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className='mr-3 align-middle ml-[2px] -mt-1'
                    />
                    <span className=''>
                      {start} - {end}
                    </span>
                    <span>{title}</span>
                  </p>
                ))}
              </div>
              <p className='p'>
                Experience in Operations Management focused on the design and
                control of processes in the e-commerce industry developing and
                implementing different KPIs. Having managed Groupon operations
                in Chile, Argentina, Uruguay, Perú, Colombia, Panamá, Mexico and
                Puerto Rico and cofounded my own e-commerce company
                (babytuto.com) I have a strong knowledge of the Latinoamerica
                e-commerce reality.
              </p>
              <p className='p'>
                Beside this, I&apos;m a software developer. primarily focused on
                UI/UX, architecture and development. Advanced skills on Python,
                Javascript, React, PHP, MySQL, PostgreSQL, etc.
              </p>
              <div>
                <a
                  className='border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded inline-flex items-center'
                  href='/files/Pablo Viojo - CV - 2024.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faDownload} className='mr-2' />
                  Download CV
                </a>
              </div>
            </div>

            <div className='p-8 md:p-10 md:mt-0'>
              <div className='section-title'>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{fontSize: 18}}
                  className='mr-2 align-middle -mt-2'
                />
                Projects
              </div>
              <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8'>
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className='font-bold mb-4'>{project.name}</div>
                    <div className='text-gray-500  mb-4 md:h-10 '>
                      {project.description}
                    </div>
                    <div className='border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded inline-flex items-center'>
                      <a href={project.url} rel='noreferrer' target='_blank'>
                        <FontAwesomeIcon
                          icon={faExternalLink}
                          className='mr-2'
                        />{" "}
                        View project {project.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='p-8 md:p-10 md:mt-0'>
              <div className='section-title'>
                <FontAwesomeIcon
                  icon={faBlog}
                  style={{fontSize: 18}}
                  className='mr-2 align-middle -mt-2'
                />
                Posts
              </div>
              <PostsList posts={posts} />
            </div>
          </div>
          <div className='grid grid-rows-[auto_1fr]'>
            <div className='p-8 md:p-10'>
              <div className='section-title'>
                <FontAwesomeIcon
                  icon={faCog}
                  style={{fontSize: 18}}
                  className='mr-2 align-middle -mt-1'
                />
                Skills
              </div>
              <div>
                <div className='tag'>Operations Management</div>
                <div className='tag'>Project Management</div>
                <div className='tag'>Logisitic</div>
                <div className='tag'>IT Consultancy</div>
                <div className='tag'>Software engineering</div>
                <div className='tag'>Python</div>
                <div className='tag'>Javascript</div>
                <div className='tag'>React</div>
                <div className='tag'>PHP</div>
                <div className='tag'>MySQL</div>
                <div className='tag'>PostgreSQL</div>
                <div className='tag'>AWS</div>
                <div className='tag'>GCP</div>
              </div>
            </div>
            <div className='p-8 md:p-10 md:mt-0'>
              <div className='section-title'>
                <FontAwesomeIcon
                  icon={faContactCard}
                  style={{fontSize: 18}}
                  className='mr-2 align-middle -mt-1'
                />
                Contact
              </div>
              <div className='mb-4 ml-4'>
                <a
                  href='https://linkedin.com/in/pviojo'
                  target='_blank'
                  className='align-middle text-sm'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{fontSize: 22}}
                    className='mr-3 align-middle'
                  />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className='mb-4 ml-4'>
                <a
                  href='mailto:pviojo@gmail.com'
                  target='_blank'
                  className='align-middle text-sm'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{fontSize: 22}}
                    className='mr-3 align-middle'
                  />
                  <span>pviojo@gmail.com</span>
                </a>
              </div>
              <div>
                <a
                  href='https://calendly.com/pviojo/30min'
                  target='_blank'
                  className='align-middle text-sm rounded-full bg-blue-500 inline-block py-3 px-4 text-white shadow hover:bg-blue-700'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    style={{fontSize: 22}}
                    className='mr-3 align-middle ml-[2px]'
                  />
                  <span>Schedule a 30min meeting with me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
