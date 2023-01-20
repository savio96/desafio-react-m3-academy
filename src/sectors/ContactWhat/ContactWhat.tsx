import React from "react";
import { Whatsapp } from "../../components/Whatsapp/Whatsapp";
import { ScrollPage } from "../../components/ScrollPage/ScrollPage";
const ContactWhat = () => {
  return (
    <div className="scroll-wrapper">
      <Whatsapp></Whatsapp>
      <ScrollPage></ScrollPage>
    </div>
  );
};

export { ContactWhat };
