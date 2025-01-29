var nickname = "keiro";
var hin = 65;
var wkg = 59;

var hft = hin%12;
var hin2 = (hin-hft)/12;
var wlbs = wkg*2.205;

const shareinfo = confirm("Do you agree with your personnal information being shared?");

if (shareinfo == true) {
    console.log("Name: " +nickname+ "\nHeight: " +hft+ "'" +hin2+ "'" + "\nWeight: " +wlbs+ " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}