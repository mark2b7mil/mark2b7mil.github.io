___

Different links on the internet are coax cable, copper wire, optical fiber, and radio waves. Different links transmit at different rates transmission rate of a link is bits/second.Most common packet switches are routers and link-layer switches. Link layer switches are typically used in access networks, while routers are in network core. ISP provide diff types of network access like cable modem/ dsl, high speed lan, and mobile. Lower level or local isps are connected to higher level or national isps which are connected together. Internet can also be described at infrastructure that provides services to apps. Socket interface specifies how one program one one end system can deliver data to a different end system. 



2 most common broadband resi access are dsl and cable, dsl is provided by telco that also provides phone service, telco acts as isp. Modem is used to convert digital data to high frequency tones for trans over telephone wires, these tones are converted back to digital at DSLAM. Data and phone signals are carried simultaneously and encoded at diff rates. Dsl standard trans rates are 24 and 52 mbs, upstream 3.5 and 16 mbs. Cable makes use of cable tv infrastructure, fiber connects from cable head end.CMTS to fiber node that runs coax cable to home. Cable requires special modems. Since cable is shared broadcast many signals travel on the same czble. 2 competign optical distribution network perform this spletting at fiber AON and PON. 5G shoots beams directly to modems instead of cables. Twisted pair copper wire is least expensive, coax are also 2 copper conductors but are concentric rather than parallel. Fiber optic supports high bit rates by using pulses of light. 



If end system is sending a packet of L bits over link with trans rate of R bits/sec then time to trans packet is L/R secs. Packet switches use store and forward meaning the whole packet has to arrive before forwarding. 
D end-to-end = N * L/R



Forwarding tables are used to map IP addresses to destination links. Router determines best path for packet according to dest IP. Internet  has a number of routing protocols that set forwarding tables. Circuit switching uses either FDM or TDM (frequency or time division milutplexing). Fdm divides up frequency spectrum and data flows at different frequencies like radio. Tdm divides linke into time segments, giving each connection a time slot. How long to send 640000 bits from a to b over circuit switched network? If links in network use tdm with 24 slots and bit rate of 1.536mbps. 500 msec to establish end to end circuit. Each circuit has trans rate of 1.536 mbps/24 = 64 kbps so 640000/64 = 10 secs.  



POPs connect customer ISP to provider ISP. At the top are tier 1 isp (12 of them). Any isp except tier 1 may choose. Any isp may multihome or connect with another except tier 1s. IXP re used to smaller isps to communicate directly without having to use the larger isps. Content provider networks like google also peer with lower level isps to avoid the tier 1 isp and bring content closer to consumers. 



Processing delay is the time it takes to examine packet header and decide where to direct packet. Queue delay is when packet gets to router and is waiting to be transmitted on the link, happens after processing delay. Trans delay is how long it takes to relay the data on the link, on 10 mbps ethernet link this delay would be L/R so L/10. Pakcets can only be transmitted after the packets before it are processed, so basically the amount of time it takes to puish data onto the link layer. Propagation delay is how the time it takes for data to move over a link layer or cable from a to b, distance from a to b divided by the prop time. 



A – average rate at which packets arrive at queue. R is trans rate. L is amount of bits. Average rate at which bits arrive at queue is La. La/R is traffic intensity and if its bigger than 1 then pakcets are arriving quicker than they can be pushed out. End to end delay is num of routers x processing delay + trans delay + prop delay. Traceroute allows us to see delays ona netywrok. 5 layers of protocol stack PHYSICAL LINK NETWORK TRANSPORT APPLICATION. 



App layer prots include gttp, smtp, ftp, dns. Trans layer prots include TCP UDP. Network layer prots are IP and routing prots. Link layer passes datagrams up to net layer after delivering datagram to next node along route. Link layer prots include ethernet, wifi, docsis. Physical layer moves bits within frame from one node to next, ethernet has diff phys layer protols for twisted pair, coax, etc. 
