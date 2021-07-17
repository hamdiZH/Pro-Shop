import {MainContainer, SpinnerContainer} from "./App.Styles";
import Navbar from "./Components/Navbar/Navbar";
import {Switch} from "react-router";
import {useSelector} from "react-redux";
import GuestRouter from "./Router/GuestRouter";
import AuthRouter from "./Router/AuthRouter";
import UserRouter from "./Router/UserRouter";
import {Suspense} from "react";

function App() {
    const state = useSelector((store) => store);
    return (
        <div>
            <MainContainer>
                <Suspense fallback={<SpinnerContainer />}>
                <Navbar/>
                <Switch>
                    {GuestRouter()}
                    {state.userDetails.user._id ? UserRouter() : AuthRouter()}
                </Switch>
                </Suspense>
            </MainContainer>
        </div>
    );
}

export default App;
