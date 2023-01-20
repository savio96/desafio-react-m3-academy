import { Institutional } from "../../../components/Institutional/Institutional";
import { Doubts } from "../../../components/Doubts/Doubts";
import { Contact } from "../../../components/Contact/Contact";
import { Socials } from "../../../components/Socials/Socials";
import { Whatsapp } from "../../../components/Whatsapp/Whatsapp";
import { AccordionFooter } from "../../../components/AccordionFooter/AccordionFooter";

const TopFooter = () => {
  return (
    <>
      <div className="top_footer_wrapper">
        <Institutional></Institutional>

        <Doubts></Doubts>

        <Contact></Contact>

        <div className="top_footer_socials">
          <Socials></Socials>
          <Whatsapp></Whatsapp>
        </div>
      </div>
      <div className="top_footerMob_wrapper">
        <AccordionFooter></AccordionFooter>
        <div className="top_footer_socials">
          <Socials></Socials>
        </div>
      </div>
    </>
  );
};

export { TopFooter };
