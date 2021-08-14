function myFunction() {
  
  var content = document.getElementById("text").value;
  alert(content + " " + "succesfully" + " " + "added");
}
let signup = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const adSignup = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: Date.now(),
        name: document.getElementById('text').value,
        email: document.getElementById('email').value,
        password: document.getElementById("password")

    }
    signup.push(signup);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {signup} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(signup, '\t', 2);

    //saving to localStorage
    localStorage.setItem('UserDetails', JSON.stringify(signup) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sp').addEventListener('click', addSignup);
});