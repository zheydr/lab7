window.onload = () => {

    // H1
    const h1 = document.createElement("h1")
    h1.innerText = "Lab7 Assignment"
    document.body.appendChild(h1)

    // HR
    const hr = document.createElement("hr");
    document.body.appendChild(hr);

    // H2
    const h2_1 = document.createElement("h2");
    h2_1.innerText = "Task";
    document.body.appendChild(h2_1);

    // P
    const p_1 = document.createElement("p");
    const b_1 = document.createElement("b");
    b_1.innerText = "only";
    const textNode1 = document.createTextNode("In this task you have to reproduce this HTML page as is using ");
    const textNode2 = document.createTextNode(" JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:");
    p_1.appendChild(textNode1);
    p_1.appendChild(b_1);
    p_1.appendChild(textNode2);
    document.body.appendChild(p_1);

    // UL
    const ul_1 = document.createElement("ul");
    const li_1_1 = document.createElement("li");
    li_1_1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
    li_1_1.classList.add("even")
    ul_1.appendChild(li_1_1);
    const li_1_2 = document.createElement("li");
    li_1_2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
    li_1_2.classList.add("odd")
    ul_1.appendChild(li_1_2);
    const li_1_3 = document.createElement("li");
    li_1_3.innerHTML = "change content of the elements (<b>5 points</b>);";
    li_1_3.classList.add("even")
    ul_1.appendChild(li_1_3);
    const li_1_4 = document.createElement("li");
    li_1_4.innerHTML = "change styles of the elements (<b>5 points</b>);";
    li_1_4.classList.add("odd")
    ul_1.appendChild(li_1_4);
    const li_1_5 = document.createElement("li");
    li_1_5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
    li_1_5.classList.add("even")
    ul_1.appendChild(li_1_5);
    const li_1_6 = document.createElement("li");
    li_1_6.innerHTML = "change classes of the elements (<b>5 points</b>).";
    li_1_6.classList.add("odd")
    ul_1.appendChild(li_1_6);
    document.body.appendChild(ul_1);

    // HR
    const hr2 = document.createElement("hr");
    document.body.appendChild(hr2);

    // H2
    const h2_2 = document.createElement("h2");
    h2_2.innerText = "Submission";
    document.body.appendChild(h2_2);

    // P
    const p_2 = document.createElement("p");
    p_2.innerText = "To submit your work, follow these instructions:";
    document.body.appendChild(p_2);

    // UL Loop
    const ul_2 = document.createElement("ul");
    const texts = [
        "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).",
        "Clone this repository to your local machine and work inside it.",
        'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).',
        "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
        'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).',
        "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
        'After you finish your work, submit it to the Github (<b>2 points</b>).'
    ];
    for (let i = 0; i < texts.length; i++) {
        let li_i = document.createElement("li");
        if (i % 2 == 0) {
            li_i.classList.add("even")
        } else {
            li_i.classList.add("odd")
        }
        li_i.innerHTML = texts[i];
        ul_2.appendChild(li_i);
    };
    document.body.appendChild(ul_2);

    // HR
    const hr3 = document.createElement("hr");
    document.body.appendChild(hr3);


    // STYLES
    get_h1 = document.getElementsByTagName("h1")[0];
    get_h1.style.color = "blue";

    get_h2 = document.getElementsByTagName("h2");
    for (let i = 0; i < get_h2.length; i++) {
        get_h2[i].style.color = "red";
    };

    get_even = document.getElementsByClassName("even")
    for (let i = 0; i < get_even.length; i++) {
        get_even[i].style.color = "green";
    };

    get_odd = document.getElementsByClassName("odd")
    for (let i = 0; i < get_odd.length; i++) {
        get_odd[i].style.color = "purple";
    };
}