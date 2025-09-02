export {createHomepage}

const createHomepage = () => {
    const homeDiv = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "We Bake";
    homeDiv.appendChild(headline);

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

    homeDiv.appendChild(descriptiveTextContainer);
}
