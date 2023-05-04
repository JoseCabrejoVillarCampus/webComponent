import config from "./config.js";
export default class myTabla extends HTMLElement{
    static url= import.meta.url
    static async components(){
        return await(await fetch(config.uri(myTabla.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myTabla.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
    }
}
// myTabla.myTabla();
customElements.define(config.name(myTabla.url), myTabla);