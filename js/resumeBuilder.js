var bio = 
{
"name" : "Aaron Schriever",
"role" : "Web developer",
"contacts" : 
{ "mobile" : "0439608906",
"email" : "aaron.schriever@gmail.com",
"github" : "https://github.com/aaronschriever",
"twitter" : "n/a",
"location" : "Adelaide, South Austrlia"
},
"pictureURL" : "images/biopic.jpg",
"welcomeMSG" : "Welcome to my online Resume",
"skills" : ["C#", "web developer", "Android", "java", "JS"]
};

var work={};
work.jobPosition = "Field Support Technician";
work.employer = "H&L Australia";
work.yearsWorked = "2012-2015";
work.location = "Adelaide";



var education ={};
education["school"] = "University of South Australia";
education["yearsEducated"] = "2004-2008";
education["schoolLocation"] = "Adelaide";

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
//console.log(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
//console.log(formattedName);
var contact = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(contact);
var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG);
$("#header").append(welcomeMessage);
var skillset = HTMLskills.replace("%data%", bio.skills);
$("#header").append(skillset);
var workPosition = HTMLworkTitle.replace("%data%", work.jobPosition);
$("#header").append(workPosition);
var schoolName= HTMLschoolName.replace("%data%", education.school);
$("#header").append(schoolName);