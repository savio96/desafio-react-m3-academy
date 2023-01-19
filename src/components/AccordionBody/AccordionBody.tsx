import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { FormInput } from "../FormInput/FormInput";
import styles from "./accordionBody.module.scss";
const AccordionBody = () => {
  return (
    <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup className="accList">
            <ListGroup.Item variant="dark" action href="#link1">
              Sobre
            </ListGroup.Item>
            <ListGroup.Item variant="dark" action href="#link2">
              Contato
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <div>
                <h2>Sobre</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <FormInput></FormInput>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export { AccordionBody };
