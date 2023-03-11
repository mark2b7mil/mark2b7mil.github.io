___

"What are some of the possible services that a link-layer protocol can offer to the network layer? "
Framing: there is also framing in IP and TCP; link access; reliable delivery: there is also reliable delivery in TCP; flow control: there is also flow control in TCP; error
detection: there is also error detection in IP and TCP; error correction; full duplex: TCP is also full duplex.
slotted ALOHA is only partially decentralized, since it requires the clocks in all nodes to be synchronized.



"In CSMA/CD, after the fifth collision, what is the probability that a node chooses " After the 5th collision, the adapter chooses from {0, 1, 2,..., 31}. The probability that it chooses 4 is 1/32. It waits 204.8 microseconds.



"Why would the token-ring protocol be inefficient if a LAN had a very large perimeter?" When a node transmits a frame, the node has to wait for the frame to propagate around the entire ring before the node can release the token. Thus, if L/R is small as compared to tprop, then the protocol will be inefficient.



248 MAC addresses; 232 IPv4 addresses; 2128 IPv6 addresses.
ARP query is sent in a broadcast frame because the querying host does not which adapter address corresponds to the IP address in question. For the response, the sending node knows the adapter address to which the response should be sent, so there is no need to send a broadcast frame
In 802.1Q there is a 12- bit VLAN identifier. Thus 212 = 4,096 VLANs can be supported.
Where in a router does "match plus action" happen to determine the appropriate output port to which the arriving datagram should be directed? At the input port where a packet arrives.



principal components of the IPv4 protocol: IPv4 datagram format. IPv4 addressing conventions. Packet handling conventions at routers (e.g., segmentation/reassembly)
statements about a DHCP request message: The transaction ID in a DHCP request message will be used to associate this message with future DHCP messages sent from, or to, this client. A DHCP request message is sent broadcast, using the 255.255.255.255 IP destination address. A DHCP request message may contain the IP address that the client will use.



fields occur ONLY in the IPv6 datagram header  The flow label field. 128-bit source and destination IP addresses.
purpose of the Dynamic Host Configuration Protocol: To obtain an IP address for a host attaching to an IP network.
Packet Matching fields for Open Flow: Src MAC, Dst MAC, Eth type, vlan id, vlan pri, ip src, ip dst, ip proto, ip tos, tcp/udp source port, dst port
fields in the frame/datagram/segment/application-layer message can be matched in OpenFlow 1.0: IP type-of-service field, IP destination address, Upper layer protocol field, Source and/or destination port number, IP source address.



network devices can be thought of as a "middlebox": HTTP cache, Network Address Translation box, HTTP load balancer.
"end-to-end principle"  The end-to-end argument allows that some redundant functionality might be placed both in-network and at the network edge in order to enhance performance. The end-to-end argument advocates placing functionality at the network edge because some functionality cannot be completely and correctly implemented in the network, and so needs to be placed at the edge in any case, making in-network implementation redundant.



Dijkstra’s link-state routing algorithm that is computing a least-cost path from node a to other nodes b, c, d, e,  f. : In the initialization step, the initial cost from a to each of these destinations is initialized to either the cost of a link directly connecting a to a direct neighbor, or infinity otherwise. Suppose nodes b, c, and d are in the set N’.  These nodes will remain in N’ for the rest of the algorithm, since the least-cost paths from a to b, c, and d are known. The values computed in the vector D(v), the currently known least cost of a path from a to any node v, will never increase following an iteration.



following statements about the OSPF protocol that are true: OSPF is an intra-domain routing protocol. OSPF implements hierarchical routing OSFP uses a Dijkstra-like algorithm to implement least cost path routing.
characteristics are associated with OSPF: Is an intra-domain routing protocol. Finds a least cost path from source to destination. Floods link state control information.
EBGP stands for External Border Gateway Protocol. IBGP stands for Internal Border Gateway Protocol.



Components of SDN controller: interface, asbtractions for network control apps ( network graph, restful API, intent) network wide distributed, robust state management ( statistics, flow tables, link state info, host info, switch info ), communiucation to and from controlled devices (open flow, snmp)
Which of the statements below about ICMP are true? The TTL-expired message type in ICMP is used by the traceroute program. ICMP is used by hosts and routers to communicate network-level information. ICMP messages are carried directly in IP datagrams rather than as payload in UDP or TCP segments. "ICMP messages are carried as IP payload"



"ICMP messages are carried as IP payload": CLI, SNMP/MIB, NETCONF/YANG "YANG [RFC 6020] is a data modeling language used to model configuration and operational data. The NETCONF protocol [RFC 6241] is used to communicate YANG-compatible actions and data to/from/among remote devices. "
Simple Network Management Protocol is application-layer protocol used to convey network-management control and information messages between a managing server and an agent executing. The most common usage of SNMP is in a request-response mode in which an SNMP managing server sends a request to an SNMP agent, who receives the request, performs some action, and sends a reply to the request. A second common usage of SNMP is for an agent to send an unsolicited message, known as a trap message, to a managing server."



following services may be implemented in a link-layer protocol: Multiplexing down from / multiplexing up to a network-layer protocol. Bit-level error detection and correction. Flow control between directly connected nodes. Reliable data transfer between directly connected nodes. Coordinated access to a shared physical medium.



true about a two-dimensional parity check: 2D-parity can detect any case of a single bit flip in the payload. 2D-parity can detect and correct any case of a single bit flip in the payload. 2D-parity can detect any case of two bit flips in the payload.
true about channel partitioning protocols: Channel partitioning protocols can achieve 100% channel utilization, in the case that all nodes always have frames to send. There can be times when the channel is idle, when a node has a frame to send, but is prevented from doing so by the medium access protocol.



Slotted ALOHA: "All frames consist of exactly L bits. Time is divided into slots of size L/R seconds (that is, a slot equals the time to transmit one frame). Nodes start to transmit frames only at the beginnings of slots. The nodes are synchronized so that each node knows when the slots begin.If two or more frames collide in a slot, then all the nodes detect the collision event before the slot ends."
"When the node has a fresh frame to send, it waits until the beginning of the next slot and transmits the entire frame in the slot. If there isn’t a collision, the node has successfully transmitted its frame and thus need not consider retransmitting the frame. (The node can prepare a new frame for transmission, if it has one.) If there is a collision, the node detects the collision before the end of the slot. The node retransmits its frame in each subsequent slot with probability p until the frame is transmitted without a collision."



true about both Pure Aloha, and CSMA (both with and without collision detection?  Pure Aloha and CSMA can achieve 100% utilization, in the case that there is only one node that always has frames to send There can be simultaneous transmissions resulting in collisions.
"In pure ALOHA, when a frame first arrives (that is, a network-layer datagram is passed down from the network layer at the sending node), the node immediately transmits the frame in its entirety into the broadcast channel. If a transmitted frame experiences a collision with one or more other transmissions, the node will then immediately (after completely transmitting its collided frame) retransmit the frame with probability p. Otherwise, the node waits for a frame transmission time. After this wait, it then transmits the frame with probability p, or waits (remaining idle) for another frame time".



Carrier sense multiple access CSMA/CD listens on the medium and if it detects activity then it waits to transmit and if it detects activity while it is transmitting then it abdnons the frame. It waits a random amount of time to transmit again.
"binary exponential backoff algorithm, used in Ethernet as well as in DOCSIS cable network multiple access protocols [DOCSIS 3.1 2014], elegantly solves this problem. Specifically, when transmitting a frame that has already experienced n collisions, a node chooses the value of K at random from "
true about polling and token-passing protocols. These protocol can achieve close 100% utilization, in the case that there is only one node that always has frames to send  (the fact that the utilization is close to, but not exactly, 100% is due to a small amount of medium access overhead but not due to collisions) . These protocol can achieve close to 100% channel utilization, in the case that all nodes always have frames to send  (the fact that the utilization is close to, but not exactly, 100% is due to a small amount of medium access overhead but not due to collisions)



Which of these protocols requires some form of centralized control to mediate channel access: Polling. TDMA and FDMA
maximum channel utilization 1 (or very close to 1): polling, tdma and fdma
maximum amount of time that a node knows that it will have to wait until it can successfully gain access to the channel: polling, fdma and tdma



"CRC codes Consider the d-bit piece of data, D, that the sending node wants to send to the receiving node. The sender and receiver must first agree on an  r+1 "bit pattern, known as a generator, which we will denote as G. We will require that the most significant (leftmost) bit of G be a 1
Subnet A has 39 hosts, so it will need at least 41 addresses (for the subnet ID and broadcast address). The least number of bits that satisfy this is 6 bits. Knowing that, we take the prior subnet and add 64, the result of which is 207.174.144.0/26.



The broadcast address of subnet A (207.174.144.0/26) is 207.174.144.63, because it is the last address in the IP range.
Similar to the prior subnet, subnet B has 18 hosts, so it will need at least 20 addresses (for the subnet ID and broadcast address). The least number of bits that satisfy this is 5 bits. Knowing that, we take the prior subnet and add 32, the result of which is 207.174.144.64/27 
The broadcast address of subnet B (207.174.144.64/27) is 207.174.144.95, because it is the last address in the IP range. 
9. The first IP address of subnet B (207.174.144.64/27) is 207.174.144.65, found by adding 1 to the subnet address.
10. The last IP address of subnet B (207.174.144.64/27) is 207.174.144.94, found by subtracting 1 from the broadcast address (207.174.144.95).



Consider the router and the two attached subnets below (A and B). The number of hosts is also shown below. The subnets share the 24 high-order bits of the address space: 207.174.144.0/24   subnet A 39 hosts and subnet b 18 hosts
"An MPLS-capable router is often referred to as a label-switched router"  "The goal was not to abandon the destination-based IP datagram-forwarding infrastructure for one based on fixed-length labels and virtual circuits, but to augment it by selectively labeling datagrams and allowing routers to forward datagrams based on fixed-length labels (rather than destination IP addresses) when possible"



Slotted Aloha: 4 Active Nodes . Given a probability of transmission p = 0.36, what is the maximum efficiency? 1. The efficiency given p = 0.36 is: Np(1 - p)^(N - 1) = 4 * 0.36 * (1 - 0.36)^(4 - 1) = 0.38 or 38% efficiency.     Given a probability of transmission p = 0.5, what is the maximum efficiency? 2. The efficiency given p = 0.5 is: Np(1 - p)^(N - 1) = 4 * 0.5 * (1 - 0.5)^(4 - 1) = 0.25 or 25% efficiency.   PURE ALOHA: Given a probability of transmission p = 0.36, what is the maximum efficiency?  1. The efficiency given p = 0.36 is: Np(1 - p)^2(N - 1) = 4 * 0.36 * (1 - 0.36)^2(4 - 1) = 0.1 or 10% efficiency. 
