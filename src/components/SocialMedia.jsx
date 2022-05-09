import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#2562A9] rounded-lg border-2 border-generic dark:border-0 text-generic dark:text-light-bg-primary">
          <a className="flex justify-between items-center w-full" href="/">
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#333333] rounded-lg border-2 border-[#333333] dark:border-0 dark:text-light-bg-primary">
          <a className="flex justify-between items-center w-full" href="/">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#6fc2b0] rounded-lg border-2 border-[#6fc2b0] dark:border-0 text-[#6fc2b0] dark:text-light-bg-primary">
          <a className="flex justify-between items-center w-full" href="/">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-[#565f69] rounded-lg border-2 border-[#565f69] dark:border-0 text-[#565f69] dark:text-light-bg-primary">
          <a className="flex justify-between items-center w-full" href="/">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
