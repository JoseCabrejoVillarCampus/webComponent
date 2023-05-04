import config from "./config.js";
export default class myHeader extends HTMLElement{
    static url =import.meta.url
    static async components(){
        return await(await fetch(config.uri(myHeader.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
    handleEvent(e){
        (e.type==="submit")? this.sendMessage(e)
        :undefined;
    }
    sendMessage(e){
        console.log("heloo");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.Myheader=this.shadowRoot.querySelector("header");
            this.Myheader.addEventListener("submit",this.handleEvent.bind(this))
        })
    }
}
// myTabla.myTabla();
customElements.define(config.name(myHeader.url), myHeader);