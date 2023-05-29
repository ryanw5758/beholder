import { useState } from "react";

interface LobbyProps {
    className: string;
}

export default function Lobby(props: LobbyProps){
    // change line 9 after making Player object
    const [players, setPlayers] = useState(Array<any>);
    const [textList, setTextList] = useState(Array<string>);

    // TODO Determine type that input returns and adjust 13 accordingly
    const addTextEvent = (event: any) => {
        console.log(typeof(event))
        event.preventDefault();
        setTextList([
            ...textList,
            event.target[0].value + '\n']
        );
    }

    return(
        <div className={props.className}>
            <h1>
                Players: {players.length == 0 ? <span>Lobby Empty</span> : players}
            </h1>

            <form onSubmit={addTextEvent}>
                <label>
                    Chat:
                    <input type="text" name="name " defaultValue="Enter text"/>
                </label>
                <input type = "submit" value="Submit" />
            </form>
            <p>{textList}</p>
        </div>
    );
}