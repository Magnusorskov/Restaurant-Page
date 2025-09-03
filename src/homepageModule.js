export {createHomepage}
import myVideo from "./videos/8190079-hd_1366_720_30fps.mp4";

const createHomepage = () => {
    const content = document.querySelector("#content");
    content.classList.add('home-active'); // Add our special class
    document.querySelector("#homepage-button").classList.add("selected-button");


    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsInline = true;

   const sourceElement = document.createElement("source");
   sourceElement.id = "video-source";
   sourceElement.src = myVideo;
   sourceElement.type = "video/mp4";
   videoElement.appendChild(sourceElement);
   content.appendChild(videoElement);




    const headline = document.createElement("h1");
    headline.textContent = "We Bake";
    content.appendChild(headline);

    const descriptiveTextContainer = document.createElement("div");
    descriptiveTextContainer.classList.add("home");


    const headlineTwo = document.createElement("h2");
    headlineTwo.textContent = "A Taste of Passion and Purity in Every Bite";
    descriptiveTextContainer.appendChild(headlineTwo);

    const pOne = document.createElement("p");
    pOne.textContent = "Here at our bakery, the magic begins long before the sun graces the sky. It starts with a deep-seated love\n" +
        "            for the timeless art of baking, a passion that guides our hands in every knead, fold, and delicate\n" +
        "            finish.";
    descriptiveTextContainer.appendChild(pOne);

    const pTwo = document.createElement("p");
    pTwo.textContent = "We believe that the finest flavors are born from the purest ingredients, meticulously sourced to ensure\n" +
        "            every loaf of bread, every pastry, and every cake is a true testament to quality. "
    descriptiveTextContainer.appendChild(pTwo);

    const pThree = document.createElement("p");
    pThree.textContent = "\n" +
        "            For us, this is more than a craft;\n" +
        "            it's a heartfelt tradition of bringing joy to our community, one delicious, honest, and lovingly prepared\n" +
        "            creation at a time.";
    descriptiveTextContainer.appendChild(pThree);

    content.appendChild(descriptiveTextContainer);
}
