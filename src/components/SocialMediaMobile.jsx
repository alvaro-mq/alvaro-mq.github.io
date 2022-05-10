import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import config from '../config.json';

const SocialMediaMobile = () => {
  return (
    <div className="flex text-light-bg-primary mt-24">
      <a
        className="hover:animate-pulse flex justify-center mx-4 w-[40px] h-[40px] items-center rounded-3xl dark:text-light-bg-primary text-[#2562A9] dark:bg-[#2562A9] border-2 dark:border-0"
        href={config.LINKEDIN}
        target="_blank"
        rel="noreferrer">
        <FaLinkedin size={25} />
      </a>
      <a
        className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#333333] dark:bg-[#333333] border-2 dark:border-0"
        href={config.GITHUB}
        target="_blank"
        rel="noreferrer">
        <FaGithub size={25} />
      </a>
      <a
        className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#1D96E8] dark:bg-[#1D96E8] border-2 dark:border-0"
        href={config.TWITTER}
        target="_blank"
        rel="noreferrer">
        <FaTwitter size={25} />
      </a>
      <a
        className="hover:animate-pulse flex justify-center items-center mx-4 w-[40px] h-[40px] rounded-3xl dark:text-light-bg-primary text-[#E24134] dark:bg-[#E24134] border-2 dark:border-0"
        href={config.EMAIL}>
        <HiOutlineMail size={25} />
      </a>
    </div>
  );
};

export default SocialMediaMobile;
