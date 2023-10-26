import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function SocialLinks() {
  
  return (
   
      <div className="text-5xl flex justify-center gap-16 text-gray-600">
      <ul className="flex justify-center gap-16">
        <li>
          <a href="https://github.com/">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <AiOutlineTwitter />
          </a>
        </li>
      </ul>
      </div>
    
  );
}
