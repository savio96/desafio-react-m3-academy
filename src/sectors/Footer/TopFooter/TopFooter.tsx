import { Institutional } from "../../../components/Institutional/Institutional";
import { Doubts } from "../../../components/Doubts/Doubts";
import { Contact } from "../../../components/Contact/Contact";
import { Socials } from "../../../components/Socials/Socials";
import { Whatsapp } from "../../../components/Whatsapp/Whatsapp";
const TopFooter = () => {
  return (
    <div className="top_footer">
      <ul className="top_footer_itens">
        <li className="top_footer_item">
          <Institutional></Institutional>
        </li>
        <li className="top_footer_item">
          <Doubts></Doubts>
        </li>
        <li className="top_footer_item">
          <Contact></Contact>
        </li>
        <li className="top_footer_item">
          <Socials></Socials>
          <Whatsapp></Whatsapp>
        </li>
      </ul>
    </div>
  );
};

export { TopFooter };
