//menuLinks data
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Task 1.0
const mainEl = document.querySelector("main");

//Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

//Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Task 1.3
mainEl.classList.add("flex-ctr");

//Task 2.0
const topMenuEl = document.getElementById("top-menu");

//Task 2.1
topMenuEl.style.height = "100%";

//Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Task 2.3
topMenuEl.classList.add("flex-around");

//Task 3.1
menuLinks.forEach(function(link){
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", link.href);
    linkEl.innerText = link.text;
    topMenuEl.appendChild(linkEl);
    }
); //end of menuLinks forEach

//Task 4.0
const subMenuEl = document.getElementById("sub-menu");

//Task 4.1
subMenuEl.style.height = "100%";

//Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Task 4.3
subMenuEl.classList.add("flex-around");

//Task 4.4
subMenuEl.style.position = "absolute";

//Task 4.5
subMenuEl.style.top = "0";

//Task 5.1
const topMenuLinks = document.querySelectorAll("a");
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener("click", function(event){
    event.preventDefault();
    const selected = event.target;

    if(selected.tagName !== "A") {
        return;
    }
    console.log(selected.innerText); //logs the name of the link 

    // > Task 5.3
    if (selected.classList.contains("active")) {
        selected.classList.remove("active");
        showingSubMenu = false;
        subMenuEl.style.top = "0";
        return;
      }

    // > Task 5.4 
    for (let i = 0; i < topMenuLinks.length; i++) {
        topMenuLinks[i].classList.remove("active");
      }

    // > Task 5.5 
    selected.classList.add("active");

     // > Task 5.6 -> Had to look this one up
    const anchorName = selected.textContent;
    const menuLink = menuLinks.find((link) => {
    return link.text === anchorName; 
    });
    
    if (menuLink === undefined) {
        return;
    }
    
    if (menuLink.subLinks) {
        showingSubMenu = true;
    } else {
        showingSubMenu = false;
    }

  // > Task 5.7 & 5.8 -> Had to look this one up
  const buildSubMenu = (sublinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < sublinks.length; i++) {
      const newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", sublinks[i].href);
      newAnchor.textContent = sublinks[i].text;
      subMenuEl.append(newAnchor);
    }
  };

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  if (anchorName === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  }

    }//end of Event Listener's callback function
); //end of eventListener

// ---------------------------- SUBMENU ---------------------
// > Task 6.0
subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    const selected = event.target;
    if (selected.tagName !== "A") {
      return;
    }
    console.log(selected.textContent);
  
    // > Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  
    // > Task 6.2
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove("active");
    }
  
    // > Task 6.3
    mainEl.innerHTML = `<h1>${selected.textContent}</h1>`;
  });
  


