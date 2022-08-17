___

# Intro to Cryptography

Closed design vs open design for cryptographic security. A good example of closed design is the code machines of WWII. They wee closely guarded secrets thats if stolen would mean exposure of top secret plans. Even with their immense importance they were stolen and their coding algorithms broken. This is in most cases an eventuality for closed design. Secrets of the algorithm will probably leak out one way or another. Open design allows many organizations and individuals to look at the cryptographic algorithms and inspect/ improve it. All you need is a secret key that allows one to encrypt and decrypt info. This key based security can be broken using brute force techniques that take the cypher text and plain text and go through a list of possibilities until the two texts match. This is obviously slow but since computers are always speeding up, what was slow 10 years ago might be much faster now. That is why keeping up to date with guidelines on key sizes is important.

## Symmetric Cryptography/Key:

In this type of cryptography the sender and receiver share the same secret key that is only known to them. Encryption and decryption is done with the same key. There is a technique that takes a message between two people and produces a random key that is the length of the message and then flips the bits of the key using an exclusive or, to the opposite of what they were in the message. This means that you have perfectly masked the message because you can decrypt the message but there are a number of equally possible solutions to the decryption because of the bit flipping. The only thing that gets leaked is the length of the message.

Symmetric keys need to be shared on a secure channel otherwise an adversary may be able to intercept the key and decrypt all messages sent.

A cryptographic system is more than just an encryption algorithm. In symmetric crypto the system is composed of at least 3 algorithms.

A key generation algorithm: KeyGen(L) -> K where L is a security parameter that represents the length of the key.

A decryption algorithm: Dec(K,C) -> M that takes the same key K and a ciphertext C and returns a message M.

#### Types of symmetric encryption:

DES and Triple DES are older algorithms that have been phased out and now AES is the standard. Triple DES applies the DES encryption to each block of text. Ciphertext = Enc(K3, Enc(K2, Enc(K1, plaintext))). When decrpyting you go in the opposite order. If all three keys are independent they form a 168 bit long key which is hard to crack. Other symmetric encryption algos are below:

- IDEA (used in PGP)
- Blowfish (password hashing, which is discussed later, in OpenBSD)
- RC4 (used in WEP), RC5
- Double DES, Triple DES
- SAFER (used in Bluetooth)
- AES (pervasive)


## Asymmetric or Public Key Cryptography:

Every user gets two keys, a public key that is given to anyone that wants to send a message to the user, and a private key that is used by the user to decrypt. The public key encrypts the message and the private key decrypts it. This way the need to share secrets before communication is lessened. 

##### The process of asymmetric cryptography:

- The user and sender connect with an official entity that generated private and public keys
- The sender looks up a public key directory for the recipients public key info
- The sender creates a message, encrypts it with the recipients public key and sends it
- The recipient uses the private key to decrypt the message
- If recipient wants to respond the process reverses

##### Pros of asymmetric cryptography:

Security, hackers need both keys to decrypt a message. Transparency, public keys can be openly distributed and losing them is not a security risk. Key management is much simpler. 

##### Cons:

Slower speed. Losing a private key means that anyone who finds it can read all messages. Lost keys can result in man in the middle attacks too. Losing your private key means you won't be able to decrypt messages sent to you.


Key generation now produces two keys:
- Keygen(L) -> Kpublic, Kprivate

Encryption is updated to include the public key:
- Enc(Kpublic, M) -> C

Decryption:
- Dec(Kprivate, C) -> M

With this method of cryptography you can implement digital signatures and be sure that messages are coming from secure sources. If there is a man in the middle of two people sending messages, they may be able to read a message by having access to a public key but they cannot send under the guise of someone else because the receiver needs the private key to decrypt a message. If a message fails to decrypt you can be sure that someone has altered it or an error has occurred. Types of asymmetric algorithms are below:

- RSA
- DSS and DSA
- ECC
- Diffie-Hellman exchange method
- TLS/SSL protocol

## Cryptographic Hash Functions:

It is an algorithm that takes an arbitrary amount of data input (credential) and produces a fixed size output of enciphered text called a hash value. The enciphered text can be stored instead of the password itself. We want this to be fast to compute but not be reversible. The requirements of crypto hash function are: can be applied to data of any length, output is fixed length, relatively easy to compute h(x) given x, is deterministic with the same x we get same h(x), infeasible to get x given h(x), given x infeasible to get y such that h(x) = h(y), infeasible to find any pair x and y such that h(x) = h(y). While collisions will occur rarely, increasing the size of the hash will result in more secure functions. Types of hash algorithms below:

- MD5 - encodes a string of info and encodes it into a 128-bit fingerprint. Often used as a checksum to verify data integrity. Due to it's age it suffers from hash collision vulnerabilities.
- SHA-2 - consists of six hash functions with hash values that are 224, 256, 384, or 512 bits. 
- CRC32 - error detecting code often used to detect accidental changes to data. Sometimes used to check file integrity.


Since computing a digital signature over a large message can be an expensive process, creating a smaller representation of data using hashng allows to sign the hash instead of the data itself. 

##### Calculate hash:
- h = H(m)
Sign hash with private key:
- S = Enc(Kprivate, h)
Send m and S to recipient who can compute hash of message:
- h = H(m)
Check that signatures match:
- h' = Dec(Kpub, S)
If h' and h are the same then signature is verified.

## Public Key Infrastructure:

How are keys distributed securely? How can we know that a downloaded key really belongs to that person/entity? What if a key is compromised?A digital certificate is a building block of PKI, and is used to prove ownership of the public key. The certificate includes info about the key,info about the identity of the owner, and the digital signature of an entity that has verified the contents. Signing data involves, hashing the data, encrypting the hash using the signers private key, and attaching a certificate. Attaching that to the data results in digitally signed data. Verification involves taking the data and placing it through a hash function, then decrypting the encrypted hash using the signers public key to see if the two hashs match.A certificate authority, or CA, is a trusted organization that gives out digital certificates. It certifies the ownership of a public key. There are many hierarchies for CA's such as one main CA that gives out certificates. PKI may also be a multi-level hierarchy where CA's delegate to other CA's. Some CA's can also cross certify. One CA can also act as a bridge between other CA's. The user can follow a chain of trust to find a trusted CA.There are many components to running PKI smoothly. The CA, the registration authority (RA, which verifies the identity of the user who is trying t get a certificate), the certificate repository and revocation information(which holds info on which certificates are valid).









