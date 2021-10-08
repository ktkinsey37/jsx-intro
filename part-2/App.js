const App = () => {
    return (
        <div>
            <Tweet username="fakename" name="kevin" message="hello world!" date="10/2/21"></Tweet>
            <Tweet username="fakename2" name="kedn" message="helddfsgo world!" date="10/4/21"></Tweet>
            <Tweet username="fakename45" name="ken" message="hello dld!" date="10/10/21"></Tweet>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))