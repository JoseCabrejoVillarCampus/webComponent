import config from "./config.js";
export default class myFooter extends HTMLElement{
    static url=import.meta.url
    static async components(){
        return await(await fetch(config.uri(myFooter.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type === "submit")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){
        console.log("footer");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Myfooter=this.shadowRoot.querySelector("footer");
            this.Myfooter.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myFooter.url), myFooter);
