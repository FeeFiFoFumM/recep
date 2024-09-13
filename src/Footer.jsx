import { FaGoogle,FaFacebook,FaGithub,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-14 flex items-center justify-center bg-teal-700 text-white">
      <div className="flex space-x-6">
      <FaGithub />
      <FaGoogle/>
      <FaFacebook/>
      <FaInstagram/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer
