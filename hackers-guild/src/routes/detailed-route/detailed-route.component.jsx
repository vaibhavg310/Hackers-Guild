import { Routes, Route } from "react-router-dom"
import DetailedCard from "../../components/detailed-card/detailed-card.component"


export const DetailedRoute = () => {

return (
     <Routes>
        <Route path=":id" element={<DetailedCard />} />
     </Routes>
)
}