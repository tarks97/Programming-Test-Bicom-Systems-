#include <iostream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

string GetStringCommand(string cmd) {

    string data;
    FILE * stream;
    const int max_buffer = 256;
    char buffer[max_buffer];
    cmd.append(" 2>&1");

    stream = popen(cmd.c_str(), "r");
    if (stream) {
    
    	while (!feof(stream))
    		if (fgets(buffer, max_buffer, stream) != NULL) data.append(buffer);
    			pclose(stream);
    }

    return data;
 }

 int main (){


    string kernelVerzija = GetStringCommand("uname -r");
    string architecture = GetStringCommand("uname -i");
    string freeMemory = GetStringCommand("free -m |grep Mem| awk '{print($4)}'");
    string ipAddress = GetStringCommand("hostname -i");
    string diskSize = GetStringCommand(" sudo fdisk -l | grep Disk | grep /dev/sda | awk '{print($3)}'");
    string currentUser = GetStringCommand("id -u -n");

    cout << "Linux kernel: " << kernelVerzija;
    cout<< "Architecture: "<<architecture;
    cout<<"Free memory: "<<freeMemory;
    cout<<"eth0 IP address: "<<ipAddress;
    cout<<"Disk Size (GB): "<<diskSize;
    cout<<"Current username: "<<currentUser;

    return 0;
 }