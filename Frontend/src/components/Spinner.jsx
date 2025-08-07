import {ClipLoader} from "react-spinners"

const Spinner = () => {
  return (
   <div style={{
    minHeight:"500px",
    display:"flex",
    flexDirection:"column",
    jutifyContent:"center",
    alignItems:"center",
   }}
   >
<ClipLoader size={150} />
   </div>
  )
}

export default Spinner