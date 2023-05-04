import config from "./config.js";
export default class myForm extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(myForm.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myForm.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type === "submit")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){//enviar al worker
        console.log("form");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myForm.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Myform=this.shadowRoot.querySelector("form");
            this.Myform.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myForm.url), myForm);