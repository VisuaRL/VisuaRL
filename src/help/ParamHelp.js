import React from "react";

function ParamHelp() {
  return (
    <div id="help-param">
      <h3>Algorithms</h3>
      <h5>
        Dynamic Programming&nbsp;
        <span className="badge badge-secondary">model-based</span>
      </h5>

      <h5>
        Q-Learning&nbsp;
        <span className="badge badge-secondary">model-free</span>
      </h5>

      <h3>Gamma</h3>
      <p>
        Gamma controls how much importance an agent places on rewards from
        future time steps. This can be explained using an analogy. For example,
        if we humans have a high gamma value in our own reward function, we
        might place more emphasis on long term rewards, for instance, investment
        returns in a decades time. If we have a very small gamma value, then we
        might be more shortsighted and place less emphasis on short term
        rewards, driving us to forgo the ten year long investment for ones that
        realize in a shorter amount of time, even if the returns are not as
        high.
      </p>

      <h3>Alpha</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default ParamHelp;
