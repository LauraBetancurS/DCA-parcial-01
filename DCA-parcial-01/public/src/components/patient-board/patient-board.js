import "../patient-card/patient-card.js"
class PatientBoard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.arrayPatient = [];
    }

    connectedCallback(){
        this.render()

        const patientForm = this.shadowRoot.querySelector('.patient-form');
        patientForm.addEventListener("submit", (e)=>{
            e.preventDefault()
    
            const nombre = this.shadowRoot.querySelector('.input-nombre').value
            const especie = this.shadowRoot.querySelector('.input-especie').value
            const raza = this.shadowRoot.querySelector('.input-raza').value
            const date = this.shadowRoot.querySelector('.input-date').value
            const sintomas = this.shadowRoot.querySelector('.input-sintomas').value

           
            this.arrayPatient.push({nombre, especie, raza, date, sintomas, state: false})

            this.addPatiente({nombre, especie, raza, date, sintomas, state: false});

            patientForm.reset()

        })
    }

    render(){
        console.log('data',this.arrayPatient);
        this.shadowRoot.innerHTML=
        `
        <h2>Patient Board</h2>
        <form class= "patient-form">
        <input type="text" placeholder="nombre" class="input-nombre" required>
        <input type="text" placeholder="especie" class="input-especie" required>
        <input type="text" placeholder="raza" class="input-raza" required>
        <input type="date" class="input-date" required>
        <input type="text" placeholder="Sintomas" class="input-sintomas" required>
        <button>Enviar</button>
        </form>

        <ul class="patient-container">
        </ul>
    
        `
        this.arrayPatient.forEach(PATIENT => this.addPatient(PATIENT)) 
    }

addPatiente({nombre, especie, date, raza, sintomas, state }){
    const patientContainer = this.shadowRoot.querySelector('.patient-container')
        patientContainer.innerHTML += `
        <patient-card 
            nombre="${nombre}" 
            especie="${especie}"
            date="${date}"
            raza="${raza}"
            sintomas="${sintomas}"
            state="${state}"
        ></patient-card>
        `

}
        
       
    

   
}

customElements.define('patient-board', PatientBoard)
export default PatientBoard