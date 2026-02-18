import "bootstrap/dist/css/bootstrap.min.css";

export default function App(){
   var routes = {
        '#/signin':  'signin.html',        
        '#/blog':    'blog.html',
        '#/pricing': 'pricing.html',
    };

    function router(){
        // get requested page// 
        var link = window.location.hash;//#/sigin
        // get path (route) for page
        var route = routes[link];
        // if route exists, load page
        if (route) loadPage(route);
    };
 
 async function loadPage(url){
        // load page
        const res     = await fetch(url);
        const content = await res.text();
        const element = document.getElementById('content');
        element.innerHTML = content;
    }

    window.addEventListener('hashchange', router);    
  return (
  <>
  <a href="#/signin" class="text-primary">Sign In   </a>
  <a href="#/blog" class="text-primary">Blog    </a>
  <a href="#/pricing" class="text-primary">Pricing</a> 
  <div id ="content"></div>
  </>)
}


