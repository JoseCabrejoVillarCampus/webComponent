let pathName4= new URL(import.meta.url).pathname;
let name4 = pathName4.split("/").pop().replace(".js","");

export default class myNav extends HTMLElement{
    static async components(){
        return await(await fetch(pathName4.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML= html;
        })
        console.log("etiqueta renderizada y estilizada");
    }
}
// myTabla.myTabla();
customElements.define(name4, myNav);