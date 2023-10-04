

let header = document.createElement('h2');
header.textContent = 'Calculator Using Dom';
header.style.textAlign="center";
let firstDiv = document.createElement('div');
firstDiv.style.backgroundColor='skyblue';
firstDiv.style.height='50px';
firstDiv.style.width='350px';
firstDiv.style.padding='05px';
firstDiv.style.marginLeft='400px';
firstDiv.style.marginTop='10px';
firstDiv.style.border='solid-thin';
firstDiv.appendChild(header);
document.body.append(firstDiv);

let txtAnswer= document.createElement('input');
txtAnswer.setAttribute('type','text');
txtAnswer.placeholder='0';
txtAnswer.style.fontSize='50px';
txtAnswer.style.fontStyle.placeholder='black';
txtAnswer.style.backgroundColor='white';
txtAnswer.style.marginTop='15px';
txtAnswer.style.marginLeft='07px';
txtAnswer.style.textAlign="left";
txtAnswer.style.width='330px';
txtAnswer.style.height='60px';
let bodyDiv = document.createElement('div');
bodyDiv.style.backgroundColor='grey';
bodyDiv.style.height='480px';
bodyDiv.style.width='350px';
bodyDiv.style.padding='02px';
bodyDiv.style.marginLeft='400px';
bodyDiv.style.marginTop='10px';
bodyDiv.style.borderColor='red';


//----------------------------------------------------------------------------------------
let firstrowkeys=document.createElement('div');
firstrowkeys.style.backgroundColor='metalic-grey';
firstrowkeys.style.height='70px';
firstrowkeys.style.width='330px';
//firstrowkeys.style.padding='05px';
firstrowkeys.style.marginLeft='08px';
firstrowkeys.style.marginTop='10px';
//---------------------Clear Button----------------------------------------------------
let cancelButton=document.createElement('Button');
cancelButton.style.backgroundColor='grey';
cancelButton.textContent="C";
cancelButton.style.marginLeft='05px';
cancelButton.style.marginTop='04px';
cancelButton.style.height='60px';
cancelButton.style.width='75px'
cancelButton.style.fontSize='20px'
cancelButton.style.border='None';

cancelButton.nodeValue='C';
cancelButton.className='cancelButton';
cancelButton.id='cancelButton';
firstrowkeys.appendChild(cancelButton);

//-----------------------Back Space---------------------------------------------------

let backButton=document.createElement('button');
backButton.style.backgroundColor='grey';
backButton.textContent="<--";
backButton.style.marginLeft='05px';
backButton.style.height='60px'; 
backButton.style.width='75px';
backButton.style.fontSize='20px';
backButton.style.border='none';
firstrowkeys.appendChild(backButton);

let dotButton=document.createElement('button');
dotButton.style.backgroundColor='grey';
dotButton.textContent=".";
dotButton.style.marginLeft='05px';
dotButton.style.height='60px'; 
dotButton.style.width='75px';
dotButton.style.fontSize='20px';
dotButton.style.border='none';
firstrowkeys.appendChild(dotButton);

let multiButton=document.createElement('button');
multiButton.style.backgroundColor='grey';
multiButton.textContent="X";
multiButton.style.marginLeft='05px';
multiButton.style.height='60px'; 
multiButton.style.width='75px';
multiButton.style.fontSize='20px';
multiButton.style.border='none';
firstrowkeys.appendChild(multiButton);
//-----------------------------------------------------------------------------
let secondrowkeys=document.createElement('div');
secondrowkeys.style.backgroundColor='grey';
secondrowkeys.style.height='70px';
secondrowkeys.style.width='330px';
secondrowkeys.style.padding='05px';
secondrowkeys.style.marginLeft='08px';
secondrowkeys.style.marginTop='04px';

let sevenButton=document.createElement('Button');
sevenButton.style.backgroundColor='grey';
sevenButton.textContent="7";
sevenButton.style.marginLeft='00px';
sevenButton.style.height='60px';
sevenButton.style.width='75px'
sevenButton.style.fontSize='20px';
sevenButton.style.border='none';
secondrowkeys.appendChild(sevenButton);

let eightButton=document.createElement('button');
eightButton.style.backgroundColor='grey';
eightButton.textContent="8";
eightButton.style.marginLeft='05px';
eightButton.style.height='60px'; 
eightButton.style.width='75px';
eightButton.style.fontSize='20px';
eightButton.style.border='none';
secondrowkeys.appendChild(eightButton);

let nineButton=document.createElement('button');
nineButton.style.backgroundColor='grey';
nineButton.textContent="9";
nineButton.style.marginLeft='05px';
nineButton.style.height='60px'; 
nineButton.style.width='75px';
nineButton.style.fontSize='20px';
nineButton.style.border='none';
secondrowkeys.appendChild(nineButton);

let divButton=document.createElement('button');
divButton.style.backgroundColor='grey';
divButton.textContent="/";
divButton.style.marginLeft='05px';
divButton.style.height='60px'; 
divButton.style.width='75px';
divButton.style.fontSize='20px';
divButton.style.border='none';
secondrowkeys.appendChild(divButton);
//--------------------------------------------------------------------------------------
let thirdrowkeys=document.createElement('div');
thirdrowkeys.style.backgroundColor='grey';
thirdrowkeys.style.height='70px';
thirdrowkeys.style.width='330px';
thirdrowkeys.style.padding='05px';
thirdrowkeys.style.marginLeft='08px';
thirdrowkeys.style.marginTop='10px';

let fourButton=document.createElement('Button');
fourButton.style.backgroundColor='grey';
fourButton.textContent="4";
fourButton.style.marginLeft='00px';
fourButton.style.height='60px';
fourButton.style.width='75px'
fourButton.style.fontSize='20px';
fourButton.style.border='none';
thirdrowkeys.appendChild(fourButton);

let fiveButton=document.createElement('button');
fiveButton.style.backgroundColor='grey';
fiveButton.textContent="5";
fiveButton.style.marginLeft='05px';
fiveButton.style.height='60px'; 
fiveButton.style.width='75px';
fiveButton.style.fontSize='20px';
fiveButton.style.border='none';
thirdrowkeys.appendChild(fiveButton);

let sixButton=document.createElement('button');
sixButton.style.backgroundColor='grey';
sixButton.textContent="6";
sixButton.style.marginLeft='05px';
sixButton.style.height='60px'; 
sixButton.style.width='75px';
sixButton.style.fontSize='20px';
sixButton.style.border='none';
thirdrowkeys.appendChild(sixButton);

let subButton=document.createElement('button');
subButton.style.backgroundColor='grey';
subButton.textContent="-";
subButton.style.marginLeft='05px';
subButton.style.height='60px'; 
subButton.style.width='75px';
subButton.style.fontSize='20px';
subButton.style.border='none';
thirdrowkeys.appendChild(subButton);

//-----------------------------------------------------
let fourthrowkeys=document.createElement('div');
fourthrowkeys.style.backgroundColor='grey';
fourthrowkeys.style.height='70px';
fourthrowkeys.style.width='330px';
fourthrowkeys.style.padding='05px';
fourthrowkeys.style.marginLeft='08px';
fourthrowkeys.style.marginTop='10px';

let oneButton=document.createElement('Button');
oneButton.style.backgroundColor='grey';
oneButton.textContent="1";
oneButton.style.marginLeft='00px';
oneButton.style.height='60px';
oneButton.style.width='75px'
oneButton.style.fontSize='20px';
oneButton.style.border='none';
fourthrowkeys.appendChild(oneButton);

let twoButton=document.createElement('button');
twoButton.style.backgroundColor='grey';
twoButton.textContent="2";
twoButton.style.marginLeft='05px';
twoButton.style.height='60px'; 
twoButton.style.width='75px';
twoButton.style.fontSize='20px';
twoButton.style.border='none';
fourthrowkeys.appendChild(twoButton);

let threeButton=document.createElement('button');
threeButton.style.backgroundColor='grey';
threeButton.textContent="3";
threeButton.style.marginLeft='05px';
threeButton.style.height='60px'; 
threeButton.style.width='75px';
threeButton.style.fontSize='20px';
threeButton.style.border='none';
fourthrowkeys.appendChild(threeButton);

let addButton=document.createElement('button');
addButton.style.backgroundColor='grey';
addButton.textContent="+";
addButton.style.marginLeft='05px';
addButton.style.height='60px'; 
addButton.style.width='75px';
addButton.style.fontSize='20px';
addButton.style.border='none';
fourthrowkeys.appendChild(addButton);
//-------------------------------------------------------
let fifthrowkeys=document.createElement('div');
fifthrowkeys.style.backgroundColor='grey';
fifthrowkeys.style.height='70px';
fifthrowkeys.style.width='330px';
fifthrowkeys.style.padding='05px';
fifthrowkeys.style.marginLeft='08px';
fifthrowkeys.style.marginTop='10px';

let zeroButton=document.createElement('Button');
zeroButton.style.backgroundColor='grey';
zeroButton.textContent="0";
zeroButton.style.marginLeft='00px';
zeroButton.style.height='60px';
zeroButton.style.width='75px'
zeroButton.style.fontSize='20px';
zeroButton.style.border='none';
fifthrowkeys.appendChild(zeroButton);

let doublezeroButton=document.createElement('button');
doublezeroButton.style.backgroundColor='grey';
doublezeroButton.textContent="00";
doublezeroButton.style.marginLeft='05px';
doublezeroButton.style.height='60px'; 
doublezeroButton.style.width='75px';
doublezeroButton.style.fontSize='20px';
doublezeroButton.style.border='none';
fifthrowkeys.appendChild(doublezeroButton);

let equalButton=document.createElement('button');
equalButton.style.backgroundColor='blue';
equalButton.textContent="=";
equalButton.style.marginLeft='05px';
equalButton.style.height='60px'; 
equalButton.style.width='160px';
equalButton.style.fontSize='20px';
equalButton.style.border='none';
fifthrowkeys.appendChild(equalButton);


bodyDiv.appendChild(txtAnswer);
bodyDiv.appendChild(firstrowkeys);
bodyDiv.appendChild(secondrowkeys);
bodyDiv.appendChild(thirdrowkeys);
bodyDiv.appendChild(fourthrowkeys);
bodyDiv.appendChild(fifthrowkeys);
document.body.append(bodyDiv);

  txtAnswer.id='txtAnswer';
  backButton.id='backButtonID';
  dotButton.id='dotButtonID';
  multiButton.id='multiButtonID';
  sevenButton.id='sevenButtonID';
  eightButton.id='eightButtonID';
  nineButton.id='nineButtonID';
  divButton.id='divButtonID';
  fourButton.id='fourButtonID';
  fiveButton.id='fiveButtnID';
  sixButton.id='sixButtonID';
  subButton.id='subButtonID';
  oneButton.id='oneButtonID';
  twoButton.id='twoButtonID';
  threeButton.id='threeButtonID';
  addButton.id='addButtonID';
  zeroButton.id='zeroButtonID';
  doublezeroButton.id='doublezeroButtonID';
  equalButton.id='equalButtonID';

  document.getElementById("cancelButton").onclick =function() {clearScreen()}; 
  document.getElementById("backButtonID").onclick =function() {clearScreen()};
  document.getElementById("dotButtonID").onclick =function() {display('.')}; 
  document.getElementById("multiButtonID").onclick =function() {display('*')}; 
  document.getElementById("sevenButtonID").onclick =function() {display('7')}; 
  document.getElementById("eightButtonID").onclick =function() {display('8')};
  document.getElementById("nineButtonID").onclick =function() {display('9')}; 
  document.getElementById("divButtonID").onclick =function() {display('/')}; 
  document.getElementById("fourButtonID").onclick =function() {display('4')};
  document.getElementById("fiveButtnID").onclick =function() {display('5')};
  document.getElementById("sixButtonID").onclick =function() {display('6')};
  document.getElementById("subButtonID").onclick =function() {display('-')};
  document.getElementById("oneButtonID").onclick =function() {display('1')};
  document.getElementById("twoButtonID").onclick =function() {display('2')};
  document.getElementById("threeButtonID").onclick =function() {display('3')};
  document.getElementById("addButtonID").onclick =function() {display('+')};
  document.getElementById("zeroButtonID").onclick =function() {display('0')};
  document.getElementById("doublezeroButtonID").onclick =function() {display('00')};
  document.getElementById("equalButtonID").onclick =function() {calculate()};

  function clearScreen() {
    document.getElementById("txtAnswer").value = "";
}
  function display(value) {
    document.getElementById("txtAnswer").value += value;
    console.log(value);
}

function calculate() {
  var p = document.getElementById("txtAnswer").value;
  var q = eval(p);
  document.getElementById("txtAnswer").value = q;
}
 