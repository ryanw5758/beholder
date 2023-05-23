interface CharacterProps {
    source: string;
    maxHealth: number;
    currentHealth: number;
}

export default function Character(props: CharacterProps) {
    return(
        <div>
            <img src = {props.source}/>
            <h6>{props.currentHealth}:{props.maxHealth}</h6>
        </div>
    );
}