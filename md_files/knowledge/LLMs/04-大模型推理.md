---
title: 大模型训练
sidebar: true
# isShowComments: true
---
# 大模型训练

<ClientOnly>
<title-pv/>
</ClientOnly>


## 数据准备

数据通常分为通用数据，如网页、书籍、对话；以及专业数据，如多语言数据、科学文本（学术论文）、代码等等

## 数据清洗

为保证大模型使用高质量语料训练，通常需要质量过滤，包括冗余去除、隐私消除、词元切分等步骤

## 数据选取、划分

### Scaling Law
对于计算量$C$，模型参数量$N$，和数据集大小$D$，当不受其他两个因素制约时，模型性能$L$与每个因素都呈现幂律关系，且随着每个因素的量增大，对模型的效果提升越有限。目前已经有研究证明，模型参数量上升时，数据量也需要等比例上升。

### 数据选取方法
* Data Mixing Laws：通过在小规模数据和模型上进行实验，利用训练步数、模型大小和数据混合比例的缩放定律（Scaling Laws），来预测在大规模数据和大型模型上的性能
* DoGE/LESS：重点学习对整体梯度贡献较大的领域，可以使用影响函数来量化每条训练数据对模型的影响。但通常在大模型上直接计算影响函数是困难的，因此可以先知识蒸馏，在小模型上用影响函数分析什么样的数据是关键的
* REGMIX：使用多种数据配比训练一组小型模型，并拟合一个回归模型来预测给定各自配比的模型的性能。利用拟合的回归模型，可以模拟排名最高的配

## 训练过程

### Pre-train

### SFT

### RLHF

## PPO、DPO

### PPO
* Reward Model

### DPO

### 两者的优势与不足

## 微调技术
### Adapter tuning
### Prompt tuning
### Prefix tuning
### Fine tuning
### P-tuning
### Freeze tuning
### LoRA
### QLoRA

## Tokenizer
### Byte-Pair Encoding(BPE)
### WordPiece
### SentencePiece
### Unigram
### 词汇表不全、过大问题
### 各路LLM的Tokenizer

## 训练损失函数

### BERT

* MLM（Masked Language Model）
* GPT

### GPT

<ClientOnly>
  <leave/>
</ClientOnly/>