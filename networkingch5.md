___

Per-router control means that a routing algorithm runs in each and every router. Network control and data planes are implemented monolithically because each router works as an independent entity that implements its own control and data planes
OSPF protocol is an example of centralized routing algorithm, and BGP is an example of a distributed routing algorithm. 
count-to-infinity problem refers to a problem of distance vector routing. it takes a long time for a distance vector routing algorithm to converge when there is a link cost increase. consider a network of three nodes x, y, and z. initially the link costs are c(x,y)=4, c(x,z)=50, and c(y,z)=1. result of distance-vector routing algorithm says that z’s path to x is zàyà x and the cost is 5(=4+1). When the cost of link (x,y) increases from 4 to 60, it will take 44 iterations of running the distance-vector routing algorithm for node z to realize that its new least-cost path to x is via its direct link to x



Among ASs, policy issues dominate. It may well be important that traffic originating in a given AS not be able to pass through another specific AS. Similarly, a given AS may want to control what transit traffic it carries between other ASs
OSPF, a router broadcasts its link-state information to all other routers in the autonomous system to which it belongs, not just to its neighboring routers. OSPF, each router needs to construct a complete topological map of the entire AS and then locally runs Dijkstra’s shortest-path algorithm
area in an OSPF autonomous system is refers to a set of routers, in which each router broadcasts its link state to all other routers in the same set. An OSPF AS can be
configured hierarchically into multiple areas, with each area running its own OSPF link-state routing algorithm concept of area is introduced for scalability reason.



prefix is the network portion of a CDIRized address; it is written in the form a.b.c.d/x ; A prefix covers one or more subnets. When a router advertises a prefix across a BGP session, it includeswith the prefix a number of BGP attributes. In BGP jargon, a prefix along with its attributes is a BGP route
Routers use the AS-PATH attribute to detect and prevent looping advertisements. The NEXT- HOP attribute indicates the IP address of the first router along path



BGP is a policy-based routing protocol.
ommunication layer is responsible for the communication between the SDN controller and those controlled network devices, via a protocol such as OpenFlow. Through this layer, an SDN controller controls the operation of a remote SDN-enabled switch, host, or other devices, and a device communicates locally-observed events (e.g., a message indicating a link failure) to the controller.



network-wide state-management layer provides up-to-date information about state a network’s hosts, links, switches, and other SDN-controlled devices. A controller also maintains a copy of the flow tables of the various controlled devices.
network-control application layer represents the brain of SDN control plane. The applications at this layer use the APIs provided by a SDN controller to specify and control the data plane in the network devices.
implement a new routing protocol at the SDN’s network-control application layer, as this is the layer where a routing protocol determines the end-to-end paths between sources and destinations.



list of types of messages flow across a SDN controller’s southbound from the controller to the controlled devices. Conifguration, modify state, read state, send packet.
service abstraction layer allows internal network service applications to communicate with each other. It allows controller components and applications to invoke each other’s services and to subscribe to events they generate.



ICMP Echo reply (to ping), type 0, code 0 Destination network unreachable, type 3 code 0 Destination host unreachable, type 3, code 1. Source quench (congestion control), type 4 code 0.
SNMP managing server is an application, typically with a human in the loop, running in acentralized network management station in a network operation center. It controls the collection, processing, analysis, and/or display of network management information. network management agent is a process running in a managed device that communicates with a managing server Management Information Base (MIB) collects the information associated with those managed objects in a managed network.
