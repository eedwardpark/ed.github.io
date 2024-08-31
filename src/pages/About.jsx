import React from "react";

function About() {
  return (
    <div className="text-deep-gray container mx-auto tablet:w-[768px] laptop:w-[1024px]">
      <div className="mt-10 laptop:mt-20">
        <div className="mt-5">
          <h1 className="font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 text-bold w-full">
            About Me
          </h1>
          <h2 className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full"></h2>
        </div>
      </div>
      <div className="mt-6 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ Work </h1>
          <div className="flex-grow border-b border-black mt-2"></div>
        </div>
      </div>
      <div className="grid tablet:grid-cols-1 p-2 gap-4">
        <div className="flex flex-col tablet:flex-row">
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg">Opal</p>
            <p className="text-sm tablet:text-base ">
              Software Engineer Intern
            </p>
            <p className="text-sm tablet:text-base ">Summer 2022</p>
          </div>
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              <ul>
                <li>
                  {" "}
                  - Implemented RESTful API using React.js and Hibernate for creating
                  and reading mentorship relationships for the web application,
                  ensuring seamless mapping between Java objects and SQL
                  databases and enhancing user experience and platform
                  performance.{" "}
                </li>
                <li>
                  - Spearheaded the development and deployment of critical
                  frontend interfaces in Javascript and React.js for a
                  high-traffic mentorship platform with thousands of daily
                  active users (DAUs).
                </li>
                <li>
                  - Achieved a 50% reduction in production regression by
                  significantly increasing test coverage using Jest and Cypress
                  testing frameworks.
                </li>
              </ul>
            </p>
            <p className="text-sm tablet:text-base mt-3 mob:hidden tablet:flex">
              ReactJS, Hibernate, Jest, Cypress, SQL.
            </p>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg">Yonsei University</p>
            <p className="text-sm tablet:text-base ">Research Assistant</p>
            <p className="text-sm tablet:text-base ">Summer 2024</p>
          </div>
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              - Conducting advanced research on enhancing AI safety by testing
              HuggingFae models against various ethical attacks.
            </p>
            <p className="text-sm tablet:text-base">
              - Developing and implementing strategies to improve data privacy
              and prevent misuse of AI, such as generating harmful instructions.
            </p>
            <p className="text-sm tablet:text-base mt-3 mob:hidden tablet:flex">
              Python, Pytorch, HF Models.
            </p>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg">Hyer Tutoring</p>
            <p className="text-sm tablet:text-base ">Founder</p>
            <p className="text-sm tablet:text-base ">2022-Present</p>
          </div>
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              - Providing math tutoring from Elementary to High School in topics including, but not limited to, AP Calculus, AP Stats, AMC/AIME, Pre-Calculus, and etc.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ School</h1>
          <div className="flex-grow border-b border-black mt-2"></div>
        </div>
      </div>
      <div className="grid tablet:grid-cols-2 mt-2 p-2 w-full">
        <div className="tablet:pr-10">
          <div className="text-sm tablet:text-base">
            Outside of the classroom, I'm...
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-8">
            <p>
              <span className="font-bold">
                the Events Coordinater of{" "}
                <a
                  href="https://www.mccscu.com/cultural-clubs/ksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  SCU KSA
                </a>
              </span>
              <span className="">
                , where I've united the Korean student community with awesome
                events.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-8">
            <p>
              <span className="font-bold">
                an clarinetist in{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Santa Clara Band/Orchestra
                </a>
              </span>
              <span className="">
                , where I've been able to step back from academics and enjoy my
                #1 hobby.
              </span>
            </p>
          </div>
        </div>
        <div className="tablet:pl-10">
          <div className="text-sm tablet:text-base mt-8 tablet:mt-0">
            In the classroom, I...
          </div>
          <div className="font-bold text-sm tablet:text-base mt-3 laptop:mt-5">
            Am Currently Taking:
          </div>
          <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
            <div>
              CSCI 184<span className="">: Machine Learning</span>
            </div>
            <div>
              CSEN 177<span className="">: Operating Systems</span>
            </div>
          </div>
          <div className="font-bold text-sm tablet:text-base mt-3 tablet:mt-5">
            Have Previously Taken:
          </div>
          <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
            <div>
              COEN 166<span className="">: AI</span>
            </div>
            <div>
              CSCI 185<span className="">: Web and Data Mining</span>
            </div>
            <div>
              CSCI 183<span className="">: Data Science</span>
            </div>
            <div>
              CSCI 163<span className="">: Theory of Algorithms</span>
            </div>
            <div>
              CSCI 161
              <span className="">: Theory of Automata {"&"} Languages</span>
            </div>
            <div>
              MATH 178<span className="">: Cryptography</span>
            </div>
            <div>
              Math 122 {"&"} 123
              <span className="">: Probability and Statistics I {"&"} II</span>
            </div>
            <div>
              ECEN 122<span className="">: Computer Architecture</span>
            </div>
            <div>
              COEN 21<span className="">: Logic Design</span>
            </div>
            <div>
              Math 13 {"&"} 14<span className="">: Multivariable Calculus</span>
            </div>
            <div>
              Math 53<span className="">: Linear Algebra</span>
            </div>
            <div>
              Math 51<span className="">: Discrete Math</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ Home</h1>
          <div className="flex-grow border-b border-black mt-2"></div>
        </div>
      </div>
      <div className="grid tablet:grid-cols-8  p-2 w-full pb-16">
        <div className="tablet:col-span-1 mob:hidden tablet:flex tablet:items-center">
          <p className="font-bold text-sm tablet:text-base ">Hobbies</p>
        </div>
        <div className="tablet:col-span-7">
          <p className="text-sm tablet:text-base">
            <p className="">
              Playing basketball keeps me fit and provides the exercise I need.
            </p>
            <p className="py-2">
              When I get stuck with something or need inspiration, I look to
              challenging math problems to solve.
            </p>
            <p className="">
              Music has always been the way for me to express myself when words
              couldn't. I love playing the clarinet and piano.
            </p>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <h1 className="text-xs text-bold p-2 laptop:p-0"></h1>
      </div>
    </div>
  );
}

export default About;
