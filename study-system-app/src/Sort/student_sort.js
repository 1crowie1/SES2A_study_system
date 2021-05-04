/* Using Test Data:

class which consists of a 3D array of students
program will use this 3D array to form the graph and do sorting until backend has been implemented correctly

NOTE #1:
    - Use a drop down menu to select degree and topics then save these as numbers in the database...
      these numbers can then be setup as to group relevant topics and degrees by value saving processing later
        - E.g. (2 -> programming) (15 -> robotics) (43 -> medicine) and the numbers around them are similar topics
        - E.g. (1 -> engineering) (27 -> nursing) (15 -> business) 
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

autoGroup = AutoSort(studentClass, 5);
// randGroup = RandSort(studentClass, 5);


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
            studentGraph[i][n] = new Array(5).fill(0);
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
                studentGraph[i][n][3] = studentGraph[i][n][1] + studentGraph[i][n][2];
                // Can group [i][n][4]
                if (studentGraph[i][n][0] && studentGraph[i][n][3]>0) {
                    studentGraph[i][n][4] = 1;
                }
                
                outputStatement+= studentGraph[i][n] + "   ";
                if (n == 9) {
                    console.log("%s\n\n\n", outputStatement);
                    outputStatement = "";
                }
            }
        }
    }

    //print out graph layers
    for (p = 0; p<5; p++) {
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
                console.log("Cumulative score dimension\n");
                break;
            case 4:
                console.log("Can group dimension\n");
                break;
            default:
                console.log("ERROR: 404\n");
                break;
        };
        outputStatement = "";
        for (i = 0; i<studentClass.length; i++) {
            for (n = 0; n<studentClass.length; n++) {
                outputStatement += studentGraph[i][n][p] + " ";
                if (n == studentClass.length-1) {
                    console.log(outputStatement);
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
                console.log(studentClass[n][0],  "with rating ",  studentGraph[i][n][3]);
            }
        }
        console.log("\n");
    }


    return 0;
}
