var friendsArr = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }];

  module.exports = function(newFriend) {
    //   console.log("before if: ", newFriend)
    if (newFriend !== null) {
        // console.log("inside if: ", newFriend)
        // console.log(newFriend.scores)
        newScores = newFriend.scores
        // console.log(newScores)
        for (i = 0; i < newScores.length; i++) {
            num  = parseInt(newScores[i]);
            newScores[i] = num;
        }
        // console.log(newScores);
        newFriend.scores = newScores;
        // new score from input
        var leastDiff = 40;
        var matchIndex = 0;
        var sc = newFriend.scores;
        for (i = 0; i < friendsArr.length; i++) {
            var totalDiff = 0;
            var fsc = friendsArr[i].scores;
            for (j = 0; j < sc.length; j++) {
                var diff = sc[j] - fsc[j];
                if (diff < 0) {
                    diff = diff * -1;
                }
                totalDiff += diff;
            }
            if (totalDiff < leastDiff) {
                leastDiff = totalDiff;
                matchIndex = i;
                console.log("Match index is ", matchIndex)
            }
        }
    }
    // friendsArr.push(newFriend);
    return friendsArr[matchIndex];
  };