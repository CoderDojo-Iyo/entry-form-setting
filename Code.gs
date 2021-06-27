function setLimit() {
  var form = FormApp.getActiveForm();
  var resp = form.getResponses();
  var cannum = countCancels();
  if (resp.length - cannum >= getLimit()) {
    form.setAcceptingResponses(false);
  }
  setDescription();
}

function getLimit() {
  return 10; //ここに人数の上限値を設定
}

function setDescription() {
  var form = FormApp.getActiveForm();
  var resp = form.getResponses();
  var atnd = resp.length - countCancels();
  var stat = "%% 登録状況:" + atnd + " 定員:" + getLimit() + " %%";
  var dscr = form.getDescription;
  form.setDescription(stat);
}

function countCancels() {
  var cannum = 0
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();
  for (var i = 0; i < formResponses.length; i++) {
    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
      if (itemResponse.getItem().getTitle() === "参加またはキャンセル") {
        if (itemResponse.getResponse() === "キャンセルする") {
          var cannum = cannum + 1;
        }
      }
    }
  }
  return cannum;
}