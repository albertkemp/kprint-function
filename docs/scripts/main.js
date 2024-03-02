const togglebutton = document.getElementById("darkmodetoggle");
let isDarkMode = false;
function darkMode() {
  if (isDarkMode == false) { 
    document.body.style.color = "#f0f0f0";
    document.body.style.backgroundColor = "#1e1e1e"; 
    document.body.style.cssText +=
      "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Lato&family=Open+Sans&display=swap');code{ background-color:rgb(200, 200, 200); } .blockcode{ background-color:rgb(0, 0, 0, 0); } .borderexample{ border: 5px solid grey; } h1{ font-family: 'IBM Plex Serif', serif; font-size: 100px; } h2{ font-family: 'Lato', sans-serif; font-size: 35px; } p{ font-family: 'Open Sans', sans-serif; font-size: 16px; }"; /* Changed = to += */
    document.querySelectorAll("code").forEach((element) => {
      element.style.backgroundColor = "#708090;";
    });
    togglebutton.style.cssText = 'background-color:#000000;border-color:#ffffff;color:#ffffff;'
    isDarkMode = true;
  } else {
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = "#ffffff";
    togglebutton.style.cssText='border-color:#000000;background-color:#ffffff;color:#000000;'
    document.body.style.cssText +=
      "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Lato&family=Open+Sans&display=swap');code{ background-color:rgb(0, 0, 0, 0); } .blockcode{ background-color:rgb(0, 0, 0, 0); } .borderexample{ border: 5px solid #d3d3d3; } h1{ font-family: 'IBM Plex Serif', serif; font-size: 100px; } h2{ font-family: 'Lato', sans-serif; font-size: 35px; } p{ font-family: 'Open Sans', sans-serif; font-size: 16px; }"; /* Changed = to += */
    document.querySelectorAll("code").forEach((element) => {
      element.style.backgroundColor = "#708090";
    });
    
    togglebutton
    isDarkMode = false;
  }
} 

const fullCode = `
#Printing code for KEMP
import re

command = input()
command =command.strip()
pattern = re.compile(r"^k(print|empPrint)\((.*)\)$", re.IGNORECASE)
match = pattern.match(command)
if match:
    arg = match.group(2)
    if arg.startswith("'") and arg.endswith("'") or arg.startswith('"') and arg.endswith('"'):
        string = arg[1:-1]
        print(string)
    else:
        try:
            num = float(arg)
            print(num)
        except ValueError:
            print('ERR:with no quotes argument must be a number')
else:
    print('ERR:command not found')

`;

const basicCode = `#kprint code
command = input()
if command.startswith("kprint('") and command.endswith("')") or command.startswith('kprint("') and command.endswith('")'):
string = command[8:-2]
print(string)
else:
print('ERR:command not found') `;

const numCode = `#Number functionality syntax
import re

command = input()
command=command.strip()
pattern = re.compile(r"^kprint\((.*)\)$")
match = pattern.match(command)
if match:
    arg = match.group(1)
    if arg.startswith("'") and arg.endswith("'") or arg.startswith('"') and arg.endswith('"'):
        string = arg[1:-1]
        print(string)
    else:
        try:
            num = float(arg)
            print(num)
        except ValueError:
            print('ERR:with no quotes argument must be a number')
else:
    print('ERR:command not found')
`;
const kempCode = `#syntax allowing KempPrint
command = input()
command = command.strip()
if (command.startswith("kprint('") or command.startswith("KempPrint('")) and command.endswith("')") or (command.startswith('kprint("') or command.startswith('KempPrint("')) and command.endswith('")'):
if command.endswith("')"):
string = command.split("'")[1]
else:
string = command.split('"')[1]
print(string)
else:
print('ERR:command not found') `;

function copyCode(code) {
  navigator.clipboard.writeText(code);
}