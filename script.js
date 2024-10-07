UploadedPosts = [1,2,3];
let NumberOfUploadedPosts = UploadedPosts.length;
console.log(UploadedPosts+" "+NumberOfUploadedPosts);

function check_enter() {
  if (event.keyCode == 13) {
    event.returnValue=false;
  }
}
