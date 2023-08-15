import * as tf from "@tensorflow/tfjs";

const modelPath =
  "https://raw.githubusercontent.com/raj-pulapakura/Comment-Toxicity-Checker-Model/master/ctc/model.json";
const vocabPath =
  "https://raw.githubusercontent.com/raj-pulapakura/Comment-Toxicity-Checker-Model/master/ctc/tokenizer_dictionary.json";

async function loadTokenizer() {
  let tknzr = await fetch(vocabPath);
  let tknzrJSON = await tknzr.json();

  return tknzrJSON;
}

function tokenize(tokenizer: any, text: string) {
  // preprocessing
  text = text.toLowerCase();
  text = text.replace(/[!"#$%&()*+,-./:;<=>?@\[\\\]\^_`{|}~\t\n]/g, "");
  const words = text.split(" ");
  const tokens: number[] = [];

  // convert words into integer sequence
  words.forEach((word) => {
    if (tokenizer[word] != undefined) {
      tokens.push(tokenizer[word]);
    }
  });

  // pad and truncate sequence (maximum length = 300)
  let modelInput = tf.tensor1d([]);
  const maxLen = 300;

  if (tokens.length > maxLen) {
    // truncate
    modelInput = tf.tensor1d(tokens.slice(0, maxLen));
  } else if (tokens.length < maxLen) {
    // pad
    tf.Tensor;
    modelInput = tf.pad(tokens, [[0, maxLen - tokens.length]]) as tf.Tensor1D;
  }

  return modelInput;
}

export async function predict(text: string) {
  // load tokenizer
  let tokenizer = await loadTokenizer();
  // convert sentence to tokens
  let tokens = tokenize(tokenizer, text);
  // put tokens in batch format
  tokens = tf.expandDims(tokens, 0);
  // load model
  const model = await tf.loadLayersModel(modelPath);
  // make prediction
  let prediction = model.predict(tokens) as tf.Tensor2D;
  // return prediction tensor as array
  return prediction.dataSync();
}
