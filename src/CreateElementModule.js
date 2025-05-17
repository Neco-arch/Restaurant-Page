export const Creatediv = function(Parent,classname) {
    const Div = document.createElement("div");
    Div.className = classname;
    Parent.appendChild(Div);
    return Div;
};

export const CreateH1 = function(Parent,Classname,Context) {
    const h1 = document.createElement("h1");
    h1.textContent = Context;
    h1.className = Classname;
    Parent.appendChild(h1);
    return h1;
};

export const CreateH2 = function(Parent,Classname,Context) {
    const h2 = document.createElement("h2");
    h2.textContent = Context;
    h2.className = Classname;
    Parent.appendChild(h2);
    return h2;
};

export const CreateParagraph = function(Parent,className,Context) {
    const p = document.createElement("p");
    p.textContent = Context;
    p.className = className;
    Parent.appendChild(p);
    return p;
};

export const CreateImg = function(Parent) {
    const Img = document.createElement("img");
    Parent.appendChild(Img);
    return Img;
};

export const CreateButton = function(Parent,Classname,Context) {
    const Button = document.createElement("button");
    Button.className = Classname;
    Button.textContent = Context;
    Parent.appendChild(Button);
    return Button;
};