UploadedPosts = [1,2,3];
let NumberOfUploadedPosts = UploadedPosts.length;
console.log(UploadedPosts+" "+NumberOfUploadedPosts);
let posts = []

function check_enter() {
  if (event.keyCode == 13) {
    event.returnValue=false;
  }
}

function newpost() {
  let textareaValue = document.getElementById('textarea').value;
  posts.push(textareaValue);
  alert.("posts[posts.length-1]");
}
