const createAboutPage = () => {
    document.querySelector("#about-button").classList.add("selected-button");
    const content = document.querySelector("#content");
    content.classList.add('about-active');

    const h1 = document.createElement("h1");
    h1.textContent = "About us";
    content.appendChild(h1);

    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.classList.add("about-us-container");

    const p1 = document.createElement("p");
    p1.textContent = "\"We Bake\" is more than just our name; it's the heart of everything we do. Our story begins in" +
        " the quiet, early hours of the morning, long before the sun graces the sky over Viby. It starts with a deep-seated love for the timeless art of baking—a passion that you can taste in every loaf, pastry, and cake we create. For us, this is not a job; it's a heartfelt tradition of transforming simple, pure ingredients into moments of warmth and delight.";
    aboutUsContainer.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Our philosophy is built on the belief that the finest flavors are born from the purest sources. We are committed to meticulously sourcing our ingredients, favouring local Danish producers whenever possible. From the organic, stone-ground flour milled here in Jylland to the fresh, seasonal berries from nearby farms, every component is chosen to be a true testament to quality. This dedication to purity is the foundation of the honest, lovingly prepared creations we offer our community each day."
    aboutUsContainer.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "Ultimately, our greatest joy comes from being your neighbourhood bakery. We cherish the role we play in your daily routines, special occasions, and simple moments of comfort. We believe our work is more than a craft; it's a way to connect with and bring happiness to the community we are so proud to be a part of."
    aboutUsContainer.appendChild(p3);

    content.appendChild(aboutUsContainer);
}

export {createAboutPage}