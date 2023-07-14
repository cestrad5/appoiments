import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="px-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        <h2 className="font-black text-center text-3xl">ListadoPacientes</h2>
        <p className="text-xl mb-10 mt-5 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p>

        <Paciente/> 
        <Paciente/> 
        <Paciente/> 
        
    </div>
    
  )
}

export default ListadoPacientes