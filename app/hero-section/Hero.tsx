import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AnimatedWords from "../animations/AnimatedWords";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://calendly.com/b-mcnam-dev/30min"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/sole-brian22"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-[20px] rounded-full text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="trues"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/brian-mcnamara-b351b22ab/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="trues"
            />
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="BRIAN MCNAMARA"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Dedicated Front End Engineer, prev at{" "}
            <Link
              href="https://jasquantum.com/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="JAS Website"
            >
              JAS Quantum,
            </Link>{" "}
            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Anaheim, CA.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
