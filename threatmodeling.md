___

# Threat Modeling

The process of threat modeling begins with understanding the system you are trying to protect, including the assets 
that need protection. Then we try to predict who the adversaries to the organization are, and what techniques they 
may use to compromise the system. We then determine the risk of the assets. Security techniques are then put in 
place according to the risk assessment. 

How do you systematically go through a system and identify the various threats? One way is to use the STRIDE model. 

## STRIDE:

### Spoofing: 
Using someone else's credentials to gain access to previously inaccessible assets.
### Tampering: 
Changing data to help mount an attack.
### Repudiation: 
When a bad actor does something malicious and denies involvement in the attack. The system has no way to track the 
actor or prove the action occured. 
### Information disclosure: 
When a user is disclosed info they are not supposed to see.
### Denial of service: 
Reducing ability of valid user to access info
### Elevation of privilege: 
When unprivileged used gains access to privileged status. 


A method for ranking each threat is the DREAD model. Each category is scored 1-3 and then the numbers are added up 
to get a ranking from 5-15 with 12-15 being high risk, 8-11 s medium, and 5-7 as low.

## DREAD:

- Damage potential
- Reproducibility
- Exploitability cost (how easy is it to perform the attack)
- Affected users
- Discoverability


### Attack Trees:
Attack trees are used to think through and present potential attacks that realize a threat. It helps to visualize 
how likely, costly and in what way attacks may occur. In addition to having boolean operators to add information, 
you can add cost, likelihood of each technique, and other information.

### Risk Management:
Risk assessment is the process of identifying assets at risk, measuring potential losses, and determining 
probability of a negative event occurring. Managing the risk is a process for planning to control the risk.

Risk = probability x consequence

Risk assessment can be done in 2 ways, qualitative and quantitative. Quantitative involves computing the expected 
lost money when assets are effected. The qualitative approach involves assessing an event with a high, medium, and 
low probability and impact. Based on that we can assess an event as having low to high risk. Based on the risk 
assessment you can one of the four steps to manage the risk. Accept the risk, if the risk is low enough. Transfer 
the risk to someone else, via insurance, warnings. Remove the risk, remove the component or feature that is at 
risk. Mitigate the risk with countermeasures. 

### MITRE ATT&CK:
Describes what tool and tactics and practices are employed by attackers to get into enterprise networks

## Cyber Kill Chain:
The steps an attacker takes to make an attack real. 

#### Reconnaissance:
Selecting targets and doing research on them. Email addresses, social relationships, softwares.
#### Weaponization:
When the attacker couple a program with an exploit to create a deliverable payload.
#### Delivery:
Transmitting the payload to the targeted environment, can occur through many ways.
#### Exploitation:
The payload triggers on the targeted environment and runs the malicious code.
#### Installation:
The code installs methods for continued access, through remote access trojans or backdoors. Allows persistent 
control of the machine.
#### Command and Control:
The compromised host establish a channel with other attacker machines to take orders from command machines.
#### Actions on Objectives:
The attacker leverages a successful hack and control of machines to perform malicious actions.








