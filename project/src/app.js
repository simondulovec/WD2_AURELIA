import { PLATFORM } from "aurelia-framework";
import {Bindings} from "bindings";
import {Cykly} from "cykly";
import 'bootstrap';

export class App {
  
	constructor(){
	this.task= new Bindings("Toto je správa");
	this.list=new Cykly();

}

configureRouter(config,router){
config.title="Aurelia Simon Dulovec";
config.map([
{route:"", name:"home", moduleId: PLATFORM.moduleName("home.html"), title:"Domov"},
{route:"bindings", name:"bindings", moduleId: PLATFORM.moduleName("bindings.html"), title: "Bindings"},
{route:"elementy", name:"elementy", moduleId: PLATFORM.moduleName("elementy.html"), title: "Elementy"},
{route:"cykly", name:"cykly", moduleId: PLATFORM.moduleName("cykly.html"), title: "Cykly"}
]);
}

}
