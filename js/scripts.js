$("#MaterialsLink, #StepsLink, #TipsLink, #MediaLink").click(function(){
    var idName = $(this).attr('id');
    switch(idName){
        case 'MaterialsLink':
            $("#Materials").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Tips, #Steps, #Media").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        case 'StepsLink':
            $("#Steps").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Tips, #Materials, #Media").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        case 'TipsLink':
            $("#Tips").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Materials, #Steps, #Media").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        case 'MediaLink':
            $("#Media").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "aliceblue"
            });
            $("#Materials, #Steps, #Tips").css({
                      transition: 'background-color 1s ease-in-out',"background-color": "white"
            });
            break;
        default:
            break;
    }
});