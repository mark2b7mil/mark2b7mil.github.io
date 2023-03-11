___

A network-layer packet is a datagram.
main function of the data plane is packet forwarding. main function of the control plane is routing
Input port, switching fabric, and output ports are implemented in hardware. routing processor inside a traditional router uses software
shadow copy, the forwarding lookup is made locally, at each input port, without invoking centralized routing processor. avoids creating a lookup processing bottleneck 



router uses longest prefix matching. the packet will be forwarded to the link interface that has the longest prefix match with the packet’s destination.
If the rate at which packets arrive to the fabric exceeds switching fabric rate, then packets will need to queue at the input ports. Packet loss can be eliminated if the switching fabric speed is at least n times as fast as the input line speed, where n is the number of input ports.
packet loss can still occur in output if the rate at which packets arrive to a single output port exceeds the line speed



HOL blocking: a packet that is first in line at input port queue must wait because there is no available buffer space at the output port to which it wants to be forwarded.
With RR, all service classes are treated equally, i.e., no service class has priority over any other service class. With WFQ, service classes are treated differently.



The 8-bit protocol field in the IP datagram contains information about which transport layer protocol the destination host should pass the segment to
IP header checksum only computes the checksum of an IP packet’s IP header fields, which share no common bytes with the IP datagram’s transport-layer segment.
reassembly of the fragments of an IP datagram is done in the datagram’s destination host.
"223.1.3.27" = 11011111 00000001 00000011 00011100.



"application generates chunks of 40 bytes of data every 20 msec, and each chunk gets encapsulated in a TCP segment and then an IP datagram. What percentage of each datagram will be overhead, and what percentage will be application data" 50% overhead
Typically the wireless router includes a DHCP server. DHCP is used to assign IPaddresses to the 5 PCs and to router interface. Yes, the wireless router also uses NAT as it obtains only one IP address from the ISP



Route aggregation means that an ISP uses a single prefix to advertise multiple networks. 
plug-and-play or zeroconf protocol means that the protocol is able to automatically configure a host’s network-related aspects in order to connect the host into a network
private network address of a device in a network refers to a network address that is only meaningful to those devices within that network
the IPv6 header contains two 128 bit addresses (source and destination IP address) the whole header has a fixed length of 40 bytes only.
entry of the flow table in OpenFlow includes a set of header field values to which an incoming packet will be matched.
