import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import config from '../../config.json';

const SocialMedia = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#2562A9] rounded-lg border-2 border-[#2562A9] dark:border-0 text-[#2562A9] dark:text-light-bg-primary">
          <a
            className="flex justify-between items-center w-full"
            href={config.LINKEDIN}
            target="_blank"
            rel="noreferrer">
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#333333] rounded-lg border-2 border-[#333333] dark:border-0 dark:text-light-bg-primary">
          <a
            className="flex justify-between items-center w-full"
            href={config.GITHUB}
            target="_blank"
            rel="noreferrer">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#1D96E8] rounded-lg border-2 border-[#1D96E8] dark:border-0 text-[#1D96E8] dark:text-light-bg-primary">
          <a
            className="flex justify-between items-center w-full"
            href={config.TWITTER}
            target="_blank"
            rel="noreferrer">
            Twitter <FaTwitter size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#E24134] rounded-lg border-2 border-[#E24134] dark:border-0 text-[#E24134] dark:text-light-bg-primary">
          <a className="flex justify-between items-center w-full" href={config.EMAIL}>
            Email <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
