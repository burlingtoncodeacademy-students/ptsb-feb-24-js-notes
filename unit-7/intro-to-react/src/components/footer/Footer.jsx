/* 
    - Create a new folder within the component folder for a footer.
        - Within it's proper folder, create a new component called "Footer" as a jsx.
    
    - Write a function that exports a single h6 element with a copyright.
    - Type in the current year.
    - Export the component.
    - Import the component within App.jsx
    - Mount at the bottom of the JSX being returned in App.jsx. 
        - note: it doesn't need to be fixed to the bottom of the browser page

    Bonus: Make the year dynamic so it is not hard coded and will change after this year.
*/

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <h6>Copyright {currentYear} &copy;</h6>
    )
}

export default Footer;