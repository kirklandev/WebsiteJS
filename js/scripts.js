$("#MaterialsLink, #StepsLink, #TipsLink").click(function(){
    var idName = $(this).attr('id');
    switch(idName){
        case 'MaterialsLink':
            $("#Materials").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Tips, #Steps").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        case 'StepsLink':
            $("#Steps").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Tips, #Materials").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        case 'TipsLink':
            $("#Tips").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Materials, #Steps").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        default:
            break;
    }
});