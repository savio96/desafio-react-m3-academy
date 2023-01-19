import { Address } from "../../../components/Address/Address";
import { Payments } from "../../../components/Payments/Payments";
import { VtexPci } from "../../../components/Payments/Payments";
import { PoweredBy } from "../../../components/PoweredBy/PoweredBy";
import { DevelopedBy } from "../../../components/DevelopedBy/DevelopedBy";
const BottomFooter = () => {
  return (
    <div className="bottom_footer">
      <Address></Address>
      <div className="bottom_footer_item pagamentos">
        <Payments></Payments>
        <p>|</p>
        <VtexPci></VtexPci>
      </div>
      <div className="bottom_footer_item creation">
        <PoweredBy></PoweredBy>
        <DevelopedBy></DevelopedBy>
      </div>
    </div>
  );
};

export { BottomFooter };
