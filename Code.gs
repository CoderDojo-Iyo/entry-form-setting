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
  return 8; //ここに人数の上限値を設定
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
    for (var j = 0; j < items.length; j++) {
      let item = items[j];
      if (item.getItem().getTitle() === "参加人数") {
        entries = entries + parseInt(item.getResponse());
      }
    }
  }
  return entries;
}