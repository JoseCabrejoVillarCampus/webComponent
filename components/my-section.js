import config from "./config.js";
export default class mySection extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(mySection.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySection.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type === "submit")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){
        console.log("section");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(mySection.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Mysection=this.shadowRoot.querySelector("article");
            this.Mysection.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(mySection.url), mySection);