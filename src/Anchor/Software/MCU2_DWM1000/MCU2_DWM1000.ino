#include <SoftwareSerial.h>
SoftwareSerial softSerial(2, 3); // RX, TX


int distance = 666;

void setup() {
  softSerial.begin(9600);
  Serial.begin(9600);

}

void loop() {
  delay(1000);
  softSerial.print(distance, DEC);
  softSerial.print(".");
}
