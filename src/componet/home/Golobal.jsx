import { useNavigation } from "react-router";
import { Loadinge } from "./Loadinge";


function Golobal() {
   const navigation = useNavigation()

   if (navigation.state === 'loading') {
      return (
         <Loadinge />
      )
   }

   return null
}

export default Golobal;