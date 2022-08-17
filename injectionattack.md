___

# Injection Attack and Defense

While many attacks against our systems may be novel or unknown, OWASP (Open web application security project) releases a list of the top 10 vulnerabilities every year. The top ten for 2021 are as follow:

- Broken access control
- Cryptographic failures
- Injection
- Insecure design
- Security misconfiguration
- Vulnerable and outdated components
- Identification and authentication failures
- Software and data integrity failures
- Security and data integrity failures
- Security logging and monitoring failures
- Server side request forgery

When you go to a website with your web browser, that site may be controlled by a hacker. You may get there in a few different ways. A hacker may send you info about the site and "legitimately" trick you into visiting the site. Hackers can also embed javascript into ads that appear on legit websites. Your ISP can also embed adds onto the sites you visit and since these ads could be compromised a hacker may get on your machine. There are also less active ways of hacking a user, like eavesdropping on the connections you make with various servers and apps. Browser add-ons can also contain malicious script and download links can contain malware that could be sold as anti-virus software or other legitimate seeming programs.

#### How browsers work and some limitations:

Web browsers work with a policy called the same origin policy which allows scripts contained in a first web page to access data and resources in a second web page if both web pages have the same origin. An origin is a tuple of server, protocol, and port. So if a script wanted to run from the same website but with the http instead of https protocol then it would not run. A limitation of the same origin policy is that if one server is hosting many different sites on the same origin tuple then the sites will be able to interact with one another. The policy also does not apply to library imports. You can have outside scripts run in the frame without conforming to the same origin policy. You can also have image tags that point to internal servers, since image tags do not conform to the same origin policy either. Using this tag technique you can reconfigure someones wireless router through the admin privileges the user behind the router have, just by feeding their browser webpages. You can have the image tags point to where you think the admin interface is listening and based on how quickly it comes back, you can use this timing to do port scanning behind a firewall. 

A browser is a series of frames, basically windows or tabs. Each frame runs HTML and scripts that render or display the page. Scripts can also be used to respond to events, like users clicking on an element, or hovering the mouse over something. Other events may be based on timing, like time out events, or trigger when a page loads. The scripts can end up in a page in many different ways but the most obvious is javascript inside the page. It's also possible for external scripts to be used with the src attribute of a script tag. A website can load another script from its own web server and it can also load from a third party service. JS scripts can also be on a page as an event handler attribute. When you mouse over something and there's some event that pops up, eg. JS can also be the target of a link. 

To achieve some security so that any script cant modify anything it wants, each JS script runs in a sandbox with no direct access to files and restricted access to networks. You can grant additional privileges to scripts but should be done only when necessary. 

#### Cross site scripting:

This happens when a web site accepts input that is later rendered as part of the web page and sent to other users. This is due to poor set-up on the web server that allows for attackers to make an input to be executed as a script when it arrives at a victims browser. The easiest way to do this is to write a script that reflects the input from a input box to a malicious server. As an example, a hacker can input malicious JS code into a search bar and it will render as JS. This code can steal cookies, or key log. The attacker could craft this URL and post it to their website, and if they wanted to steal cookies for a given site they could write a "search term" that contains JS that reads the cookie and sends it to the site they control. Cookies can then be used to impersonate a user. In addition to this "reflected" type of XSS, there is also a stored version. This is where a victim website stores user input and runs it back at other users when the user accesses the site. Besides stealing cookies the attacker can change how a website is rendered and can add bogus fields where they are able to harvest credentials. 

You can prevent this by filtering input to not accept certain words and malicious code. The best way to do this is to let a library filter the code for you. 

#### SQL Injection:

SQL databases technology is used by many organizations for data storage and most times we search on a website we are interacting with an SQL database. Because it stores so much different sensitive information these databases make lucrative targets. To do this basically, when you ask the SQL database to query you ask it to do more than just search. The user will issue a get or post request to the web server, then the server will use input that came along from those requests to access data from the database. An example of an injection is in a username input box you can put in something that the server will believe is a query. Adding a semi colon as the first character in the username login will make the code run after because the database may not recognize that it is in fact user input and not legitimate code. You can even give yourself a remote shell to give yourself the ability to log/remote in later. The input from the attacker goes through the web server, then to the database server after the web server puts it into an sql statement. The database server wont know where the statement from the web server ends and the user input begins. Second order SQL injection is also a way to run malicious code when querying data at later times (after an initial query). So you have to protect not just against initial queries and the sanitization of that input. 

There are a few different ways that sql injection can work. You can log in as another user or as an admin, you can steal information on every user in the database, you can get a shell on the server so you can create an account for the attacker, you can pull data from other databases using the union command, and you can add data to the server or update existing user accounts/info.

Protecting against this is fairly simple, using prepared statements. This will disambiguate what are safe commands and what should be strings. You can also use input validation, allow listing (allowing only a well defined set of safe values), escaping quotes (preventing the attacker code being part of the query by putting an escape character before it), and object relational mappings. 

#### Cross Site Request Forgery:

An attack that forces an end user to execute unwanted actions on a web app that they're currently authenticated in. If E wants to write to F but cannot, E can use a service S that can write to F by tricking S to write what E wants to F. This is called the confused deputy problem, and it is the browser in this case. The basic idea is that you would establish a session with a victim server, something like your bank, and then in a separate tab you visit a malicious site. The malicious site then sends JS code to your browser that forces the browser to send a forged request to the victim server (the bank). The bank doesn't have a way to determine that the request didn't come from you so it complies. 

Ways to defend against this type of attack are CSRF validation tokens, referrer validation, and custom HTTP headers. The token defense works by providing the user with a new random secret value every time there is an opportunity to perform an action. When the user submits the form or request, they must also submit the token. If they do not then the request is assumed forged. Referrer validation verifies the origin of the request with standard headers. The two steps involved in this step are to verify the HTTP request header value of the origin and destination of the form or request. Custom HTTP headers are added to the HTTP packet that is sent back with all requests. 

#### The Update Framework (TUF):

One of the best ways to ensure you are not vulnerable to attack is to keep all software up to date. How do you know your updates are safe and are not infected with malicious binaries? TUF assumes that the update server will be compromised at some point, and focuses on containing the compromise to a short period of time. It's not realistic to think that you can defend against all attacks against a code repository. You can defend against man in the middle attacks by using TLS and SSL but when the code is at rest, a hacker can and at some point probably will gain access to the keys that are used to sign the updates. Even if you use offline crypto systems such as GPG or RSA to make these keys, which theoretically means attackers cannot tamper with updates without being detected, the update servers and updates are at risk. 

Updates require an update repository but what is this repository? It is a place with data and meta data are stored and edited. The data can be a package which is the smallest unit of an update and contains a software app or library. The meta data is used to protect the packages and can include hashes, file sizes, version numbers, and signatures. The people that interact with repositories are developers (push packages and metadata to the repos), admins (keep the repo running), and users (download updates). 

TUF mitigates damage with separation of duty, selective delegation of trust, threshold signatures, explicit and implicit revocation of keys, and minimizing risk of long-term compromise by using offline keys. TUF is broken down into the target role, snapshot role, the timestamp role, and the root role. Each role provides a different security guarantee to the system. Targets (indicates metadata), Snapshot (indicates which packages have been released a the same time), Timestamp (indicates whether these is any new metadata), Root(serves as a certificate authority for the repo. Distributes and revokes public keys used to verify the root, timestamp, snapshot, and targets metadata. 

#### Buffer Overflow:

An attack were a user injects malicious code into a program already running on the machine. It occurs when a buffer (a fixed-length portion of memory used to store user input), is smaller than the user input being provided. An attacker can know where a certain function lives on the stack then using the buffer overflow technique they can return into a function you don't want them to use. You can possibly jump into a function that should only run if a correct password has been input. There are techniques in buffer overflow where you can put your code in the buffer that you want to overflow, and then return into that code when the buffer overflows. A way to mitigate this is to mark the stack as non-executable so that this portion of potentially malicious code is treated as data and not instructions. This is known as NX bit or DEP. This only works for the above overflow technique, but when code runs lots of libraries are also loaded, which means that attackers have lots of opportunities to jump the code into. 

To protect against buffer overflow is to write code that checks for input size, or use canary values which are values placed into the stack and if they are overwritten then the program crashes. The canary is placed after the return address which means that the buffer has been overflowed, and is checked before the return is made. Sometimes attackers can read out the canary in which case this would not work. ASLR is also used to make it harder for attackers to know where they are jumping into memory. Address space layout randomization moves things around randomly in memory, so attackers cannot know where anything is. 

There are also heap overflow attacks, where data overflows the allocated memory on the heap. Format strings like %s can print a string that is supplied to the function. The variable given to the format string can be larger than the allowable characters in the format string, in which case you have a buffer overflow. You can also overflow and underflow integers if you try to represent a number that is too big for the machine. If this happens the value ends up being negative, which is not the plan. It forces the program to write outside of the bounds of the message. 