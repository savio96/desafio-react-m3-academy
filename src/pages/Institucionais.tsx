import { Caminhos } from "../components/Caminhos/Caminhos";
import { InstitucionaisBody } from "../sectors/Body/InstitucionaisBody";
const Institucionais = (prop: { titulo: string }) => {
  return (
    <div>
      <Caminhos titulo={prop.titulo}></Caminhos>
      <InstitucionaisBody></InstitucionaisBody>
    </div>
  );
};

export { Institucionais };
