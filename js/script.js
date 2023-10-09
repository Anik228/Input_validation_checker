let taskList = document.querySelector('ul');

taskList.addEventListener('click',show);

const validate = (data,option) => {

    if(option==='Email'){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(data);

    console.log(option);

    return regex.test(data);

    }

    else if(option==='Contract Number'){

        const regex = /^(?:\+?88)?01[3-9]\d{8}$/;
        return regex.test(data);
    }

    else if(option==='Postal Code'){

        const regex = /^\d{4}$/;
        return regex.test(data);
    }

    
    
}


function show(e){

    if (e.target.hasAttribute("href")) {

        

        let option=e.target.parentElement.textContent;

     

        if(option==='Email'){
            
            let formdiv=document.querySelector('.form');

            formdiv.innerHTML='';

            let form=document.createElement('form');

            form.className='book-form';

            let newdiv1 = document.createElement('div');

            newdiv1.innerHTML=`<label for="title">Check Email</label><br><br>
            <input type="email" id="title" class="u-full-width"> <br><br>
            `;

            let newdiv2=document.createElement('div');

            form.appendChild(newdiv1);

            formdiv.appendChild(form);

            newdiv2.innerHTML=`<input type="submit" value="Submit" class="u-full-width">`;

            form.appendChild(newdiv2);

            let formMain=document.querySelector('.book-form');

            formMain.addEventListener('submit',(event) => 
            {
                console.log("anik");
                let email=document.querySelector('#title');

                if (validate(email.value,option)) {
                    
                    alert("Valid email address")
                } 
                else {
                   
                    alert("Invalid email address")
                }
                
               
            })

        }


       else if(option==='Contract Number'){
            

            let formdiv=document.querySelector('.form');
            
            formdiv.innerHTML='';

            let form=document.createElement('form');

            form.className='book-form';

            let newdiv1 = document.createElement('div');

            newdiv1.innerHTML=`<label for="title">Check Contract Number</label><br><br>
            <input type="number" id="title" class="u-full-width"><br><br>
            `;

            let newdiv2=document.createElement('div');

            form.appendChild(newdiv1);

            formdiv.appendChild(form);

            newdiv2.innerHTML=`<input type="submit" value="Submit" class="u-full-width">`;

            form.appendChild(newdiv2);

            let formMain=document.querySelector('.book-form');

            formMain.addEventListener('submit',(event) => 
            {
                console.log("anik")

                let number=document.querySelector('#title');

                if (validate(number.value,option)) {
                    
                    alert("Valid Contract number")
                } 
                else {
                   
                    alert("Invalid Contract number")
                }


                //console.log(number.value);
            })


        }


        
       else if(option==='Postal Code'){
            

        let formdiv=document.querySelector('.form');
        
        formdiv.innerHTML='';

        let form=document.createElement('form');

        form.className='book-form';

        let newdiv1 = document.createElement('div');

        newdiv1.innerHTML=`<label for="title">Check Postal Code</label><br><br>

        <input type="number" id="title" class="u-full-width"><br><br>
        `;

        let newdiv2=document.createElement('div');

        form.appendChild(newdiv1);

        formdiv.appendChild(form);

        newdiv2.innerHTML=`<input type="submit" value="Submit" class="u-full-width">`;

        form.appendChild(newdiv2);

        let formMain=document.querySelector('.book-form');

        formMain.addEventListener('submit',(event) => 
        {
            

            let postal=document.querySelector('#title');

            
            if (validate(postal.value,option)) {
                    
                alert("Valid postal code number")
            } 
            else {
               
                alert("Invalid postal code number")
            }
            
            //console.log(postal.value);
        })

    }
    }
}