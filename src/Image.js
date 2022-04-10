

export default function Image(props) {
    // console.log(props.url);
    return (
        <div className="App-header">
            <img src={props.url}/>
        </div>
    );
}