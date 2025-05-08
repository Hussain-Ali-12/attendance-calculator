function calculateAttendance() {
    let totalClasses = parseInt(document.getElementById("totalClasses").value);
    let attendedClasses = parseInt(document.getElementById("attendedClasses").value);
    let attendancePercentage = (attendedClasses / totalClasses) * 100;
    let requiredClasses = 0;

    let resultHTML = `<strong>Current Attendance: </strong>${attendancePercentage.toFixed(2)}%<br>`;

    while (attendancePercentage < 75) {
        requiredClasses++;
        totalClasses++;
        attendedClasses++;
        attendancePercentage = (attendedClasses / totalClasses) * 100;
    }

    const resultDiv = document.getElementById("result");
    if (requiredClasses > 0) {
        resultHTML += `<strong>You need to attend at least ${requiredClasses} more classes to reach 75% attendance.</strong>`;
        resultDiv.classList.add("error");
        resultDiv.classList.remove("success");
    } else {
        resultHTML += `<strong>You have already met the 75% attendance requirement.</strong>`;
        resultDiv.classList.add("success");
        resultDiv.classList.remove("error");
    }

    resultDiv.innerHTML = resultHTML;
}
