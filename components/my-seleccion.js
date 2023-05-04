import config from "./config.js";
export default class mySeleccion extends HTMLElement{
    static url=import.meta.url
    static async components(){
        return await(await fetch(config.uri(mySeleccion.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySeleccion.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type === "submit")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){
        console.log("seleccion");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(mySeleccion.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Myseleccion=this.shadowRoot.querySelector("#hola");
            this.Myseleccion.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(mySeleccion.url), mySeleccion);