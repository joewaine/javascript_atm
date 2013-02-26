$(function(){
$('#depcheck').click(checkingdeposit);
$('#withcheck').click(checkingwithdrawal);
// $('#withcheck').click(alertcolor);
$('#depsav').click(savingsdeposit);
$('#withsav').click(savingswithdrawal);
});


/* get values */
function getvc()
{
return parseInt($('.checkingamount').text());
}

function getvs()
{
return parseInt($('.savingsamount').text());
}

function getvt()
{
return getvs() + getvc();
}

function getchangecheck()
{
return parseInt($('#changechecking').val());
}

function getchangesave()
{
return parseInt($('#changesavings').val());
}

/* = = = = figure-altering functions = = = = */

function checkingdeposit()
{
  $('.checkingamount').text(getvc() + getchangecheck());
}

function checkingwithdrawal()
{
  var withamt = getchangecheck();
  var totbal = getvc() + getvs();
  if(withamt > totbal){
    alert('not enough money');
  }
  else if(withamt < getvc()){
  $('.checkingamount').text(getvc() - withamt);
  }
  else {
    var newwithamt = withamt - getvc();
    $('.checkingamount').text(0);
    $('.savingsamount').text(getvs() - newwithamt);
  }
}

function savingsdeposit()
{
  $('.savingsamount').text(getvs() + getchangesave());
}

function savingswithdrawal()
{
  $('.savingsamount').text(getvs() - getchangesave());
}

function alertcolor()
{
  var totbal = getvc() + getvs();
  if(totbal = '0')
  {
    $('body').addClass('redbox');
  }
}
