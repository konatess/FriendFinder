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

  module.exports = function(newFriend) {
    if (newFriend !== null) {
        newScores = newFriend.scores
        for (i = 0; i < newScores.length; i++) {
            num  = parseInt(newScores[i]);
            newScores[i] = num;
        }
        newFriend.scores = newScores;
        // 10 questions * 4(greatest possible difference between 1 and 5)
        var leastDiff = 40;
        var matchIndex = 0;
        // new score from input
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
            }
        }
    }
    
    friendsArr.push(newFriend);
    return friendsArr[matchIndex];
  };