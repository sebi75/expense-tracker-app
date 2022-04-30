import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ContextProvider } from "./context/Context"
import { LayerProvider } from "./layerContext/LayerContext"
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <LayerProvider>
                <ContextProvider>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ContextProvider>
            </LayerProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
)
