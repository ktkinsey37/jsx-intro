const App = () => {
    return (
        <div>
            <Person name="kevin" age="22" hobbies={["knitting", "climbing", "rhyming"]}/>
            <Person name="saracensciz" age="12" hobbies={["knitting", "climbing", "rhyming"]}/>
            <Person name="kevin" age="22" hobbies={["knitting", "climbing", "rhyming", "do what what", "sheezy"]}/>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))