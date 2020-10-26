

function getRepos(){
$('#github-form').on('submit',(evt)=>{
    evt.preventDefault();
    let requestUrl = 'https://api.github.com';
    let user =$('#user').val();
    let query = `/users/${user}/repos`;
    let url = requestUrl +query;
    console.log(url);


    const returnedPromise = fetch(url);

    returnedPromise.then((resp)=>{
        console.log(resp);
        return resp.json();
    }).then((json)=>{
        renderRepos(json);
      
    })
})
}
function renderRepos(data){
    let template ='';

    for(let i =0; i<data.length;i++){
        template += `<div>
        <h2>${data[i].name}</h2>
        <p><a href="${data[i].git_url}" target="_blank">${data[i].git_url}</a></p>
        </div>`

    }
    $(".github-data").html(template);
}


function getGiphys(){
    $('#giphy-form').on('submit',(evt)=>{
        evt.preventDefault();
        let searchTerm = $('#searchTerm').val();        
        const apiKey = 'ec1b2f39ba6e4a8c8bddbd394c2aad48';


        let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;
    
        const returnedPromise = fetch(url);

        returnedPromise.then((resp)=>{
            console.log(resp);
            return resp.json();
        }).then((json)=>{
            console.log(json);
            renderGifs(json.data);
          
        })


})

}

function renderGifs(gifs){
    let template ='';

    for(let i =0; i<gifs.length;i++){
        template += `<div class="gifs">
            <a href="${gifs[i].bitly_url}" target="_blank">
                <img src="${gifs[i].images.original.url}" alt="cool gif"/>
                </a>
        </div>`

    }
    $(".giphy-data").html(template);
}

function main(){
    getRepos();
    getGiphys();
}

$(main);