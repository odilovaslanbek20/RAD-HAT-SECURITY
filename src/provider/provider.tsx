import { BrowserRouter } from "react-router-dom";

interface props {
  children: React.ReactNode
}

export default function Providers({children}: props) {
    return (
        <>
         <BrowserRouter>
           {children}
         </BrowserRouter>
        </>
    )
}