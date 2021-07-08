

$(() => {
    getAllCountries();
    $("#btnShowData").click(handleClick);
});

async function getAllCountries() {
    const res = await fetch("http://localhost:3000/all");
    
    const jsonRes = await fetch("http://localhost:3000/all");
    console.log(jsonRes);

    updateList(jsonRes.data);
}

function updateList(list) {
    $("#list").empty();


    list.forEach((country) => 
        $("#list").append(
            `
                <li class="card">
                    <p>${country.name} - ${country.capital}</p>
                </li>
            
            `
        )

    );  

}


async function handleClick() {
    const userSearchValue = $("#userSearchValue").val();
    const res = await fetch(`http://localhost:3000/${userSearchValue}`);
    const jsonRes = await res.json();
    console.log(jsonRes);

    updateList(jsonRes.data);
}






