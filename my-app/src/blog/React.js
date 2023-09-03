export default function ReactBlog() {
    return (
        <div className="Blog">
            <div className="Blog-header">
                <p>React BrowserRouter 404 Error</p>
            </div>
            <div className="Blog-body">
                <p>
                    During the development of this site, I ran into this annoying 
                    issue when developing the navigation to various links. I am using 
                    BrowserRouter in <a id="purple" href="https://www.npmjs.com/package/react-router-dom">react-router-dom </a> 
                    for navigating to different pages in my app. Everything 
                    worked fine in my local deployment when I tested my app 
                    at localhost:3000. However, when I deploy my app to the public 
                    site you are visiting with github pages I ran into a bunch of 404 errors when I navigate 
                    to my blog and other links.
                </p>
                <p>
                    I googled this for a few days and I come across a few solutions. 
                    Unfortunately, this issue appears fairly popular.
                    One suggested using HashRouter instead of BrowserRouter. Another 
                    suggested redirecting the 404 page back to index.js or something like that. 
                    And there were a few other solutions that looked so involved that I didn't 
                    bother trying.
                    
                </p>
                <p>
                    So I tried using HashRouter because it seemed as simple as replacing 
                    BrowserRouter with HashRouter. Unfortunately this was unsuccessful. 
                    I still saw 404 errors. 
                    Next I tried to deploy using Netlify instead of 
                    Github pages. This almost seemed easier than fixing the actual issue. 
                    Simply deploy on a different host. Still didn't work...  
                    Just as I was about to give up and ditch React, Github and start 
                    over from scratch I found this. <a id="purple" href="https://github.com/orgs/community/discussions/36010">github discussion</a>
                </p>
                <p>
                    The solution involves changing  &lt;BrowswerRouter/&gt; to 
                    &lt;BrowswerRouter basename=&#123;/$&#123;process.env.PUBLIC_URL&#125;&#125;/&gt;
                </p>
                <p>
                    And changing the path for "/" to "". 
                </p>
                <p>
                    If you are experiencing this issue as well, I hope this helps.
                </p>
            </div>
        </div>
    );
}