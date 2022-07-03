import styles from './ProjectTile.module.css'
import Link from 'next/link'

export default function ProjectTile(props) {

    let labelColors = {
        "community": "var(--color-yellow)",
        "video": "var(--color-green)",
        "code": "var(--color-blue)",
        "hackathon project": "var(--color-blue)",
        "writing": "var(--color-red)",
        "talk": "var(--color-purple)",
        "old": "var(--color-dark-gray)"
    }

    let labels = props.label.split(",")
    console.log(labels)
    let displayLabels = []
    for(let x in labels) {
        if(labels[x].includes("2")) { // if is a date label
            displayLabels.push(<div className="label" style={{ backgroundColor: labelColors["old"], color: "var(--color-white)" }}>{labels[x]}</div>)
        } else {
            displayLabels.push(<div className="label" style={{ backgroundColor: labelColors[labels[x]] }}>{labels[x]}</div>)
        }
    }
    console.log(displayLabels)

    return (
        <Link href={props.link}>
            <div className={`${styles.project}`} style={{
                background: props.background,
                backgroundPosition: "center", // this is a workaround to having to logic the background image vs background gradient
                backgroundSize: "cover"
            }}>
                <div className="label-container">{displayLabels}</div>
                {/* need to fix this with jump issue before using - props.old ? <div className="label-bottom-container"><div className="label-bottom">{props.old}</div></div> : null*/}
                <div className={styles.wrapper}>
                    <img src={props.logo} className={styles.logo} style={props.largelogo ? {width: "20em"}: null ||  props.mediumlogo ? {width: "15em"}: null} />
                </div>
            </div>
        </Link>
    )
}