
const Button = ({action,children,className}) => {
  return (
   <button 
  //  className='border px-4 py-2 flex items-center  justify-center gap-2 rounded-xl'
  className={`${className} hover:cursor-pointer border px-4 py-2 flex items-center  justify-center gap-2 rounded-xl`}
   onClick={action}>{children}</button>
  )
}

export default Button