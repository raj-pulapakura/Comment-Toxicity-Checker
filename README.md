# Comment Toxicity Checker

![screencapture-comment-toxicity-checker-vercel-app-2023-12-12-23_01_29](https://github.com/raj-pulapakura/Comment-Toxicity-Checker/assets/87762282/5e5ac56b-083f-4341-ac8a-a6ed9d04d304)

## 📖 How it works

[Comment Toxicity Checker](https://comment-toxicity-checker.vercel.app/) is a website which allows you to type in a sentence, and using ML, get a rating on whether that sentence is "toxic".

Specifically, the website tells to what degree your sentence is toxic, by giving it a rating from 0% to 100%. It calculates this rating for six toxicity categories:

- toxic
- severe toxic
- obscene
- threat
- insult
- identity hate

![screencapture-comment-toxicity-checker-vercel-app-2023-12-12-23_07_00](https://github.com/raj-pulapakura/Comment-Toxicity-Checker/assets/87762282/ba13c7f6-80ab-427e-84fd-adce16e3491e)

## 🤔 How does it work (high-level)?

Behind the scenes, the website uses a Natural Language Processing model to predict the probability that a sentence belongs to each of the six toxicity categories.

Here's a highly simplified walk-through of how the model works:

1. Feed the into an NLP model.
2. The model outputs the probabilities that the original sentence is toxic, severe toxic, obscene, threat, insult and identity hate.

## ⚙️ How does it work (low-level)?

I built a text classification model using TensorFlow to predict probablities for each toxicity class.

The model uses pretrained word embeddings, but I fine-tuned it on this [Kaggle dataset](https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/data).

If you would like to view the model training procedure, check out this [Kaggle notebook](https://www.kaggle.com/code/rajpulapakura/comment-toxicity-classification).

After training the model, I converted it into the `TensorFlowLite` format (an efficient TensorFlow model format designed for edge devices) and stored it in this repository in the directory `model`.

Through the `TensorFlowJS` API, the website is able to load the model from this repository. 

Tokenization is performed on the client itself before passing the sentence to the model; this is possible because `TensorFlowLite` saves the tokenizer dictionary - find it at `model/tokenizer_dictionary.json`.

## 🤗 Contributions

Any contributions are welcome, whether its a brand-new feature or a typo fix.

If you would like to see a feature implemented, raise an Issue.

If you want to contribute to the project, feel free to send a PR.

