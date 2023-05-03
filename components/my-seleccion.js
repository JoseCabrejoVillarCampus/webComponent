let pathName3= new URL(import.meta.url).pathname;
let name3 = pathName3.split("/").pop().replace(".js","");

export default class mySeleccion extends HTMLElement{
    static async components(){
        return await(await fetch(pathName3.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySeleccion.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
        console.log("etiqueta renderizada y estilizada");
    }
}
// myTabla.myTabla();
customElements.define(name3, mySeleccion);