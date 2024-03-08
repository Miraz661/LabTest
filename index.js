const form = document.querySelector(".content");
const table = document.querySelector("#table");
let data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let Fname = e.target.fName.value;
    let Lname = e.target.lName.value;
    let email = e.target.email.value;
    let num = e.target.phone.value;
    let addr = e.target.address.value;
    const Name = /^[a-zA-Z]+$/;
    const Phone = /^[0-9]+$/;
    if (!Name.test(Fname)){
        alert("Use only alphebates in your First name");
        return;
    }
    if (!Phone.test(num)){
        alert("Your phone number should only contain numbers.");
        return;
    }
        data.push([Fname, Lname, email, num, addr]);
    console.log(data);
    addData(Fname,Lname,email,num,addr);
    alert("Data added successfully ...");
    e.target.fName.value = "";
    e.target.lName.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.address.value = "";
})



const addData = (fname,lname,email,num,addr)=>{
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = fname;
    row.appendChild(col1);
    let col2 = document.createElement("td");
    col2.innerText = lname;
    row.appendChild(col2);
    let col3 = document.createElement("td");
    col3.innerText = email;
    row.appendChild(col3);
    let col4 = document.createElement("td");
    col4.innerText = num;
    row.appendChild(col4);
    let col5 = document.createElement("td");
    col5.innerText = addr;
    row.appendChild(col5);
    let col6 = document.createElement("td");
    col6.classList.add("action");
    let edit = document.createElement("a");
    edit.classList.add("edit");
    edit.innerText = "Edit";
    edit.setAttribute('href','#');
    let del = document.createElement("a");
    del.classList.add("insert");
    del.innerText = "Delete";
    del.setAttribute('href','#');
    col6.appendChild(edit);
    col6.appendChild(del);
    row.appendChild(col6);
    table.appendChild(row);
}