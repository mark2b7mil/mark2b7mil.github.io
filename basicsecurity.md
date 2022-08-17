---

# Cyber Security Concepts

## Threat:
A threat is a potential occurence that can have negative effects on a system and resources in it

## Vulnerability:
A vulnerability in a system is a characteristic that makes it possible for a threat to come to fruition

## Attack:
An attack is the exploitation of a vulnerability. When a threat comes to fruition it is an attack.

---

## Types of threats:

#### Disclosure: 
Unauthorized access to info. When an entity gains access to data that they are not supposed to access.

#### Deception: 
An authorized entity getting false data, when it's supposed to be true.

#### Disruption: 
The prevention of correct operation of systems and its functions.

#### Usurpation: 
When control of a system is taken by or given to an unauthorized party.

---

## Security Mechanisms:

#### Confidentiality:
Prevention of unauthorized giving out of information.

#### Integrity:
Preventing unauthorized modification of info.

#### Availability:
Ability to withstand withholding of info or resources.

---

## Security Policy:
A statement that delineates the states of a system as authorized and unauthorized states. Secure systems cannot 
enter an unauthorized state.

## Security Mechanisms:
Enforces the security policy, by preventing violation of a part of the policy, detecting when the policy has been 
violated, and recovering info or reverting back to a secure state.

## Trust:
An expectation or assumption within a group of regularly honest cooperative people or elements, based on shared 
norms.

---

## Bell-LaPadula model:
A security policy for preserving the confidentiality of data. It reflects a military hierarchy and their data 
labeling. You label data with a classification label in the hierarchy and you label entities in the organization 
with the access rights that go with the data labels. For example, if a person wants to read a file they can do so 
with a file that is equal or lower to their rank and if they want to write to a file they can write to files equal 
or above their rank. No read up, no write down. Compartmentalization will allow to separate the hierarchy into 
groups. The compartments may be on the same level of classification but you may choose to give people access to 
compartments. Strong tranquility means that the system should not allow for easy changing of clearances. 

## Biba integrity model:
Similar in structure to the BLP model but basically reversed. Each piece of data is labeled with an integrity 
label as is each entity. If you want to write to a document that document should benefit from your integrity 
level, so you can only write to documents on your level or below. You should also only read material that would 
increase integrity, so you would only ready documents that have the same or greater level of integrity.

## Lipner's model:
The model is based on three principles: separation of duty, separation of function, and auditing. Separation of 
duty requires that if two or more steps are required for a critical action then two different people should 
perform those steps. Separation of function means that resources that do different things should be isolated from 
each other. Dev server should hold dev code and production server should host the code for people to access. 
Auditing is analyzing systems to determine what actions took place and who performed the action. 

## Clark_Wilson Integrity Model:
Concerned with formalizing the notion of info integrity. Integrity is maintained by preventing corruption of data. 
The policy describes how the data in the system should be kept valid from one state of the system to the next and 
specifies the capabilities of the various principles. The model defines enforcement and certification rules.

## Chinese wall model:
If a person looks after the interests of a few competing companies then there may be a conflict of interest. The 
chinese wall model says that the person or organization should not maintain types of relationships where important 
information may be leaked to competitors in the same industry.

## Reference Monitor:
Usually a kernel level program that sits between a subject and object and enforces a security policy. A subject is 
usually a user or active process and and object is a passive file, device, etc, like in the English language. 

---

## 4 Security Design Principles:

#### Principle of open design:
Get lots of other people to look at and comment on your design.

#### Principle of sweeping simplifications:
Keep it simple, the less complicated a design is the less likely it is to break. If a design has to be complex 
then layer the design, making sure to keep each layer simple.

#### Principle of design for iteration:
Priorities and goals evolve over time and your designs should reflect that. Structure your designs in a way that 
is easy to understand and adapt in the future.

#### Principle of least astonishment:
Design with the user in mind. The user should be able to understand all error messages and be able to use your 
design with the least amount of thinking involved on their end.

---

## Principles of secure design:

#### Principle of minimizing secrets:
If there must be a secret in your design it should be easily changeable and not hard coded into the design. 

#### Principle of complete mediation:
All access to objects should be checked. Regardless of status in an organization, everyone's access must be 
checked.

#### Principle of fail-safe defaults:
When a system fails, it should close all access to any objects and info associated with that system. 

#### Principle of least privilege:
Privileges should be granted in such a way that each person is only able to perform their duty and not have access 
or power to do anything above that.

#### Principle of economy of mechanism:
The simpler a security mechanism the better. In order to adapt to future threats, security systems that need 
updating will be updated quicker if the mechanism is small and simple

#### Principle of least common mechanism:
Mechanism used to access resources should not be shared. Shared resources can lead to DoS attacks and others. 

---

### Anonymity with TOR:
If your communication online relies on one relay between you and your intended receiver it is easy to figure out 
who you are and the person to whom you're sending messages. TOR solves this problem of anonymity online by setting 
up a network of computers that your message gets passed between before it gets to the intended receiver. It was 
originally developed by the US Naval Research Laboratory, but has been funded by a large number of various 
organizations. With a single relay, even if it anonymizes your data, it is still a single point of failure that 
can be hacked to see what the communication is and who is doing it. It also is just one point of bypass. 
