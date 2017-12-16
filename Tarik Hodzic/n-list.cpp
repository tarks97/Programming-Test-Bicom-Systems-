#include <iostream>
#include <fstream>
#include <string>
#include <cstring>
#include <cstdlib>
using namespace std;

int main(int argc,char** args){
	int brojLinija = 0;
	bool trebPonoviti = false;
	for (int i = 1; i < argc-1; ++i)
	{
		if(args[i][0] == '-')
		{
			for (int j = 1; j < strlen(args[i]); ++j)
			{
				if(args[i][j] == 'n')
				{
					if(i+1<argc)
						brojLinija = atoi(args[i+1]);
				}
				if(args[i][j] == 'f')
				{
					trebPonoviti = true;
				}
			}
		}
	}

	char*fajlName= args[argc-1];
	bool ponavlja = true;
	string s;
	while(ponavlja){
		int numLinija = 0;
		ifstream fajl(fajlName);
		ponavlja = trebPonoviti;
		cin.get();
		system("clear");
		if(fajl.is_open()){

			while(!fajl.eof()){
				getline(fajl,s);
				if(s!="")
					numLinija++;
			}
		fajl.clear();
		fajl.seekg(0, ios::beg);
			for (int i = 0; i < numLinija-brojLinija; ++i)
			{
					getline(fajl,s);
			}
			while(!fajl.eof())
			{
				getline(fajl,s);
				if(s!="")
					cout << s << endl;
			}
		}	
		fajl.close();
	}
	return 0;
}