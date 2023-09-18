# 🗨️ Comment Toxicity Checker

🤗 [Make the world a kinder place by checking your sentences for toxicity](https://comment-toxicity-checker.vercel.app/).

![s1](https://github.com/raj-pulapakura/Comment-Toxicity-Checker/assets/87762282/6111500f-3c0c-4495-9f8d-76f456c1db7d)

## 📖 What is it?

It's an interface which classifies an input sentence into 6 categories of toxicity:
- toxic
- severe toxic
- obscene
- threat
- insult
- identity hate

So before you post that snarky comment on Twitter, check it for toxicity so that you don't lose social credit 😔.

## ⚙️ How does it work?

Behind the scenes, the website uses a Natural Language Processing model to predict the probability that a sentence belongs to each of the six toxicity categories.

Here's a highly simplified walk-through of how the model works:

1. Convert the sentence into numbers (called word embeddings)
2. Shove the word embeddings into an NLP Deep Neural Network
3. The model outputs the probabilities that the original sentence is toxic, severe toxic, obscene, threat, insult and identity hate.

I used a pretrained model but fine-tuned it on this [Kaggle dataset](https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/data).

## 🤗 What can you do?

I welcome any contributions, whether its a brand-new feature or a typo fix.

If you see any areas of improvement regarding the website, feel free to send a pull request.

