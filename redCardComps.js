class CardA {
    constructor(name) {
        this.name = name;
        this.type = "card"
        this.id = "-1";
        this.card_title = this.name;
        this.text = "text";
        this.text_color = "text-light";
        this.bg_color = "bg-dark";
        this.border = "border";
        this.border_width = "border-1";
        this.border_radius = "rounded-0";
        this.other_class = "";
        this.code = "";
        this.editable_props = ["card_title","text", "bg_color", "text_color", "border", "border_width", "border_radius", "other_class"];
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'>" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<div id="${this.id}" 
                    class="card mx-auto
                    ${this.border} ${this.border_width} ${this.border_radius} ${this.text_color} ${this.bg_color} 
                    ${this.other_class}"
                    style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${this.card_title} </h5>
                    <p class="card-text">${this.text}</p>
                    <a href="#" class="btn btn-primary bg-dark">Go somewhere</a>
                </div>
            </div>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = this.editable_props;
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        if (prop == "border") {
            return ["border", "border-top", "border-end", "border-bottom", "border-start", "border-0", "border-top-0", "border-end-0", "border-bottom-0", "border-start-0"];
        }
        if (prop == "border_width") {
            return ["border-0", "border-1", "border-2", "border-3", "border-4", "border-5"];
        }
        if (prop == "border_radius") {
            return ["rounded-0", "rounded-1", "rounded-2", "rounded-3"];
        }
        return null;
    }
    handleClick() {
        console.log("Please enter your name", "Harry Potter");
    }

}

function addCardA() {
    var crd = new CardA("Card");
    return addComp(crd);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CardB {
    constructor(name) {
        this.name = name;
        this.type = "card"
        this.id = "-1";
        this.card_title = this.name;
        this.card_img = "";
        this.text_color = "text-light";
        this.bg_color = "bg-dark";
        this.border = "border";
        this.border_width = "border-1";
        this.border_radius = "rounded-0";
        this.other_class = "";
        this.code = "";
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'>" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<div class="card mx-auto ${this.border} ${this.border_width} ${this.border_radius} ${this.text_color} ${this.bg_color} 
        ${this.other_class}" style="width: 18rem;">
            <img src="${this.card_img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${this.card_title} </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
            </div>
            </div>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["card_title", "card_img", "bg_color", "text_color", "border", "border_width", "border_radius", "other_class"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        if (prop == "border") {
            return ["border", "border-top", "border-end", "border-bottom", "border-start", "border-0", "border-top-0", "border-end-0", "border-bottom-0", "border-start-0"];
        }
        if (prop == "border_width") {
            return ["border-0", "border-1", "border-2", "border-3", "border-4", "border-5"];
        }
        if (prop == "border_radius") {
            return ["rounded-0", "rounded-1", "rounded-2", "rounded-3"];
        }
        return null;
    }
    handleClick() {
        console.log("Please enter your name", "Harry Potter");
    }

}

function addCardB() {
    var crd = new CardB("Card");
    return addComp(crd);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CardC extends CardA{
    constructor(name){
        super(name);
        this.texta_bottom = "texta_bottom";
        this.textb = "text b";
        this.textb_bottom = "textb_bottom";
        this.card_title_a = "card_title_a";
        this.card_title_b = "card_title_b";
        this.card_img = "bi-cloud-moon-fill";        
        this.editable_props.splice(-1,0,"card_img","card_title_a","card_title_b","textb");
    }
    renderBuild() {
        this.code = `<div id="${this.type}_${this.id}" class="card mx-auto ${this.border} ${this.border_width} ${this.border_radius} ${this.text_color} ${this.bg_color} 
        ${this.other_class}" style="width: 18rem;">
                <div class="row g-0">
                    <div class="col-7">
                        <div class="card-body">
                            <p class="card-text"><small>${this.card_title_a}</small></p>
                            <h1 class="card-text" style="font-size:300%">${this.text}</h1>
                            <p class="card-text mt-4"><small class="text-muted">${this.texta_bottom}</small></p>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="card-body">
                        <p class="card-text"><small>${this.card_title_b}</small></p>
                        <h1><i class="bi ${this.card_img}" style="font-size:200%";></i></h1>
                        <h1 class="card-text">${this.textb}</h1>
                        <p class="card-text"><small class="text-muted">${this.textb_bottom}</small></p>
                        </div>
                    </div>
                </div>
            </div>`;
        return this.code;
    }
}

function addCardC() {
    var crd = new CardC("Card");
    return addComp(crd);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////