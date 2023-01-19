import { Address } from "../../../components/Address/Address";
import { Payments } from "../../../components/Payments/Payments";
import { VtexPci } from "../../../components/Payments/Payments";
import { PoweredBy } from "../../../components/PoweredBy/PoweredBy";

const BottomFooter = () => {
  return (
    <div className="bottom_footer">
      <ul className="bottom_footer_itens">
        <li className="bottom_footer_item">
          <Address></Address>
        </li>
        <li className="bottom_footer_item pagamentos">
          <Payments></Payments>
          <p>|</p>
          <VtexPci></VtexPci>
        </li>
        <li className="bottom_footer_item">
          <PoweredBy></PoweredBy>
        </li>
      </ul>
    </div>
  );
};

export { BottomFooter };
