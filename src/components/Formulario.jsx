import { useState, useEffect } from "react"

const Formulario = () => {
  
  const [nombre, setNombre] = useState("")
  
    return (
   <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-stone-400 text-3xl text-centers">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-5">
            Añade pacientes y {''}
            <span className="font-bold text-orange-400">Administralos</span>
        </p>

        <form className="bg-gray-400 shadow-lg rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="mascota" className="block uppercase font-bold">
                        Nombre de la mascota
                </label>
                    <input 
                        id="mascota"
                        type="text" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md" 
                        placeholder="Laika"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value) }
                    />
                
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block uppercase font-bold">
                        Nombre del propietario
                </label>
                    <input 
                        id="propietario"
                        type="text" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md" 
                        placeholder="John Doe"/>
                
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block uppercase font-bold">
                        📧 email
                </label>
                    <input 
                        id="email"
                        type="email" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md" 
                        placeholder="johndoe@gmail.com"/>
                
            </div>


            <div className="mb-5">
                <label htmlFor="date" className="block uppercase font-bold">
                        Fecha de entrada
                </label>
                    <input 
                        id="date"
                        type="date" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md"/>
                
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block uppercase font-bold">
                        Observaciones:
                </label>
                    <textarea 
                        id="sintomas"
                        type="date" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md" placeholder="Describe los sintomas aqui"/>
                
            </div>

            <input 
                type="submit"
                className="bg-indigo-600 uppercase font-bold w-full p-3 hover:bg-red-400 cursor-pointer transition-delay"
                value="Add new"
                />

        </form>
   </div>
    
  )
}

export default Formulario