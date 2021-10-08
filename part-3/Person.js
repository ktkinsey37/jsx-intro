const Person = (props) => {
    let reply;
    if(props.age < 18){
        reply =  <h3>you must be 18</h3>
    } else if (props.age >= 18){
        reply = <h3>please go vote!</h3>
    }

    const name = props.name.slice(0,6)
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{name}, {props.age} years old</p>
            <span>{reply}</span>
            <ul>{props.hobbies.map(h => (<li>{h}</li>))} 
            </ul>
        </div>
    )
}