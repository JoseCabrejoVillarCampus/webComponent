let pathName2= new URL(import.meta.url).pathname;
let name2 = pathName2.split("/").pop().replace(".js","");

export default class mySection extends HTMLElement{
    static async components(){
        return await(await fetch(pathName2.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySection.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
        console.log("etiqueta renderizada y estilizada");
    }
}
// myTabla.myTabla();
customElements.define(name2, mySection);