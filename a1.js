document.getElementById("app_bg_color").value = "bg-light";

const nav = new NavBarA;
nav.name = "Weather";
nav.bg_color = "transparent";
nav.text_color = "text-secondary";


const card1 = new CardC;
card1.bg_color = "bg-transparent";
card1.text_color = "text-secondary";
card1.border = "border-0";
card1.border_width = "border-1";
card1.card_title_a = "April 12, 2021";
card1.text = "-- &#8451";
card1.texta_bottom = "No connection to data source..."
card1.card_title_b = "";
card1.textb = "";
card1.textb_bottom = "";

addComp(nav,1);
addComp(card1,2);