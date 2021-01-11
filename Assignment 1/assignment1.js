var sectionNumber = 0;

function addSection() {
    sectionNumber++;

    let section = createSection();
    let header = createSectionHeader();
    let sectionName = createSectionNameInput();
    let addNoteButton = createAddNoteButton();
    let body = createSectionBody();

    header.appendChild(sectionName);
    header.appendChild(addNoteButton);

    section.appendChild(header);
    section.appendChild(body);

    document.getElementById("sectionContainer").appendChild(section);
}

function createSection()  {
    let section = document.createElement("div");
    section.id = "Section-" + sectionNumber;
    section.className = "section";
    return section;
}

function createSectionHeader()  {
    let header = document.createElement("div");
    header.id = "Header-" + sectionNumber;
    header.className = "sectionHeader";
    return header;
}

function createSectionBody()  {
    let body = document.createElement("div");
    body.id = "Body-" + sectionNumber;
    body.className = "sectionBody";
    return body;
}

function createSectionNameInput()  {
    let sectionName = document.createElement("input");
    sectionName.id = "SectionHeaderSectionName-" + sectionNumber;
    sectionName.className = "sectionHeaderSectionName";
    sectionName.placeholder = "Section Name"
    return sectionName;
}

function createAddNoteButton()  {
    let sectionAddNoteButton = document.createElement("button");
    sectionAddNoteButton.id = "SectionHeaderAddNoteButton-" + sectionNumber;
    sectionAddNoteButton.className = "addNoteButton";
    sectionAddNoteButton.innerHTML = "+";
    sectionAddNoteButton.onclick = addNewNote;
    return sectionAddNoteButton;
}

function addNewNote(element) {
    let sectionCount = element.target.id.split("-")[1];
    let sectionBody = document.getElementById("Body-"+sectionCount);
    let newNote = document.createElement("textarea");
    newNote.className = "note";
    sectionBody.appendChild(newNote);
}

function onHit() {
    console.log("hello");
    var ele = document.createElement("p");
    document.body.appendChild(ele);
    ele.innerHTML = "hello world";
    ele.className = 'MyNote';
}
