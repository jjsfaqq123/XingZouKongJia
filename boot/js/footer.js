$(function(){
    $.ajax({
        url:'footer.html',
        type:'get',
        success:function(result){
            // console.log(result)
            $(result).replaceAll('footer')
            $(`<link rel="stylesheet"href="css/footer.css">`).appendTo('head')
        }
    })
})
// export default function getCompanyName(){
//     return 'footer.js';
// }