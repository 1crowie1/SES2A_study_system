/* Using Test Data:

class which consists of a 3D array of students
program will use this 3D array to form the graph and do sorting until backend has been implemented correctly

NOTE #1:
    - Use a drop down menu to select degree and topics then save these as numbers in the database...
      these numbers can then be setup as to group relevant topics and degrees by value saving processing later

NOTE #2:
    - studentGraph[i][n][6] introduced for elimination rating backup
*/

var studentClass = [
    ["Harrison Crowe-Maxwell", 
        false, [1, 2], [2, 13, 15], 
        [false, true, false, true, false, true, false]],
    ["Joeseph Test", 
        false, [1, 6], [11, 2, 15], 
        [true, false, false, true, false, true, false]],
    ["Reginald Hargraves", 
        false, [15, 0], [2, 23, 29], 
        [true, true, false, true, true, true, false]],
    ["Tom Peeves", 
        false, [4, 1], [5, 3, 2], 
        [false, true, false, false, false, false, false]],
    ["Maxwell Harries", 
        false, [1, 26], [2, 43, 15], 
        [false, true, false, true, false, false, false]],
    ["Natasha Roblosk", 
        false, [27, 0], [43, 48, 29], 
        [true, true, false, true, false, false, true]],
    ["Rachael Ozich", 
        false, [27, 0], [75, 43, 51], 
        [true, true, true, true, true, false, false]],
    ["Sam Holmes", 
        false, [31, 0], [43, 13, 15], 
        [false, true, false, true, false, true, false]],
    ["Anesu Chakaingesu", 
        false, [4, 30], [2, 13, 15], 
        [false, false, false, true, false, false, true]],
    ["Alex Jameson", 
        false, [1, 4], [2, 13, 15], 
        [false, false, false, true, false, true, false]]
];

autoGroup = AutoSort(studentClass, 3);
// randGroup = RandSort(studentClass, 2);


/*
Random Sorting Function

Consist of ~day availablity~ data point.
This is then used to randomly arrange students into groups of ~groupSize~ 
*/
function RandSort(studentClass, groupSize) {
    // Create Student Graph - i*n array relationship between students
    studentGraph = new Array(studentClass.length);
    for (i = 0; i<studentClass.length; i++) {
        studentGraph[i] = new Array(studentClass.length);
        for (n = 0; n<studentClass.length; n++) {
            studentGraph[i][n] = 0;
        }
    }


    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<studentGraph[i].length; n++) {
            if (i != n) {
                // Day availability [i][n]
                for (p = 0; p<7; p++) {
                    if (studentClass[i][4][p] && studentClass[n][4][p]) {
                        studentGraph[i][n] = 1;
                    }
                }
                console.log(studentGraph[i][n]);
                if (n == 9) {
                    console.log("\n");
                }
            }
        }
    }

    studentsRemain = true;
    while (studentsRemain == true) {

    }

    return 0;
}


/*
Automatic Sorting Function

Consists of ~day availability~, ~degree similarity~, ~topic match~, ~cumulative score~ and ~can match~ data points.
This is then used to arrange students into groups of ~groupSize~ based off the highest rated cumulative scored
students. This eliminates remaining students until all students are in a group.
*/
function AutoSort(studentClass, groupSize) {
    //var groups = new Array(studentClass.length/groupSize).fill(new Array); // return variable
    // Create Student Graph - i*n array relationship between students
    outputStatement = "";
    studentGraph = new Array(studentClass.length);
    for (i = 0; i<studentClass.length; i++) {
        studentGraph[i] = new Array(studentClass.length);
        for (n = 0; n<studentClass.length; n++) {
            studentGraph[i][n] = new Array(8).fill(0);
        }
    }

    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<studentGraph[i].length; n++) {
            if (i != n) {
                // Day availability [i][n][0]
                for (p = 0; p<7; p++) {
                    if (studentClass[i][4][p] && studentClass[n][4][p]) {
                        studentGraph[i][n][0] = 1;
                    }
                }
                // Degree similarity [i][n][1]
                if (studentClass[i][2][0] == studentClass[n][2][0]) {
                    studentGraph[i][n][1] = 1;
                    if (studentClass[i][2][1] == studentClass[n][2][1]) {
                        studentGraph[i][n][1] = 2;
                    }
                }
                // Topic match [i][n][2]
                for (p = 0; p<3; p++) {
                    if (studentClass[i][3][p] == studentClass[n][3][p]) {
                        studentGraph[i][n][2]++;
                    }
                }
                // Cumulative score [i][n][3]
                studentGraph[i][n][3] = studentGraph[i][n][1] + studentGraph[i][n][2]; // to be eliminated
                studentGraph[i][n][6] = studentGraph[i][n][1] + studentGraph[i][n][2]; // to be stored
                // Can group [i][n][4]
                if (studentGraph[i][n][0] && studentGraph[i][n][3]>0) {
                    studentGraph[i][n][4] = 1;
                }
            }
        }
    }
    
    // Rank
    rank = 1;
    unranked = true;
    highest = 0;
    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<studentGraph.length; n++) {
            if (studentGraph[i][n][3] < studentGraph[i][highest][3]) {
                highest = n;
            }
        }
    }
    found = false;
    for (i = 0; i<studentGraph.length; i++) {
        while (unranked == true) {
            for (n = 0; n<studentGraph.length; n++) {
                if (studentGraph[i][n][5] == 0) {
                    if (studentGraph[i][n][4] == 0) {
                        studentGraph[i][n][5] = -1;
                        //console.log("Student %d gives student %d rank %d", i, n, -1);
                        //console.log(studentGraph[i][n][5]);
                    } else {
                        if (studentGraph[i][n][3] >= studentGraph[i][highest][3]) {
                            highest = n;
                            found = true;
                        }
                    }
                }
            }
            if (found == true && studentGraph[i][highest][5] == 0) {
                //console.log("Student %d gives student %d rank %d", i, highest, rank);
                studentGraph[i][highest][5] = rank;
                studentGraph[i][highest][3] = 1;
                //console.log(studentGraph[i][highest][5]);
            }
            unranked = false;
            for (n = 0; n<studentGraph.length; n++) {
                if (studentGraph[i][n][5] == 0 && rank < studentGraph.length) {
                    unranked = true;
                } 
            }
            rank ++;
            for (q = 0; q<studentGraph.length; q++) {
                for (n = 0; n<studentGraph.length; n++) {
                    if (studentGraph[q][n][3] < studentGraph[q][highest][3]) {
                        highest = n;
                    }
                }
            }
            found == false;
        }
        unranked = true;
        rank = 1;
    }

    // Relational Rank
    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<studentGraph[i].length; n++) {
            studentGraph[i][n][7] = studentGraph[i][n][5] + studentGraph[n][i][5];
        }
    }

    // Group Formation
    groups = new Array(Math.trunc((studentClass.length+groupSize)/groupSize));
    for (i = 0; i<groups.length; i++) {
        groups[i] = new Array(groupSize).fill(-1);
    }
    lowestn = 0;
    lowesti = 0;
    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<(i+1); n++) {
            if (studentGraph[i][n][7] > studentGraph[lowesti][lowestn][7]) {
                lowestn = n;
                lowesti = i;
            }
        }
    }
    ungrouped = true;
    ingroup = false;
    while (ungrouped == true) {
        for (i=0; i<studentGraph.length; i++) {
            for (n=0; n<(i+1); n++) {
                if (studentGraph[i][n][7] >= 0 && studentGraph[i][n][7] <= studentGraph[lowesti][lowestn][7]) {
                    lowestn = n;
                    lowesti = i;
                }
            }
        }
        //console.log("Lowest is %d at studentGraph[%d][%d][7]", studentGraph[lowesti][lowestn][7], lowesti, lowestn);

        for (i=0; i<groups.length; i++) {
            if (groups[i].includes(lowesti)) { // add n to group that contains i
                for (n=0; n<groupSize; n++) {
                    if (groups[i][n] == -1 && !groups[i].includes(lowestn)) {
                        if (lowesti != lowestn && studentGraph[lowesti][lowestn][7] != -2) {
                            for (k=0; k<groups.length; k++) {
                                if (groups[k].includes(lowestn)) {
                                    ingroup = true;
                                }
                            }
                            if (ingroup == false) {
                                groups[i][n] = lowestn;
                                studentGraph[lowesti][lowestn][7] = -2;
                            }
                            ingroup = false
                            break;
                        }
                    }
                }
                if (!groups[i].includes(-1)) { 
                    for (o = 0; o<studentGraph.length; o++) {
                        for (p = 0; p<(o+1); p++) {
                            for (q=0; q<groupSize; q++) {
                                if (groups[i][q] == o || groups[i][q] == p) {
                                    studentGraph[o][p][7] = -2;
                                    break;
                                }
                            }
                        }
                    }
                }
            } else if (groups[i].includes(lowestn)) { // add i to group that contains n
                for (n=0; n<groupSize; n++) {
                    if (groups[i][n] == -1 && !groups[i].includes(lowesti)) {
                        if (lowesti != lowestn && studentGraph[lowesti][lowestn][7] != -2) {
                            for (k=0; k<groups.length; k++) {
                                if (groups[k].includes(lowesti)) {
                                    ingroup = true;
                                }
                            }
                            if (ingroup == false) {
                                groups[i][n] = lowesti;
                                studentGraph[lowesti][lowestn][7] = -2;
                            }
                            ingroup = false;
                            break;
                        }
                    }
                }
                if (!groups[i].includes(-1)) { 
                    for (o = 0; o<studentGraph.length; o++) {
                        for (p = 0; p<(o+1); p++) {
                            for (q=0; q<groupSize; q++) {
                                if (groups[i][q] == o || groups[i][q] == p) {
                                    studentGraph[o][p][7] = -2;
                                }
                            }
                        }
                    }
                }
            } else { // add both to next free group
                for (n=0; n<groups.length; n++) {
                    if (groups[n].every(elem => elem == -1)) {
                        if (lowesti != lowestn && studentGraph[lowesti][lowestn][7] != -2) {
                            for (k=0; k<groups.length; k++) {
                                if (groups[k].includes(lowestn) || groups[k].includes(lowesti)) {
                                    ingroup = true;
                                }
                            }
                            if (ingroup == false) {
                                groups[n][0] = lowesti;
                                groups[n][1] = lowestn;
                                studentGraph[lowesti][lowestn][7] = -2;
                            }
                            ingroup = false
                            break;
                        }
                    }
                }
                if (!groups[i].includes(-1)) { 
                    for (o = 0; o<studentGraph.length; o++) {
                        for (p = 0; p<(o+1); p++) {
                            for (q=0; q<groupSize; q++) {
                                if (groups[i][q] == o || groups[i][q] == p) {
                                    studentGraph[o][p][7] = -2;
                                }
                            }
                        }
                    }
                }
            }
        }
        studentGraph[lowesti][lowestn][7] = -2;
        for (i = 0; i<studentGraph.length; i++) { // reset lowest to highest point
            for (n = 0; n<(i+1); n++) {
                if (studentGraph[i][n][7] > studentGraph[lowesti][lowestn][7]) {
                    lowestn = n;
                    lowesti = i;
                }
            }
        }
        ungrouped = false; // do more students need to be put in a group
        for (i=0; i<studentGraph.length; i++) {
            for (n=0; n<(i+1); n++) {
                if (studentGraph[i][n][7] > 0) {
                    ungrouped = true;
                }
            }
        }
    }


    //print out graph layers
    for (p = 0; p<8; p++) {
        switch (p) {
            case 0:
                console.log("Day availability dimension\n");
                break;
            case 1:
                console.log("Degree similarity dimension\n");
                break;
            case 2:
                console.log("Topic match dimension\n");
                break;
            case 3:
                console.log("Elimination dimension\n");
                break;
            case 4:
                console.log("Can group dimension\n");
                break;
            case 5:
                console.log("Rank dimension\n");
                break;
            case 6:
                console.log("Cumulative score dimension\n");
                break;
            case 7:
                console.log("Relative Rank dimension\n");
                break;
            default:
                console.log("ERROR: 404\n");
                break;
        };

        outputStatement = "";
        for (i = 0; i<studentClass.length; i++) {
            for (n = 0; n<studentClass.length; n++) {
                outputStatement += studentGraph[n][i][p] + "   "; // n i
                if (n == studentClass.length-1) {
                    console.log("%s\n", outputStatement);
                    outputStatement = "";
                }
            }
        }
        console.log("\n");
    }

    for (i = 0; i<studentClass.length; i++) {
        console.log(studentClass[i][0], " can be grouped with: ");
        for (n = 0; n<studentClass.length; n++) {
            if (studentGraph[i][n][4] == 1) {
                console.log(studentClass[n][0],  "with rating ",  studentGraph[i][n][6]);
            }
        }
        console.log("\n");
    }
    for (i=0; i<groups.length; i++) {
        console.log("Group ", (i+1)+"", " is ", groups[i]);
    }

    return 0;
}
