let requestUrl = 'https://api.github.com';


$('#form').on('submit',(evt)=>{
    evt.preventDefault();
    let user =$('#user').val();
    let query = `/users/${user}/repos`;
    let url = requestUrl +query;
    console.log(url);


    const returnedPromise = fetch(url);

    returnedPromise.then((resp)=>{
        console.log(resp);
        return resp.json();
    }).then((json)=>{
        render(json);
      
    })
})

function render(data){
    let template ='';

    for(let i =0; i<data.length;i++){
        template += `<div>
        <h2>${data[i].name}</h2>
        <p><a href="${data[i].git_url}" target="_blank">${data[i].git_url}</a></p>
        </div>`

    }
    $(".data").html(template);
}