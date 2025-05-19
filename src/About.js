import { Creatediv, CreateButton, CreateH1, CreateH2, CreateImg, CreateParagraph } from "./CreateElementModule";
import img from "./asset/resources/ryunosuke-kikuno-5jAfMVcE0Ag-unsplash.jpg";

export const About_page = function() {
    let Context_text;
    const ContentID = document.querySelector("#Content");
    ContentID.innerHTML = ''; // Clear previous content

    Context_text = "About us";
    const AboutUs = CreateH1(ContentID, "About-Us", Context_text);
    const DescriptionDiv = Creatediv(ContentID, "Description");
    const Image = CreateImg(DescriptionDiv);
    Image.src = img;
    const About_History_Section = CreateH2(DescriptionDiv, "About-History-H2");
    const HistoryDescription = Creatediv(DescriptionDiv, "History");
    Context_text = "History of our Restaurant";
    const Heading_History = CreateH2(HistoryDescription, "Heading-History", Context_text);
    Context_text = "The restaurant was founded by a group of young, ambitious chefs who trained in traditional sushi establishments but felt the industry was often too stuffy and pretentious. They wanted to create a space where people could enjoy high-quality sushi without the rigid formality. The name \"Someshit Sushi\" was initially a tongue-in-cheek joke during the early planning stages. It reflected their desire to break away from the perceived \"seriousness\" of fine dining and offer a more relaxed, approachable experience. The name stuck, becoming a memorable and slightly edgy brand identity. Despite the name, the restaurant quickly gained a reputation for its exceptional sushi. The chefs source the freshest ingredients, master traditional techniques, and aren't afraid to experiment with innovative flavor combinations.";
    const History_Paragraph = CreateParagraph(HistoryDescription, "History-paragraph", Context_text);
    const Vibing_style = Creatediv(DescriptionDiv, "Vibing-style");
    Context_text = "The restaurant's interior is a blend of modern minimalism and Japanese design elements. It features clean lines, natural materials, and subtle lighting, creating a sophisticated yet comfortable atmosphere. The open kitchen allows diners to watch the sushi chefs at work, adding an element of visual entertainment. To further enhance the dining experience: Soft, ambient music, carefully curated to complement the restaurant's vibe, plays in the background. The seating arrangement offers a variety of options, including counter seating for solo diners, traditional tables for groups, and cozy booths for more intimate gatherings. Artwork, inspired by Japanese culture and contemporary art, adorns the walls, adding a touch of visual interest.";
    const Vibing_Heading = CreateH2(Vibing_style, "Heading-Vibing", Context_text);
    const Contact_Div = Creatediv(DescriptionDiv, "Contact_Us");
    CreateH2(Contact_Div, "", "Contact Us !");
    CreateParagraph(Contact_Div, "", "Phone: +1 (123) 456-7890");
    CreateParagraph(Contact_Div, "", "flavorfanatic@somesushi.com");
    CreateParagraph(Contact_Div, "", "12 Lucky Cat Alley, Flavor Town, 90210");
};