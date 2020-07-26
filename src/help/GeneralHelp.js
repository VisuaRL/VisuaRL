import React from "react";

function GeneralHelp() {
  return (
    <div id="help-general">
      <div id="introduction">
        <h3>What is reinforcement learning?</h3>

        <p>
          Reinforcement learning is the training of machine learning models to
          make a sequence of decisions. The agent learns to achieve a goal in an
          uncertain, potentially complex environment. In reinforcement learning,
          an artificial intelligence faces a game-like situation. The computer
          employs trial and error to come up with a solution to the problem. To
          get the machine to do what the programmer wants, the artificial
          intelligence gets either rewards or penalties for the actions it
          performs. Its goal is to maximize the total reward. Although the
          designer sets the reward policy–that is, the rules of the game–he
          gives the model no hints or suggestions for how to solve the game.
          It’s up to the model to figure out how to perform the task to maximize
          the reward,
        </p>

        <p className="blockquote-footer small">
          https://deepsense.ai/what-is-reinforcement-learning-the-complete-guide/
        </p>
      </div>

      <div id="types">
        <h3>Model-based vs model-free</h3>

        <p>
          Reinforcement learning can be broadly categorised into two components
          - model-based and model-free RL. Model-based RL concerns itself with
          planning an optimal sequence of actions to maximize long term rewards
          as the model of the environment is provided to it. In our maze
          example, model-based RL would mean that the agent knows exactly how
          the maze works, what rewards are assigned to which tiles and where the
          goal state resides. Then, it's task is simply to plan an optimal
          sequence of steps that will take it from the starting tile to the
          goal. Model-free RL, as the name suggests, does not provide the agent
          with a model of the environment. Instead, the agent has to explore it
          on its own and using information gleamed from exploring the
          environment, figure out the dynamics of the environment on its own and
          then execute a sequence of steps based on its observation at every
          timestep that it perceives will maximize its long term rewards.
        </p>
      </div>

      <div id="rewards">
        <h3>Rewards</h3>

        <p>
          In the past few paragraphs, the idea of reward has been thrown around
          a few times. In this section we will discuss that it is and how it
          guides agent behavior.
        </p>

        <p>
          Whenever an agent executes an action in the environment, it receives a
          reward. This is analogous to our own human experiences of interacting
          with the world. For example, we touch a hot pan and get scalded, that
          gives negative 'reward'. If we have a glass of ice cold water on a hot
          day, that gives us a positive 'reward'. In RL, reward is simply a
          value associated with how good/bad a particular action is. Concretely,
          reward can be defined as <var>r(s,a)</var>, a function of state and
          action. Intuitively, this refers to the reward recieved from being in
          state s and executing action a. In the long run, what the agent seems
          to maximize is its long term cummulative reward, <span>R=...</span>.
          In the equation, <strong>gamma</strong> is the discount factor.
        </p>
      </div>
    </div>
  );
}

export default GeneralHelp;
