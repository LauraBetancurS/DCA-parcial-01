
class PatientCard extends HTMLElement {
   
    constructor(){
       
        super()
        this.attachShadow({mode: 'open'});
    }
    
    static get observedAttributes(){
        return ['nombre', 'especie', 'raza', 'date', 'sintomas', 'state']
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this.render()
        if (oldValue !== newValue) {
            
            this[propName] = propName === 'state' ? newValue === 'true' : newValue
            this.render()
        }
    }

    

    render(){
        this.shadowRoot.innerHTML = 
       
        `
        <li class="${this.state}? "Pendiente" : "ya lo atendimos">
           <h4>${this.nombre}</h4>
           <p>${this.especie}</p>
           <p>${this.raza}</p>
           <p>${this.date}</p>
           <p>${this.sintomas}</p>
           <input type="checkbox" ${this.state ? "Pendiente" : ""} class="patient-checkbox">


        </li>
        `
      

    }
}

customElements.define('patient-card', PatientCard)
export default PatientCard