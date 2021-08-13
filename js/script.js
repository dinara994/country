const row = document.querySelector('.row')
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        data.forEach((item) => {
            row.innerHTML += `<div class="col-3">
                            <img src="${item.flag}" alt="" class="flag">
                          <p class="title"><b>Country:</b>  ${item.name}</p>
                          <p class="title"><b>NativeName:</b>  ${item.nativeName}</p>
                           <p class="title"><b>Capital:</b>  ${item.capital}</p>
                            <p class="title"><b>Region:</b>  ${item.region}</p>
                            <p class="title"><b>Population:</b>  ${item.population}</p>
                           </div>`
            console.log(data)
        })
    })