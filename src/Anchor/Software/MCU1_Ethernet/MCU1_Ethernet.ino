#include <EtherCard.h>
#include <SoftwareSerial.h>


static byte mymac[] = { 0x74, 0x69, 0x69, 0x2D, 0x30, 0x31 };
static byte myip[] = { 192, 168, 3, 3 }; //IP
static byte gwip[] = { 192, 168, 3, 1 }; //Gateway
static byte hisip[] = { 192, 168, 3, 1 }; //Destination
const char website[] PROGMEM = "192.168.3.1"; //Destination

byte Ethernet::buffer[500];
Stash stash;
static long timer;
static byte session;

int sendMessage = false;
int distance;

SoftwareSerial softSerial(2, 3); // RX, TX


void sendPacket(int distance) {

 
  
  byte sd = stash.create();
  stash.print("{");
  
  stash.print("\"MAC_TAG\":");
  stash.print("\"TAG03\"");
  stash.print(",");
  stash.print("\"MAC_ANCHOR\":");
  stash.print("\"ANCHOR_69\"");
  stash.print(",");
  stash.print("\"DISTANCE\":");
  stash.print(distance);
  
  stash.print("}");
  stash.save();
  Stash::prepare(PSTR("POST https://$F HTTP/1.1" "\r\n"
                      "Host: $F" "\r\n"
                       "Content-Length: $D" "\r\n"
                       "Content-Type: application/json" "\r\n"
                       "\r\n"
                       "$H"),
                 website, website, stash.size(), sd);
  ether.tcpSend();

  
  Serial.println("Packet Send");
}
void setup () {
  Serial.begin(9600);
  Serial.println("\n[getStaticIP]");
  if (ether.begin(sizeof Ethernet::buffer, mymac) == 0)
    Serial.println( "Failed to access Ethernet controller");
  ether.staticSetup(myip, gwip);
  ether.copyIp(ether.hisip, hisip);
  ether.printIp("Server: ", ether.hisip);

  softSerial.begin(9600);

  

}

void loop () {
  
  ether.packetLoop(ether.packetReceive());

  const char* reply = ether.tcpReply(session);
  if (reply != 0) {
    Serial.println("Got a response!");
    Serial.println(reply);
  }

  if (millis() > timer + 1000) {
    timer = millis();
    //sendPacket(10);
  }




  while(softSerial.available() > 0) {
    distance = softSerial.parseInt();
    softSerial.read();
    sendMessage = true;
  }
  if(sendMessage){
    sendMessage = false;
    Serial.println(distance);
    sendPacket(distance);
  }
  

}
