if (payload.FaceRec.face_array && payload.FaceRec.face_array.length > 0) {
    var objs = payload.FaceRec.face_array;
  
    for (var i = 0; i < objs.length; i++) {
      for (var j = 0; j < objs.length - 1; j++) {
        if (objs[j].x > objs[j + 1].x) {
          // Swap
          var tmp = objs[j];
          objs[j] = objs[j + 1];
          objs[j + 1] = tmp;
        }
      }
    }
  } else {
    // Handle the case when payload.FaceRec.face_array is empty or undefined
    // No console.log here
  }