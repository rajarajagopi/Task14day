


let createLable=document.createElement('label');
createLable.textContent='FirstName';
document.body.appendChild(createLable);
let txtFirstname=document.createElement('input');
txtFirstname.id='txtFirstName';
txtFirstname.setAttribute('type', 'text');
document.body.appendChild(txtFirstname);


let lastNamelabel=document.createElement('label');
lastNamelabel.textContent='LastName';
document.body.appendChild(lastNamelabel);
let txtlastName=document.createElement('input');
txtlastName.setAttribute('type', 'text');
txtlastName.id='txtLastName';
document.body.appendChild(txtlastName);

let addresslabel=document.createElement('label');
addresslabel.textContent='Address';
document.body.appendChild(addresslabel);
let txtaddress=document.createElement('input');
txtaddress.setAttribute('type', 'text');
txtaddress.id='txtAddress';
document.body.appendChild(txtaddress);

let pincodeLabel=document.createElement('label');
pincodeLabel.textContent='Pincode';
document.body.appendChild(pincodeLabel);
let txtpincode=document.createElement('input');
txtpincode.setAttribute('type', 'text');
txtpincode.id='txtpincode';
document.body.appendChild(txtpincode);

