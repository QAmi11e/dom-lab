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
    const linkEl = document.createElement('a');
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
const topMenuLinks = document.querySelectorAll("#topMenu a");
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener("click", function(event){
    event.preventDefault();
    const selected = event.target;
    if(selected.tagName !== "A") return; //a -> A, should"ve read that tagName page a lil more thoroughly smh
    console.log(selected.innerText);
    }//end of function
); //end of eventListener

