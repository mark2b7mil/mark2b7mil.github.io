___

App architecture takes 2 forms client server or p2p. in client server there is an always on host/server that services requests from other hosts, clients do not communicate directly with one another, server has a fixed known IP address. Web, FTP, Telnet, Email are examples. Data centers are used if one host is not enough to service all requests, creating large virtual server, in p2p there is no central server, hosts owned by users directly communicate with one another. Example is bit torrent. For each pair of communicating processes across network there is a client and server, even on p2p. 



A process send massage and receives from network though a software interface called a socket. Socket is the interface between app layer and transport layer. Also known as API. Webs app layer protocol is HTTP, if web browser dev follows HTTP rules then app can retrieve pages from any web server that also follows HTTP rules. Http defines format and seq of messages exchanged betweek browser and web server. World wide web is first hugely popular web app. http uses tcp as underlying transport protocol. http server maintains not info about clients and is know as stateless protocol. 



Apps can use persistent or non persistent connections  with tcp remaining open or closed. http request message takes the form: request line: method url version  header fields: header field name value  blank line entity body: if post methog is used. Http response message has 3 section: status line header lines, entity body
Open protocols are HTTP, SMTP. Proprietary are skype, zoom.



Web pages consist of objects and each object like image or html file can be on different web servers URL www.school.edu is host name and path name is /dept/pic.gif
Non persistent connections increase RTT times and delay. HTTP request messages: POST, when web page include input, user input send from client. GET, for sending data to server, include user data in url. HEAD request headers only that would be returned if specified url were requested. PUT uploads new file to server. 



HTTP response status codes: 200 OK, request succeeded, 301 Moved permanently: requested object moved. 400 Bad Request: requesting msg not understood, 404 Not Found: requested doc not on this server, 505 HTTP version not supported
All http requests are independent of each other, no need to recover from partially completed transaction. In stateful protocol client makes 2 changes to x or none. State is maintained through cookies, when first request is made to site the site creates unique ID or cookie and entered into backend database, all next requests from client with contain cookie id that matches server. 



Web caches are used to satisfy client requests withough involving origin server, user configures browser to paint to a local web cache. Cache reduces response time for client request and reduces traffic on access link. Installing web cache can replace getting a new faster access link with reduces cost
HTTP1.1 introduces multiple pipelined gets and single tcp connection server responds in oder first come first served. Large objects can block smaller objects which is called HOL blocking. HTTP/2 increased flexibility at server for sending objects, transmission based on client specified object priority, pushes unrequested objects to client. Divide objects into frames and schedule frames to reduce HOL bloking. Loss still stalls all object trans. HTTP/3 adds ecurity per object error and congestion control. 



Email: major components of email are user agents, mail servers, SMTP. User agent is mail reader like outlook, messages stored on server. Mail server: mailbox containing incoming messages for user and outgoing message queue. SMTP is protocol between mail servers to send mail messages. Uses TCP. 3 phases, SMTP handshake, transfer, closure. Commands-: ascii text, response: status code and phrase. 
A send message to B:: a uses agent to compose message to b, a user agent send message to mail server using SMTP and message placed in queue, client side of SMTP at mail sevrer opens tcp connection with b mail server. Smtp Client a send message over tcp connection, b mail server places message in b mailbox, b reads message using user agent



Comparing smtp to http. http:client push, smtp: client push, both have ascii command response, interaction, status codes. http: each object encapsulated in its own response message SMTP: multiple objects sent in multi part message SMTP: uses persistent connections, requires message hease and body to be in 7-bit ascii, uses CRLF CRLF to determine end of mess
Smtp protocol for exchange of email- header lines: to, from, subject. Body: ascii chars only. IMAP internet mail access protocol. Provides retrieval deletion, foilders of stored messages. http: gmail, Hotmail, provides web interface on top of SMTP IMAP or POP to receive. 



DNS is used to map between ip and url or more memorable names. It’s a distributed database implemented in a hierarchy of name servers as an ap layer protol hosts and DNS servers communicate to resolve names. Complexity at network edge. DNS services: hostname to IP translation, host aliasing(canonical and alias names) mail server aliasing, load distribution(many ip addresses correspond to one name in replaicated web server) 
from top to bottom: Root dns servers, .com DNS .org DNS etc (top level domains), yahoo.com DNS etc (authoritative domains)
if client wants ip for amazon.com: client queries root server to find .com dns server, client queries .com dns server to get amazon.com server, client queries am,azon.com dns server to get ip for www.amazon.com... Root name servers: official last resposrt contact by name server that cannot resolve name. 13 worldwide and each server replicated many times
DNS SEC provides security like auth and message integrity, ICANN internet corp for assigned names and numbers) manages root DNS TLD servers: responsible for .com, .edu,
Authoritative: orgs own DNS server providing authoritative hostname to ip mappings. Local dns name server is first contacted and if request is in cache the request doesn’t have to go through the whole dns system. Recursive query: contact root, which contacts tld, which cotnacts auth. Iterated query: contacted sevrer replies with name of server to contact. 



DNS: distributed database storing resource records(RR) RR format: name, value, type, ttl) type A: name is hostname, value is IP, type NS, name is domain(foo.com) value is hostname of authoritative server. Type = CNAME: name is name for canonical or realname, www.ibm.com is really serve at east.blah.blah, value is canonical name. type MX: value is name of SMTP mail server associated with name. DNS protocol messages, query and reply both have same format. Header has id which is 16 bit # for query. reply to query uses same id, header also has flags that gives additional setup info. Getting info into dns is done through dns registrar. Provide name ip of auth name sevrer, registrar inserts NS, RR’s into .com or other tld server



P2p: server sequentially send n fole copies (uploads) F/U. client: each client downloads file copy F/Dmin. Dc-s >= max{N*F/Us, F/Dmin}
Video streaming and CDN: to decrease number of bits flowing you can code so that that redundancy in image is reduced ( spatial) and video (temporal). CBR contant biut rate mpeg1, VBR variable bit rate mpeg4. Streaming- client side plays start of video when server is still sending later parts, playout timings must match original timings, because of network delays varioability you need client side buffer to match continuous playout constraint. DASH- streaming multimedia, dynimaic adaptive streaming over http. Servber divides video fgile into multiple chunks encoded at diff rates, dif rates are stored in dif files, files replicated in various cdn nodes. Manifest file provides urls  for various chunks. Client periodically estimates server to client bandwidth consults manifest and requests 1 chunk at a time according to coding rate for current bandwidth. Client determines when to request chunk so buffer starvation or overflow doesn’t occur. Streaming = encoding + Dash + playout buffering. CDN store multiple copies of vids at multiple geo distributed sites (content distribution nnodes) enter deep: push cdn servers deep into many access networks (akamai: 240000 serves in many countries, close to user) Bring home: smaller number of large clusters in POPs near access nets
