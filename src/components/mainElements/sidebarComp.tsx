import { Spectral_SC } from "next/font/google";

const spectral = Spectral_SC({ subsets: ['cyrillic'],
                               weight: '400' })

interface SidebarProps {
    className: string;
}

let onClick = () => {
    alert("Spawn element")
}

export default function Sidebar(props: SidebarProps) {
    return(
        <div className={props.className}>
            <ul className={spectral.className}>
                <li>
                    - Element 1 <br />
                    <button style={{backgroundColor: "gray"}} onClick={onClick}>
                        Click to spawn
                    </button>
                </li>
                <li>
                    - Element 2 <br />
                    <button style={{backgroundColor: "red"}}>
                        Click to spawn
                    </button>
                </li>
                <li>
                    - Element 3 <br />
                    <button style={{backgroundColor: "green"}}>
                        Click to spawn
                    </button>
                </li>
            </ul>
        </div>
    );
}