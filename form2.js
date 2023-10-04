const countryDropdown = document.getElementById('countryDropdown');
const stateDropdown = document.getElementById('stateDropdown');

const states = {
    india: ['tamilnadu', 'kerala', 'karnataka', 'andhra', 'telangana'],
    usa: ['california', 'torronto']
}

let populateStates = (stateDropdown, data) => {
    stateDropdown.innerHTML = '';
    let option = document.createElement('option');
    option.text = '--select state--';
    stateDropdown.appendChild(option);
    data.forEach((state) => {
        let option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateDropdown.appendChild(option);
    });

}

countryDropdown.addEventListener('change', function () {
    populateStates(stateDropdown, states[countryDropdown.value]);
});

let loginForm = document.getElementById('form_Submit');
const first = document.getElementById('txtFirstName');
const last= document.getElementById('txtLastName');
const address=document.getElementById('txtAddress');
const pincode=document.getElementById('txtpincode');
const gender=document.getElementById('genderDropdown');
const food=document.querySelector('#food');

const country=document.getElementById('countryDropdown');
const state=document.getElementById('stateDropdown');

loginForm.addEventListener("submit", (e) => {
e.preventDefault();
  });

  function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let i = 1; i <=1; i++) {
       const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 =document.createElement("td");
      const cell3 =document.createElement("td");
      const cell4 =document.createElement("td");
      const cell5 =document.createElement("td");
      const cell6 =document.createElement("td");
      const cell7country =document.createElement("td");
      const cell8state =document.createElement("td");
        const cellText1 = document.createTextNode(`${i},${first.value}`);
        const cellText2 = document.createTextNode(`${last.value}`);
        const cellText3 = document.createTextNode(`${address.value}`);
        const cellText4 = document.createTextNode(`${pincode.value}`);
        const cellText5 = document.createTextNode(`${gender.value}`);
        const cellText6 = document.createTextNode(`${food.value}`);
        const cellText7 = document.createTextNode(`${country.value}`);
        const cellText8 = document.createTextNode(`${state.value}`);
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        cell4.appendChild(cellText4);
        cell5.appendChild(cellText5);
        cell6.appendChild(cellText6);
        cell7country.appendChild(cellText7);
        cell8state.appendChild(cellText8);
        row.append(cell1,cell2,cell3,cell4,cell5,cell6,cell7country,cell8state);
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }