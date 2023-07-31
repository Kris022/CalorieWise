import Backdrop from "./Backdrop";

const Modal = ({children, handleClose}) => {
    return ( 
        <Backdrop onClick={handleClose}>
            <div onClick={e => e.stopPropagation()} className="w-full sm:w-auto m-auto">
                {children}
            </div>
        </Backdrop>
     );
}
 
export default Modal;