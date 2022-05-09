import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialMediaMedium = () => {
  return (
    <div className="lg:hidden hidden md:flex fixed flex-col top-[75%]">
      <ul>
        <li>
          <a className="hover:animate-pulse flex justify-center my-4 w-[35px] h-[35px] items-center rounded-3xl dark:text-light-bg-primary text-generic dark:bg-[#2562A9] border-2 dark:border-0">
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#333333] dark:bg-[#333333] border-2 dark:border-0">
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#6fc2b0] dark:bg-[#6fc2b0] border-2 dark:border-0">
            <HiOutlineMail size={20} />
          </a>
        </li>
        <li>
          <a className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#565f69] dark:bg-[#565f69] border-2 dark:border-0">
            <BsFillPersonLinesFill size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaMedium;
