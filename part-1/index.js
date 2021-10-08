const FirstComponent = () => {
    return <h1>My very first component</h1>
}

const NamedComponent = (props) => {
    return(
    <div>
        <p>My name is {props.name}</p>
    </div>
    )
}

const App = () => {
    return(
        <div>
            <FirstComponent/>
            <NamedComponent name="Kevin"/>
        </div>
    )          
}

ReactDOM.render(<App/>, document.getElementById("root"))