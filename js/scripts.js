$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    let warningSign = [];
    let symptoms= [];
    let copingMethods = [];
    let i = 0; 
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      warningSign[i] = $(this).val();
      alert(warningSign);
      i++;
    });
    i = 0;
    $("input:checkbox[name=symptoms]:checked").each(function(){
      symptoms[i] = $(this).val();
      alert(symptoms);
      i++;
    })
    i = 0;
    $("input:checkbox[name=copingMethods]:checked").each(function(){
      copingMethods[i] = $(this).val();
      alert(copingMethods);
      i++;
    })
  });
});