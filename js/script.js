
       
    
 
       
       $(document).ready(function()
        {
            $("#agenttable").on('click','.update',function()
            {
                var currentRow=$(this).closest("tr"); 
                $('#id').val(currentRow.find("td:eq(0)").text());
                $('#name').val(currentRow.find("td:eq(3)").text());
                $('#ville').val(currentRow.find("td:eq(5)").text());
                $('#Adresse').val(currentRow.find("td:eq(6)").text());
                $('#Telephone').val(currentRow.find("td:eq(7)").text());
                $('#Restauran').val(currentRow.find("td:eq(9)").text());
                $('#email').val(currentRow.find("td:eq(4)").text());
        
        
            })
        })
        $(document).ready(function()
        {
            $("#agentHotel").on('click','.update',function()
            {
                var currentRow=$(this).closest("tr"); 
                $('#id').val(currentRow.find("td:eq(0)").text());
                $('#name').val(currentRow.find(".name").text());
                $('#ville').val(currentRow.find(".ville").text());
                $('#Adresse').val(currentRow.find(".adrs").text());
                $('#Telephone').val(currentRow.find(".tele").text());
                $('#Restauran').val(currentRow.find(".rest").text());
                $('#emaill').val(currentRow.find(".email").text());
                $('#Etoile').val(currentRow.find(".etoil").text());
                $('#typ').val(currentRow.find(".Type").text());
        
        
            })
        })



$(document).ready(function()
{
    $("#myTable").on('click','.update',function()
    {
        var currentRow=$(this).closest("tr"); 
        $('#id').val(currentRow.find("td:eq(0)").text());
        $('#name').val(currentRow.find(".nom").text());
        $('#cin').val(currentRow.find(".CIN").text());
        $('#email').val(currentRow.find(".Email").text());
        $('#genre').val(currentRow.find(".Genre").text());
        $('#type').val(currentRow.find(".Type").text());
        $('#password').val(currentRow.find(".password").text());
        $('#phone').val(currentRow.find(".Phone").text());
        $('#adress').val(currentRow.find(".adres").text());
    })
})


document.querySelectorAll('.confirm-submit').forEach(form=>{
    form.addEventListener('submit',(e)=>{
        if(!confirm(e.target.dataset.confirmMsg)){
            e.preventDefault();
        }
    });
})
// document.querySelectorAll('.confirm-submit').forEach(form=>{
//     form.addEventListener('click',(e)=>{
//         if(!confirm(e.target.dataset.confirmMsg)){
//             e.preventDefault();
//         }
//     });
// })



var el = document.getElementById("dashboard");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
el.classList.toggle("toggled");
};

