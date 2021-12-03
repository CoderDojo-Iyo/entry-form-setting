function setLimit() {
  let form = FormApp.getActiveForm();
  if (countEntries() >= getLimit()) {
    form.setAcceptingResponses(false);
  } else {
    form.setAcceptingResponses(true);
  }
  setDescription();
}

function getLimit() {
  return 10; //ここに人数の上限値を設定
}

function setDescription() {
  let form = FormApp.getActiveForm();
  let stat = "%% 登録状況:" + countEntries() + " 定員:" + getLimit() + " %%";
  form.setDescription(stat);
}

function countEntries() {
  let entries = 0
  let form = FormApp.getActiveForm();
  let responses = form.getResponses();
  for (let i = 0; i < responses.length; i++) {
    let resp = responses[i];
    let items = resp.getItemResponses();
    if (checkCancel(items)) {
      continue;
    }
    entries += getEntries(items);
  }
  return entries;
}

function getEntries(items) {
  let entries = 0;
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.getItem().getTitle() === "参加人数") {
      entries = parseInt(item.getResponse());
      break;
    }
  }
  return entries;
}

function checkCancel(items) {
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.getItem().getTitle().indexOf("参加区分") >= 0) {
      if (item.getResponse() === "参加のキャンセル") {
        return true;
      }
    }
  }
  return false;
}