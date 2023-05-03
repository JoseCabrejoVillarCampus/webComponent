let pathName5= new URL(import.meta.url).pathname;
let name5 = pathName5.split("/").pop().replace(".js","");

export default class myFooter extends HTMLElement{
    static async components(){
        return await(await fetch(pathName5.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
        console.log("etiqueta renderizada y estilizada");
    }
}
// myTabla.myTabla();
customElements.define(name5, myFooter);