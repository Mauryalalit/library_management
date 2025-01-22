var globtr; 
$(document).ready(function(){
    $('#studentTable').DataTable();
    $("#studentmodel").on("hidden.bs.modal", function () {
      clear();
    });

    $('#submitstudent').click(function(){
      let name = document.getElementById('usr').value;
      let studentId = document.getElementById('StudentID').value;
      let contectno = document.getElementById('contactnumber').value;
      let dob = document.getElementById('StudentDOB').value;
      let address = document.getElementById('Address').value;
      let adharcard = document.getElementById('Adharcard').value;
      let expirydate = document.getElementById('ExpiryDate').value;
     
      let student=new Student(name,studentId,contectno,dob,address,adharcard,expirydate)
  
      let display=new Display();
      if(display.validate(student))
      {
          display.add(student)
         display.show('success','Student has been added successfully');
      }
      else{
        console.log("Validation Failed");
        display.show('danger','Validation Failed');
      }

    });

    $('#savestudent').click(function(){
      let studentid=$('#StudentID').val();
      let studentname=$('#usr').val();
      let contactno=$('#contactnumber').val();
      let studentdob=$('#StudentDOB').val();
      let address=$('#Address').val();
      let adharcard=$('#Adharcard').val();
      let expirydate=$('#ExpiryDate').val();
      var tr = globtr;
      console.log(tr);
      tr.find("td:eq(0)").html(studentid);
      tr.find("td:eq(1)").html(studentname);
      tr.find("td:eq(3)").html(contactno);
      tr.find("td:eq(5)").html(studentdob);
      tr.find("td:eq(6)").html(address);
      tr.find("td:eq(7)").html(adharcard);
      tr.find("td:eq(8)").html(expirydate);
      let display=new Display();
      display.show('success','Student Data has been edited successfully')
    });
    $('#addstudent').click(function(){
      $('#savestudent').hide()
      $('#submitstudent').show()
    })
      
    });

$(function () {
$("#datetimepicker1").datepicker()
});

$(function () {
 $("#datetimepicker2").datepicker({
  startDate: Date()
 })

});

  
function Student(name, studentId, contectno, dob, address,adharcard, expirydate){
  this.name=name
  this.studentId=studentId
  this.contectno=contectno
  this.dob=dob
  this.address=address
  this.adharcard=adharcard
  this.expirydate=expirydate
}

function Display(){
}

Display.prototype.add =function(student){
  console.log("Add method called");
  tableBody=document.getElementById('tableBody')
  let uiString= `<tr id="rowdelete ${student.studentId}">
                   <td>${student.studentId}</td>
                   <td>${student.name}</td>
                   <td>Active</td>
                   <td>${student.contectno}</td>
                   <td>
                    <button type="button" class="btn btf" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="view(this)">View</button>
                    <button type="button" class="btn btf" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="edit(this)" id="edit">Edit</button>
                    <button type="button" class="btn btf" id="del" onclick="del(this)">Delete</a></button>
                </td>
                <td class="hidden">${student.dob}</td>
                <td class="hidden">${student.address}</td>
                <td class="hidden">${student.adharcard}</td>
                <td class="hidden">${student.expirydate}</td>
                </tr>`;
  tableBody.innerHTML += uiString              
}


Display.prototype.validate=function(student){
  console.log(student.name.length>2 )
  // console.log(student.address.length>20)
  if(student.name.length<2)
  {
   return false
  }
  else{
   return true
  }
}

Display.prototype.show=function(type,displaymessage){
  let message = document.getElementById('message')
  message.innerHTML=`<div class="alert alert-${type} alert-dismissible" role="alert">
  <strong>Message:</strong> ${displaymessage}
</div>`
  
   setTimeout(function(){
     message.innerHTML=''
   },4000)
}

function edit(element){
      var tr = $(element).closest("tr");
       globtr=tr;
      var Studentid = tr.find("td:eq(0)").html();
      var Studentname = tr.find("td:eq(1)").html();
      var contactno = tr.find("td:eq(3)").html();
      var dob = tr.find("td:eq(5)").html();
      var address = tr.find("td:eq(6)").html();
      var adharcard = tr.find("td:eq(7)").html();
      var expiryDate = tr.find("td:eq(8)").html();
      
      $('#StudentID').val(Studentid).attr("readonly", true);
      $('#usr').val(Studentname);
      $('#contactnumber').val(contactno);
      $('#StudentDOB').val(dob);
      $('#Address').val(address);
      $('#Adharcard').val(adharcard);
      $('#ExpiryDate').val(expiryDate);
      
      $('#savestudent').show()
      $('#submitstudent').hide()
  }

function clear(){
  $('#StudentID').val("");
  $('#usr').val("");
  $('#contactnumber').val("");
  $('#StudentDOB').val("");
  $('#Address').val("");
  $('#Adharcard').val("");
  $('#ExpiryDate').val("");

  $("#StudentID").attr("readonly", false);
  $('#usr').attr("readonly", false);
  $('#contactnumber').attr("readonly", false);
  $('#StudentDOB').attr("readonly", false);
  $('#Address').attr("readonly", false);
  $('#Adharcard').attr("readonly", false);
  $('#ExpiryDate').attr("readonly", false);

  globtr="";

  $(function () {
    $("#datetimepicker1").datepicker()
    });
    
    $(function () {
     $("#datetimepicker2").datepicker()
    })
}

function view(element){
  var tr = $(element).closest("tr");
  var Studentid = tr.find("td:eq(0)").html();
  var Studentname = tr.find("td:eq(1)").html();
  var contactno = tr.find("td:eq(3)").html();
  var dob = tr.find("td:eq(5)").html();
  var address = tr.find("td:eq(6)").html();
  var adharcard = tr.find("td:eq(7)").html();
  var expiryDate = tr.find("td:eq(8)").html();
  
  $('#StudentID').val(Studentid);
  $('#usr').val(Studentname);
  $('#contactnumber').val(contactno);
  $('#StudentDOB').val(dob);
  $('#Address').val(address);
  $('#Adharcard').val(adharcard);
  $('#ExpiryDate').val(expiryDate);

  $("#StudentID").attr("readonly", true);
  $('#usr').attr("readonly", true);
  $('#contactnumber').attr("readonly", true);
  $('#StudentDOB').attr("readonly", true);
  $('#Address').attr("readonly", true);
  $('#Adharcard').attr("readonly", true);
  $('#ExpiryDate').attr("readonly", true);

  $('#savestudent').hide()
  $('#submitstudent').hide()

  $( "#datetimepicker1" ).datepicker("remove");
  $( "#datetimepicker2" ).datepicker("remove");
}

function del(element){
  var result = confirm("Do you want to delete your data ?");
if (result) {
    $(element).closest("tr").remove()
}
}


$('#addstudent').click(function(){
  let randomid=Math. floor(1000+Math. random() * 9000)
  $('#StudentID').val(randomid);
  $("#StudentID").attr("readonly", true);
})


