class AppStyle {
    constructor(name) {
        this.id = "-1";
        this.name = name;
        this.type = "navbar"
        this.navbar_color = "navbar-dark";
        this.bg_color = "bg-dark";
        this.text_color = "text-light";
        this.code = "";
    }
    render() {
        document.getElementsByTagName("body").classList.add(this.bg_color);
        return true;
    }
    renderBuild() {
        document.getElementsByTagName("body").classList.add(this.bg_color);
        return true;
    }
    propEditable(prop) {
        const editable_props = ["name", "navbar_color", "bg_color", "text_color"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "navbar_color") {
            return ["navbar-light", "navbar-dark"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }

}

function addAppStyle() {
    var nb = new AppStyle("Appy");
    return addComp(nb);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NavBarA {
    constructor(name) {
        this.id = "-1";
        this.name = name;
        this.type = "navbar"
        this.navbar_color = "navbar-dark";
        this.bg_color = "bg-dark";
        this.text_color = "text-light";
        this.code = "";
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code =  `<nav id="${this.id}" class="navbar sticky-top ${this.navbar_color} ${this.bg_color}">
                <div class="container-fluid">
                    <a class="navbar-brand fs-6 mx-auto ${this.text_color}" href="#"> ${this.name} </a> 
                </div>
            </nav>`;
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["name", "navbar_color", "bg_color", "text_color"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "navbar_color") {
            return ["navbar-light", "navbar-dark"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }

}

function addNavBarA() {
    var nb = new NavBarA("Appy");
    addComp(nb);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NavBarB {
    constructor(name) {
        this.id = "-1";
        this.name = name;
        this.type = "navbar"
        this.navbar_color = "navbar-dark";
        this.bg_color = "bg-dark";
        this.text_color = "text-light";
        this.code = "";
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<nav id="${this.id}" class="navbar sticky-top ${this.navbar_color} ${this.bg_color}">
            <div class="container-fluid">
                <a class="navbar-brand fs-6 ${this.text_color}" href="#"> ${this.name} </a>
                <button class="navbar-toggler fs-6 border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar${this.id}">
                    <span>
                        <i class="bi bi-list ${this.text_color}"></i>
                    </span> 
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar${this.id}">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["name", "navbar_color", "bg_color", "text_color"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "navbar_color") {
            return ["navbar-light", "navbar-dark"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }

}

function addNavBarB() {
    var nb = new NavBarB("Appy");
    addComp(nb);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NavBarC {
    constructor(name) {
        this.id = "-1";
        this.name = name;
        this.type = "navbar"
        this.navbar_color = "navbar-dark";
        this.bg_color = "bg-dark";
        this.text_color = "text-light";
        this.img_src = "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg";
        this.code = "<nav id='" + this.id + "'" + "  class='navbar navbar-light bg-light'>" +
            "<div class='container-fluid'>" +
            "<a class='navbar-brand' href='#'>" + this.name + "</a>" +
            "</div>" +
            "</nav>"
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code = `<nav id="${this.id}" class="navbar sticky-top ${this.navbar_color} ${this.bg_color}">
            <div class="container-fluid p-0">
                <button class="navbar-toggler fs-6 border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar${this.id}">
                    <span>
                        <i class="bi bi-list ${this.text_color}"></i>
                    </span> 
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar${this.id}">
                    <ul class="navbar-nav vw-100">
                        <li class="nav-item ms-2">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                        <li class="nav-item ms-2">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                        <li class="nav-item ms-2">
                            <a class="nav-link ${this.text_color}" href="#">Link</a>
                        </li>
                    </ul>
                </div>
                <a class="navbar-brand fs-6 mx-auto ${this.text_color}" href="#"> ${this.name}</a>
                <a class="navbar-brand fs-6" href="#">
                <img src="${this.img_src}" alt="${this.id}" width="30" height="24">
                </a>
            </div>
        </nav>`
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["name", "navbar_color", "bg_color", "text_color", "img_src"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "navbar_color") {
            return ["navbar-light", "navbar-dark"];
        }
        if (prop == "text_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }

}

function addNavBarC() {
    var nb = new NavBarC("Appy");
    addComp(nb);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NavBarSearch {
    constructor(name) {
        this.id = "-1";
        this.name = name;
        this.type = "navbar"
        this.navbar_color = "navbar-dark";
        this.bg_color = "bg-dark";
        this.search_color = "text-light";
        this.img_src = "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg";
        this.code = "";
    }
    render() {
        this.code = this.renderBuild();
        this.code = "<div onclick='editComp(" + this.id + ")'" + this.code + "</div>"
        return this.code;
    }
    renderBuild() {
        this.code =
            `<form class="d-flex w-100 ${this.bg_color}" style="backgroundw-color: red;">
                <nav id="${this.id}"  class="navbar sticky-top ${this.navbar_color} ${this.bg_color}">
                    <div class='container-fluid p-0'>
                        <button class="navbar-toggler fs-6 border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar${this.id}">
                        <span>
                            <i class="bi bi-list ${this.search_color}"></i>
                        </span> 
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar${this.id}">
                            <ul class="navbar-nav vw-100">
                                <li class="ms-2 nav-item">
                                    <a class="nav-link ${this.search_color}" href="#">Link</a>
                                </li>
                                <li class="ms-2 nav-item">
                                    <a class="nav-link ${this.search_color}" href="#">Link</a>
                                </li>
                                <li class="ms-2 nav-item">
                                    <a class="nav-link ${this.search_color}" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <input class="form-control ms-1 me-1 border-0 shadow-none ${this.search_color} ${this.bg_color}" type="search" placeholder="Search" aria-label="Search">
                <button class="btn border-0 shadow-none ${this.bg_color}" type="submit"><i class="bi bi-search ${this.search_color}"></i></button>
            </form>
            </div>`
        return this.code;
    }
    propEditable(prop) {
        const editable_props = ["name", "navbar_color", "bg_color", "search_color", "img_src"];
        return editable_props.includes(prop);
    }
    getPropOptions(prop) {
        if (prop == "bg_color") {
            return ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light", "bg-white", "bg-transparent", "bg-body"];
        }
        if (prop == "navbar_color") {
            return ["navbar-light", "navbar-dark"];
        }
        if (prop == "search_color") {
            return ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark", "text-light", "text-white", "text-transparent", "text-body"];
        }
        return null;
    }

}

function addNavBarSearch() {
    var nb = new NavBarSearch("Appy");
    addComp(nb);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////