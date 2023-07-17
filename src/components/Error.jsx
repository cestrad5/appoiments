const Error = ({children}) => {
  return (
    
    <div className='bg-red-800 text-white text-center font-bold rounded-md p-3 uppercase mb-3'>
        <p>
            {children}        
        </p>
    </div>    
            
  )
}

export default Error