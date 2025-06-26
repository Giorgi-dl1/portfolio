import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-[#001244] padding-x py-6 text-white">
      <div className="max-w-[1200px] mx-auto flex justify-between flex-wrap gap-6">
        <div className="max-w-[340px] space-y-3">
          <h3 className="text-2xl font-semibold">Giorgi's Portfolio</h3>
          <p className="text-sm">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials or live chat.
          </p>
        </div>
        <div className="max-w-[340px] space-y-3">
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <AiFillPhone className="text-orange-500" />
              <a href="tel:+995598421547">+995 598 42 15 47</a>
            </div>
            <div className="flex items-center gap-1">
              <GrMail className="text-orange-500" />
              <a href="mailto:gdurglishvili.dl@gmail.com">
                gdurglishvili.dl@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MdLocationPin className="text-orange-500" />
              <span>Tbilisi, Georgia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
