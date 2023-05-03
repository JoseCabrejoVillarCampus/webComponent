let pathName1= new URL(import.meta.url).pathname;
let name1 = pathName1.split("/").pop().replace(".js","");

export default class myHeader extends HTMLElement{
    static async components(){
        return await(await fetch(pathName1.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
        console.log("etiqueta renderizada y estilizada");
    }
}
// myTabla.myTabla();
customElements.define(name1, myHeader);