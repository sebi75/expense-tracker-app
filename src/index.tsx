import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { Provider } from "./context/Contex"
import { LayerProvider } from "./layerContext/LayerContext"

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <LayerProvider>
                <Provider>
                    <App />
                </Provider>
            </LayerProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
)
