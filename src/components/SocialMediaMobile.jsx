import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialMediaMobile = () => {
  return (
    <div className="flex text-light-bg-primary mt-24">
      <a className="hover:animate-pulse flex justify-center mx-4 w-[40px] h-[40px] items-center rounded-3xl dark:text-light-bg-primary text-generic dark:bg-[#2562A9] border-2 dark:border-0">
        <FaLinkedin size={25} />
      </a>
      <a className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#333333] dark:bg-[#333333] border-2 dark:border-0">
        <FaGithub size={25} />
      </a>
      <a className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#6fc2b0] dark:bg-[#6fc2b0] border-2 dark:border-0">
        <HiOutlineMail size={25} />
      </a>
      <a className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#565f69] dark:bg-[#565f69] border-2 dark:border-0">
        <BsFillPersonLinesFill size={25} />
      </a>
    </div>
  );
};

export default SocialMediaMobile;
