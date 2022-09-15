let userF=document.getElementById("n-form");
const revEntries =() => {
    let ent= localStorage.getItem("n-ent");
    if(ent){
        ent=JSON.parse(ent);

    }else{
        ent=[];
    }
    return ent;
}

let ue12 =revEntries();
const dispEntries1 =() =>{
    const e1=revEntries();
    const nte=e1.map((entry) => {
        
        const namen = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailn= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordn= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobn= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsn= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rown= `<tr>${namen} ${emailn} ${passwordn} ${dobn} ${acceptTermsn}</tr>`;
        return rown;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${nte} </table>`;
    let details=document.getElementById("n-ent");
    details.innerHTML = table;
}
const nsaveUserForm = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    ue12.push(entry);
    localStorage.setItem("n-ent",JSON.stringify(ue12));
    dispEntries1();
}
userF.addEventListener("submit",nsaveUserForm);
dispEntries1();


   
        function valdate()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let d1=new Date(dob);
            var td = new Date(); 
            var age=parseInt(td.getFullYear()) - parseInt(d1.getFullYear());
            if (td.getMonth() < d1.getMonth() || (td.getMonth() === d1.getMonth() && td.getDate() < d1.getDate())) age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity("age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

