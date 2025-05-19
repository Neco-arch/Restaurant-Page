import "./styles.css";
import Imagepath from "./asset/resources/johnny-ho-IRekhZLIy6E-unsplash.jpg";
import { Menu_Page } from "./Menu"; 
import { About_page } from "./About"; 

const Home_Button = document.querySelector("#Home");
const Menu_Button = document.querySelector("#Menu");
const About_Button = document.querySelector("#About");
const Content = document.querySelector("#Content"); 

// Create Elements Modules 
const Creatediv = function(Parent, classname) {
    const Div = document.createElement("div");
    Div.className = classname;
    Parent.appendChild(Div);
    return Div; 
};

const CreateH1 = function(Parent, Classname, Context) {
    const h1 = document.createElement("h1");
    h1.textContent = Context;
    h1.className = Classname;
    Parent.appendChild(h1);
    return h1;
};

const CreateH2 = function(Parent, Classname, Context) {
    const h2 = document.createElement("h2");
    h2.textContent = Context;
    h2.className = Classname;
    Parent.appendChild(h2);
    return h2;
};

const CreateParagraph = function(Parent, className, Context) {
    const p = document.createElement("p");
    p.textContent = Context;
    p.className = className;
    Parent.appendChild(p);
    return p;
};

const CreateImg = function(Parent, src, alt) {
    const Img = document.createElement("img");
    Img.src = src;
    if (alt) {
        Img.alt = alt;
    }
    Parent.appendChild(Img);
    return Img;
};

const CreateButton = function(Parent, Classname, Context) {
    const Button = document.createElement("button");
    Button.className = Classname;
    Button.textContent = Context;
    Parent.appendChild(Button);
    return Button;
};

const clearContent = () => {
    Content.innerHTML = "";
};

const HomePage = function() {

    let Context_text = "Craving some tasty sushi in a relaxed setting? We've got you covered. Expect fresh fish, creative rolls, and friendly faces. It's the perfect spot to kick back with friends and enjoy some seriously good food.";

    const Main_Title_Div = Creatediv(Content, "Main-Title");
    CreateH1(Main_Title_Div, "Titleh1", "The Sushi Place");

    const DescriptionDiv = Creatediv(Content, "Description");
    CreateH2(DescriptionDiv, "Random-Description", Context_text);
    CreateImg(DescriptionDiv, Imagepath, "Sushi Restaurant"); 
    Context_text = "Hear from our customers !";
    CreateH2(DescriptionDiv, "Review_Heading", Context_text);
    const Reviews_Comment_div = Creatediv(DescriptionDiv, "Review-Comments");
    CreateH2(Reviews_Comment_div, "User-review", "SushiFan22");
    Context_text = "Absolutely loved this place! The fish was incredibly fresh, and the presentation was beautiful. I ordered the omakase, and it was a culinary experience I won't soon forget. The service was also top-notch - attentive and friendly. Can't wait to come back!";
    CreateParagraph(Reviews_Comment_div, "Reviews-paragraph", Context_text);
    CreateH2(Reviews_Comment_div, "User-review", "MakiMaster7");
    Context_text = "I went to this sushi place and ordered the spicy tuna roll. It was so spicy, I think I saw my ancestors. But in all seriousness, it was delicious! Just be prepared to sweat a little.";
    CreateParagraph(Reviews_Comment_div, "Reviews-paragraph", Context_text);
    const OpeningHour = Creatediv(DescriptionDiv,"OpeningHourDiv")
    Context_text = "Openning Hours"
    const OpeningHour_Title = CreateH2(OpeningHour,"OpeningHour_Title",Context_text)
    Context_text = "Someshit Sushi is open Monday through Thursday from 12:00 PM to 10:00 PM. On Fridays, we're open a bit later, from 12:00 PM to 11:00 PM. Our weekend hours are Saturday from 5:00 PM to 11:00 PM and Sunday from 5:00 PM to 10:00 PM."
    const OpeningHours_Paragraph = CreateParagraph(OpeningHour,"OpeningHourParagraph",Context_text)
    const PleaseDescription = Creatediv(DescriptionDiv, "Please");
    Context_text = "Want to experience it?";
    CreateH2(PleaseDescription, "", Context_text);
    CreateButton(DescriptionDiv, "Order-now", "Book Now!");
};

document.addEventListener("DOMContentLoaded", () => {
    HomePage()
});

Home_Button.addEventListener("click", (e) => {
    clearContent()
    HomePage();
});

Menu_Button.addEventListener("click", () => {
    clearContent()
    Menu_Page()
});

About_Button.addEventListener("click", () => {
    clearContent()
    About_page()
});