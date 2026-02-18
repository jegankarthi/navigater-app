
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(){

    
   async function loadPage(){
        console.log(window.location.hash);
        let page      = window.location.hash.replace('#', '');
        const res     = await fetch(page);
        const content = await res.text();
        const element = document.getElementById('content');
        element.innerHTML = content;
    };            

    window.addEventListener('hashchange', loadPage);    
  return(<>
  <a href="#signin.html" class="text-primary">Sign In</a>, 
  <a href="#blog.html" class="text-primary">Blog</a>, 
  <a href="#pricing.html" class="text-primary">Pricing</a> 
  <div id="content"></div>
  </>)
}

