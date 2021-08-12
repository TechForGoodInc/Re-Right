# **Machine Learning**

### What We Implemented:

Hate Speech Detection:
-NLP classification models screening tweets
-Comparison of models built using RNN, Transformers and Feed Forward networks. See HateSpeechDetector_RNN.ipynb and HateSpeechDetector_Transformer.ipynb.

Custom Dataset
-Twitter API utilized to collect user bios and recent tweets
-Data queries to find posts containing different categories of hate speech, plus a control group of random data
-Hand labelling data by hate speech classification

Data Analysis
-Gaussian Mixture Models for detecting similarities among human rights violation reports. See ClusterHRV_Reports.ipynb
- Matching Users based on bios (in progress)

### Next Steps:

Enhance our classification and mixture models using our custom curated Twitter datasets. Collect and label additional datasets for new models and performance analysis.

Utilize live data from the ReRight platform as its user base expands.

### Key Issues Faced and Our Solutions:

The primary impediment was a lack of user data from which to train our models. Relevant public datasets we found were either of low quality, small sample size or written very differently than would be seen in our eventual user base. 

Since there is not yet any ReRight user data to utilize, we began building our own datasets using the Twitter API. A simple yet very time-consuming task is to hand-label custom datasets in large quantities. We have done this for thousands of tweets, but scaling this up into the tens of thousands will remain a challenge for the next internship team.

### Helpful Materials:

Paper creating dataset on rights violations: "Paragraph-level Rationale Extraction through Regularization: A case study on European Court of Human Rights Cases"
[https://arxiv.org/abs/2103.13084](https://arxiv.org/abs/2103.13084)

Paper creating custom text pre-processing and transformers for human rights reports:  ""LEGAL-BERT: The Muppets straight out of Law School" 
[https://aclanthology.org/2020.findings-emnlp.261](https://aclanthology.org/2020.findings-emnlp.261)

Pretrained transformers and text preprocessing models for HRV reports:
[https://huggingface.co/nlpaueb/legal-bert-base-uncased](https://huggingface.co/nlpaueb/legal-bert-base-uncased)

Public Kaggle hate speech dataset:
[https://www.kaggle.com/mathurinache/ecthrnaacl2021](https://www.kaggle.com/mathurinache/ecthrnaacl2021)

General BERT transformer models for transfer learning:
[https://tfhub.dev/google/collections/bert/1](https://tfhub.dev/google/collections/bert/1)

MediaPipe face detection system: 
[https://google.github.io/mediapipe/solutions/face_detection](https://google.github.io/mediapipe/solutions/face_detection)

Twitter Developer Account application: 
[https://developer.twitter.com/en/apply-for-access](https://developer.twitter.com/en/apply-for-access)
