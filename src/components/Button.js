
const Button = ({children,...props}) =>{

    return(
        <button  className="m-1 pr-4 border-2 font-semibold border-doublex p-1 bg-white border-gray-500 opacity-75 rounded-lg " type="submit" {...props} >{children}</button>
        );


}

export default Button;