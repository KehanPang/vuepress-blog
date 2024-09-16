---
title: Reinforce Learning
sidebar: true
# isShowComments: true
---
# Reinforce Learning
<ClientOnly>
<title-pv/>
</ClientOnly>

<embed src="/pdf/16-ReinforceLearning.pdf" type="application/pdf" width="100%" height="1000px" />

<!-- Reinforcement Learning (RL) revolves around the idea of learning optimal actions in an environment by interacting with it. The goal is to maximize cumulative rewards over time. Mathematically, RL is often described using the following components and formulas:

### 1. **Markov Decision Process (MDP)**

An RL problem can be modeled as a Markov Decision Process (MDP), represented by the tuple <smalltex> \langle S, A, P, R, \gamma \rangle </smalltex>:

- <smalltex> S </smalltex>: Set of states
- <smalltex> A </smalltex>: Set of actions
- <smalltex> P(s' | s, a) </smalltex>: Transition probability from state <smalltex> s </smalltex> to <smalltex> s' </smalltex> given action <smalltex> a </smalltex>
- <smalltex> R(s, a) </smalltex>: Reward received when taking action <smalltex> a </smalltex> in state <smalltex> s </smalltex>
- <smalltex> \gamma </smalltex>: Discount factor, where <smalltex> 0 \leq \gamma \leq 1 </smalltex>

### 2. **Policy <smalltex> \pi </smalltex>**

A policy <smalltex> \pi(a|s) </smalltex> defines the probability of taking action <smalltex> a </smalltex> in state <smalltex> s </smalltex>.

### 3. **Return <smalltex> G_t </smalltex>**

The return <smalltex> G_t </smalltex> is the total accumulated reward from time <smalltex> t </smalltex>, and is defined as:
<div style="text-align: center;"><tex>
G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \dots = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}
</tex></div>

### 4. **Value Function <smalltex> V^\pi(s) </smalltex>**

The value function represents the expected return starting from state <smalltex> s </smalltex> and following policy <smalltex> \pi </smalltex>:
<div style="text-align: center;"><tex>
V^\pi(s) = \mathbb{E}^\pi \left[ G_t | s_t = s \right] = \mathbb{E}^\pi \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} | s_t = s \right]
</tex></div>

### 5. **Action-Value Function <smalltex> Q^\pi(s, a) </smalltex>**

The action-value function gives the expected return when taking action <smalltex> a </smalltex> in state <smalltex> s </smalltex> under policy <smalltex> \pi </smalltex>:
<div style="text-align: center;"><tex>
Q^\pi(s, a) = \mathbb{E}^\pi \left[ G_t | s_t = s, a_t = a \right]
</tex></div>

### 6. **Bellman Equation for <smalltex> V^\pi(s) </smalltex>**

The Bellman equation expresses the recursive relationship of the value function:
<div style="text-align: center;"><tex>
V^\pi(s) = \sum_{a} \pi(a|s) \sum_{s'} P(s'|s,a) \left[ R(s,a) + \gamma V^\pi(s') \right]
</tex></div>

### 7. **Optimal Policy <smalltex> \pi^* </smalltex>**

The goal in RL is to find the optimal policy <smalltex> \pi^* </smalltex> that maximizes the expected return. The optimal value function satisfies:
<div style="text-align: center;"><tex>
V^*(s) = \max_a Q^*(s, a)
</tex></div>

### Example: Cart-Pole Balancing Problem

The Cart-Pole is a classic RL example where an agent needs to balance a pole on a cart by applying forces (actions) to move the cart left or right. The goal is to keep the pole upright for as long as possible.

- **State (S)**: The current position and velocity of the cart, and the angle and angular velocity of the pole.
- **Actions (A)**: Apply force to move the cart left or right.
- **Rewards (R)**: +1 for every time step the pole remains upright, and 0 if the pole falls over.
- **Policy <smalltex> \pi </smalltex>**: A strategy that maps states (cart and pole's conditions) to actions (which direction to move the cart).

The agent learns through trial and error by interacting with the environment, adjusting its policy to maximize the total accumulated reward over time. This can be done using various algorithms like Q-learning or policy gradient methods.

In summary, Reinforcement Learning is about finding the optimal policy <smalltex> \pi^* </smalltex> to maximize long-term rewards through the use of value functions and iterative updates based on the environment's feedback. -->
<ClientOnly>
  <leave/>
</ClientOnly/>