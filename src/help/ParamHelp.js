import React from "react";
import { Modal } from "react-bootstrap";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

function ParamHelp(props) {
  return (
    <Modal
      dialogClassName="help-modal"
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Parameters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3>Model-based RL Algorithms</h3>
              <h5>Dynamic Programming&nbsp;</h5>

              <p>
                In dynamic programming, the agent is presented with the
                transition model of the environment. In other words, the agent
                knows the dynamics of the environment it is in and its principle
                task is to plan out a sequence of actions to take that maximize
                its cummulative rewards.
              </p>

              <p>
                The agent plans its actions by iteratively updating state value
                estimates. A state value estimate can be thought of intuitively
                as the value of being in a particular state. It updates these
                estimates by a process known as policy iteration. Policy
                iteration alternates between policy evaluation and policy
                improvement. Policy evaluation re-estimates state value
                estimates given a policy and policy improvement adjusts the
                given policy to maximize cummulative rewards. Over many rounds
                of policy iteration, the state values converge on the optimal
                state value estimates and the agent acts greedily with respect
                to the state value estimates by simply taking actions that
                result in the agent transitioning to the next state that has the
                highest value.
              </p>

              <p>
                In the maze example above, it can be observed that after some
                rounds of policy iternation, the state values of each stage is
                calculated and in every state/tile, if the agent were to act
                greedily with respect to the state values by taking steps in the
                direction with the highest adjacent state value, the agent would
                accrue the highest amount of rewards. In other words, it would
                exit the maze the soonest!
              </p>

              <h3>Model-free RL Algorithms</h3>
              <h5>Q-Learning&nbsp;</h5>

              <BlockMath math="Q(s,a) = Q(s,a) - \alpha * (r + \gamma * max_{a'}Q(s',a') - Q(s,a))" />

              <p>
                <InlineMath math="Q(s,a)" /> is the <InlineMath math="Q" />{" "}
                value of action a executed in state <InlineMath math="s" />,{" "}
                <InlineMath math="\alpha" /> is the learning rate and{" "}
                <InlineMath math="\gamma" /> is the discount factor. The argmax
                term is the Q-value of the action with the highest Q-value in
                the next state, <InlineMath math="s'" />.
              </p>
              <p>
                In Q-Learning, instead of maintaining state values, it directly
                computes the state-action value estimates. The state-action
                value is also known as the Q-value which is an estimate of the
                value of taking a particular action in a particular state. The
                Q-value update function is given above.
              </p>

              <p>
                At each step, the agent looks up its Q-table and looks up the
                Q-values of its possible actions. Then, the agent selects an
                action (see next section) and executes it. Upon execution of
                this action, it receives feedback in the form of a reward. Using
                this reward, the agent updates its Q-value. This process repeats
                over and over until convergence.
              </p>

              <h5>SARSA&nbsp;</h5>

              <BlockMath math="Q(s,a) = Q(s,a) - \alpha * (r + \gamma * Q(s',a') - Q(s,a))" />

              <p>
                <InlineMath math="Q(s,a)" /> is the <InlineMath math="Q" />{" "}
                value of action a executed in state <InlineMath math="s" />,{" "}
                <InlineMath math="\alpha" /> is the learning rate and{" "}
                <InlineMath math="\gamma" /> is the discount factor. The{" "}
                <InlineMath math="Q(s',a')" /> term is the Q-value associated
                with the action <InlineMath math="a'" /> taken according to the
                policy in the next state,
                <InlineMath math="s'" />.
              </p>

              <p>
                SARSA gets its name from the tuple that describes a single state
                transition - state (that the agent is currently in), action
                (that the agent takes), reward (that the agent gets by executing
                the action), state (that the agent transitions to upon execution
                of the action in the previous state), action (that the agent
                takes in the next state). The update function for SARSA is given
                above.
              </p>

              <p>
                The difference between Q-Learning and SARSA is that Q-Learning
                updates its Q-values by taking the maximum Q-value of actions in
                the subsequent state. In contrast, SARSA updates Q-values by the
                actual action taken in the next state, which depending on the
                policy may not be the maximum Q-value associated action. In the
                long run, both SARSA and Q-Learning ought to converge on the
                same Q-value estimates. Q-Learning is known as off-policy
                learning because the calculation of the Q-value update does not
                depend on the current policy of the agent whereas SARSA is
                on-policy because the selection of the action in the subsequent
                state is dependent on the agent's current policy.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Gamma</h3>
              <p>
                Gamma controls how much importance an agent places on rewards
                from future time steps. This can be explained using an analogy.
                For example, if we humans have a high gamma value in our own
                reward function, we might place more emphasis on long term
                rewards, for instance, investment returns in a decades time. If
                we have a very small gamma value, then we might be more
                shortsighted and place less emphasis on short term rewards,
                driving us to forgo the ten year long investment for ones that
                realize in a shorter amount of time, even if the returns are not
                as high.
              </p>

              <h3>Alpha</h3>

              <BlockMath math="TD-error = r + \gamma * Q(s',a') - Q(s,a)" />

              <p>
                The alpha parameter controls how much of new information is used
                to update prior Q-value estimates. Upon the execution of an
                action in the environment, the agent receives feedback in the
                form of a reward. From this reward, it can compute the TD-error
                (see above). The TD-error reflects how far the Q-value estimate
                is away from the actual Q-value. An alpha value of 1 would mean
                that the Q-values are updated such that TD-error becomes 0. A
                smaller alpha value alters the Q-values so that the TD-error is
                now minimized. An alpha value of 0 would mean that the Q-values
                are never updated, which is not desirable. Hence, alpha can be
                thought of as the learning rate. The intuition behind choosing
                an alpha parameter depends on whether the reward signal from the
                environment is noisy or if it is possible to get
                outlying/abberant rewards. If the rewards are noisy (for
                example, normally distributed around some mean), then using a
                high alpha value would lead to learning being unstable since the
                Q-values are constnatly changing by huge amounts and will be
                unable to be stablized. Hence, it is important to balance the
                tradeoff between learning rate and learning stability.
              </p>

              <h3>Action selection and epsilon</h3>
              <p>
                At each step, the agent has a choice of either taking the{" "}
                <strong>greedy</strong>&nbsp;action or the{" "}
                <strong>exploratory</strong>
                &nbsp;action. Taking the greedy action simply means taking the
                action which has the highest Q-value. Taking the exploratory
                action means taking an action which may not be greedy. The
                reason why an agent has to take exploratory actions is because
                its Q-value estimates may not be accurate early own in training
                and taking greedy actions with respect to them may result in
                sub-optimal actions. Intuitively, an agent should explore other
                actions because they may potentially result in higher rewards,
                but this would not be discovered if the agent only acts
                greedily.
              </p>

              <p>
                Proper exploration of the environment is obviously important
                because too little exploration may result in the optimum policy
                not being discovered. Exploration can thus be controlled by
                epsilon. At each step, the agent simply generates a random
                number and if the number is smaller than epsilon, an exploratory
                step is taken. The way that epsilon can be varied over time is
                by multiplying with a decay factor at the end of each episode.
                If we decay epsilon at a high rate, then epsilon might converge
                to 0 too quickly for exploration to be properly executed.
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ParamHelp;
