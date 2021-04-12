class TextA {
    constructor(name) {
        this.name = name;
        this.type = "text"
        this.id = "-1";
        this.text = "Text";
        this.font_size = "fs-6";
        this.text_color = "text-light";
        this.text_alignment = "text-start";
        this.bg_color = "bg-dark";
        this.border = "border";
        this.border_width = "border-0";
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
        this.code = `<div id="${this.id}" 
                    class="p-0 ps-2 ${this.font_size} ${this.text_alignment} 
                    ${this.border} ${this.border_width} ${this.border_radius} ${this.text_color} ${this.bg_color}
                    ${this.other_class}">
                        <p>${this.text}</p>    
                    </div>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["card_title", "bg_color", "text", "font_size", "text_color", "text_alignment", "border", "border_width", "border_radius", "other_class"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "font_size") {
            return ["fs-1","fs-2","fs-3","fs-4","fs-5","fs-6"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        if (prop == "text_alignment") {
            return ["text-start", "text-center", "text-end"];
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

function addTextA() {
    var x = new TextA("Card");
    addComp(x);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////