/*
function filterImg() {
  //restore the user search
  var input = document.getElementById('searchbox');
  var filter = input.value.toUpperCase();

  //restore all the image data
  var imageData = document.querySelectorAll('a[data-title]');

  // Loop through the image data and filter
  for(i = 0; i < imageData.length; i++) {
    if(imageData[i].getAttribute('data-title').toUpperCase().includes(filter)) {
      imageData[i].style.display = "";
    } else {
      imageData[i].style.display = "none";
    }
  }


}  */

// For the search

$('#search').keyup(function(){
    
        let userSearch = $('#search').val();
        userSearch = userSearch.toLowerCase();
    
        let match = document.querySelectorAll('a[data-title]');
    
        for (i = 0; i < match.length; i++) {
    
        if (match[i].getAttribute('data-title').toLowerCase().includes(userSearch)) {
        match[i].style.display='inline';
        } else {
        match[i].style.display='none';
        }
      }
    });