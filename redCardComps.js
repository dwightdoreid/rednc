class CardA {
    constructor(name) {
        this.name = name;
        this.type = "card"
        this.id = "-1";
        this.card_title = this.name;
        this.text_color = "text-light";
        this.bg_color = "bg-dark";
        this.border = "border";
        this.border_width = "border-1";
        this.border_radius = "rounded-0";
        this.code = "";
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'>" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<div id="${this.id}" 
                    class="card mt-5 mx-auto
                    ${this.border} ${this.border_width} ${this.border_radius} ${this.text_color} ${this.bg_color}"
                    style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${this.card_title} </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    <a href="#" class="btn btn-primary bg-dark">Go somewhere</a>
                </div>
            </div>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["card_title", "bg_color", "text_color", "border", "border_width", "border_radius"];
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
    addComp(crd);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CardB {
    constructor(name) {
        this.name = name;
        this.type = "card"
        this.id = "-1";
        this.card_title = this.name;
        this.text_color = "text-white"
        this.bg_color = "bg-light";
        this.code = "";
    }
    render() {
        this.code = `<div class="card mt-5 mx-auto ${this.text_color}  ${this.bg_color}" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${this.card_title} </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`;
        this.code = "<div onclick='editComp(" + this.id + ")'>" +
            this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<div class="card mt-5 mx-auto ${this.text_color}  ${this.bg_color}" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${this.card_title} </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["card_title", "bg_color", "text_color"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }
    handleClick() {
        console.log("Please enter your name", "Harry Potter");
    }

}

function addCardB() {
    var crd = new CardB("Card");
    addComp(crd);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////