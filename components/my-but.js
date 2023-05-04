import config from "./config.js";
export default class myBut extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(myBut.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myBut.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type === "click")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){
        console.log(e.target);
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myBut.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Mybut=this.shadowRoot.querySelector("#btn");
            this.Mybut.addEventListener("click",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myBut.url), myBut);