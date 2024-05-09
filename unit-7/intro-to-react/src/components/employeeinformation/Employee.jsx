import EmployeeInfo from "./EmployeeInfo";

function Employee() {

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: 'Web Dev',
            food: 'Pizza' 
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: 'Web Dev',
            food: 'Tacos' 
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: 'Web Dev',
            food: 'Pizza' 
        },
    ];

    /* 
! Challenge:
    - Update the return to include the CITY/STATE values of what is being passed through the props.
    - Update the objects being passed to include a POSITION & FOOD.
        - Include those values within the returned component.
*/

    return(
        <>
            <h1>Hello from Employees</h1>
            {
                employeeRecords.map((record, index) => {
                    return(
                        <EmployeeInfo 
                            key={index}
                            name={record.name}
                            city={record.city}
                            state={record.state}
                            food={record.food}
                            position={record.position}
                        />
                    )
                })
            }
        </>
    )
}

export default Employee;