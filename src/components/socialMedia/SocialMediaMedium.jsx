import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import config from '../../config.json';

const SocialMediaMedium = () => {
  return (
    <div className="lg:hidden hidden md:flex fixed flex-col top-[75%]">
      <ul>
        <li>
          <a
            className="hover:animate-pulse flex justify-center my-4 w-[35px] h-[35px] items-center rounded-3xl dark:text-light-bg-primary text-generic dark:bg-[#2562A9] border-2 dark:border-0"
            href={config.LINKEDIN}
            target="_blank"
            rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a
            className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#333333] dark:bg-[#333333] border-2 dark:border-0"
            href={config.GITHUB}
            target="_blank"
            rel="noreferrer">
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a
            className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#1D96E8] dark:bg-[#1D96E8] border-2 dark:border-0"
            href={config.TWITTER}
            target="_blank"
            rel="noreferrer">
            <FaTwitter size={20} />
          </a>
        </li>
        <li>
          <a
            className="hover:animate-pulse flex justify-center items-center my-4 w-[35px] h-[35px] rounded-3xl dark:text-light-bg-primary text-[#E24134] dark:bg-[#E24134] border-2 dark:border-0"
            href={config.EMAIL}>
            <HiOutlineMail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaMedium;
