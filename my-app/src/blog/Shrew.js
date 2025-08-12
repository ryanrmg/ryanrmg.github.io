import shrew1 from '../img/shrew_1'
import shrew2 from '../img/shrew_2'
import shrew3 from '../img/shrew_3'

export default function Shrew() {
    return (
        <div className="Blog">
            <div className="Blog-header">
                <p>Low Rate Denial of Service (DoS) Shrew Attack</p>
            </div>
            <div className="Blog-body">
                <p>
                    In the realm of cybersecurity, the protection of digital assets and the availability of online services are of paramount importance. 
                    Unfortunately, malicious actors continuously develop new techniques to disrupt online systems and create chaos. 
                    One such technique is the low-rate denial-of-service (DoS) attack, often referred to as the Shrew attack, as it sends small amounts of network traffic in bursts but still manages to take down a host. 
                    Named after a small but mighty and aggressive animal; the attack can achieve results as effectively as a traditional DoS or Distributed Denial of Service (DDoS) attack in which thousands of packets are sent per second to distrupt a machine.
                </p>
                <p>
                    In this blog post, we will delve into the intricacies of the Shrew attack, and implement it using some bash scripting, a network emulator called <a href="http://mininet.org/download/" target="_blank" rel="noopener noreferrer">Mininet</a> and an AWS instance.
                </p>
                <h2>Background</h2>
                <p>
                    Transmission Control Protocol, commonly referred to as TCP, is the typical standard for exchanging data and packets over a network. The protocol attempts to achieve reliability by employing a retransmission strategy when packets are lost. Consider the example below:
                </p>
                <img src={shrew1} alt="default"></img>
                <p>
                    Host A sends a DATA packet to Host B with a sequence number we'll call seq_num. Host B then responds with an acknowledgment or ACK with seq_num to let Host A know it received the packet and Host A can send more data to Host B.
                </p>
                <p>
                    Below, at time t=1, Host A sends another DATA packet to B with sequence number seq_num+1, however, this time it is not received by B. The retransmission timer is ticking on A and by t=3, it has still not received an ACK, so Host A it sends DATA:seq_num+1 again. This attempts to give communication over a network some sort of reliability. Packets are lost or corrupted all the time and in these cases, hosts resend the packets so no information is lost.
                </p>
                <img src={shrew2} alt="default"></img>
                <p>
                    If you understand this (and hopefully I explained it well enough) you may see that if an attacker times their attack with the same period as retransmission, they can wreak havoc.
                </p>
                <p>
                    Note: TCP employs a strategy of ramping up and backing off the number of packets sent, most often in an additive increase, multiplicative decrease fashion. For example when 1 packet is ACK'ed, send 5 packets, then 10 packets once those are ACK'ed. If packets are lost, go back down to 2 packets.
                </p>
                <h2>
                    Attack
                </h2>
                <p>
                    We'll first create the following network topology using a network emulator called <a href="http://mininet.org/download/" target="_blank" rel="noopener noreferrer">Mininet</a>. This allows us to “control” many hosts on a network, and simulate this attack using our own personal computer.
                </p>
                <h2>
                    Network Topology
                </h2>
                <img src={shrew3} alt="default"></img>
                <p className="codeBlock">
                    $ sudo mn --topo single,3 --link tc,bw=10,delay=20ms
                </p>
                <p>
                    Each link has a delay of 20ms and a bandwidth of 10Mbit/s. Therefore, our overall Round Trip Time, RTT is 80ms.
                </p>
                <p>
                    Let's start a http server on Host 1.
                </p>
                <p className="codeBlock">
                    mininet$ h1 python -m SimpleHTTPServer 80 &
                </p>
                <p>
                    And if we make a request from Host 2 to Host 1, it should be successful.
                </p>
                <p className="codeBlock">
                    mininet$ h2 wget h1
                </p>
                <p>
                    Now, let's launch our attack from Host 3 to Host 1. We'll use a tool called scapy for this. Our script will send bursts of traffic (11Mbit/s) every 80ms for approximately 10ms. Which will cause Host 2’s request to fail as our retransmit stage is triggered. Packets are lost since our bandwidth is exceeded during the short bursts and they will be re-sent every 80ms.
                </p>
                <p className="codeBlock">
                    mininet$ h3 python attack.py
                </p>
                <p>
                    I did not invent this technique, you can read about it in this <a href="https://www.cs.cornell.edu/people/egs/cornellonly/syslunch/spring04/p75-kuzmanovic.pdf" target="_blank" rel="noopener noreferrer">academic research paper</a>
                </p>
            </div>
        </div>
    )
}