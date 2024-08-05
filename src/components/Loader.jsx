import { Html } from "@react-three/drei"

export const Loader = () => {

  return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[100vw] h-[10vw] rounded-full">
           Loading...
        </div>      
      </div>
  )
}

