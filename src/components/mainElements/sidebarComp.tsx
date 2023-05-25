interface SidebarProps {
    className: string;
}

export default function Sidebar(props: SidebarProps) {
    return(
        <div className={props.className}>
            <h1>Sidebar Here</h1>
        </div>
    );
}