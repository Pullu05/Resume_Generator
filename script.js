// add button for education
function AddnewEdufield() {
    let newnode1 = document.createElement("textarea");
    newnode1.classList.add("margin_newAddedTextArea");
    newnode1.classList.add("EducationField");
    newnode1.setAttribute('rows', '3');
    newnode1.setAttribute('placeholder', 'Enter your Education Details');

    let pos_before1 = document.getElementById("btn_1");
    let pos = document.getElementById("EduF")

    pos.insertBefore(newnode1, pos_before1);

}

//add buttton for Work experinec
function AddnewExpfield() {
    let newnode2 = document.createElement("textarea");
    newnode2.classList.add("margin_newAddedTextArea");
    newnode2.classList.add("ExperienceField");
    newnode2.setAttribute('rows', '3');
    newnode2.setAttribute('placeholder', 'Enter your Work Experience Details');

    let pos_before = document.getElementById("btn_2");
    let pos = document.getElementById("ExpF")

    pos.insertBefore(newnode2, pos_before);

}

// add button for Project
function AddnewProfield() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("margin_newAddedTextArea");
    newnode.classList.add("ProjectField");
    newnode.setAttribute('rows', '2');
    newnode.setAttribute('placeholder', 'Enter your Project Details');

    let pos_before = document.getElementById("btn_3");
    let pos = document.getElementById("ProF")

    pos.insertBefore(newnode, pos_before);

    let newnode1 = document.createElement("textarea");
    // newnode.classList.add("margin_newAddedTextArea");
    newnode1.classList.add("ProjectField");
    newnode1.setAttribute('rows', '1');
    newnode1.setAttribute('placeholder', 'Enter your Project Link');

    let pos_before1 = document.getElementById("btn_3");
    let pos1 = document.getElementById("ProF")

    pos1.insertBefore(newnode1, pos_before);

}


// add button for Hobbies
function Addnewhobbyfield() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("margin_newAddedTextArea");
    newnode.classList.add("HobbieField");
    newnode.setAttribute('rows', '1');
    newnode.setAttribute('placeholder', 'Enter your Hobby');

    let pos_before = document.getElementById("btn_5");
    let pos = document.getElementById("hobF")

    pos.insertBefore(newnode, pos_before);
}

// add button for Cirtifices and achivements
function AddnewCirtifield() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("margin_newAddedTextArea");
    newnode.classList.add("CirtificatesField");
    newnode.setAttribute('rows', '2');
    newnode.setAttribute('placeholder', 'Enter your Cirtificates & Achievements');

    let pos_before = document.getElementById("btn_6");
    let pos = document.getElementById("cirF")

    pos.insertBefore(newnode, pos_before);
}
// add button for technical skill
function AddnewSkillfield() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("margin_newAddedTextArea");
    newnode.classList.add("SkillField");
    newnode.setAttribute('rows', '1');
    newnode.setAttribute('placeholder', 'Enter your Skills');

    let pos_before = document.getElementById("btn_7");
    let pos = document.getElementById("skF")

    pos.insertBefore(newnode, pos_before);
}
// add button for language
function AddnewLangfield() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("margin_newAddedTextArea");
    newnode.classList.add("LanguagerField");
    newnode.setAttribute('rows', '1');
    newnode.setAttribute('placeholder', 'Languages known');

    let pos_before = document.getElementById("btn_8");
    let pos = document.getElementById("langF")

    pos.insertBefore(newnode, pos_before);
}
// ------------------------------------
function generate() {
    if (document.getElementById("NameField").value == "") {
        alert("Please provide your name!");
        return false;
    }

    // if (document.getElementById("PhoneField").file == "null") {
    //     alert("Please provide your Photo!");
    //     return false;
    // }

    if (document.getElementById("PhoneField").value == "") {
        alert("Please provide your Phone Number!");
        return false;
    }
    if (document.getElementById("PhoneField").value.length !=10 ||document.getElementById("PhoneField").value[0]==0) {
        alert("Enter the Valid Phone Number!");
        return false;
    }
    
    if (document.getElementById("EmailField").value == "") {
        alert("Please provide your Email!");
        return false;
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!document.getElementById("EmailField").value.match(validRegex)) {
        alert("Enter Valid Email Id")
        return false;
    }

    if (document.getElementById("AddressField").value == "") {
        alert("Please provide your Address");
        return false;
    }

    for (i = 0; i < document.getElementsByClassName("HobbieField").length; i++) {
        if (document.getElementsByClassName("HobbieField")[i].value == "") {
            alert("Please provide your Hobbies!");
            return false;
        }
    }
    if (document.getElementById("Glink").value == "") {
        alert("Please provide your Github Link");
        return false;
    }
    if (document.getElementById("Llink").value == "") {
        alert("Please provide your LinkedIn Link");
        return false;
    }
    if (document.getElementById("Flink").value == "") {
        alert("Please provide your FaceBook Link");
        return false;
    }

    for (i = 0; i < document.getElementsByClassName("CirtificatesField").length; i++) {
        if (document.getElementsByClassName("CirtificatesField")[i].value == "") {
            alert("Please provide your Cirtificates & Achievements!");
            return false;
        }
    }

    if (document.getElementById("ObjectiveField").value == "") {
        alert("Please provide your Summary");
        return false;
    }


    for (i = 0; i < document.getElementsByClassName("EducationField").length; i++) {
        if (document.getElementsByClassName("EducationField")[i].value == "") {
            alert("Please provide All your Education");
            return false;
        }
    }
    for (i = 0; i < document.getElementsByClassName("SkillField").length; i++) {
        if (document.getElementsByClassName("SkillField")[i].value == "") {
            alert("Please provide Technical Skills");
            return false;
        }
    }
    for (i = 0; i < document.getElementsByClassName("ExperienceField").length; i++) {
        if (document.getElementsByClassName("ExperienceField")[i].value == "") {
            alert("Please provide Work Experience");
            return false;
        }
    }
    for (i = 0; i < document.getElementsByClassName("ProjectField").length; i++) {
        if (document.getElementsByClassName("ProjectField")[i].value == "") {
            alert("Please provide  details about your Projects");
            return false;
        }
    }
    for (i = 0; i < document.getElementsByClassName("LanguagerField").length; i++) {
        if (document.getElementsByClassName("LanguagerField")[i].value == "") {
            alert("Please provide Languages that you know");
            return false;
        }
    }




    document.getElementById('form_fill').style.display = 'none';
    document.getElementById('template').style.display = 'flex';
    document.getElementById('template').style.flexDirection = "column";
    document.getElementById('download').style.display = 'block';



    document.getElementById('nameT').innerHTML = document.getElementById('NameField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('AddressField').value;
    document.getElementById('phoneT').innerHTML = document.getElementById('PhoneField').value;
    document.getElementById('emailT').innerHTML = document.getElementById('EmailField').value;

    document.getElementById('ObjectiveFieldT').innerHTML = document.getElementById('ObjectiveField').value;

    document.getElementById('GlinkT').href = document.getElementById('Glink').value;
    document.getElementById('LlinkT').href = document.getElementById('Llink').value;
    document.getElementById('FlinkT').href = document.getElementById('Flink').value;

    //for education
    let edu = document.getElementsByClassName("EducationField");
    let str = '';
    for (let e of edu) {
        str += `<li> ${e.value} </li>`
    }
    document.getElementById('EducationFieldT').innerHTML = str;

    //for work experience
    let exp = document.getElementsByClassName("ExperienceField");
    let str1 = '';
    for (let e of exp) {
        str1 += `<li> ${e.value} </li>`
    }
    document.getElementById('ExperienceFieldT').innerHTML = str1;

    // for project
    let pro = document.getElementsByClassName("ProjectField");
    let str2 = '';
    for (i = 0; i < document.getElementsByClassName("ProjectField").length-1; i++) {
        str2 += `<li> ${document.getElementsByClassName("ProjectField")[i].value} |<a href=${document.getElementsByClassName("ProjectField")[++i].value}>Link</a></li>`
    }
    document.getElementById('ProjectT').innerHTML = str2;

    //for hobbies
    let hob = document.getElementsByClassName("HobbieField");
    let str3 = '';
    for (let e of hob) {
        str3 += `<li> ${e.value} </li>`
    }
    document.getElementById('hobT').innerHTML = str3;

    //for language
    let lang = document.getElementsByClassName("LanguagerField");
    let str4 = '';
    for (let e of lang) {
        str4 += `<li> ${e.value} </li>`
    }
    document.getElementById('langT').innerHTML = str4;

    // for technical Skill
    let tech = document.getElementsByClassName("SkillField");
    let str5 = '';
    for (let e of tech) {
        str5 += `<li> ${e.value} </li>`
    }
    document.getElementById('techT').innerHTML = str5;
    // for cirtificate and achivements
    let cir = document.getElementsByClassName("CirtificatesField");
    let str6 = '';
    for (let e of cir) {
        str6 += `<li> ${e.value} </li>`
    }
    document.getElementById('cirT').innerHTML = str6;


    //function for photo

    let file = document.getElementById("PhotoField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    }

}

window.onload = function () {
    document.getElementById("btn_4")
        .addEventListener("click", () => {
            const template = this.document.getElementById("template");
            console.log(template);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
            };
            html2pdf().from(template).set(opt).save();
        })
}

