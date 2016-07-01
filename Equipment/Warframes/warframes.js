/**
 * Created by asommer on 01.07.16.
 */
function createWarframes() {
    for (var i = 0; i < 10; i++)
    {
        var wf = document.getElementById('warframes');

        var new_warframe = document.createElement('div');
        new_warframe.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";

        var new_warframe_link = document.createElement('a')
        new_warframe_link.href = "#";

        var new_warframe_image = document.createElement('img');
        new_warframe_image.className = "img-rectangle topic-img";
        new_warframe_image.src = "../../Resources/Images/Main/warframe.jpg";
        new_warframe_image.alt = "Generic placeholder image";
        new_warframe_image.width = 240;
        new_warframe_image.height = 160;

        new_warframe_link.appendChild(new_warframe_image);
        new_warframe.appendChild(new_warframe_link);
        wf.appendChild(new_warframe);
    }
}