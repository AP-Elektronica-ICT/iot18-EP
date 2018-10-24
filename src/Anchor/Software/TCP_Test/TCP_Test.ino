#include <EtherCard.h>


static byte mymac[] = { 0x74, 0x69, 0x69, 0x2D, 0x30, 0x31 };
static byte myip[] = { 192, 168, 3, 3 }; //IP
static byte gwip[] = { 192, 168, 3, 1 }; //Gateway
static byte hisip[] = { 192, 168, 3, 1   }; //Destination
const char website[] PROGMEM = "192.168.3.1"; //Destination

byte Ethernet::buffer[500];   // a very small tcp/ip buffer is enough here
Stash stash;
static long timer;
static byte session;

int teller = 0;
void sendPacket() {

  /*
  byte sd = stash.create();
  const char data[] = "datahierrr";
  stash.print("jsonshizzle");
  stash.println(data);
  stash.save();
  int stash_size = stash.size();

  Stash::prepare(PSTR("POST http://$F/anchor/data/api.php HTTP/1.0" "\r\n"
    "Content-Length: $D" "\r\n"
    "\r\n"
    "$H"),
  website, website, stash_size, sd);

  // send the packet - this also releases all stash buffers once done
  // Save the session ID so we can watch for it in the main loop.
  session = ether.tcpSend();*/

  

  
  byte sd = stash.create();
  stash.print("{");
  
  stash.print("\"MAC_TAG\":");
  stash.print("\"02\"");
  stash.print(",");
  stash.print("\"MAC_ANCHOR\":");
  stash.print("\"0x74, 0x69, 0x69, 0x2D, 0x30, 0x31\"");
  stash.print(",");
  stash.print("\"DISTANCE\":");
  stash.print(teller);
  
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
  teller++;




/*
  byte sd = stash.create();

  const char tweet[] = "@solarkennedy the test Twitter sketch works!";
  stash.print("&status=");
  stash.println(tweet);
  stash.save();
  int stash_size = stash.size();

  // Compose the http POST request, taking the headers below and appending
  // previously created stash in the sd holder.
  Stash::prepare(PSTR("POST http://$F/update HTTP/1.0" "\r\n"
    "Host: $F" "\r\n"
    "Content-Length: $D" "\r\n"
    "\r\n"
    "$H"),
  website, website, stash_size, sd);

  // send the packet - this also releases all stash buffers once done
  // Save the session ID so we can watch for it in the main loop.
  session = ether.tcpSend()*/
  
  Serial.println("Packet Send");
}
void setup () {
  Serial.begin(57600);
  Serial.println("\n[getStaticIP]");

  if (ether.begin(sizeof Ethernet::buffer, mymac) == 0)
    Serial.println( "Failed to access Ethernet controller");

  ether.staticSetup(myip, gwip);
  ether.copyIp(ether.hisip, hisip);
  ether.printIp("Server: ", ether.hisip);

  

}

void loop () {
  ether.packetLoop(ether.packetReceive());

  const char* reply = ether.tcpReply(session);
  if (reply != 0) {
    Serial.println("Got a response!");
    Serial.println(reply);
  }

  if (millis() > timer + 100) {
    timer = millis();
    sendPacket();
  }
}

