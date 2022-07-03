import styles from './ProjectTile.module.css'
import Link from 'next/link'

export default function ProjectTile(props) {

    let labelColors = {
        "community": "var(--color-yellow)",
        "video": "var(--color-green)",
        "code": "var(--color-blue)",
        "written": "var(--color-red)",
        "talk": "var(--color-purple)"
    }

    let labels = props.label.split(",")
    console.log(labels)
    let displayLabels = []
    for(let x in labels) {
        displayLabels.push(<div className="label" style={{ backgroundColor: labelColors[labels[x]] }}>{labels[x]}</div>)
    }
    console.log(displayLabels)

    return (
        <Link href={props.link}>
            <div className={styles.project} style={{
                background: props.background,
                backgroundPosition: "center", // this is a workaround to having to logic the background image vs background gradient
                backgroundSize: "cover"
            }}>
                <div className="label-container">{displayLabels}</div>
                <div className={styles.wrapper}>
                    <img src={props.logo} className={styles.logo} style={props.largelogo ? {width: "20em"}: null} />
                </div>
            </div>
        </Link>
    )
}