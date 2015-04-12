var formattedRole = HTMLheaderRole.replace("%data%", "Android, C# and web developer");
$("#header").prepend(formattedRole);
console.log(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", "Aaron Schriever");
$("#header").prepend(formattedName);
console.log(formattedName);