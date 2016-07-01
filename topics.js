/**
 * Created by asommer on 01.07.16.
 */
function createMain() {
    var topics = [];
    var topic_links = [];
    var topic_images = [];

    topics[0] = "Warframes";
    topics[1] = "Primary";
    topics[2] = "Secondary";
    topics[3] = "Melee";
    topics[4] = "Sentinels";
    topics[5] = "Kubrows";
    topics[6] = "Archwing";
    topics[7] = "Archgun";
    topics[8] = "Archmelee";

    topic_links[0] = "Equipment/Warframes/warframes.html";
    topic_links[1] = "#";
    topic_links[2] = "#";
    topic_links[3] = "#";
    topic_links[4] = "#";
    topic_links[5] = "#";
    topic_links[6] = "#";
    topic_links[7] = "#";
    topic_links[8] = "#";

    topic_images[0] = "Resources/Images/Main/warframe.jpg";
    topic_images[1] = "Resources/Images/Main/primary.jpg";
    topic_images[2] = "Resources/Images/Main/secondary.jpg";
    topic_images[3] = "Resources/Images/Main/melee.jpg";
    topic_images[4] = "Resources/Images/Main/sentinels.jpg";
    topic_images[5] = "Resources/Images/Main/kubrows.jpg";
    topic_images[6] = "Resources/Images/Main/archwing.jpg";
    topic_images[7] = "Resources/Images/Main/archgun.jpg";
    topic_images[8] = "Resources/Images/Main/archmelee.jpg";

    var wf = document.getElementById('main_topics');
    var len = topics.length;

    for(var i = 0; i < len; i++) {
        var topic_div = document.createElement('div');
        topic_div.className = "col-lg-4 col-md-6";

        var topic_header = document.createElement('h2');
        var topic_header_text = document.createTextNode(topics[i] + "");
        topic_header.appendChild(topic_header_text);

        var topic_link = document.createElement('a');
        topic_link.href = topic_links[i] + "";

        var topic_image = document.createElement('img');
        topic_image.className = "img-rectangle topic-img";
        topic_image.src = topic_images[i] + "";
        topic_image.alt = "Generic placeholder image";
        topic_image.width = 360;
        topic_image.height = 240;

        topic_link.appendChild(topic_image);

        topic_div.appendChild(topic_header);
        topic_div.appendChild(topic_link);
        wf.appendChild(topic_div);
    }
}