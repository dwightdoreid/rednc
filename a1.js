document.getElementById("app_bg_color").value = "bg-light";

const nav = new NavBarC;
nav.name = "Weather";
nav.bg_color = "transparent";
nav.text_color = "text-secondary";
addComp(nav);

const card1 = new CardC;
card1.bg_color = "bg-transparent";
card1.text_color = "text-secondary";
card1.border = "border-0";
card1.border_width = "border-1";
card1.card_title_a = "April 12, 2021";
card1.text = "34 &#8451";
card1.texta_bottom = "Feels like 24 &#8451"
card1.card_title_b = "";
card1.textb = "";
card1.textb_bottom = "";

addComp(card1);

// const card2 = new CardA;
// card2.card_title = "Freeze"
// card2.other_class = "mt-3";
// addComp(card2)