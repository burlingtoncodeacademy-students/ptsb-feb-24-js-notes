function AboutMe() {

    const city = "Indianapolis";
    const state = "Indiana";

    let styles = {
        ul: {
            textAlign: 'left',
            color: "green"
        },
        p: {
            fontSize: '20pt',
            color: 'red'
        }
    }

    return(
        <div>
            <p style={styles.p}>{city}, {state}</p>
            <ul style={styles.ul}>
                <li>Grocery Store</li>
                <li>Gas Station</li>
                <li>Out to Eat</li>
            </ul>
        </div>
    )
}

export default AboutMe;