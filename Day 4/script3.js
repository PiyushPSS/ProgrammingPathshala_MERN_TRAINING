function firstNameChange(e) {
    const val = e.target.value;

    // if(val.length > 5) {
    //     console.log("More than 5");
    // }

    // console.log(e.key)
}

function submitFunction(e) {
    e.preventDefault()
    // console.log(e);
    const t = e.target;

    // for(i = 0 ; i < 6 ; i++) {
    //     console.dir(t[i].value);
    // }

    const result = {
        hobbies: []
    };

    for (i = 0; i < t.length; i++) {
        const type = t[i].type;
        if (type != "submit") {
            const value = t[i].value;

            if (type == 'checkbox' && t[i].checked) {
                result.hobbies.push(value);
            }

            if (type != "checkbox") {
                result[t[i].name] = value;
            }
        }
    }

    console.log(result);

}


//Homework: Event delegation.
//Get the values that are entered into another array.