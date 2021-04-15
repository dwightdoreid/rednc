// Low Code development
////////////////////////////////////////////////////////////////////////////////////////////////////////
var selected_id = -1;
var comps = [];


// fetch("app.json")
//     .then(res => res.json())
//     .then(res_json => {
//         console.log(res_json.app);
//         comps = res_json.app;

//     });

addAppOptions();
updateApp();
//------------------------------------------------------------------------------------------------------
function addAppOptions() {
    const bg_options = ["bg-dark", "bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-white", "bg-transparent", "bg-body"];

    var app_optns = document.getElementById("app_options");
    var optns = "";
    bg_options.forEach(element => {
        optns = optns + `<option name=${element}>${element}</option>`

    });
    app_optns.innerHTML = `<select name="app_bg_color" id="app_bg_color" onchange="updateApp()">${optns}</select>`;

    // document.getElementById("app_bg_color").addEventListener("onchange", console.log("change"));

}
//------------------------------------------------------------------------------------------------------

function addComp(comp, id = -1) {
    var nid = id;
    if (id == -1) {
        var existing_id = [];
        comps.forEach(element => {
            existing_id.push(element[1].id)
        });
        nid = Math.floor((Math.random() * 1000) + 1);
        while (existing_id.includes(nid)) {
            nid = Math.floor((Math.random() * 1000) + 1);
        }
    }
    comp.id = nid;
    comps.push([nid, comp]);
    updateApp();

    return nid;
}
//------------------------------------------------------------------------------------------------------
function delComp() {
    comps.forEach(element => {
        if (element[1].id == selected_id) {
            console.log(comps.indexOf(element));
            comps.splice(comps.indexOf(element), 1);
        }
    });
    updateApp();
    var rscol = document.getElementById("rscol");
    rscol.innerHTML = " ";
}
//------------------------------------------------------------------------------------------------------
function updateApp() {
    var app = document.getElementById("app");
    var app_bg = document.querySelector("#app_bg_color").value;
    // console.log(app_bg);
    app.classList = "";
    app.classList.add(app_bg);
    app.classList.add("mt-0");
    // app.classList.add("min-vw-100");
    // console.log(app.classList);
    app.innerHTML = " ";
    comps.forEach(element => {
        app.innerHTML = app.innerHTML + element[1].render();
    });
    document.getElementById("mode").innerHTML = "<h5>Dev</h5>"
}
//------------------------------------------------------------------------------------------------------
function listElements() {
    document.getElementById("rscol")
}
//------------------------------------------------------------------------------------------------------
function editComp(cid) {
    selected_id = cid;
    var num_rows = 1;
    var rscol = document.getElementById("rscol");
    rscol.innerHTML = " ";
    rscol.innerHTML = rscol.innerHTML + "id: " + cid + "<br>"
    comps.forEach(element => {
        if (element[1].id == cid) {
            props = Object.getOwnPropertyNames(element[1]);
            props.forEach(subelement => {
                // console.log(element[1].propEditable(subelement))
                if (element[1].propEditable(subelement)) {
                    const eid = element[1].id + "_" + subelement;
                    const prop_options = element[1].getPropOptions(subelement);
                    if (!(element[1].getPropOptions(subelement) === null)) {
                        var optns = "";
                        prop_options.forEach(optn => {
                            optns = optns + "<option value='" + optn + "'>" + optn + "</option>"
                        });
                        rscol.innerHTML = rscol.innerHTML + subelement + "<br>" +
                            "<select id='" + eid +
                            "' type='text'+ onchange=MM('" + element[1].id + "," + subelement + "," + eid + "')>" +
                            optns +
                            "</select>" + "<br>"
                    } else {
                        if (subelement.includes("text")) {
                            num_rows = 10;
                            console.log("text found");
                            rscol.innerHTML = rscol.innerHTML + ` ${subelement} <br>
                            <textarea id="${element[1].id}_${subelement}" 
                            rows=5 onchange=MM('${element[1].id},${subelement},${element[1].id}_${subelement}')></textarea><br>`
                        } else {
                            console.log(typeof (element[1].id));
                            rscol.innerHTML = rscol.innerHTML + ` ${subelement} <br>
                            <input id="${element[1].id}_${subelement}" 
                            type="text" onchange=MM('${element[1].id},${subelement},${element[1].id}_${subelement}')><br>`
                        }
                    }
                }
            })
        };
    });
    updateApp();
}
//------------------------------------------------------------------------------------------------------
function MM(cid_prop) {
    cid = cid_prop.split(",")[0];
    prop = cid_prop.split(",")[1];
    prop_id = cid_prop.split(",")[2];
    // console.log(prop);
    comps.forEach(element => {
        if (element[1].id == cid) {
            props = Object.getOwnPropertyNames(element[1]);
            // console.log(cid_prop.split(",")[2]);
            props.forEach(subelement => {
                if (subelement == prop) {
                    element[1][prop] = document.getElementById(prop_id).value;
                    console.log(prop);
                }
            })
        };
    });
    updateApp();
}
//------------------------------------------------------------------------------------------------------
function genCode() {
    var app = document.getElementById("app");

    app.innerHTML = " ";
    comps.forEach(element => {
        app.innerHTML = app.innerHTML + element[1].renderBuild();
    });

    document.getElementById("mode").innerHTML = "<h5>Preview</h5>"

    console.log(app.innerHTML);

}
//------------------------------------------------------------------------------------------------------
function moveComp(up_down) {
    let numberOfDeletedElm = 1;
    var from = -1;

    comps.forEach(element => {
        if (element[1].id == selected_id) {
            console.log(comps.indexOf(element));
            from = comps.indexOf(element);
        }
    });

    var to = from + up_down;
    if (to < 0) {
        to = 0;
    }

    const comp = comps.splice(from, 1)[0];
    comps.splice(to, 0, comp);
    updateApp();
}