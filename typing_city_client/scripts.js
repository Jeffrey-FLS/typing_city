
// DOM Elements
const htmlMainBody = document.querySelector('.main-body');

function fetchUsers() {
    fetch('http://localhost:3000/api/v1/users')
        .then(data => data.json())
        .then(console.log)
        .catch(console.error);
}

function renderUser(arrObjUsers, objUserLogin) {
    arrObjUsers.forEach((objUser) => {
        // if ()
    })
}

function createUser(objUser) {
    alert(JSON.stringify(objUser));

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: objUser.username,
            password: objUser.password,
            first_name: objUser.first_name,
            last_name: objUser.last_name
        })
    };

    fetch('http://localhost:3000/api/v1/users', config)
        .then(data => data.json())
        .then(console.log)
        .catch(console.error);
}



// HTML ------------------------------------------------------------------------

const htmlLogin = `
    <div class="login">
        <h1>Login</h1>

        <form class="login_-_form" action="">
            <label for="username">Username
                <input type="text" name="username">
            </label>

            <label for="password">Password
                <input type="password" name="password">
            </label>

            </br>

            <input type="submit" value="Submit">
        </form>
        
        <a href="#" class="login_-_new-user" onclick="loadHtmlCreateUser()">Create New User</a>
    </div>
    `;


const htmlCreateUser = `
    <div class="login">
        <h1>New User</h1>

        <form class="create-user_-_form" action="">
            <label for="username">Username
                <input type="text" name="username">
            </label>

            <label for="password">Password
                <input type="password" name="password">
            </label>
            
            <label for="first_name">First Name
                <input type="text" name="first_name">
            </label>

            <label for="last_name">Last Name
                <input type="text" name="last_name">
            </label>

            </br>

            <input type="submit" value="Submit">
        </form>
    </div>
    `;

const htmlUserProfile = (objUser) => {
    return `
        <div class="login">
            <h1>Profile</h1>
        
            <h3>Welcome ${objUser.first_name}</h3>
    
            <h3>Score</h3>        
        </div>
    `
};


// HTML Calls ------------------------------------------------------------------

const loadHtmlLogin = () => {
    htmlMainBody.innerHTML = htmlLogin;
    formLoginEventListener();
};


const loadHtmlCreateUser = () => {
    htmlMainBody.innerHTML = htmlCreateUser;
    formCreateUserEventListener();
};

const loadHtmlUserProfile = (objUser) => {
    htmlMainBody.innerHTML = htmlUserProfile(objUser);
};



// Document Loaded -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // HTML Loads
    loadHtmlLogin();

    // Submit Listeners

    // Click listeners

});

// Click Event Listeners -------------------------------------------------------

// const htmlNewUserClick = () => {
//     const aNewUser = document.querySelector('.login_-_new-user');
//
//     // aNewUser.addEventListener()
// };



// Form Submit Event Listeners -------------------------------------------------

const formLoginEventListener = () => {
    const formLoginUser = document.querySelector(".login_-_form");

    formLoginUser.addEventListener('submit', (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/v1/users')
            .then(data => data.json())
            .then((data) => {
                console.log(data);

                data.forEach((obj) => {
                    obj.username === event.target.username.value && obj.password === event.target.password.value
                        ? loadHtmlUserProfile(obj)
                        : console.log("username doesn't macth")
                })
            })
            .catch(console.error);

        // alert(event.target.username.value);
    })
};

const formCreateUserEventListener = () => {
    const formCreateUser = document.querySelector(".create-user_-_form");

    console.log(formCreateUser);

    formCreateUser.addEventListener('submit', (event) => {
        event.preventDefault();

        // const input = event.target;

        createUser({
            username: event.target.username.value,
            password: event.target.password.value,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value
        });

        loadHtmlLogin();
    });
};