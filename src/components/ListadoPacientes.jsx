import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

  return (
    <div className="px-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        <h2 className="font-black text-center text-3xl">ListadoPacientes</h2>
        <p className="text-xl mb-10 mt-5 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p>

     {pacientes.map( (paciente, index) => (
        <Pacientes 
            //key={index}
            paciente={paciente}
        />
        
     ))}
        
    

    </div>
    
  )
}

export default ListadoPacientes