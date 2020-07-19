

export const generateId = function () {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


export const generateTodoPhrase = function () {
  let result = '';
  let choices = ["Where to begin ", "Down to business ", "Time to work", "One at a time ", "Todays todos"]
  result = choices[Math.floor(Math.random() * choices.length)]
  return result
}