import {Creatediv,CreateButton,CreateH1,CreateH2,CreateImg,CreateParagraph} from "./CreateElementModule";

const menuArray = {
    "Soda" : "2.5$",
    "Iced Tea" : "3.0$",
    "Hot Green Tea" : "2.0$",
    "Edamame" : "4.0$",
    "Miso Soup" : "3.5$",
    "Sunomono" : "4.0$",
    "Agedashi Tofu" : "3.5$",
    "Sake" : "4.5$",
    "Maguro" : "5.5$",
    "Sake Maki" : "6.0$",
    "Spicy Tuna Roll" : "8.0$",
    "California Roll" : "7.0$",
    "Mochi Ice Cream" : "4.5$",
    "Dorayaki" : "5.0$",
    "Green Tea Ice Cream" : "4.0$",
    "Japanese Cheesecake" : "6.5$",
}


export const Menu_Page = function() {
    const Content = document.querySelector("#Content");
    const Page_Tittle = CreateH1(Content,"","Menu from our resturant !");
    const Description = Creatediv(Content,"Description");

    // Templete
    const Menu_Title = CreateH1(Description,"","Menu");
    const Beverages = Creatediv(Description,"Beverages");
    const Beverages_Title = CreateH2(Beverages,"Beverages-titles","Beverages");
    const Beverages_Menu = Creatediv(Beverages,"Beverages-Menu");

    //Beverages-Menu
    CreateParagraph(Beverages_Menu,"Menu","Soda");
    CreateParagraph(Beverages_Menu,"Price","2.5$");
    CreateParagraph(Beverages_Menu,"Menu","Iced Tea");
    CreateParagraph(Beverages_Menu,"Price","3.0$");
    CreateParagraph(Beverages_Menu,"Menu","Hot Green Tea");
    CreateParagraph(Beverages_Menu,"Price","2.0$");
    
    // SideDish
    const SideDish = Creatediv(Description,"Beverages");
    const SideDish_Title = CreateH2(SideDish,"Beverages-titles","Side Dish");
    const SideDish_Menu = Creatediv(SideDish,"Beverages-Menu");

    // SideDish Price Menu
    CreateParagraph(SideDish_Menu,"Menu","Edamame");
    CreateParagraph(SideDish_Menu,"Price","2.5$");
    CreateParagraph(SideDish_Menu,"Menu","Miso Soup");
    CreateParagraph(SideDish_Menu,"Price","3.0$");
    CreateParagraph(SideDish_Menu,"Menu","Sunomono");
    CreateParagraph(SideDish_Menu,"Price","2.0$");    
    CreateParagraph(SideDish_Menu,"Menu","Agedashi Tofu");
    CreateParagraph(SideDish_Menu,"Price","5.5$");


    // Main Dish 
    const MainDish = Creatediv(Description,"Beverages");
    const MainDish_Title = CreateH2(MainDish,"Beverages-titles","Side Dish");
    const MainDish_Menu = Creatediv(MainDish,"Beverages-Menu");
    CreateParagraph(MainDish_Menu,"Menu","Sake");
    CreateParagraph(MainDish_Menu,"Price","4.5$");
    CreateParagraph(MainDish_Menu,"Menu","Maguro");
    CreateParagraph(MainDish_Menu,"Price","5.5$");
    CreateParagraph(MainDish_Menu,"Menu","California Roll");
    CreateParagraph(MainDish_Menu,"Price","7.0$");    
    CreateParagraph(MainDish_Menu,"Menu","Sake Maki");
    CreateParagraph(MainDish_Menu,"Price","6.0$");
    CreateParagraph(MainDish_Menu,"Menu","Spicy Tuna Roll");
    CreateParagraph(MainDish_Menu,"Price","8.0$");

    //Dessert 
    const Dessert = Creatediv(Description,"Beverages");
    const Dessert_Title = CreateH2(Dessert,"Beverages-titles","Side Dish");
    const Dessert_Menu = Creatediv(Dessert,"Beverages-Menu");
    CreateParagraph(Dessert_Menu,"Menu","Maguro");
    CreateParagraph(Dessert_Menu,"Price","5.5$");
    CreateParagraph(Dessert_Menu,"Menu","California Roll");
    CreateParagraph(Dessert_Menu,"Price","7.0$");    
    CreateParagraph(Dessert_Menu,"Menu","Sake Maki");
    CreateParagraph(Dessert_Menu,"Price","6.0$");
    CreateParagraph(Dessert_Menu,"Menu","Spicy Tuna Roll");
    CreateParagraph(Dessert_Menu,"Price","8.0$");



}