import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CREATE, DESIGN, DEVELOPMENT WEB APPLICATIONS AND WEBSITES TO BE BEAUTIFUL, POWERFUL, FLEXIBLE, AND ENSURE USER EXPERIENCE."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I am a highly skilled Senior Full Stack Engineer with over a decade of professional experience in software development."
              }
            />
            <AnimatedBody
              text={
                "My journey in the tech industry has been driven by a deep commitment to continuous learning and a genuine love for problem-solving."
              }
            />
            <AnimatedBody
              text={
                "Over the years, I have cultivated a robust understanding of both front-end and back-end technologies, allowing me to architect and deliver efficient, scalable, and user-centric web applications. My technical expertise spans a wide range of modern technologies, both on the client and server sides."
              }
            />
            <AnimatedBody
              text={
                "On the front end, I specialize in building interactive, high-performance user interfaces using frameworks such as React, Next.js, and Vue.js, combined with JavaScript (ES6+), TypeScript, and CSS libraries like Tailwind CSS."
              }
            />
            <AnimatedBody
              text={
                "On the back end, I’m proficient in Python-based frameworks such as Django and Flask, as well as Node.js and PHP, where I design and implement RESTful and GraphQL APIs, microservices, and secure, scalable server-side architectures."
              }
            />
            <AnimatedBody
              text={
                "I also have experience managing databases such as PostgreSQL, MySQL, and MongoDB, ensuring optimized data flows and efficient query handling."
              }
            />
            <AnimatedBody
              text={
                "For now, I am seeking to bring my expertise in front-end development to a forward-thinking company where I am contribute to innovative projects, solve complex challenges, and help create exceptional digital experiences that meet the evolving needs of users and businesses alike."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React, Next.js, Vue.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, Git/GitHub, NextAuth, Formik."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/LESS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
