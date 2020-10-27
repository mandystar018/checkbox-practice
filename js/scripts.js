function example (x){
  alert(x); 
}
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    let warningSigns = [];
    let symptoms= [];
    let copingMethods = [];
    let i = 0; 
    $("input:checkbox[name=warningSigns]:checked").each(function() {
      warningSigns.push($(this).val());
    });
    $("input:checkbox[name=symptoms]:checked").each(function() {
      symptoms[i] = $(this).val();
      i++;
    })
    i = 0;
    $("input:checkbox[name=copingMethods]:checked").each(function() {
      copingMethods[i] = $(this).val();
      i++;
    })
    // example(warningSign);
    if (symptoms.length > 1 && warningSigns.length > 2) {
      alert("holy cow, you need to chill out dude!");
    }
    else if (copingMethods.length > 1) {
      alert("stay cool my dude");
    }
  });
});