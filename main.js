(()=>{"use strict";function e(){const t=document.querySelector(".container");for(;t.firstChild;)t.removeChild(t.firstChild);return{mainContainer:t,clearContent:e}}const t=[{name:"Classic Cheeseburger",description:"100% Angus Beef Patty | Cheddar Cheese | Lettuce | Tomatoes | Grilled Onions\r\n$9.99",imageSrc:"./images/Classic Cheeseburger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Heart Attack Burger",description:"100% Angus Beef Patty | Fried Egg | Lettuce | Tomatoes\r\n$10.99",imageSrc:"./images/Heart Attack Burger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Monster Burger",description:"Double 100% Angus Beef Patties | Double Slices of Cheddar Cheese | 4 Slices Crispy Bacon | Secret Sauce\r\n$12.99",imageSrc:"./images/Monster-Burger.jpg",imageAlt:"Monster Burger. Photo Credit Adrian Dorobantu"},{name:"French Fries",description:"Seasoned Shoestring Fries | Dipping Sauce\r\n$4.99",imageSrc:"./images/French Fries.jpg",imageAlt:"French Fries. Photo Credit Pixzolo Photography"},{name:"Onion Rings",description:"Beer Battered Onion Rings\r\n$5.99",imageSrc:"./images/Onion Rings.jpg",imageAlt:"Onion Rings: Photo Credit Ron Lach"}],n=function(){e(),function(){const e=document.querySelector(".container"),n=document.createElement("div");n.classList.add("menu"),t.forEach((function(t){const a=document.createElement("div");a.classList.add("menu-item");const d=document.createElement("div"),c=document.createElement("h3");c.classList.add("item-name"),c.textContent=t.name;const i=document.createElement("p");i.classList.add("item-details"),i.textContent=t.description;const s=document.createElement("img");s.classList.add("menu-img"),s.src=t.imageSrc,s.alt=t.imageAlt,d.appendChild(c),d.appendChild(i),a.appendChild(d),a.appendChild(s),n.appendChild(a),e.appendChild(n)}))}()};function a(){const e=document.querySelector(".container");for(;e.firstChild;)e.removeChild(e.firstChild);return{clearContent:a}}const d=function(){a(),function(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("contacts-container");const n=document.createElement("div"),a=document.createElement("h2");a.classList.add("contact-header"),a.textContent="Location";const d=document.createElement("p");d.classList.add("address"),d.textContent="985 Greystone Street\r\nBurbank, IL 60459",n.appendChild(a),n.appendChild(d),t.appendChild(n);const c=document.createElement("div"),i=document.createElement("h2");i.classList.add("contact-header"),i.textContent="Contact Us";const s=document.createElement("p");s.classList.add("contact-info"),s.textContent="moesburgers@gmail.com\r\n955-555-9555",c.appendChild(i),c.appendChild(s),t.appendChild(c);const o=document.createElement("div"),r=document.createElement("h2");r.classList.add("contact-header"),r.textContent="Business Hours";const m=document.createElement("p");m.classList.add("hours"),m.textContent="Monday | 11am-9pm\r\nTuesday | 11am-9pm\r\nWednesday | 11am-9pm\r\nThursday | 11am-9pm\r\nFriday | 10am-10pm\r\nSaturday | 10am-10pm\r\nSunday | CLOSED",o.appendChild(r),o.appendChild(m),t.appendChild(o),e.appendChild(t)}()};(function(){const e=document.getElementById("content");e.append(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("rest-name"),t.textContent="Moe's Burger Joint";const n=document.createElement("ul");n.classList.add("header-menu");const a=document.createElement("li");a.classList.add("home"),a.classList.add("header-item"),a.textContent="Home";const d=document.createElement("li");d.classList.add("menu"),d.classList.add("header-item"),d.textContent="Menu";const c=document.createElement("li");return c.classList.add("contact"),c.classList.add("header-item"),c.textContent="Contact",n.appendChild(a),n.appendChild(d),n.appendChild(c),e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("img");t.src="./images/burger.svg",t.alt="burger image";const n=document.createElement("div");return n.classList.add("review"),n.textContent="The best burgers in town! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea.",e.appendChild(t),e.appendChild(n),e}())})(),function(){document.querySelector(".home");const e=document.querySelector(".menu"),t=document.querySelector(".contact");e.addEventListener("click",n),t.addEventListener("click",d)}()})();