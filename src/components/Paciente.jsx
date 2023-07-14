const Paciente = () => {
  return (
   
    <div className="bg-gray-400 shadow-lg rounded-lg py-10 px-5 mb-10">
        <p className="font-bold mt-3 text-blue-600 uppercase"> Nombre: {''}
                <span className="font-norma normal-case">Lukas</span>
        </p>

        <p className="font-bold mt-3 text-blue-600 uppercase"> Propietario: {''}
                <span className="font-norma normal-case">John</span>
        </p>

        <p className="font-bold mt-3 text-blue-600 uppercase"> 📧 : {''}
                <span className="font-norma normal-case">jd@gmail.com</span>
        </p>

        <p className="font-bold mt-3 text-blue-600 uppercase"> Fecha de Entrada: {''}
                <span className="font-norma normal-case">01/01/2024</span>
        </p>

        <p className="font-bold mt-3 text-blue-600 uppercase"> Sintomas: {''}
                <span className="font-norma normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat possimus, cum voluptate incidunt voluptatibus. Praesentium ipsam aliquam obcaecati, odio rem tempora ex eum. Nihil aperiam voluptatum aspernatur voluptatem beatae!</span>
        </p>

        
    </div>


  )
}

export default Paciente