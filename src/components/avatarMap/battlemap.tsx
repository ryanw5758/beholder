import { useState } from "react";

import Character from "./character";

interface BattleMapProps {
    className: string;
}

let nextId = 0;

export default function BattleMap(props: BattleMapProps) {
    // i do not believe that this is a good idea
    const [combatants, setCombatants] = useState(Array<any>);
    return(
        <div className={props.className}>
            <canvas>
                <ul>
                    {combatants.map(combatant => (
                        <li key = {combatant.id}>{combatant.value}</li>
                    ))}
                </ul>
            </canvas>

            <button onClick={() =>{ 
                setCombatants([
                ...combatants,
                {id: nextId++,
                value:  <Character 
                            source = {"https://cdn-icons-png.flaticon.com/512/4436/4436481.png"}
                            maxHealth = {4}
                            currentHealth = {4}
                />
            }
            ])}}>
                Spawn
            </button>
        </div>
    );
}