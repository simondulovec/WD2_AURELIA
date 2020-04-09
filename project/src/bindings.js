export class Bindings {

constructor(){
this.message="Som neoznačená správa";
this.state=false;
this.stringstate="";
}

updateMessage(){
if (this.state==true){
this.message="Som označená sráva";
}else{
this.message="Som neoznačená správa";
}
}

updateState(){
if (this.stringstate=="true"){
this.state=true;
}
else if (this.stringstate=="false")
this.state=false;
this.stringstate="";
}
}
