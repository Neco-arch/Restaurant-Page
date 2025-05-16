import "./styles.css";

const Creatediv = function(Parent,classname) {
    const Div = document.createElement("div");
    Div.className = classname;
    Parent.appendChild(Div);
};

const CreateH1 = function(Parent,Classname,Context) {
    const h1 = document.createElement("h1");
    h1.textContent = Context;
    h1.className = Classname;
    Parent.appendChild(h1);
};

const CreateH2 = function(Parent,Classname,Context) {
    const h2 = document.createElement("h2");
    h2.textContent = Context;
    h2.className = Classname;
    Parent.appendChild(h2);
};

const CreateParagraph = function(Parent,className,Context) {
    const p = document.createElement("p");
    p.textContent = Context;
    p.className = className;
    Parent.appendChild(p);
};

const CreateImg = function(Parent,src) {
    const Img = document.createElement("img");
    Img.src = src
    Parent.appendChild(Img)
};

const HomePage = function() {
    let Context_text = "Craving some tasty sushi in a relaxed setting? We've got you covered. Expect fresh fish, creative rolls, and friendly faces. It's the perfect spot to kick back with friends and enjoy some seriously good food.";
    const Content = document.querySelector("#Content");

    // Main Title Part
    Creatediv(Content,".Main-Title");
    const Main_Title_Div = document.querySelector(".Main-Title") ;
    CreateH1(Main_Title_Div,".Titleh1","The Sushi Place");

    // Description Part
    Creatediv(Content,"Description");
    const DescriptionDiv = document.querySelector(".Description");
    CreateH2(DescriptionDiv,".Random-Description",Context_text);
    CreateImg(DescriptionDiv,"asset/resources/johnny-ho-IRekhZLIy6E-unsplash.jpg");
    Context_text = "Hear from our customers !";
    CreateH2(DescriptionDiv,"Review_Heading",Context_text);
};