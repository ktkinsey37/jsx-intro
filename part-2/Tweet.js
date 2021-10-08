const Tweet = (props) => {
    return (
        <div>
            <h4>{props.username}</h4>
            <h6>{props.name}</h6>
            <p>{props.message}</p>
            <h6>{props.date}</h6>
        </div>
    )
}