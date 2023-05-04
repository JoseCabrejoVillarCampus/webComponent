import config from "./config.js";
export default class myNav extends HTMLElement{
    static url= import.meta.url
    static async components(){
        return await(await fetch(config.uri(myNav.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type=== "submit")? this.sendMessage(e):undefined;
    }
    sendMessage(e){
        console.log("nav");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Mynav=this.shadowRoot.querySelector("a");
            this.Mynav.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
// myTabla.myTabla();
customElements.define(config.name(myNav.url), myNav);