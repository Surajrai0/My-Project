// studentInfo.js
const dateOfBirth = "20/08/2000";

const getStudentName = () => {
    return "write your name";
};

const getCampusName = () => {
    return "UEL Campus";
};

exports.getName = getStudentName;
exports.getlocation = getCampusName;
exports.dob = dateOfBirth;

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
