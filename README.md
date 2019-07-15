# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you type "https://www.techtonic.com"  the  Domain Name Server  matches "www.techtonic.com" to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. Then the browser begins rendering the HTML. Then it displays the requested page on the screen.

## From start to finish, how does data reach you to be rendered in the browser?

First I type an URL into an address bar in my preferred browser. It forms a HTTP request. To reach the host, it first needs an IP number, and  the matching is done by Domain Name Server. Then a socket needs to be opened from the user’s computer to that IP number, on the port specified. When a connection is opened from the user's computer, the HTTP request is sent to the host. The host forwards the request to the server. The server inspects the request and launches the server plugin needed to handle the request.  The plugin gets access to the full request, and starts to prepare a HTTP response. To construct the response, a database is accessed. A database search is made, based on parameters in the path (or data) of the request. Data from the database, together with other information the plugin decides to add, is combined into a long string of text preferably HTML. The plugin combines that data with some meta data (in the form of HTTP headers), and sends the HTTP response back to the browser. The browser receives the response, and parses the HTML  in the response. A DOM tree is built out of the broken HTML. New requests are made to the server for each new resource that is found in the HTML source (typically images, style sheets, and JavaScript files). and it will go back to form the http request and repeat this for each source. Style sheets are parsed, and the rendering information in each gets attached to the matching node in the DOM tree. JavaScript is parsed and executed, and DOM nodes are moved and style information is updated accordingly. The browser renders the page on the screen according to the DOM tree and the style information for each node. Then I see the page on the screen. Got help from http://stackoverflow.com.

## What code is rendered in the browser?

 HTML, JavaScript and CSS codes are rendered in the browser.

## What is the server-side code’s main function?

The server-side code's main function is to validate the data and requests, using databases and retrieve data and send the correct data to the client as required.

## What is the client-side code’s main function?
put your answer here
Client-side code's main function is to enable the web application developers to manipulate the webpage structure, styles and control the behavior of the webpage according to  the individual developer's requirements.     
## What is runtime?

Run time is the time between when the program begins running within the memory until it is terminated or closed by the user or the operating system.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
Instance means a concrete occurrence of any object. If we think of a website as an instance, How many websites we create that many instances will be there on client-side .


## How many instances of the server-side code are available at any given time?

It could be one or many depends upon the number of users interacting  with the application and also depends upon the application architecture.

## How many instances of the databases connected to the server application are created?

It could be one or many depends upon the connections made to the server application.
