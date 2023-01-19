import { TopFooter } from "./TopFooter/TopFooter";
import { BottomFooter } from "./BottomFooter/BottomFooter";
import { Newsletter } from "../../components/Newsletter/Newsletter";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Newsletter></Newsletter>
      <TopFooter></TopFooter>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export { Footer };
