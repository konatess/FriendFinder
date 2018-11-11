// hard coded examples, mainly for grading purposes
var friendsArr = [
    {
        name: "Snake",
        photo: "https://media.mnn.com/assets/images/2017/02/blue-snake.jpg.653x0_q80_crop-smart.jpg",
        scores: [1, 1, 4, 5, 5, 1, 2, 1, 2, 1]
    },
    {
        name: "Dog",
        photo: "https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1085%2Cy_0%2Cw_2578%2Ch_3437%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_757946224.jpg",
        scores: [1, 3, 1, 2, 1, 5, 1, 5, 1, 1]
    },
    {
        name: "Octopus",
        photo: "https://cms.qz.com/wp-content/uploads/2018/11/40959991474_2e3d23c436_o-2.jpg?quality=75&strip=all&w=410&h=231",
        scores: [5, 5, 4, 1, 2, 1, 1, 1, 3, 4]
    },
    {
        name: "Pangolin",
        photo: "https://www.rainforest-rescue.org/uploads/photos/article/wide/l/baby-pangolin-interpoliert.jpg",
        scores: [1, 4, 5, 1, 1, 2, 5, 1, 1, 5]
    }, 
    {
        name: "Platypus",
        photo: "http://www.wiresnr.org/images/platypus6.jpg",
        scores: [1, 5, 5, 1, 1, 3, 1, 3, 2, 5]
    }
];

// MODULE FOR EXPORT
// includes matching logic
module.exports = function(newFriend) {
    // if 
    if (newFriend !== null) {
        // take scores from strings to integers
        newScores = newFriend.scores
        for (i = 0; i < newScores.length; i++) {
            num  = parseInt(newScores[i]);
            newScores[i] = num;
        }
        // update the scores in newFriend to the new integers array
        newFriend.scores = newScores;
        // 10 questions * 4(greatest possible difference between 1 and 5)
        // initiallizing leastDiff at max difference
        var leastDiff = 40;
        var matchIndex = 0;
        // new score from input
        var sc = newFriend.scores;
        for (i = 0; i < friendsArr.length; i++) {
            var totalDiff = 0;
            // friend scores
            var fsc = friendsArr[i].scores;
            // caluculate the difference 
            for (j = 0; j < sc.length; j++) {
                var diff = sc[j] - fsc[j];
                // eliminate negative results
                if (diff < 0) {
                    diff = diff * -1;
                }
                // add to total
                totalDiff += diff;
            }
            // check against previous results
            if (totalDiff < leastDiff) {
                leastDiff = totalDiff;
                matchIndex = i;
            }
        }
        // add the new data to the array
        friendsArr.push(newFriend);
        // return the matching friend
        return friendsArr[matchIndex];
    }
    else {
        // this should never show up now that new friends are added from the front end
        console.log("Error: no new friend was added.")
    }
};