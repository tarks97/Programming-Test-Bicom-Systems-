#include <iostream>
#include<string>
#include<string.h>
#include<fstream>
using namespace std;

string split(char *text, char znak){

	string niz;

	for(int i = 0; i < strlen(text); i++){

		niz += text[i];

		if(text[i] == znak)
			return niz;
	}
}

char * getRange(char *IP, char *file){

	char *range;

	ifstream upis;

	upis.open(file);

	while(!upis.eof()){

		char adresa[40];

		upis.getline(adresa, 40);

		if(split(adresa, '.') == split(IP, '.')){

			range = new char[strlen(adresa)+1];
			strcpy(range, adresa);

			return range;
		}
	}	
		throw exception();
}

int main(int argc, char *argv[]){

	char *addressRange;

	try{

		addressRange = getRange(argv[argc-1], argv[argc-2]);
		cout<<"Range: "<<addressRange<<endl;

		delete[] addressRange;
		addressRange = nullptr; 
	}

	catch(exception &e){

		cout<<e.what()<<endl;
	}

	return 0;
}