/* Using Test Data:

class which consists of a 3D array of students
program will use this 3D array to form the graph and do sorting until backend has been implemented correctly

NOTE #1:
    - Use a drop down menu to select degree and topics then save these as numbers in the database...
      these numbers can then be setup as to group relevant topics and degrees by value saving processing later
        - E.g. (2 -> programming) (15 -> robotics) (43 -> medicine) and the numbers around them are similar topics
        - E.g. (1 -> engineering) (27 -> nursing) (15 -> business) 

NOTE #2:
    - 

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
        [false, true, false, true, false, true, false]],
    ["Maxwell Harries", 
        false, [1, 26], [2, 43, 15], 
        [false, true, false, true, false, false, false]],
    ["Natasha Roblosk", 
        false, [27, 0], [43, 48, 29], 
        [true, true, false, true, false, false, true]],
    ["Rachael Ozich", 
        false, [27, 0], [75, 43, 51], 
        [true, true, true, true, true, false, true]],
    ["Sam Holmes", 
        false, [31, 0], [43, 13, 15], 
        [false, true, false, true, false, true, false]],
    ["Nick Hoop", 
        false, [4, 30], [2, 13, 15], 
        [false, true, true, true, false, true, true]],
    ["Alex Jameson", 
        false, [1, 4], [2, 13, 15], 
        [false, false, false, true, false, true, false]]
];

function AutoSort(studentClass, groupSize) {
    var groups = new Array(); // return variable

    // Create Student Graph - i*n array relationship between students
    var studentGraph = new Array(studentClass.length);
    for (i = 0; i<studentClass.length; i++) {
        studentGraph[i] = new Array(studentClass);
        for (n = 0; n<studentClass.length; i++) {
            studentGraph[i][n] = new Array(5).fill(0);
        }
    }

    for (i = 0; i<studentGraph.length; i++) {
        for (n = 0; n<studentGraph[i].length; n++) {
            if (i != n) {
                // Day availability [i][n][0]
                for (p = 0; p<7; p++) {
                    if (studentClass[i][3][p] && studentClass[n][3][p]) {
                        studentGraph[i][n][0] = 1;
                    }
                }
                // Degree similarity [i][n][1]
                if (studentClass[i][1][0] == studentClass[n][1][0]) {
                    studentGraph[i][n][1] = 1;
                    if (studentClass[i][1][1] == studentClass[n][1][1]) {
                        studentGraph[i][n][1] = 2;
                    }
                }
                // Topic match [i][n][2]
                for (p = 0; p<3; p++) {
                    if (studentClass[i][2][p] == studentClass[n][2][p]) {
                        studentGraph[i][n][1]++;
                    }
                }
                // Cumulative score [i][n][3]
                for (p = 0; p<3; p++) {
                    studentClass[i][n][3]+=studentClass[i][n][p];
                }
                // Can group [i][n][4]
                if (studentClass[i][n][0] && studentClass[i][n][3]>0) {
                    studentClass[i][n][4] = 1;
                }
            }
        }
    }


    return groups;
}

AutoSort(studentClass, 5);