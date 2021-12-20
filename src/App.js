import './index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './redux'
import {HomePage} from "./pages/homePage";
import {Header} from "./components/header";
import {GamePage} from "./pages/gamePage";
import {OrderPage} from "./pages/orderPage";

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className={'App'}>
                    <Header/>
                    <Switch>
                        <Route exact path={'/'}>
                            <HomePage/>
                        </Route>
                        <Route path={'/app/:title'}>
                            <GamePage/>
                        </Route>
                        <Route path={'/order'}>
                            <OrderPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}
