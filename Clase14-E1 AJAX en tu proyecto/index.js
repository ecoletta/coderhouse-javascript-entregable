const BASE_URL = "https://api.giphy.com/v1/gifs";
const TRENDINGYTOKEN = "/trending?api_key=gNayTWnLdmQEa70XL9dwq1fRDr1rHVRd&limit=25&rating=g"

$("#btnData").click(()=>{
    $.ajax({
        url: `${BASE_URL}${TRENDINGYTOKEN}`
    }).done(function(res){
        console.log(res);
        $("#app").html("");

        res.data.forEach(element => {
            $("#app").append(`
            <h3>${element.title}</h3>
            <img src="${element.images.downsized_medium.url}" width="300px">
            `)
        });
    })
})