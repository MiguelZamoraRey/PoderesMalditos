import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap';
import classnames from 'classnames';
import data from './data.json';
import './App.css';

import IntroComponent from './components/IntroComponent/IntroComponent';
import QuestionOptionsComponent from './components/QuestionOptionsComponent/QuestionOptionsComponent';
import ResultComponent from './components/ResultComponent/ResultComponent';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    //añadir los atributos que iran modificandose con el formulario
    this.state = {
      activeTab: '1',
      clase1: 'visible',
      clase2: 'transparent',
      clase3: 'transparent',
      clase4: 'transparent',
      clase5: 'transparent',
      clase6: 'transparent',
      clase7: 'transparent',
      clase8: 'transparent',
      clase9: 'transparent',
      clase10: 'transparent',
      clase11: 'transparent',
      clase12: 'transparent',
      clase13: 'transparent',
      clase14: 'transparent',
      clase15: 'transparent',
      clase16: 'transparent',
      clase17: 'transparent',
      clase18: 'transparent',
      selectedOption: '',
      amor: 2,
      ira: 2,
      miedo: 2,
      orgullo: 2,
      pena: 2,
      superpoder: 0,
      name:"",
      when:"",
      clave:"",
      super1:"superpoder1",
      super2:"superpoder2",
      desc1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus facilisis nisi hendrerit feugiat. Sed mollis sapien dolor, at finibus quam congue a. Nam molestie enim a lacus blandit, ut scelerisque nisi finibus. Mauris rutrum justo nibh, ac ornare leo fermentum in. Ut vulputate est in malesuada laoreet. Aliquam et rutrum nibh. In hac habitasse platea dictumst.Fusce in dictum nisl, ultrices cursus nibh. Ut dictum purus lorem, et facilisis ligula viverra sagittis. Integer augue orci, rutrum id nibh id, vehicula rhoncus lectus. Donec tempus rhoncus velit nec scelerisque. Sed vulputate feugiat orci non mattis. Aenean sed augue sed erat tempor lobortis. Phasellus dignissim magna ultrices quam laoreet, vel suscipit justo molestie. Pellentesque tincidunt vel velit sit amet eleifend.",
      desc2:"Sed egestas nisi id ex euismod, id vestibulum massa ornare. Donec faucibus quam at tincidunt rutrum. Vestibulum mollis consectetur efficitur. Nam eu dolor est. Cras non libero ullamcorper, congue sapien efficitur, scelerisque quam. Integer rutrum, lorem nec varius aliquam, elit dui pretium erat, a tincidunt tellus turpis at purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus tincidunt libero quis posuere. Pellentesque ac dolor feugiat, ultricies sem in, mattis odio. Vestibulum non dolor sed turpis faucibus volutpat. Donec quis cursus turpis. Duis sem augue, dignissim sed tellus in, eleifend sodales nisl. Quisque eu hendrerit orci. Nam molestie lacinia ex, nec auctor dui pulvinar quis. Vivamus vel commodo dolor, ac interdum felis.",
      superseleccionado: "",
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value 
    });
    event.target.hover = true
  }

  handleClick(num) {
    
    var numaux = num-1;
    var superpoderaux;

    if(numaux>0 && numaux<12){
      switch (this.state.selectedOption){
        case "I":
          var irafinal = this.state.ira +2;
          this.setState(state => ({
            ira: irafinal,
          }));
        break;
        case "O":
          var orgullofinal = this.state.orgullo +2;
          this.setState(state => ({
            orgullo: orgullofinal,
          }));
        break;
        case "P":
          var penafinal = this.state.pena +2;
          this.setState(state => ({
            pena: penafinal,
          }));
        break;
        case "M":
          var miedofinal = this.state.miedo +2;
          this.setState(state => ({
            miedo: miedofinal,
          }));
        break;
        case "A":
          var amorfinal = this.state.amor +2;
          this.setState(state => ({
            amor: amorfinal,
          }));
        break;
        default:
          console.log("opcion no válida");
        break;
      }
    }else if(numaux>11 && numaux<14){//psicotecnicas
        var intnum = parseInt(this.state.selectedOption);
        superpoderaux = this.state.superpoder + intnum;
        this.setState(state => ({
          superpoder: superpoderaux,
        }));
    }else if(numaux === 14){
      var arraysize = this.state.selectedOption.split("");
      if(arraysize.size < 6){
        intnum = 0;
      }else{
        intnum = 12;
      }

      superpoderaux = this.state.superpoder + intnum;
      this.setState(state => ({
        superpoder: superpoderaux,
      }));

      var objSP = data.superpoderes[this.state.superpoder];
      console.log(objSP);

      this.setState(state => ({
        super1: objSP.tituloPrincipal,
        super2: objSP.tituloSecundario,
        desc1: objSP.descripcionPrincipal,
        desc2: objSP.descripcionSecundario,
      }));
    }else if(numaux === 15){
      if(this.state.activeTab === "1"){
        this.setState(state => ({
          superseleccionado: this.state.super1,
        }));
      }else{
        this.setState(state => ({
          superseleccionado: this.state.super2,
        }));
      }
      /*depende del seleccionado*/
    }else if(numaux === 16){
      var nameF = document.getElementById("nombreF").value;
      var fechaF = document.getElementById("fechaF").value;
      var claveF = document.getElementById("claveF").value;
      this.setState(state => ({
        name: nameF,
        when: fechaF,
        clave: claveF,
      }));
    }

    if(this.state.selectedOption === "" && numaux>0 ){
        /*Modal selecciona una respuesta*/
    }else{
       switch (num){
        case 1:
          this.setState(state => ({
            clase1: 'transparent',
            clase2: 'visible',
          }));
        break;
        case 2:
          this.setState(state => ({
            clase2: 'transparent',
            clase3: 'visible',
          }));
        break;
        case 3:
          this.setState(state => ({
            clase3: 'transparent',
            clase4: 'visible',
          }));
        break;
        case 4:
          this.setState(state => ({
            clase4: 'transparent',
            clase5: 'visible',
          }));
        break;
        case 5:
          this.setState(state => ({
            clase5: 'transparent',
            clase6: 'visible',
          }));
        break;
        case 6:
          this.setState(state => ({
            clase6: 'transparent',
            clase7: 'visible',
          }));
        break;
        case 7:
          this.setState(state => ({
            clase7: 'transparent',
            clase8: 'visible',
          }));
        break;
        case 8:
          this.setState(state => ({
            clase8: 'transparent',
            clase9: 'visible',
          }));
        break;
        case 9:
          this.setState(state => ({
            clase9: 'transparent',
            clase10: 'visible',
          }));
        break;
        case 10:
          this.setState(state => ({
            clase10: 'transparent',
            clase11: 'visible',
          }));
        break;
        case 11:
          this.setState(state => ({
            clase11: 'transparent',
            clase12: 'visible',
          }));
        break;
        case 12:
          this.setState(state => ({
            clase12: 'transparent',
            clase13: 'visible',
          }));
        break;
        case 13:
          this.setState(state => ({
            clase13: 'transparent',
            clase14: 'visible',
          }));
        break;
        case 14:
          this.setState(state => ({
            clase14: 'transparent',
            clase15: 'visible',
          }));
        break;
        case 15:
          this.setState(state => ({
            clase15: 'transparent',
            clase16: 'visible',
          }));
        break;
        case 16:
          this.setState(state => ({
            clase16: 'transparent',
            clase17: 'visible',
          }));
        break;
        case 17:
          this.setState(state => ({
            clase17: 'transparent',
            clase18: 'visible',
          }));
        break
        default:
          console.log("opcion no válida");
        break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IntroComponent clase={this.state.clase1} sendFunction={this.handleClick} sectionIndex={1}/>
          <QuestionOptionsComponent title={"¿Con que género te identificas?"} clase={this.state.clase2} sendFunction={this.handleClick} sectionIndex={2}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Hombre</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Mujer</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Otro</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Cuantos años tiene?"} clase={this.state.clase3} sendFunction={this.handleClick} sectionIndex={3}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Niño(0-10)</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Adolescente(11-20)</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Joven(21-35)</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Adulto(36-60)</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Anciano(60 o más)</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Cuál es su valor más preciado?"} clase={this.state.clase4} sendFunction={this.handleClick} sectionIndex={4}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Objeto</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Persona</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Valor</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Religión</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Organización</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"Si pudieras viajar al pasado y matar a Hitler, ¿lo haría?"} clase={this.state.clase5} sendFunction={this.handleClick} sectionIndex={5}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Sí</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">No</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent  title={"¿Daría su vida por una causa noble?"} clase={this.state.clase6} sendFunction={this.handleClick} sectionIndex={6}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Sí</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">No</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Cuál es su color favorito?"} clase={this.state.clase7} sendFunction={this.handleClick} sectionIndex={7}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Blanco</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Rojo</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Verde</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Amarillo</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Azul</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Con cuál de los siguientes animales se siente más identificado?"} clase={this.state.clase8} sendFunction={this.handleClick} sectionIndex={8}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">León</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Elefante</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Perro</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Ágila</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Pez</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Cómo definiría su infancia?"} clase={this.state.clase9} sendFunction={this.handleClick} sectionIndex={9}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Feliz</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Normal</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Desgraciada</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Traumática</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Por qué se ha unido al Escuadron Maildito?"} clase={this.state.clase10} sendFunction={this.handleClick} sectionIndex={10}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="O">Heroísmo</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Obligado</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Conveniencia</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Esperanza</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Venganza</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"¿Qué opina del Profesor Klosseheimmer?"} clase={this.state.clase11} sendFunction={this.handleClick} sectionIndex={11}>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="A">Le admiro</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="P">Me cae bien</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="M">Me cae mal</Button>
            <Button className="question-btn" outline color="secondary" onClick={this.handleOptionChange} value="I">Le odio con todas mis fuerzas</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={""} clase={this.state.clase12} sendFunction={this.handleClick} sectionIndex={12}>
            <p>Ahora dará comienzo la sección psicotécnica</p>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"La palabra \"camion\" es a \"guisante\" como \"hidra\" a..."} clase={this.state.clase13} sendFunction={this.handleClick} sectionIndex={13}>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="1">Matemáticas</Button>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="2">Frío</Button>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="3">Cobre</Button>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"Siga la secuencia lógica: barra, círculo, cubo, rombo..."} clase={this.state.clase14} sendFunction={this.handleClick} sectionIndex={14}>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="0">París</Button>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="3">Ballena</Button>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="6">Púrpura</Button>
            <Button className="question-btn"  outline color="secondary" onClick={this.handleOptionChange} value="9">Nieve</Button>
          </QuestionOptionsComponent>          
          <QuestionOptionsComponent title={"Escriba la primera frase que se le ocurra"} clase={this.state.clase15} sendFunction={this.handleClick} sectionIndex={15}>
            <Input type="textarea" name="text" id="frase" />
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"Aclare su superpoder por favor"} clase={this.state.clase16} sendFunction={this.handleClick} sectionIndex={16}>
             <Nav tabs>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                  {this.state.super1}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                  {this.state.super2}
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12">
                    {this.state.desc1}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12">
                    {this.state.desc2}
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </QuestionOptionsComponent>
          <QuestionOptionsComponent title={"Rellene los campos restantes"} clase={this.state.clase17} sendFunction={this.handleClick} sectionIndex={17}>
            <Form  id="14">
              <FormGroup tag="fieldset">
                  <FormGroup>
                    <Label for="nombreF">Nombre</Label>
                    <Input type="text" name="nombre" id="nombreF" placeholder="..." />
                  </FormGroup>
                  <FormGroup>
                    <Label for="claveF">Nombre en clave:</Label>
                    <Input type="text" name="nombre en clave" id="claveF" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="fechaF">Fecha</Label>
                    <Input type="date" name="fecha" id="fechaF" />
                  </FormGroup>
              </FormGroup>
            </Form>
          </QuestionOptionsComponent>
          <ResultComponent title={"Carné del Escuadron Maldito"} clase={this.state.clase18} sectionIndex={18}>
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <Container className="alignleft">
                    <Row>
                      <Col xs="12">
                        <p><strong>Nombre en clave:</strong>{' '}{this.state.clave}</p>
                      </Col>
                      <Col xs="12">
                        <p><strong>Superpoder:</strong>{' '}{this.state.superseleccionado}</p>
                      </Col>
                    </Row>
                    <Row>                      
                      <Col xs="12">
                        <p><strong>Nombre:</strong>{' '}{this.state.name}</p>
                      </Col>
                      <Col xs="12">
                        <p><strong>Fecha:</strong>{' '}{this.state.when}</p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col xs="12" md="6" className="alignleft">
                  <p><strong>Amor:</strong>{' '}{this.state.amor}</p>
                  <p><strong>Miedo:</strong>{' '}{this.state.miedo}</p>
                  <p><strong>Ira:</strong>{' '}{this.state.ira}</p>
                  <p><strong>Orgullo:</strong>{' '}{this.state.orgullo}</p>
                  <p><strong>Pena:</strong>{' '}{this.state.pena}</p>
                </Col>
              </Row>
            </Container>
          </ResultComponent>
        </header>
      </div>
    );
  }
}
