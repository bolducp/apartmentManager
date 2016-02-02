'use strict'

$(document).ready(init);

function init(){
  $('#submit').click(addTenant);
  $('#addToApt').click(addToApt);
}

function addTenant(e){
  e.preventDefault();
  var name = $('#firstName').val() + " " + $('#lastName').val();
  var phone = $('#phone').val();
  var email = $('#email').val();
  var dob = $('#dob').val();

  var newTenant = {name: name, phone: phone, email: email, dob: dob};

  $.post('/tenants/create', newTenant)
    .success(function(data){
      window.location = "/tenants/all";
      console.log(newTenant, data);
    });
  }


function addToApt(e){
  e.preventDefault();
  var id = $('#id').val();
  var aptNum = $('#aptNum').val();

  var  toAdd = {id: id, aptNum: aptNum};

  $.post('/tenants/addToApt', toAdd)
    .success(function(data){
      window.location = "/tenants/all";
      console.log(toAdd, data);
    });
  }
