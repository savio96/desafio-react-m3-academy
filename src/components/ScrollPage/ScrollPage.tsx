import React from "react";
import setaImg from "../Whatsapp/assets/image/seta.png";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const ScrollPage = () => {
  let mybutton = document.getElementById("myBtn") as HTMLElement;
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };
  return (
    <button onClick={() => topFunction()} id="myBtn" title="Ir para topo">
      <img src={setaImg} alt="seta" />
    </button>
  );
};

export { ScrollPage };
