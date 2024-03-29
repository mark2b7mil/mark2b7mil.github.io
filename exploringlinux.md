___

# Exploring Linux

Everything in Linux is a file. It uses a tree like hierarchy file system. General files are typical files like audio, image, text, etc. Directory files are a warehouse for other file types, like folders in Windows. System files in Linux are in directories, not on drives, e.g. device files live in the dev directory. Naming is case sensitive. The command line only says something if something goes wrong.

There are three user types of users in Linux:
1. Regular - denoted by $ on the command line. Has limited privileges. 
2. Default user. Cannot access other user files.Root - denoted by # on the command line. Has admin privileges and can access restricted files. Can install software. "Super user"
3. Service - only visible in server editions of Ubuntu. Having service accounts for various services increases security.

## Ownership: 
There are three types of owners in Linux. The first is a user, which is the owner of a file. The second is a group, this can contain multiple users and all users in the group have the same permissions. Other is any other user who has access to a file but not an owner. How do you designate between owners so Linux gives proper permissions to users? Every file has three types of permissions, read, write and, execute.
1. Read allows user to view/display file 
2. Write allows user to change file
3. Execute allows user to run the file

- r = read permission
- w = write perm
- x = execute perm 
- \- = no perm
- d = directory

The first letter designates file or directory. Next three letters designate permissions for the owner. Next three letters designate permissions for the user group. Last letters are for the world permissions.There are two ways to change permissions on a file, absolute and symbolic. Absolute uses numbers 0-7 to represent each combo of permissions.

- 0 = ---
- 1 = --x
- 2 = -w-
- 3 = -wx
- 4 = r--
- 5 = r-x
- 6 = rw-
- 7 = rwx

chmod 764 file1 is example of how to change permissions absolutely.Symbolic mode changes permissions for specific owners.
- \+  adds a permission to a file
- \-  removes permission
- =   sets the permission and overrides previous permissions

Users are denoted:
- u = user/owner
- g = group
- o = other
- a = all

chmod o=rwx file1   adds all permissions for the other users
chmod u-r file1   takes away read perm from owner
sudo chown root file1   changes owner of file1 to be root
sudo chown mark:mark file1   changes owner and user group to mark
sudo chgrp mark file1   changes user group to root2 groups cannot own the same file. 

etc/groups file shows all the groups on your system.‍To install a program in linux you must install any necessary components unlike windows in which the whole install comes in an executable file.Input and output on Linux is flexible. You can redirect both.

ls -al > listing  this redirects the output of ls -al to a new file called listing. If the file exists then > would override but >> would append. < redirects input.

Every file has an FD (file director) associated with it. 
- FD0 is standard input
- FD1 is standard output
- FD2 is standard error

telnet localhost 2> errorfile   = directs error messages from telnet localhost to a file called errorfile. This type of error redirection helps with cleaning up the cli and not showing every error message

ls file > dirlist 2>& err   = >& writes output from one file to input of another so the error output is redirected to standard ouput which in turn is directed to the file dirlist.‍

\| denotes a pipe and allows you to run 2 commands at the same time. This helps to create powerful commands.
cat file \| less   = reads the file and starts you at the top instead of the bottom
cat file1 \| grep ABC   = reds the file and looks for any occurrences of ABC
command1 \| command2   = filtered output from command1 goes to command2‍

Regular expressions are special characters that search data and check patterns in strings.

- cat listings \| grep ^a = matches lines that start with a
- cat listings \| grep a$ = matches lines that end with a
- grep -E m\{2} = shows lines where there is an occurence of 2 m's in a row
- grep "a\+t" = filters lines where a preceeds t

{} brace expressions allow for expanded expressions like {1..11} results in 1 to 10. 

Environment variables basically hold a value, be it a string or number, just a piece of information in the linux environmentecho 
- $PATH = displays the variable PATH which contains a colon separated list of directories in which your system looks for executable filesecho 
- $HOME = gives path of users home direcho 
- $VAR = displays all environment vars

Creating a new variable
- NEWVAR=val123
Deleting a variable 
- unset NEWVAR
Setting value of environment variable
- export Variable=value‍

Communication in linux is fairly simple through the cli

## PING 
The ping command checks the status of connection to the server. It analyzes network and host connections, and tracks network performance. It tries to send a packet every second to whatever ip address you specify and returns information like how long it took to ping the address and how much packet loss there was. An example would be ping www.google.com

## FTP
Used to log in and establish a connection with a remote host. You can upload and download files, and navigate through directories. 
ftp <ip address>
ftp passive ignores firewalls and port errors
put file1 = uploads file1 on remote comp
get file1 = downloads or transfers from the remote computer
quit = logs out from computer

## TELNET
Connects to a remote linux comp. You can run programs remotely and conduct admin work. It's similar to remote desktop on windows
telnet <ip address>

## SSH
Allows you to securely connect to a remote computer. It's safer than telnet because the client-server connection is authenticated and passwords are encrypted.
SSH username@ip-address
exit logs out of SSH
hostname -I prints ip address‍

## Managing processes:
Any command you give to your linux machine starts a new process. There are two types of processes, foreground and background. A text editor and antivirus are examples, respectively. To start a process in the background you start the program normally, press ctrl+z, then type bg. fg brings a process back to the foreground.
top = displays all running processes.
  
- pid - process id of each task
- user - username of task owner
- pr - priority
- ni - nice value
- res - physical memory used
- shr - shared memory used
- s - status
- d = uninteruptible sleep, r = running, s = sleeping, t = traces or stopped, z = zombie, i = idle
- %mem - physical memory used
- time+ = total cpu time
- command = command name

ps = snapshot of process status (ps ux)
pidof <name> = checks the pid of program name
ps PID = checks status of PID
kill PID = kills the process, you have to know the number of the pid‍
  
Niceness is priority in linux. It goes from -20 to 19 and lower niceness is higher priority. Default is 0.
- nice -n 2 firefox = starts firefix with a priority of 2
- sudo renice 5 -p PID = you need the pid to change niceness value of the process‍

## VI editor:
It's a specifically linux file editor that exists on basically every linux distro. The editor opens in command mode and ionly understands commands. Moves the cursor, cuts, copies, and saves changes. Insert mode allows you to insert text and you must press 'i' to get into the mode. ESC to save changes in insert mode. 'o' opens a new line. 'a' writes after the cursor. shift zz or :wq saves and quits. :w is for saving and :q is for quitting.‍
  
## Shell scripting:
The kernel makes communication between hardware abd siftware possible. The shell is the outermost layer of the kernel and is accessed from the terminal. Shell scripting allows users to write a series of commands to combine command and reduce time and effort.
Creating a shell script:
1. create a file with a text editor like vi
2. name script file with extension .sh
3. start the script with #!/bin/sh
4. write some code
5. save the file, making sure its in the form filename.sh
6. execute the script with bash filename.sh

Perl creates programs, can handle database management and emails, gui dev, and network and sys admin. The benefit of programming with perl is that it doesnt casue portability issues like shell scripting can.
$name = "Mark"; = defines a variable name as equal to Mark
Print("wow"); = output$username = <STDIN>; = input
#to comment a lineThe process to create a perl script is the same as the shell script but you have to save the file with the extension .pl. You have to run it with perl filename.pl‍
  
## Virtual terminals:
Allows multiple users to work on the same machine, but you cannot use the mouse on a virtual terminal. ctrl+alt+f2...f6 starts any virtual terminal. f1 is the normal terminal, at least with ubuntu on a virtual machine. ctrl+a move cursor to start of current line, ctrl+e move cursor to end of current line, tab autocomplete commands, ctrl+u erase current line, ctrl+w delete word before cursor, reset resets terminal, history lists of executed commands, ctrl+d logout, ctrl+alt+del reboot.‍
  
## Admin stuff:
sudo adduser guest = creates a user called guest
Deleting a user involves two commands:
- sudo passwd -l guest
- sudo userdel -r guest
Adding a user a user group:
- sudo usermod -a -G GROUPNAME USERNAME
Removing a user from a user group:
- sudo deluser USER GROUPNAME
Installing GUI group adder:
- sudo apt-get install gnome-system-tools
finger = command is used to get user info on the machine
finger mark = gets user info of user mark
  
## Commands:
- CTRL + ALT + T = opens terminal
- echo = display a line of text
- pwd = present working directory, prints files and directories
- cd = change directory, write directory path after cd to travel to directory "cd directory1/directory2"
- cd .. = moves up one directory
- cd / = moves to root directory
- cd ~ = moves to user home directory, can also just type cd
- ls = lists all files are directories in current directory
- ls -R = shows all files and directories in sub directories
- ls -a = shows hidden files
- ls -al = shows hidden files along with extra info for each file
- cat = can be used for displaying, copying, combining, and creating text files
- cat > file1 = creates a file called file1 and waits for you to input text into the file. CTRL + D to return to command line
- cat file1 = prints file1
- cat file1 file2 > newfile = combines file1 and file2 into one new file called newfile
- rm = removes files
- rm file1 = deletes file1 file
- mv = moves files and directories. Needs super user permission
- sudo = allows regular user to have security privilege of root user, asks for password authentication. Logs user command history. Password is retained for 15 minutes per terminal.
- sudo mv file1 home/user/files = moves file1 to files directory
- mv file1 newfile1 = renames file1 to newfile1
- mkdir newdirec = creates new directory called newdirec in current directory
- mkdir tmp/newdirec = creates newdirec in temp directory
- mkdir dir1 dir2 dir3 = creates the three directories as shown
- rmdir dir1 = removes dir1 directory, make sure there is no file in dir1
- man = manual, opens manual on any command you type after the man command
- history = shows commands used in the past, can press up to run through previous commands
- clear = cleans the terminal
- chmod = changes file permissions.
- chown = changes owner
- chgrp = changes user group
- groups = shows all groups you are a part of
- newgrp = allows you to work as a member of a different group. newgrp cdrom allows you to work and create files from cdrom group
- pr = print, helps to format the file as well
- pr -3 file1 = prints contents of file1 in 3 columns
- pr -h HEADER file1 = prints file1 with HEADER as header
- pr -n file1 = prints line numbers for file1
- lp = prints to printer or device, submits files
- lp -n3 file1 = sends 3 copies of file1 to print
- sudo apt-get install SoftwareName = installs software
- mailx = email, need to install mailutils
- \> = redirects output and overwrites if file exists
- \>\> = appends output to end of file
- \< = redirects input2
- \> = redirects error messages
- \>& = writes output from one file to input of another
- grep = can scan a document, and can present it how you tell it to
- grep -v = shows all lines that do not match search string
- grep -c = displays only count of matching lines
- grep -n = shows matching line and its number
- grep -i = match both cases
- grep -l = shows just the name of the file with the string
- sort = sorts the file
- sort -r = reverse sort
- sort -n = sorts numerically
- sort -f = case sensitive sorting
- . = replaces any character
- ^ = matches start of string
- $ = matches end of string
- \+ = matches one or more occurrence of previous character
- ? = matches zero or one occurrence of previous character
- {n} = matches preceding character appearing n times exactly
- {n,m} = matches preceding character not more than m times
- {n, } = matches preceding character only when it appears n times or more
- uname = checks system information like kernel version
- df = reports free disk space
- df -h = makes df more readable
- free -m = shows free and used memory
- rdesktop -u (user) -p (password) (ip):(port) = remote desktop with login info and ip and oprt info on end
