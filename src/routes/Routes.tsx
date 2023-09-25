import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade'
import Home from '../pages/Home'

function Routes () {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='*' element = { <Home /> } />
                <Route path='/' element = { <Home /> } />
                <Route path='/politicaprivacidade' element = {<PoliticaPrivacidade />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes