

/**
 * params.data: activity data.
 * params.actionURL: What "submit" button will do. 
 * params.actionMethod: GET, POST or PUT. Default 'POST'.
 * params.submitBtnLabel. Default 'Submit'
 * params.resetBtnLabel. Default 'Reset'.
 * params.labelInputDecorator(labelTag, inputTag): Anonymous function to decorate how '<label/>' and '<input />' generated.
 * params.btnDecorator(submitBtn, resetBtn): Anonymous function to decorate how '<submit />' and '<reset />' button generated.
 */
function createActivitiForm(params) {
  var data = params.data;
  var actionURL = params.actionURL;
  var actionMethod = (params.actionMethod == undefined || params.actionMethod == '') ? 'POST' : params.actionMethod;
  var submitBtnLabel = (params.submitBtnLabel == undefined || params.submitBtnLabel == '') ? 'Submit' : params.submitBtnLabel;
  var resetBtnLabel = (params.resetBtnLabel == undefined || params.resetBtnLabel == '') ? 'Reset' : params.resetBtnLabel;

  var labelInputDecorator = (params.labelInputdecorator == undefined) ? 
    function(labelTag, inputTag) {
      return '<div>' + labelTag + ': ' + inputTag + '</div>';
    } 
    : params.labelInputDecorator;

  var btnDecorator = (params.btnDecorator == undefined) ? 
    function(submitTag, resetTag) { 
      return '<div><span>' + submitTag + '</span> &nbsp; <span>' + resetTag + '</span></div>'; 
    } 
    : params.btnDecorator;

  var formString = '<form action="' + actionURL + '" method="' + actionMethod + '">';
  for (var row in data) {
    var dataRowName = data[row].name;
    var dataRowValue = data[row].value;
    var labelTag = '<label for="' + dataRowName + '">' + dataRowName + '</label>';
    var inputTag = '<input id="' + dataRowName + '" name="' + dataRowName + '" value="' + dataRowValue + '" />';
    formString += labelInputDecorator(labelTag, inputTag);
  }

  var submitBtn = '<input name="submit" type="submit" value="' + submitBtnLabel + '">';
  var resetBtn = '<input name="reset" type="reset" value="' + resetBtnLabel + '">';

  formString += btnDecorator(submitBtn, resetBtn);
  formString += '</form>';

  return formString;
}


