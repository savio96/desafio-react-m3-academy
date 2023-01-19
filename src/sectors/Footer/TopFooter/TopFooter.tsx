import { Institutional } from "../../../components/Institutional/Institutional";
import { Doubts } from "../../../components/Doubts/Doubts";
import { Contact } from "../../../components/Contact/Contact";
import { Socials } from "../../../components/Socials/Socials";
import { Whatsapp } from "../../../components/Whatsapp/Whatsapp";

const TopFooter = () => {
  return (
    <div className="top_footer_wrapper">
      <Institutional></Institutional>

      <Doubts></Doubts>

      <Contact></Contact>

      <div className="top_footer_socials">
        <Socials></Socials>
        <Whatsapp></Whatsapp>
      </div>
    </div>
  );
};

export { TopFooter };
