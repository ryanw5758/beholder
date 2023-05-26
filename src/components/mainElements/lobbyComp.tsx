import { useState } from "react";

interface LobbyProps {
    className: string;
}

export default function Lobby(props: LobbyProps){
    // change line 9 after making Player object
    const [players, setPlayers] = useState(Array<any>);
    return(
        <div className={props.className}>
            <h1>
                Lobby Here <br/>
                Players:
            </h1>

            <label>
                Chat:
                <input type="text" name="name " />
            </label>
            <input type = "submit" value="Submit" />
        </div>
    );
}