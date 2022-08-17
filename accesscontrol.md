___

# Access Control

What is access control? After you have authenticated a user on a system, you must control what resources they are able to use, what they are able to see, and what operations they can perform. You must control access to the resources on the system for every user of that system. 

###### Access control serves three main functions:

### Identification: 

The method for establishing a subjects identity, through the use of public information that conforms to id requirements, like user names. Each value should be unique, it should be non-descriptive of a users position or tasks, and the value should not be shared between users.

### Authentication:

The method of proving identity using something the subject is, has or knows. How does a computer, website, or server know the person/entity trying to access resources is who they say they are? Multi user systems necessitate the authentication of users. Authentication falls into three categories, what you have (keys, phone), what you are (biometric data), what you know(passwords, answers to questions). There are drawbacks to each of the three ways of authentication, keys can be stolen, biometric data can be copied though this is not easy, passwords can be stolen or hacked.

##### Authentication with Kerberos:

How is authentication performed on an enterprise network? In a distributed network, Kerberos relies on a trusted key server that provides centralized third party authentication. The access control can be used to give access to each computing resource in the network, either local or remote. Kerberos uses a KDC(key distribution center) which contains a database of principles(customers, services, and encryption keys). There is an authentication server and a ticket generating server. A user requests an initial ticket from the authentication server, the AS sends to a ticket granting server TGS the ticketing info, and returns a ticket generating ticket to the user, the user then contacts the TGS and supplies the TGT, as well as the entity the user wants to use. The TGS responds with a ticket that the entity server recognizes as valid. The TGS needs to be aware of all the resources available on the network or domain. Kerberos protects against imposter attacks, eavesdropping, man in the middle, and replay attacks. But if the KDC is unavailable then users cannt log on and access anything on the server. Since tickets only last a certain amount of time, there may be issues with time sync. 

### Authorization:

A process that determines that the proven identity has some set of characteristics that give it the right to access requested objects. Basically roles or rules.While there are many models that attempt to achieve access control, one thing that is consistent among models is the use of a reference monitor. A reference monitor is a module that sits between a subject and object and dictates what is allowed and not allowed. It verifies the nature of requests and against a table of allowable access types for each process. It must always be used and cannot be bypassed otherwise attackers have an avenue to access resources they shouldn't.There are many models of access control but some of the basic ones are DAC or directionary access control, MAC or mandatory access control, and RBAC or role based access control. 

##### DAC: 

Allows the owner of the resource to specify which subjects can access which resources. At the owners discretion.

##### MAC:

Access is based on a security labeling system. Users get security clearances and resources have security labels that contain data classifications. 

##### RBAC:

Uses a centrally administered set of controls to determine how subjects and objects interact. Subjects can have one or more role in an organization and in each role have a certain list of tasks they need to performs. They are therefore given access to just the resources they need to complete their tasks. Used for organizations with a lot of turnover like businesses. 

---

Content dependent access control is a method for performing access control based on the content of the resource. Certain subjects can be given access to objects based on the content in the object. 

Context based access control is something like allowing access to certain objects during working hours on certain days in the week. 

One way to enforce access control is to limit user interfaces. This can be done through not allowing certain actions, or requesting certain actions through the user interface, possibly a GUI, a database view, or a shel

Access control matrices can be used to control access as well. Each row is a subject and each column is an object and where the rows and columns meet are the rules for access to each object for each subject. But because subjects can also be objects and inter process communication is possible, subjects that can be interacted with by other subjects have to listed as objects as well. Because this matrix can grow very large very quickly we have the concept of an access control list. This is a set of permissions that correspond to an object. Each permission usually specifies a subject and an access right to the object. Below is an example of an ACL for a file on a system:

- acl(File A): {(Alice: write), (Bob: read, execute)}

Anyone that is on the system but is not on the list does not have any rights to the file. You can also use ACL representations for ACM's:

- acl(file 1) = {(proc.1, {r,w,o}) (proc. 2, {a})}
- acl(file 2) = {(proc.1, {r}) (proc. 2, {r,o})}
- acl(proc.1) = {(proc.1,{r,w,x,o}) (proc.2, {r})
- acl(proc.2) = {(proc.1,{w}) (proc.2, {r,w,x,o})

### Capability based access control:

The main question is what can a subject access and how, instead of which subject can access an object. Capabilities are like tickets to a show, in that if you have a ticket you can get in and it doesn't matter who you are, wheras access control lists are like the lists that bouncers have at a club, you have to be on the list to get in. One implication of this difference in how spawning children processes is handled. In an ACL each child inherits the uid of the parent and can only be changed through setuid. You may not need the child process to inherit all of the permissions of the parent. In a capability based system the child just has be passed the proof that allows it's parent to access a certain resource. If a child doesn't need that proof then it is not passed on. So delegation in a capability system is easier but revocation is harder, because it takes a lot to keep track of each proof it provides to each user. This makes the job of a reference monitor difficult, but in an ACL this is easier because revocation is based on identification and if a subject tries to access an object they aren't allowed to anymore than you can stop this easier.The amoeba operating system used capabilities to make access control work on a distributed system. Amoeba was on OS meant to work on a distributed system of machines. You could want to perform an action with an object that was located on a server that could be anywhere. In this case the subject sends a message to the server, containing the proof of capability, the object, and operation to perform. It also checked to make sure the capability could not be modified. Creating a reference monitor is much easier in a capability based system because in between the subject and object the monitor only has to check whether the subject has permission to a specific object and you can make sure the reference monitor is called when access to an object is requested. The request is more or less directed to you and if you have a "ticket" then you are allowed to access. If you have the same userid and that is what is attached to each process then you have a harder time restricting all the paths that lead to an object you shouldn't access.

### MULTICS

Multics, a very early time sharing OS, was designed with the concepts of time sharing in mind. This means that multiple processes were going to be using the machine at the same time so you couldn't make assumptions about one process not being able to access the memory or state of another. Multics was broken down into rings, or domains in which a process executes. Rings are numbered with lower numbers meaning more privilege. The kernels ring is 0 and each process had all the privileges of their ring and the rings above them. Multics also upheld security with the idea of segments, which were data and text areas within a program you could call into. A process could not call into the middle of a segment but at certain restricted access points. This was to make sure that processes did not jump past portions of code that checked for access control. In Multics, each process consisted of multiple segments that were dynamically linked. Processes could have procedures and data segments in multiple rings, and access depended on per-segment access control mechanisms, and concentric rings of protection. The per-segment access control allowed file authors to specify users that had access to it, while the rings of protection forced access to inner rings to through a gatekeeper. 

### UNIX

In unix each user has a user id which is a unique number that is linked to their username. In addition to normal users there are special user accounts that are root (which has a UID of 0 and can access almost everything on the system), deomon or sys which handles important services like networking, and ftp, guest which is used for visitors, and lp which is used for printer systems, and more. Unix also has the concept of groups. Each group has a group id and this is useful for access control systems since all users can be added to groups which makes giving access easier. There are also special groups like the wheel group which are sys admins, uucp, lp, and more. Unix contains a limited set of basic operations for objects that include read, write, and execute. Additionally, the owner of each file can set its permissions. Read and write are self explanatory but execute is more complicated. Execute gives you the authority to run a file on top of the system. If you have a python script you run though you don't really need execute permissions on the python file. The file is run through the interpreter so you only need read access. How is info about a file stored in unix? Permissions are stored as ACL's in a structure called an inode. The inode also stores info such as the user owner, the group owner, the last time it was accessed, last time it was modified, the size of the file, and where on the disk the file sits. There are three categories of subjects in unix, the owner of the file, the group of the file, and everyone else. The permissions for each group can be stored in octal format, such as 0760. This can also be views as letters and dashes like -rwxrw----. The first character represents the type of object, and the next three groups of three characters set the permissions for each group, which are owner of the file, the group of the file, and others, respectively. For a directory, read access means the ability to read any file in the directory, write is the ability to create a file in the directory, and execute is the ability to list the files in the directory or know what is in the directory. What is the set user id? It means that when you go to run that file, you will run it as the root user. This lets programs that need to be run in a privileged way run effectively. What is umask? This sets the default permissions for file creation. 

### Windows (NTFS+)

Windows and Unix are similar in some ways like permissions being implemented as access control lists, that specify permissions based on user and group. Permissions are generally more flexible in Windows. In windows partial admin access can be given, which is different from Unix. In windows subjects are identified using the security id which replaces UID. Access is controlled via ACLs, and they include the security identifier of the entity that owns the object, the regular acl for access permissions, a system acl that is used for auditing, and a group security identifier. Each ACL has an access control entity ACE, which is comprised of permissions such as read (r), write (w), execute (e), delete (d), change access permissions (p), and take ownership (o). There are several types of ACEs. Access-denied ACEs (explicitly deny access rights). Access-allowed ACEs (allow access rights). System audit ACEs, which are used in SACLs to generate an audit record when the trustee attempts to exercise the specific access rights. Access denied ACEs always take precedent.There is the concept of permission inheritance which means that when a child object is created it inherits the permissions of its parent. When a parents permissions are changed then the childs permissions are changed. A unique aspect of windows is the use of tokens. A token can be used to set adopt permissions from another user. It's a more granular version of setuid from Linux. A security descriptor is the info necessary for the authorization of access. It consists of the ACLs associated with an object, as well as ownership information, group information, revision numbers. Basically policies that are enforced by the reference monitor.Tokens are info about who a subject is authenticating for the purpose of access request. The four types of tokens are, anonymous, identification, impersonation, and delegation.Security descriptors are used to figure out who is allowed to do what, and the tokens are used to figure out who is the user acting as. 

### Android

Because android found on phones are single user systems the focus on security is in sandboxing, meaning the apps that are running are given security clearances instead of users and they should not be able to access elements of the system that could do damage. Each app gets its own UID, and communicates with data or resources on the system through a reference monitor and android middleware that translates down to a linux kernel. 

### Web Browsers

As more programs are web based, and there are less standalone programs, understanding how browsers handle security and what differences and similarities they share with traditional operating systems. Web browsers use DOM to allow subjects to interact with different web content. Web browser primitives include the document object model(DOM), frames, and cookies/local storage. Access control is based more on the origin of content. When chrome released it was different in how it treated the rendering engine that renders the images that make up web pages. Since most bugs in browsers are located in the render engine, chrome isolates the renderer from other processes so that if it crashes only the tab crashes instead of the whole browser. Plugins are also run in their own process with full privileges. Chrome also uses capabilities to restrict what the rendering engine process can do, so that it cannot cause damage if it's compromised. Sandboxing in chrome uses 4 OS mechanisms. On windows this is a token with restricted rights, the job object, the desktop object, and integrity levels. The rendering engine adjusts the security token privileges, then runs in a job object that restricts process creation. Since the processes are sandboxed, communication becomes key. Inter frame communication can bring up security issues so CanScript and CanNavigate must be handled appropriately. The ability for one frame to adjust the script of another frame or change it's origin must be handled correctly, and permissions given only when necessary. Chrome was also designed with the assumption that code run in the browser is malicious so that the principle of least privilege is used throughout. 

### Information Flow Control

How can we be sure that when we send out credit card info to an online retailer that it will remain safe. Under info flow control we would tag the information we want to keep secret and then monitor communications coming from said retailer, making sure that our info is not coming from their network and going anywhere else. This is somewhat limited in practice, as it's not really feasible to follow around an entity you've shared info with for the rest of your life. While info flow control is not really used in practice, the concept of tagging info is used in code analysis by tagging information that makes it's way through a program. This is used to identify functions that interact with the information and improve the use and security of the functions.

### Trusted Computing

This is the idea that when you step away from the machine you're using then you know it has some mechanisms to stay safe. This also relates to things like only downloading code from trusted sources. This can become a negative thing if a company develops something that can only be used on certain machines or needs you to buy additional pieces. A positive part of trusted computing is the idea of remote attestation. This is the idea that a trusted computing platform can attest to the integrity of the of the software in the system. 
