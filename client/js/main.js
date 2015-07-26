$(document).ready(function(){
  
  var bags=new BagsCollection();
  var bagsCollectionView = new BagsCollectionView({
    collection:bags,
    el:".mainSection"
  });
});
