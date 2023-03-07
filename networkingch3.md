___

Transport layer protocol provides for logical communication between application processes running on different hosts. Everything happens in end systems
Trans layer converts app layer messages into trans layer packets known as segments. Network layer is called datagram



UDP is unreliable connectionless service to invoking application. TCP is reliable connection oriented service for the invoking application. IP service model is best effort delivery service but it makes no guarantees but is an unreliable service.
Transport layer multiplexing and demux is process of extending host to host delivery to process to process delivery. Error checking is also provided by tcp and udp and these two services is the only thing udp provides, error checking is done with checksum. Tcp uses flow control,  sequence nums and acks and timers to ensure data is delivered correctly and in order. It also provides congestion control. Congestion control is service for wider internet and udp does not provide this. 



A process as part of network app can have one or more sockets, doors through which data passes from the network to process and vise versa
Demux is job of delivering the data in transport layer segment to correct socket. Multiplex is job of gathering data chunks at the source host from different sockets, exacapsulating each data chunk with header info to create segments and passing segemtns to network layer. Host uses ip address and port numbers to direct segment to appropriate socket.
Each port number, source port number field, and dest port number field, is a 16 bit number ranging from 0-65535, 0-1023 are well known ports and are restricted from well known protocols. http is port 80, ftp is port 21. 



When creating creating datagram to send into udp socket, most specify des tip address and dest port number, when receiving host receives udp segment, checks dest port number in segment and directs segments to socket with that port number.
IP/UDP datagram with same dest port # but different source IP address and/or source port num will be directed to same socket at receiving host.



Tcp socket identified by 4-tuple, source IP, source port, dest IP, dest port #. Receiver uses all 4 vals to direct segment to appropriate socket.
Server can support many simultaneous TCP socklets.



UDP: no connection establishment which redices RTT delay, no setup connection states at sender and receiver, small header size. UDP is much simpler and examples are streaming apps, DNS, SNMP, HTTP/3. QUIC protocol offers reliable transfer over UDP. 
UDP seg header/datagram is source port #, dest port #, length, checksum, app data. Goal of UDP checksum is to detect errors in transmitted segment. Sender treats udp content in segment as sequence of 16 bit ints and added up then applied a ones complement is the checksum and this is used to detect errors, though it is not perfect. 



The look and complexity of rdt protocol depends on the underlying channel and how reliable it is. Sender and receiver done know state of one another unless communicated with messag
RDT 1.0 reliable trans over reliable channel, no bit erros and loss of packets. RDT 2.0: channel with bit errors, acks and nacks used to recover from errors and tell if packet was received correctly or not. Ack and nack can be corrupted though. RDT 2.1 seq # number added to packet, only use 1 and 0, and used to check ifack/nack is corrupted, but machine has to remember state of expected pkt. RDT 2.2: nack free protocol, duplicate ack sent from receiver with same sequence num of last packet received shows issue. RDT 3.0: channel with errors and loss, sender waits for ack foir some time and retransmits if ack not received in time, if segment is retransmitted too soon the dup is handled by using seq #, stop and wait makes performance really bad. Pipelining increases utilization by sending multiple packets at same time. 



Go Back N: sender creates a window of packets that are sent but not acked and also not yet sent but ready to send. When ack is received for lowest packet the window moves up and next packet is ready to send, if packet received out of order you can discard or buffer, programmers choice. When timeout happened lowest packet not received and others in window sent.



Selective repeat: sender retransmits only unacked packet, not everything in send window, packets are buffered if received out of order. Dilemma happens if base counting number of packet is small and duplicate packet # is accepted thinking it’s a previous packet



TCP: in order byte stream, full duplex data, bidirectional data flow in same connection. MSS is max segment size. Uses cumulative acks. Pipelining for flow control and congestion, flow controlled so that sender doesn’t overwhelm receiver. Connection oriented with handshake setup. Segment structure: source port #, dest port #, seq #, ack #, length of tcp header, notifications like congestion, connection management, flow control, checksum, options, app data. 
Seq # us the byte stream # of first byte in segments data. Ack is seq # of next byte expected from other side.
How is tcp timeout set? Longer than RTT, sample RTT average taken from RTT calcs. Exponential moving average influence of past RTT samples decreases exponentially fast.
Timeout interval = est RTT + 4 x deviation RTT



When timeout happens and there is no ack then packet is retransmitted, if 3 acks are received for same data then TCP segment with smallest seq# is resent. Do not wait for timeout in this case since packet is likely lost. 
How to make sure that tcp buffer isn’t overflowed by sender? Receiver calls out free buffer space with RWND. Rcv buffer size is set via socket options but typical default is 4096 bytes. Sender limits the data in flight to received rwnd.



Congestion: too many sources sending too much data too fast for network to handle. In simple scenario with no concern for router buffers, congestion happens at link capacity and delays begin as capacity gets close to full. With finite buffers pakcets can be lost or timed out and sender retransmits packets with no regard for link buffers, packets can be sent for no reason taking up more thoroughput. This is especially harmful in multihop links where lower level inks can be overwhelmed. Congestion can be inferred from obersved loss/delay or by network device communication. Tcp uses former. 



AIMD: sender increases rate by 1 MSS every RTT until loss is detected and at each loss detected the sending rate is cut inhalf. This optimizes congested flow rates network wide. Cwnd is dynamically adjusted in response to observed network congestion and sender limits tans accordingly, LastByteSend-LastByteAcked <= cwnd



TCP slow start: when connection begins rate increases exponentially fast until loss event occurs CWND starts 1 MSS, then doubles cwnd every RTT, when cwnd gets to ½ of its value then increase in sending should switch to linear increase
TCP cubic works similar to AIMD but after cutting rate/window in half it ramps up faster but approaches previous max more slowly



Delay based TCP congestion control, keeping pipe just full enough. Uncongested throughput with cwnd is cwnd/RTT min. if measured throughput very close to uncongested throughput increase cwnd linearly. Else if measured thoughput far below uncongested throughput decrease cwnd linearly. Keeps control without inducing loss. 2 bits in IP header can inidicate congestion is is done by network router, this is sent to destination and destination sets ECE bit to notify sender. TCP is fair because of add increase and multi decrease.



QUIC: Quic UDP connection is app layer protocol on UDP, increase performance of HTTP by taking some elements of TCP but with speed of UDP, reduces HOL blocking and allows for parallelism.
