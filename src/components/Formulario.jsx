const Formulario = () => {
  return (
   <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-stone-400 text-3xl text-centers">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-5">
            Añade pacientes y {''}
            <span className="font-bold text-orange-400">Administralos</span>
        </p>

        <form className="bg-gray-400 shadow-lg rounded-lg py-10 px-5">
            <div className="mb-5">
                <label htmlFor="mascota" className="block uppercase font-bold">
                        Nombre de la mascota
                </label>
                    <input 
                        id="mascota"
                        type="text" 
                        className="border-spacing-2 w-full p-2 mt-2 placeholder-red-500 rounded-md" 
                        placeholder="Laika"/>
                
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
        </form>
   </div>
    
  )
}

export default Formulario