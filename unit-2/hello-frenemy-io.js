const readline = require("readline");
const readlineInterface = readline.createInterface(
	process.stdin,
	process.stdout
);

function ask(questionText) {
	return new Promise((resolve, reject) => {
		readlineInterface.question(questionText, resolve);
	});
}

let enemyList = ["darth vader", "voldemort", "palpatine", "lex luthor"];

async function respond() {
	let input = await ask("What's your name?");
	
    if (input === "darth vader") {
        console.log("NOOOO")
        readlineInterface.close()
        return
    }
    if (enemyList.includes(input)) {
        console.log(`Go away ${input}`)
        readlineInterface.close()
        return
    }

    console.log(`Welcome ${input}`)
    readlineInterface.close()
}
respond();

/* 
    Notes:
    * In the above example, we avoid chaining else and elseif's by using an empty return
    * return OR return false allows us to exit out of the function prematurely once a condition has been met
    * this means next if isn't being evaluated
    * this allows us to avoid having to chain else or elseif
    * this is the must efficient way of writing production-level code.
*/
