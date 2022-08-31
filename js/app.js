// loadPhones 
const loadPhones = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url)
  const data = await res.json()
  displyPhone(data.data)
}

// displyPhone

const displyPhone = (phones) => {
   
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
     
    phones = phones.slice(0, 9)

    // no message found 
    const noMessage = document.getElementById('no-message-found');
    if(phones.length === 0){
        noMessage.classList.remove('d-none')
    } else{
        noMessage.classList.add('d-none')
    }

    phones.forEach(phone => {
        // distructuring 
        const {phone_name : phoneImage,image} = phone;
        const personDiv = document.createElement('div');
        personDiv.classList.add('col');
        personDiv.innerHTML = `
        <div class="card">
             <div class="p-4">
                <img src=${image} class="card-img-top p-3" alt="...">
             </div>
            <div class="card-body">
                <h5 class="card-title">${phoneImage}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(personDiv)

    })
    toggleSpinner(false)
}

// displybutton search 
document.getElementById('btn-search').addEventListener('click', function() {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    loadPhones(searchText)
})

const toggleSpinner = isloading => {
    const loder = document.getElementById('loder');
    if(isloading){
        loder.classList.remove('d-none');
    }
    else{
        loder.classList.add("d-none")
    }
}

// loadPhones()