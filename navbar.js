const template=document.createElement("template");
template.innerHTML=`
    <link rel="stylesheet" href="./index.css">
    

    <nav>
			<div class="logo"><i class="fas fa-dumbbell"></i><span> GYM</span></div>
			<ul>
				<a href="#" class="active"><li>Home</li></a>				
				<a href="#"><li>Classes</li></a>
				<a href="#"><li>Services</li></a>
				<a href="#"><li>Our Team</li></a>
				<a href="#"><li>Pricing</li></a>
				<a href="#"><li>Contact</li></a>
			</ul>			
		</nav>
`


class Navbar extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"});  // Creating a Shadow Dom for my navbar
        shadow.append(template.content.cloneNode(true));
    }
}
customElements.define("nav-bar",Navbar);
