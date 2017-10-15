var resp;
var obj;
function consomeService(){
    let ra = $('#ra').val();
    console.log(ra);
    $.post("http://54.232.248.60/services/api_moodle_v1/controllers/serviceapp.php",
    {
        ra: ra
    },
    function(data){
        resp = JSON.stringify(data);
        obj = JSON.parse(resp);
        //console.log(obj);
        let template = `<ul class="list-group">`;
        for(x in obj){
            template += `<li class="list-group-item">${obj[x]["disciplina"]}<span class="badge">${obj[x]["vencimento"]}</span></li>`;
        }
        template += `</ul>`;
        document.getElementById("respostaService").innerHTML = template;
        $('#modalAep').modal('show');
    });
}